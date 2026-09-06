const STORAGE_KEY='stromind-office-mvp-v1';
const state=loadState();
const money=new Intl.NumberFormat('hr-HR',{style:'currency',currency:'EUR'});

function loadState(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{outgoing:[],incoming:[]};}catch{return{outgoing:[],incoming:[]}}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));render();}
function gross(net,vat){return Number(net||0)*(1+Number(vat||0)/100)}
function formatDate(v){if(!v)return'—';const[d1,d2,d3]=v.split('-');return`${d3}.${d2}.${d1}.`}
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

const views=[...document.querySelectorAll('.view')];
const nav=[...document.querySelectorAll('.nav-item')];
function showView(id){views.forEach(v=>v.classList.toggle('active',v.id===id));nav.forEach(n=>n.classList.toggle('active',n.dataset.view===id));window.scrollTo({top:0,behavior:'smooth'});}
nav.forEach(n=>n.addEventListener('click',()=>showView(n.dataset.view)));
document.querySelectorAll('[data-view-link]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.viewLink)));

const dlg=document.getElementById('entryDialog');
const form=document.getElementById('entryForm');
const entryType=document.getElementById('entryType');
const dueWrap=document.getElementById('dueWrap');
const categoryWrap=document.getElementById('categoryWrap');
const paidWrap=document.getElementById('paidWrap');
const netAmount=document.getElementById('netAmount');
const vatRate=document.getElementById('vatRate');
const grossPreview=document.getElementById('grossPreview');

function openForm(type){
  form.reset();entryType.value=type;
  const today=new Date().toISOString().slice(0,10);document.getElementById('docDate').value=today;
  document.getElementById('formEyebrow').textContent=type==='outgoing'?'PRODAJA':'TROŠAK';
  document.getElementById('formTitle').textContent=type==='outgoing'?'Novi izlazni račun':'Novi ulazni račun';
  dueWrap.classList.toggle('hidden',type!=='outgoing');categoryWrap.classList.toggle('hidden',type!=='incoming');paidWrap.classList.toggle('hidden',type!=='outgoing');
  grossPreview.textContent=money.format(0);dlg.showModal();
}
document.querySelectorAll('[data-open-form]').forEach(b=>b.addEventListener('click',()=>openForm(b.dataset.openForm)));
[netAmount,vatRate].forEach(el=>el.addEventListener('input',()=>grossPreview.textContent=money.format(gross(netAmount.value,vatRate.value))));

form.addEventListener('submit',e=>{
  if(e.submitter?.value==='cancel')return;
  e.preventDefault();
  const type=entryType.value;
  const item={
    id:crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random()}`,
    number:document.getElementById('docNumber').value.trim(),
    partner:document.getElementById('partner').value.trim(),
    date:document.getElementById('docDate').value,
    due:type==='outgoing'?document.getElementById('dueDate').value:'',
    category:type==='incoming'?document.getElementById('category').value:'',
    net:Number(netAmount.value||0),vat:Number(vatRate.value||0),
    note:document.getElementById('note').value.trim(),
    paid:type==='outgoing'?document.getElementById('paid').checked:false,
    createdAt:Date.now()
  };
  state[type].push(item);saveState();dlg.close();showView(type);
});

function removeItem(type,id){if(!confirm('Obrisati ovaj zapis?'))return;state[type]=state[type].filter(x=>x.id!==id);saveState();}
window.removeOfficeItem=removeItem;
function togglePaid(id){const it=state.outgoing.find(x=>x.id===id);if(it){it.paid=!it.paid;saveState();}}
window.togglePaid=togglePaid;

function outgoingRow(x){return`<tr><td>${esc(x.number)}</td><td>${esc(x.partner)}</td><td>${formatDate(x.date)}</td><td>${formatDate(x.due)}</td><td><button class="icon-btn" onclick="togglePaid('${x.id}')"><span class="badge ${x.paid?'paid':'open'}">${x.paid?'Plaćeno':'Otvoreno'}</span></button></td><td class="num">${money.format(gross(x.net,x.vat))}</td><td class="row-actions"><button class="icon-btn danger" onclick="removeOfficeItem('outgoing','${x.id}')">Obriši</button></td></tr>`}
function incomingRow(x){return`<tr><td>${esc(x.number)}</td><td>${esc(x.partner)}</td><td>${formatDate(x.date)}</td><td>${esc(x.category||'—')}</td><td class="num">${money.format(gross(x.net,x.vat))}</td><td class="row-actions"><button class="icon-btn danger" onclick="removeOfficeItem('incoming','${x.id}')">Obriši</button></td></tr>`}
function recentRow(type,x){return`<tr><td>${type==='outgoing'?'Izlazni':'Ulazni'}</td><td>${esc(x.number)}</td><td>${esc(x.partner)}</td><td>${formatDate(x.date)}</td><td>${type==='outgoing'?`<span class="badge ${x.paid?'paid':'open'}">${x.paid?'Plaćeno':'Otvoreno'}</span>`:'<span class="badge">Trošak</span>'}</td><td class="num">${money.format(gross(x.net,x.vat))}</td></tr>`}

function render(){
  const out=[...state.outgoing].sort((a,b)=>b.createdAt-a.createdAt),inc=[...state.incoming].sort((a,b)=>b.createdAt-a.createdAt);
  document.getElementById('outgoingRows').innerHTML=out.map(outgoingRow).join('');
  document.getElementById('incomingRows').innerHTML=inc.map(incomingRow).join('');
  document.getElementById('outgoingEmpty').style.display=out.length?'none':'block';
  document.getElementById('incomingEmpty').style.display=inc.length?'none':'block';
  const outTotal=out.reduce((s,x)=>s+gross(x.net,x.vat),0),paid=out.filter(x=>x.paid),paidTotal=paid.reduce((s,x)=>s+gross(x.net,x.vat),0),incTotal=inc.reduce((s,x)=>s+gross(x.net,x.vat),0);
  document.getElementById('statOutgoing').textContent=money.format(outTotal);document.getElementById('statOutgoingCount').textContent=`${out.length} računa`;
  document.getElementById('statPaid').textContent=money.format(paidTotal);document.getElementById('statPaidCount').textContent=`${paid.length} plaćeno`;
  document.getElementById('statIncoming').textContent=money.format(incTotal);document.getElementById('statIncomingCount').textContent=`${inc.length} računa`;
  document.getElementById('statBalance').textContent=money.format(outTotal-incTotal);
  const recent=[...out.map(x=>({type:'outgoing',x})),...inc.map(x=>({type:'incoming',x}))].sort((a,b)=>b.x.createdAt-a.x.createdAt).slice(0,8);
  document.getElementById('recentRows').innerHTML=recent.map(r=>recentRow(r.type,r.x)).join('');document.getElementById('recentEmpty').style.display=recent.length?'none':'block';
}

document.getElementById('exportBtn').addEventListener('click',()=>{
  const rows=[['vrsta','broj','partner','datum','dospijece','kategorija','neto','pdv_postotak','ukupno','placeno','napomena']];
  state.outgoing.forEach(x=>rows.push(['izlazni',x.number,x.partner,x.date,x.due,'',x.net,x.vat,gross(x.net,x.vat),x.paid?'da':'ne',x.note]));
  state.incoming.forEach(x=>rows.push(['ulazni',x.number,x.partner,x.date,'',x.category,x.net,x.vat,gross(x.net,x.vat),'',x.note]));
  const csv=rows.map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(';')).join('\n');
  const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`stromind-office-${new Date().toISOString().slice(0,10)}.csv`;a.click();URL.revokeObjectURL(url);
});
render();