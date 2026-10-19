// Header y footer únicos para todas las páginas, incluso subcarpetas.
(async () => {
  const base = '/';
  await Promise.all([['globalHeader','header.html'],['globalFooter','footer.html']].map(async ([id,file]) => {
    const node=document.getElementById(id); if(!node) return;
    try { const response=await fetch(base+file); if(!response.ok) throw new Error(response.status);
      node.innerHTML=await response.text();
      if(id==='globalFooter') {const y=node.querySelector('#footer-year');if(y)y.textContent=new Date().getFullYear();}
      else {
        const path=location.pathname;
        const nav=node.querySelector('.nav');
        if(nav){
          nav.querySelectorAll('[aria-current]').forEach(a=>a.removeAttribute('aria-current'));
          let route=null;
          if(path==='/identities.html'||path.startsWith('/identities/'))route='/identities.html';
          else if(path==='/demos/'||path.startsWith('/demos/'))route='/demos/';
          else if(path==='/library/'||path.startsWith('/library/'))route='/library/';
          else if(path==='/glossary.html')route='/glossary.html';
          // La portada y las páginas de áreas no resaltan una sección arbitraria.
          if(route){const a=nav.querySelector('a[href="'+route+'"]');if(a)a.setAttribute('aria-current','page');}
        }
      }
    } catch(err){console.error('AXFRA: error cargando '+file,err);node.textContent=id==='globalHeader'?'AXFRA — menú temporalmente no disponible':'© AXFRA';}
  }));
})();
