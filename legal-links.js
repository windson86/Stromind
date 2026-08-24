(function () {
  const labels = {
    de: { privacy: 'Obavijest o privatnosti (HR)', notice: 'Informationen zur Verarbeitung Ihrer Daten finden Sie in der kroatischen ', read: 'Ich bestätige, dass ich die kroatische Datenschutzerklärung gelesen habe.' },
    en: { privacy: 'Obavijest o privatnosti (HR)', notice: 'Information about how we process your data is available in the Croatian ', read: 'I confirm that I have read the Croatian privacy notice.' },
    hr: { privacy: 'Obavijest o privatnosti', notice: 'Informacije o obradi podataka dostupne su u ', read: 'Potvrđujem da sam pročitao/la obavijest o privatnosti.' }
  };
  const language = () => {
    const stored = localStorage.getItem('stromindLang');
    return labels[stored] ? stored : (labels[document.documentElement.lang] ? document.documentElement.lang : 'de');
  };
  document.querySelectorAll('footer').forEach(footer => {
    if (footer.querySelector('.legal-links')) return;
    const links = document.createElement('p');
    links.className = 'legal-links';
    links.innerHTML = '<a href="impressum.html">Impressum</a><span aria-hidden="true"> · </span><a href="privatnost.html">Privatnost</a>';
    footer.appendChild(links);
  });
  document.querySelectorAll('form[data-netlify="true"]').forEach(form => {
    if (form.querySelector('.privacy-confirmation')) return;
    const lang = language();
    const text = labels[lang];
    const block = document.createElement('div');
    block.className = 'privacy-confirmation';
    block.innerHTML = '<p class="form-privacy-notice"></p><label><input type="checkbox" name="privacy_notice_read" value="yes" required> <span></span></label>';
    block.querySelector('.form-privacy-notice').append(text.notice);
    const link = document.createElement('a');
    link.href = 'privatnost.html';
    link.textContent = text.privacy;
    block.querySelector('.form-privacy-notice').append(link, '.');
    block.querySelector('label span').textContent = text.read;
    const submit = form.querySelector('button[type="submit"]');
    if (submit) form.insertBefore(block, submit);
  });
}());
