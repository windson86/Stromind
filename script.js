const T={de:{navServices:'Leistungen',navExperience:'Projekterfahrung',navPeople:'Fachkräfte',navCareer:'Karriere',navContact:'Kontakt',expEyebrow:'PROJEKTERFAHRUNG',homeExpTitle:'Erfahrung aus realen Industrieprojekten.',expText:'Die Erfahrung von STROMIND basiert auf realen Industrieprojekten. Der Gründer war im Rahmen von Nachunternehmer- und Montageeinsätzen an Projekten für namhafte Unternehmen tätig.',expNote:'Die dargestellten Unternehmen sind Referenzen aus der persönlichen Projekterfahrung des Gründers von STROMIND im Rahmen von Nachunternehmer- und Montageeinsätzen. Die Darstellung stellt keine Aussage über eine direkte Geschäftsbeziehung zwischen diesen Unternehmen und STROMIND dar.',galleryEyebrow:'EINBLICKE',galleryTitle:'Arbeit, die man sehen kann.',companyType:'FÜR UNTERNEHMEN',workerType:'FÜR FACHKRÄFTE',servicesEyebrow:'LEISTUNGEN',s1:'Industrieelektrik',s2:'Automation & Antriebstechnik',s3:'Schaltschrank & Verdrahtung',homeEyebrow:'INDUSTRIAL ELECTRICAL SOLUTIONS',homeTitle:'Wir verbinden <span>Fachkräfte</span><br>mit Ihrem Projekt.',homeText:'STROMIND verbindet erfahrene Elektrofachkräfte mit anspruchsvollen Industrieprojekten in Deutschland und Europa.',homePoint1:'✓ Erfahrene Fachkräfte',homePoint2:'◷ Schnelle Rückmeldung',homePoint3:'◇ Direkter Austausch',homeNeedTitle:'Ich suche <span>Fachkräfte</span>',homeNeedText:'Senden Sie uns Ihre Projektanfrage. Wir prüfen Ihren Bedarf und melden Ihnen verfügbare Kapazitäten zurück.',homeNeedBtn:'ANFRAGE SENDEN →',homeJobTitle:'Ich suche <span>Arbeit</span>',homeJobText:'Bewirb dich bei STROMIND und zeig uns kurz, was du in der Industrie kannst.',homeJobBtn:'JETZT BEWERBEN →',homeSkillsTitle:'Was unsere Fachkräfte können.',homeSkill1:'Installation & Montage',homeSkill2:'Aufbau & Anschluss',homeSkill3:'Sensorik & Steuerung',homeSkill4:'Gebäudetechnik',homeSkill5Title:'Fördertechnik',homeSkill5:'Anlagen & Logistik',homeFinalTitle:'Bereit für Ihr nächstes Projekt?',homeFinalText:'Senden Sie uns Ihren Bedarf. Wir melden uns schnellstmöglich mit einer realistischen Einschätzung unserer Kapazitäten.'},en:{navServices:'Services',navExperience:'Project experience',navPeople:'Skilled workforce',navCareer:'Careers',navContact:'Contact',expEyebrow:'PROJECT EXPERIENCE',homeExpTitle:'Experience from real industrial projects.',expText:'STROMIND’s experience is based on real industrial projects. The founder has worked on projects for well-known companies through subcontracting and industrial installation assignments.',expNote:'The companies shown represent references from the personal project experience of the founder of STROMIND, gained through subcontracting and industrial installation assignments. Their inclusion does not imply a direct business relationship between these companies and STROMIND.',galleryEyebrow:'INSIGHTS',galleryTitle:'Work you can see.',companyType:'FOR COMPANIES',workerType:'FOR SKILLED WORKERS',servicesEyebrow:'SERVICES',s1:'Industrial electrics',s2:'Automation & drive technology',s3:'Control cabinets & wiring',homeEyebrow:'INDUSTRIAL ELECTRICAL SOLUTIONS',homeTitle:'We bring <span>skilled people</span><br>to the project.',homeText:'STROMIND connects experienced electrical specialists with demanding industrial projects in Germany and Europe.',homePoint1:'✓ Experienced specialists',homePoint2:'◷ Fast response',homePoint3:'◇ Direct communication',homeNeedTitle:'I need <span>skilled workers</span>',homeNeedText:'Send us your project request. We review your requirements and respond with available capacity.',homeNeedBtn:'SEND REQUEST →',homeJobTitle:'I am looking for <span>work</span>',homeJobText:'Apply to STROMIND and show us briefly what you can do in industry.',homeJobBtn:'APPLY NOW →',homeSkillsTitle:'What our specialists can do.',homeSkill1:'Installation & assembly',homeSkill2:'Assembly & connection',homeSkill3:'Sensors & control',homeSkill4:'Building technology',homeSkill5Title:'Conveyor technology',homeSkill5:'Systems & logistics',homeFinalTitle:'Ready for your next project?',homeFinalText:'Send us your requirements. We will respond as quickly as possible with a realistic assessment of our capacity.'},hr:{navServices:'Usluge',navExperience:'Projektno iskustvo',navPeople:'Stručni radnici',navCareer:'Karijera',navContact:'Kontakt',expEyebrow:'PROJEKTNO ISKUSTVO',homeExpTitle:'Iskustvo iz stvarnih industrijskih projekata.',expText:'Iskustvo STROMIND-a temelji se na stvarnim industrijskim projektima. Osnivač je radio na projektima poznatih tvrtki kroz kooperantske i industrijsko-montažne angažmane.',expNote:'Prikazane tvrtke predstavljaju reference iz osobnog projektnog iskustva osnivača STROMIND-a, stečenog kroz kooperantske i industrijsko-montažne angažmane. Njihovo prikazivanje ne znači da postoji izravan poslovni odnos između tih tvrtki i STROMIND-a.',galleryEyebrow:'IZVEDBA',galleryTitle:'Rad koji se može vidjeti.',companyType:'ZA TVRTKE',workerType:'ZA RADNIKE',servicesEyebrow:'USLUGE',s1:'Industrijska elektrika',s2:'Automatizacija i pogoni',s3:'Elektroormari i ožičenje',homeEyebrow:'INDUSTRIAL ELECTRICAL SOLUTIONS',homeTitle:'Povezujemo <span>stručne radnike</span><br>s projektom.',homeText:'STROMIND povezuje iskusne elektro stručnjake sa zahtjevnim industrijskim projektima u Njemačkoj i Europi.',homePoint1:'✓ Iskusni stručni radnici',homePoint2:'◷ Brz odgovor',homePoint3:'◇ Izravna komunikacija',homeNeedTitle:'Tražim <span>stručne radnike</span>',homeNeedText:'Pošaljite upit za projekt. Provjeravamo potrebe i javljamo raspoložive kapacitete.',homeNeedBtn:'POŠALJI UPIT →',homeJobTitle:'Tražim <span>posao</span>',homeJobText:'Prijavi se u STROMIND i ukratko pokaži što znaš raditi u industriji.',homeJobBtn:'PRIJAVI SE →',homeSkillsTitle:'Što naši stručni radnici znaju.',homeSkill1:'Instalacija i montaža',homeSkill2:'Montaža i spajanje',homeSkill3:'Senzorika i upravljanje',homeSkill4:'Tehnika zgrada',homeSkill5Title:'Transportna tehnika',homeSkill5:'Postrojenja i logistika',homeFinalTitle:'Spremni za sljedeći projekt?',homeFinalText:'Pošaljite nam svoje potrebe. Javit ćemo se što prije s realnom procjenom naših kapaciteta.'}};

