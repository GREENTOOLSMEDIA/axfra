(() => {
  'use strict';
  // Cambiar las imágenes provisionales y colocar los clips en videos/01.mp4 ... videos/08.mp4.
  const episodes = [
    {title:'Conde Alarsi',description:'Una historia fantástica empieza con un café y una serie de decisiones visuales.',image:'https://axfra.com/images/homegallery/axfra_editorial-80.jpg',demo:'https://axfra.com/demos/demostracion-practica.html'},
    {title:'Soccer Play',description:'Paulina y Amina enfrentan a los equipos Red y White. Ocho identidades, una misma cancha.',image:'https://axfra.com/images/homegallery/axfra_soccer_captains_faceoff.jpg',demo:'https://axfra.com/demos/soccer-play-demo.html'},
    {title:'PauDotsBand',description:'Del backstage al escenario: vestuario, instrumentos y luces en una banda de rock.',image:'https://axfra.com/images/homegallery/axfra_paudotsband_stage_illuminated.jpg',demo:'https://axfra.com/demos/paudotsband-concert-demo.html'},
    {title:'AXION FRAME 69',description:'Una prenda, dos identidades y múltiples variaciones de materiales y escenarios.',image:'https://axfra.com/images/homegallery/axfra_indira_mira_atardecer.jpg',demo:'https://axfra.com/demos/axion-frame-69.html'},
    {title:'AXFRA House',description:'Un entorno compartido para personajes, objetos y aventuras.',image:'https://axfra.com/images/homegallery/axfra_editorial_82.jpg',demo:'https://axfra.com/demos/'},
    {title:'De la Cordillera al Río',description:'Identidades AXFRA reinterpretadas como una producción editorial de carnaval.',image:'https://axfra.com/images/editorial/axfra_indira_sol_05_retrato_solar.jpg',demo:'https://axfra.com/demos/axfra-rio-demo.html'},
    {title:'M.A.R.I.A. y Conde Alarsi',description:'La lógica de una inteligencia modular choca con las decisiones analógicas del Conde.',image:'https://axfra.com/images/homegallery/axfra_editorial-52.jpg',demo:'https://axfra.com/demos/axfra-maria-demo.html'},
    {title:'Indira y el SOL perdido',description:'Una aventura visual donde el verdadero tesoro era el orden.',image:'https://axfra.com/images/editorial/axfra_indira_sol_05_retrato_solar.jpg',demo:'https://axfra.com/demos/axfra-indira-sol-perdido-demo.html'}
  ];
  let selected = 1;
  const $ = id => document.getElementById(id);
  const grid = $('episodeGrid');
  const cards = [];
  const stageArt = $('stageArt');
  const modal = $('videoModal');
  const video = $('episodeVideo');
  function select(index,scroll=false) {
    selected = index;
    const ep = episodes[index];
    stageArt.style.backgroundImage = `url("${ep.image}")`;
    $('heroEpisode').textContent = `T1:E${index + 1} — ${ep.title}`;
    $('heroDescription').textContent = ep.description;
    $('visitDemo').href = ep.demo;
    $('videoDemoLink').href = ep.demo;
    cards.forEach((card,i)=>{card.classList.toggle('selected',i===index);card.setAttribute('aria-pressed',String(i===index));});
    if(scroll) window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
  episodes.forEach((ep,i)=>{
    const btn=document.createElement('button');btn.className='episode';btn.type='button';
    btn.innerHTML=`<span class="episode-image"><img loading="lazy" decoding="async" alt="" src="${ep.image}"><span class="episode-number">8 s</span></span><h3>${i+1}. ${ep.title}</h3><p>${ep.description}</p><span class="episode-play">Ver episodio ↑</span>`;
    btn.setAttribute('aria-label',`Seleccionar episodio ${i+1}: ${ep.title}`);
    btn.addEventListener('click',()=>select(i,true));grid.appendChild(btn);cards.push(btn);
  });
  select(selected);
  function close(){video.pause();video.removeAttribute('src');video.load();modal.hidden=true;document.body.style.overflow='';$('playCurrent').focus();}
  $('playCurrent').addEventListener('click',()=>{
    $('videoFallback').hidden=true;video.hidden=false;
    const file=`./videos/${String(selected+1).padStart(2,'0')}.mp4`;
    video.src=file;modal.hidden=false;document.body.style.overflow='hidden';
    video.play().catch(()=>{});
  });
  video.addEventListener('error',()=>{video.hidden=true;$('videoFallback').hidden=false;});
  $('closeVideo').addEventListener('click',close);
  modal.addEventListener('click',e=>{if(e.target===modal)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)close();});
  function tab(showEpisodes){$('episodesPanel').hidden=!showEpisodes;$('detailsPanel').hidden=showEpisodes;$('tabEpisodes').classList.toggle('active',showEpisodes);$('tabDetails').classList.toggle('active',!showEpisodes);$('tabEpisodes').setAttribute('aria-selected',String(showEpisodes));$('tabDetails').setAttribute('aria-selected',String(!showEpisodes));}
  $('tabEpisodes').addEventListener('click',()=>tab(true));$('tabDetails').addEventListener('click',()=>tab(false));
})();
