(function(){
  const TEXT={
    de:{
      candidateNotice:'Wir verwenden deine Angaben ausschließlich zur Bearbeitung deiner Bewerbung und des konkreten Bewerbungs- bzw. Vermittlungsprozesses. Weitere Informationen:',
      companyNotice:'Wir verwenden Ihre Angaben zur Bearbeitung Ihrer Projektanfrage und zur Vorbereitung eines möglichen Geschäftsverhältnisses. Weitere Informationen:',
      read:'Ich bestätige, dass ich die Datenschutzerklärung gelesen habe.',
      link:'Datenschutz',href:'datenschutz.html',
      cv:'Bitte nur bewerbungsrelevante Unterlagen hochladen. Keine Ausweiskopien, Bankdaten, Gesundheitsunterlagen oder sonstigen sensiblen Dokumente mitsenden.'
    },
    en:{
      candidateNotice:'We use your information only to handle your application and the specific recruitment or placement process. More information:',
      companyNotice:'We use your information to handle your project enquiry and prepare a possible business relationship. More information:',
      read:'I confirm that I have read the privacy notice.',
      link:'Privacy',href:'privacy.html',
      cv:'Please upload only documents relevant to your application. Do not send copies of identity documents, bank details, medical records or other sensitive documents.'
    },
    hr:{
      candidateNotice:'Vaše podatke koristimo samo za obradu prijave i konkretnog postupka zapošljavanja odnosno posredovanja. Više informacija:',
      companyNotice:'Vaše podatke koristimo za obradu projektnog upita i pripremu mogućeg poslovnog odnosa. Više informacija:',
      read:'Potvrđujem da sam pročitao/la obavijest o privatnosti.',
      link:'Privatnost',href:'privatnost.html',
      cv:'Učitajte samo dokumente potrebne za prijavu. Nemojte slati preslike osobnih dokumenata, bankovne podatke, zdravstvenu dokumentaciju ni druge osjetljive dokumente.'
    }
  };
  function current(){const l=document.documentElement.lang||localStorage.getItem('stromindLang')||'de';return TEXT[l]?l:'de'}
  function render(){
    const t=TEXT[current()];
    document.querySelectorAll('[data-privacy-context]').forEach(block=>{
      const kind=block.dataset.privacyContext==='company'?'company':'candidate';
      const notice=block.querySelector('[data-privacy-notice]');
      const link=block.querySelector('[data-privacy-link]');
      const read=block.querySelector('[data-privacy-read]');
      if(notice)notice.textContent=kind==='company'?t.companyNotice:t.candidateNotice;
      if(link){link.href=t.href;link.textContent=t.link}
      if(read)read.textContent=t.read;
    });
    document.querySelectorAll('[data-cv-privacy-note]').forEach(el=>el.textContent=t.cv);
  }
  render();
  new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
}());