(() => {
  'use strict';
  // Los JPG y MP4 usan la misma base y rutas locales bajo /play/.
  const episodes = [
    {slug:'axfra_soccer_play_cara_a_cara',title:'Soccer Play — Cara a cara',description:'Paulina y Amina se enfrentan antes del primer pase. Dos equipos y ocho identidades en una misma composición.',demo:'https://axfra.com/demos/soccer-play-demo.html'},
    {slug:'axfra_conde_alarsi_libro',title:'Conde Alarsi — El libro',description:'El Conde descubre un universo fantástico entre páginas, personajes y un monumental vitral AXFRA.',demo:'https://axfra.com/demos/demostracion-practica.html'},
    {slug:'axfra_axion_frame_69_surf',title:'AXION FRAME 69 — Surf',description:'Una prenda modular cruza imágenes, tratamientos gráficos y escenarios inesperados.',demo:'https://axfra.com/demos/axion-frame-69.html'},
    {slug:'axfra_heroina_fantastica',title:'Heroína fantástica',description:'Una composición de fantasía reúne identidad, materiales, vestuario y dirección de cámara.',demo:'https://axfra.com/demos/'}
  ];
  const $ = id => document.getElementById(id);
  const video = $('stageVideo'), art = $('stageArt'), grid = $('episodeGrid');
  const cards = [];
  let current = 0, paused = false, fallbackTimer = null, token = 0;
  const FALLBACK_MS = 8000;
  const imageOf = ep => `./images/${ep.slug}.jpg`;
  const videoOf = ep => `./videos/${ep.slug}.mp4`;
  function clearFallback(){ if(fallbackTimer!==null) clearTimeout(fallbackTimer); fallbackTimer=null; }
  function updateButton(){ $('playCurrent').innerHTML = paused ? '<span aria-hidden="true">▶</span> REPRODUCIR' : '<span aria-hidden="true">❚❚</span> PAUSAR'; }
  function scheduleFallback(t){
    clearFallback();
    $('playHint').textContent='Fotografía de respaldo: el MP4 todavía no está disponible.';
    if(!paused) fallbackTimer=setTimeout(()=>{if(t===token) advance();}, FALLBACK_MS);
  }
  function show(index){
    token++;
    clearFallback();
    current=(index+episodes.length)%episodes.length;
    const ep=episodes[current];
    // Fotografía de fondo persistente; el video se superpone solo cuando hay fotogramas.
    art.style.backgroundImage=`url("${imageOf(ep)}")`;
    video.classList.remove('is-playing');
    video.pause();
    video.removeAttribute('src');
    video.load();
    $('heroEpisode').textContent=`T1:E${current+1} — ${ep.title}`;
    $('heroDescription').textContent=ep.description;
    $('visitDemo').href=ep.demo;
    cards.forEach((card,i)=>{card.classList.toggle('selected',i===current);card.setAttribute('aria-pressed',String(i===current));});
    video.poster=imageOf(ep);
    video.src=videoOf(ep);
    video.load();
    $('playHint').textContent='Reproducción continua · 8 segundos por episodio · sin sonido';
    updateButton();
    if(!paused){
      // Si el archivo aún no está subido, el evento error activa la fotografía de respaldo.
      video.play().catch(()=>{if(!paused && !video.error) scheduleFallback(token);});
    }
  }
  function advance(){ if(!paused) show(current+1); }
  video.addEventListener('playing',()=>{clearFallback();video.classList.add('is-playing');$('playHint').textContent='Reproducción continua · 8 segundos por episodio · sin sonido';});
  video.addEventListener('loadeddata',()=>{if(!paused) video.classList.add('is-playing');});
  video.addEventListener('ended',advance);
  video.addEventListener('error',()=>{video.classList.remove('is-playing');if(!paused) scheduleFallback(token);});
  $('playCurrent').addEventListener('click',()=>{
    paused=!paused;clearFallback();
    if(paused){video.pause();$('playHint').textContent='Emisión en pausa';}
    else if(video.error || !video.getAttribute('src')) scheduleFallback(token);
    else video.play().catch(()=>scheduleFallback(token));
    updateButton();
  });
  episodes.forEach((ep,i)=>{
    const btn=document.createElement('button');btn.className='episode';btn.type='button';
    btn.setAttribute('aria-label',`Reproducir episodio ${i+1}: ${ep.title}`);
    btn.innerHTML=`<span class="episode-image"><img loading="lazy" decoding="async" alt="${ep.title}" src="${imageOf(ep)}"><span class="episode-number">8 s</span></span><h3>${i+1}. ${ep.title}</h3><p>${ep.description}</p><span class="episode-play">Seleccionar episodio ↗</span>`;
    btn.addEventListener('click',()=>{paused=false;show(i);window.scrollTo({top:0,behavior:'smooth'});});
    grid.appendChild(btn);cards.push(btn);
  });
  function tab(showEpisodes){$('episodesPanel').hidden=!showEpisodes;$('detailsPanel').hidden=showEpisodes;$('tabEpisodes').classList.toggle('active',showEpisodes);$('tabDetails').classList.toggle('active',!showEpisodes);$('tabEpisodes').setAttribute('aria-selected',String(showEpisodes));$('tabDetails').setAttribute('aria-selected',String(!showEpisodes));}
  $('tabEpisodes').addEventListener('click',()=>tab(true));$('tabDetails').addEventListener('click',()=>tab(false));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();else if(!paused && !video.error)video.play().catch(()=>{});});
  show(0);
})();