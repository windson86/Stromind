import type { Config, Context } from "@netlify/functions";
import nodemailer from "nodemailer";

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const requestUrl = new URL(req.url);
  const origin = req.headers.get("origin");
  if (origin && origin !== requestUrl.origin) return new Response("Forbidden", { status: 403 });

  const contentType = req.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("multipart/form-data")) {
    return new Response("Unsupported media type", { status: 415 });
  }

  let data: FormData;
  try {
    data = await req.formData();
  } catch {
    return new Response("Invalid form data", { status: 400 });
  }

  const text = (name: string, max: number, required = true) => {
    const value = String(data.get(name) ?? "").trim();
    if ((required && !value) || value.length > max) throw new Error(`invalid:${name}`);
    return value;
  };

  try {
    // Honeypot: return a normal success page to bots without sending anything.
    if (text("bot-field", 200, false)) {
      return Response.redirect(new URL("/danke.html", req.url), 303);
    }

    const name = text("name", 120);
    const email = text("email", 254);
    const experience = text("experience", 80);
    const message = text("message", 3000, false);
    const position = text("position", 20);
    const privacyRead = text("privacy_notice_read", 8);
    const phoneCountry = text("phone_country", 8);
    const phoneLocalRaw = text("phone_display", 32);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("invalid:email");
    if (!new Set(["monteur", "team", "lead"]).has(position)) throw new Error("invalid:position");
    if (privacyRead !== "yes") throw new Error("invalid:privacy_notice_read");

    const allowedCountryCodes = new Set(["+49", "+385", "+387", "+381", "+386", "+43", "+41", "+382", "+389"]);
    if (!allowedCountryCodes.has(phoneCountry)) throw new Error("invalid:phone_country");
    if (!/^[0-9 ()/.-]{5,32}$/.test(phoneLocalRaw)) throw new Error("invalid:phone_display");
    const phone = `${phoneCountry}${phoneLocalRaw.replace(/^0+/, "")}`;

    let scoreText = "Nicht durchgeführt (Führungsposition)";
    let wrongText = "Nicht durchgeführt";
    if (position === "monteur") {
      const correct: Record<string, string> = {
        q1_m8: "6,8 mm",
        q2_motor: "nameplate",
        q3_24v: "24V/0V",
        q4_sensor: "check",
        q5_cable: "identify",
      };
      let score = 0;
      const wrong: string[] = [];
      Object.entries(correct).forEach(([field, answer], index) => {
        const value = text(field, 40);
        if (value === answer) score += 1;
        else wrong.push(`Frage ${index + 1}: ${value}`);
      });
      scoreText = `${score}/5 richtig`;
      wrongText = wrong.length ? wrong.join(" | ") : "Keine";
    }

    let attachment: { filename: string; content: Buffer; contentType: string } | undefined;
    const cvEntry = data.get("cv");
    if (cvEntry instanceof File && cvEntry.size > 0) {
      // Netlify's buffered binary request limit is effectively ~4.5 MB after base64 overhead.
      // Leave margin for the other multipart fields.
      const maxCvBytes = 3_500_000;
      if (cvEntry.size > maxCvBytes) throw new Error("invalid:cv-size");

      const lower = cvEntry.name.toLowerCase();
      const isPdf = lower.endsWith(".pdf");
      const isDocx = lower.endsWith(".docx");
      if (!isPdf && !isDocx) throw new Error("invalid:cv-type");

      const buffer = Buffer.from(await cvEntry.arrayBuffer());
      const pdfSignature = buffer.subarray(0, 5).toString("ascii") === "%PDF-";
      const zipSignature = buffer.length >= 2 && buffer[0] === 0x50 && buffer[1] === 0x4b;
      if ((isPdf && !pdfSignature) || (isDocx && !zipSignature)) throw new Error("invalid:cv-signature");

      const safeFilename = cvEntry.name.replace(/[^\p{L}\p{N}._ -]/gu, "_").slice(0, 120) || (isPdf ? "cv.pdf" : "cv.docx");
      attachment = {
        filename: safeFilename,
        content: buffer,
        contentType: isPdf ? "application/pdf" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      };
    }

    const smtpUser = Netlify.env.get("STROMIND_SMTP_USER");
    const smtpPass = Netlify.env.get("STROMIND_SMTP_PASS");
    const applicationTo = Netlify.env.get("STROMIND_APPLICATION_TO") || smtpUser;
    if (!smtpUser || !smtpPass || !applicationTo) {
      return new Response("Application service is not configured", { status: 503 });
    }

    const transport = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
      tls: { minVersion: "TLSv1.2" },
    });

    const cleanHeader = (value: string) => value.replace(/[\r\n]+/g, " ").slice(0, 120);
    const body = [
      "STROMIND – neue Bewerbung",
      "",
      `Position: ${position}`,
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone}`,
      `Berufserfahrung: ${experience}`,
      `Praxis-Check: ${scoreText}`,
      `Falsche Antworten: ${wrongText}`,
      "",
      "Nachricht:",
      message || "–",
      "",
      "Hinweis: Der Praxis-Check unterstützt nur die menschliche Prüfung. Keine automatische Annahme/Ablehnung.",
    ].join("\n");

    await transport.sendMail({
      from: smtpUser,
      to: applicationTo,
      replyTo: email,
      subject: `STROMIND Bewerbung – ${cleanHeader(name)} – ${cleanHeader(position)}`,
      text: body,
      attachments: attachment ? [attachment] : [],
      disableFileAccess: true,
      disableUrlAccess: true,
    });

    return Response.redirect(new URL("/danke.html", req.url), 303);
  } catch (error) {
    const message = error instanceof Error ? error.message : "invalid";
    if (message.startsWith("invalid:")) return new Response("Invalid application data", { status: 400 });
    return new Response("Unable to send application", { status: 500 });
  }
};

export const config: Config = {
  path: "/api/apply",
  method: ["POST"],
  rateLimit: {
    windowLimit: 6,
    windowSize: 60,
    aggregateBy: ["ip", "domain"],
  },
};