const revealEls=[...document.querySelectorAll('.reveal')];
revealEls.forEach(el=>el.classList.add('visible'));
document.querySelectorAll('.brand,.lang').forEach(el=>{el.setAttribute('translate','no');el.classList.add('notranslate')});

function storageGet(key){try{return window.localStorage.getItem(key)}catch(_){return null}}
function storageSet(key,value){try{window.localStorage.setItem(key,value)}catch(_){}}

function setLang(l){
  if(!T[l])l='de';
  document.documentElement.lang=l;
  storageSet('stromindLang',l);
  document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
  document.querySelectorAll('[data-i18n]').forEach(e=>{const v=T[l][e.dataset.i18n];if(v!==undefined)e.innerHTML=v});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(e=>{const v=T[l][e.dataset.i18nPlaceholder];if(v)e.placeholder=v});
}

document.querySelectorAll('[data-lang]').forEach(b=>{b.onclick=()=>setLang(b.dataset.lang)});
let initialLang='de';
try{const q=new URLSearchParams(window.location.search).get('lang');initialLang=T[q]?q:(storageGet('stromindLang')||'de')}catch(_){initialLang=storageGet('stromindLang')||'de'}
setLang(initialLang);

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

if('IntersectionObserver' in window){
  try{
    revealEls.forEach(el=>el.classList.remove('visible'));
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
    revealEls.forEach(e=>io.observe(e));
  }catch(_){revealEls.forEach(el=>el.classList.add('visible'))}
}

const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(menu&&nav)menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('.links a').forEach(a=>{a.onclick=()=>{if(nav)nav.classList.remove('open')}});

const lb=document.querySelector('.lightbox');
if(lb){
  const lbi=lb.querySelector('img');
  const close=lb.querySelector('button');
  if(lbi)document.querySelectorAll('.g').forEach(g=>{g.onclick=()=>{const img=g.querySelector('img');if(img)lbi.src=img.src;lb.classList.add('open');lb.setAttribute('aria-hidden','false')}});
  if(close)close.onclick=()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true')};
  lb.onclick=e=>{if(e.target===lb&&close)close.click()};
}
