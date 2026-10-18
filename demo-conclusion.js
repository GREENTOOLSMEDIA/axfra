/* AXFRA / Enlaces globales de conclusión desde /demo-conclusion.html */
(function(){
  'use strict';
  function init(){
    const target=document.getElementById('globalDemoConclusion');
    if(!target)return;
    fetch('/demo-conclusion.html',{cache:'no-cache'})
      .then(response=>{if(!response.ok)throw new Error('HTTP '+response.status);return response.text()})
      .then(markup=>{target.innerHTML=markup})
      .catch(error=>{
        console.error('AXFRA: no se pudo cargar el componente de conclusión',error);
        target.innerHTML='<nav class="axfra-demo-links" aria-label="Continuar explorando AXFRA">'+
          '<a class="axfra-demo-link axfra-demo-link-primary" href="/library/">LIBRERÍA JSON ↗</a>'+
          '<a class="axfra-demo-link" href="/demos/">DEMOS ↗</a>'+
          '<a class="axfra-demo-link" href="/glossary.html">GLOSARIO ↗</a></nav>';
      });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();
