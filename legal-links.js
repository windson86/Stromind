(function(){
  const privacy={de:{href:'datenschutz.html',label:'Datenschutz'},en:{href:'privacy.html',label:'Privacy'},hr:{href:'privatnost.html',label:'Privatnost'}};
  function lang(){const l=document.documentElement.lang||localStorage.getItem('stromindLang')||'de';return privacy[l]?l:'de'}
  function ensureStyles(){if(document.querySelector('link[href="legal.css"]'))return;const l=document.createElement('link');l.rel='stylesheet';l.href='legal.css';document.head.appendChild(l)}
  function render(){ensureStyles();const p=privacy[lang()];document.querySelectorAll('footer').forEach(footer=>{let row=footer.querySelector('.legal-links');if(!row){row=document.createElement('p');row.className='legal-links';row.innerHTML='<a class="impressum-link" href="impressum.html">Impressum</a><span aria-hidden="true"> · </span><a class="privacy-link" href="datenschutz.html">Datenschutz</a>';footer.appendChild(row)}const a=row.querySelector('.privacy-link');if(a){a.href=p.href;a.textContent=p.label}})}
  render();
  new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
}());