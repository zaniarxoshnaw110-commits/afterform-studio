
(() => {
  const reduce=window.matchMedia("(prefers-reduced-motion: reduce)");
  const coarse=window.matchMedia("(pointer: coarse)");
  const heroArt=document.querySelector(".hero-art");
  const artWrap=document.querySelector(".hero-art-wrap");
  const cards=[...document.querySelectorAll(".project-visual")];
  const tilt=(el,target,max=5)=>{
    if(!el||reduce.matches||coarse.matches)return;
    el.addEventListener("pointermove",e=>{
      const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      target.style.setProperty("--tilt-x",(-y*max).toFixed(2)+"deg");
      target.style.setProperty("--tilt-y",(x*max).toFixed(2)+"deg");
      target.style.setProperty("--card-tilt-x",(-y*max*.55).toFixed(2)+"deg");
      target.style.setProperty("--card-tilt-y",(x*max*.7).toFixed(2)+"deg");
    });
    el.addEventListener("pointerleave",()=>["--tilt-x","--tilt-y","--card-tilt-x","--card-tilt-y"].forEach(k=>target.style.setProperty(k,"0deg")));
  };
  if(heroArt&&artWrap)tilt(artWrap,heroArt,5);
  cards.forEach(c=>tilt(c,c,3.5));
  const targets=document.querySelectorAll(".section-heading,.project,.approach-step,.studio-layout,.contact-inner h2,.contact-bottom");
  if(!reduce.matches&&"IntersectionObserver"in window){
    document.documentElement.classList.add("reveal-ready");
    const observer=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("is-revealed");obs.unobserve(entry.target);}
    }),{threshold:.12,rootMargin:"0px 0px -35px 0px"});
    targets.forEach(el=>observer.observe(el));
  }
  const progress=document.createElement("div");progress.className="scroll-progress";progress.setAttribute("aria-hidden","true");document.body.appendChild(progress);
  let ticking=false;
  const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform="scaleX("+Math.min(1,Math.max(0,max>0?scrollY/max:0))+")";ticking=false;};
  addEventListener("scroll",()=>{if(!ticking){ticking=true;requestAnimationFrame(update);}},{passive:true});update();
  document.querySelectorAll(".filter-button").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll(".project:not([hidden])").forEach((p,i)=>{p.classList.remove("is-entering");requestAnimationFrame(()=>{p.style.animationDelay=(i*70)+"ms";p.classList.add("is-entering");});});
  }));
})();
