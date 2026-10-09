// Carga los mismos componentes en todas las páginas AXFRA.
(async () => {
  const parts = [['globalHeader', 'header.html'], ['globalFooter', 'footer.html']];
  await Promise.all(parts.map(async ([id, url]) => {
    const target = document.getElementById(id);
    if (!target) return;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      target.innerHTML = await response.text();
      if (id === 'globalFooter') {
        const year = target.querySelector('#year');
        if (year) year.textContent = new Date().getFullYear();
      } else {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        const current = target.querySelector(path === 'identities.html' ? 'a[href="identities.html"]' : 'a[href="index.html#estudios"]');
        if (current) current.setAttribute('aria-current', 'page');
      }
    } catch (error) {
      console.error(`No se pudo cargar ${url}`, error);
      target.textContent = id === 'globalHeader' ? 'AXFRA — navegación no disponible' : '© AXFRA';
    }
  }));
})();
