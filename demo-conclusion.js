/* AXFRA · inyección global desde la raíz, compatible con /demos/ */
(function () {
  'use strict';
  const target = document.getElementById('globalDemoConclusion');
  if (!target) return;
  fetch('/demo-conclusion.html', {cache:'no-cache'})
    .then(response => { if (!response.ok) throw new Error('HTTP ' + response.status); return response.text(); })
    .then(html => { target.innerHTML = html; })
    .catch(error => {
      console.error('AXFRA: no se pudo cargar demo-conclusion.html', error);
      // Enlaces de contingencia para que la navegación nunca desaparezca.
      target.innerHTML = '<nav class="axfra-demo-links" aria-label="Continuar explorando AXFRA">' +
        '<a class="axfra-demo-link axfra-demo-link-primary" href="/library/">LIBRERÍA JSON ↗</a>' +
        '<a class="axfra-demo-link" href="/demos/">DEMOS ↗</a>' +
        '<a class="axfra-demo-link" href="/glossary.html">GLOSARIO ↗</a></nav>';
    });
})();
