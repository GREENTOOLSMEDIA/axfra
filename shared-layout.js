// Header y footer únicos para todas las páginas, incluso subcarpetas.
(async () => {
  const base = '/';
  await Promise.all([['globalHeader','header.html'],['globalFooter','footer.html']].map(async ([id,file]) => {
    const node=document.getElementById(id); if(!node) return;
    try { const response=await fetch(base+file); if(!response.ok) throw new Error(response.status);
      node.innerHTML=await response.text();
      if(id==='globalFooter') {const y=node.querySelector('#footer-year');if(y)y.textContent=new Date().getFullYear();}
      else {const path=location.pathname; const current=node.querySelector(path.includes('identit')?'a[href="/identities.html"]': 'a[href="/index.html#archivo"]');if(current)current.setAttribute('aria-current','page');}
    } catch(err){console.error('AXFRA: error cargando '+file,err);node.textContent=id==='globalHeader'?'AXFRA — menú temporalmente no disponible':'© AXFRA';}
  }));
})();
