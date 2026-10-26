import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';

const Icon = ({name}) => <img src={`/icons/${name}.svg`} alt="" aria-hidden="true"/>;

/** A live, silent film: each photographic layer has its own camera motion. */
export function IntroScene({motion, lenis, onNavChange}) {
  const scene = useRef(null), timeline = useRef(null), transition = useRef(null);
  const interrupted = useRef(false), userPaused = useRef(false), finished = useRef(false);
  const [ready, setReady] = useState(false), [paused, setPaused] = useState(false);
  const [ended, setEnded] = useState(false), [chapter, setChapter] = useState('Through the clouds');
  const [systemReduced, setSystemReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const reduced = motion === 'reduced' || systemReduced;
  const reducedRef = useRef(reduced);
  reducedRef.current = reduced;

  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setSystemReduced(query.matches);
    query.addEventListener('change', change);
    return () => query.removeEventListener('change', change);
  }, []);

  function arrive(focus = false) {
    const hero = document.getElementById('top');
    if (!hero) return;
    timeline.current?.pause();
    finished.current = true;
    setEnded(true);
    setPaused(false);
    transition.current?.kill();
    const destination = hero.getBoundingClientRect().top + window.scrollY;
    const done = () => {
      onNavChange(true);
      if (focus) hero.querySelector('h1')?.focus({preventScroll:true});
    };
    if (reducedRef.current) {
      window.scrollTo({top:destination, behavior:'instant'});
      done();
    } else {
      const position = {y:window.scrollY};
      transition.current = gsap.to(position, {
        y:destination, duration:1.65, ease:'power2.inOut',
        onUpdate:() => {
          if (lenis.current) lenis.current.scrollTo(position.y, {immediate:true});
          else window.scrollTo({top:position.y, behavior:'instant'});
        },
        onComplete:done,
      });
    }
  }
  const arriveRef = useRef(arrive);
  arriveRef.current = arrive;

  useEffect(() => {
    let cancelled = false;
    const node = scene.current;
    // Decode before starting the clock, so slow connections do not miss the opening.
    Promise.all([...node.querySelectorAll('img[data-film-asset]')].map(img => img.decode().catch(() => {})))
      .then(() => {if (!cancelled) setReady(true);});
    return () => {cancelled = true;};
  }, []);

  useEffect(() => {
    if (!ready) return;
    const node = scene.current;
    const deepLink = Boolean(location.hash && location.hash !== '#intro');
    const startAway = window.scrollY > 40 || deepLink;
    interrupted.current = startAway;
    userPaused.current = false;
    finished.current = false;
    setEnded(false);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused:true, onComplete:() => {
        finished.current = true;
        setEnded(true);
        if (!interrupted.current && !document.hidden) arriveRef.current();
      }});
      timeline.current = tl;
      if (reduced) {
        // The same narrative, with opacity changes only: no flight or parallax.
        tl.fromTo('.intro-copy-line>span', {opacity:0}, {opacity:1,duration:1.1,stagger:.3}, .2)
          .fromTo('.intro-terrain', {opacity:0}, {opacity:1,duration:1.4}, 1)
          .fromTo('.intro-map', {opacity:0}, {opacity:.85,duration:1.4,stagger:.35}, 2)
          .to('.intro-progress-fill', {scaleX:1,duration:7,ease:'none'}, 0);
      } else {
        tl.fromTo('.intro-landscape', {scale:1.22,yPercent:-4}, {scale:1,yPercent:0,duration:10.5,ease:'power1.inOut'}, 0)
          .fromTo('.intro-cloud-left', {xPercent:18,scale:1.22}, {xPercent:-36,scale:1.02,duration:10.5,ease:'power2.inOut'}, 0)
          .fromTo('.intro-cloud-right', {xPercent:-25,scale:1.25}, {xPercent:35,scale:1.04,duration:10.5,ease:'power2.inOut'}, 0)
          .fromTo('.intro-cloud-front', {yPercent:-15,scale:1.35,opacity:1}, {yPercent:55,scale:1.05,opacity:.7,duration:9.8,ease:'power2.inOut'}, .2)
          .fromTo('.intro-copy-line>span', {yPercent:110,opacity:0}, {yPercent:0,opacity:1,duration:1.45,stagger:.2,ease:'power3.out'}, 1.2)
          .fromTo('.intro-terrain', {y:130,scale:.67,opacity:0}, {y:0,scale:1,opacity:1,duration:4.8,ease:'power2.out'}, 2)
          .fromTo('.intro-map-back', {y:-60,scale:.72,opacity:0}, {y:0,scale:1,opacity:.88,duration:3.8,ease:'power2.out'}, 4)
          .fromTo('.intro-map-front', {y:-95,scale:.7,opacity:0}, {y:0,scale:1,opacity:.82,duration:3.8,ease:'power2.out'}, 4.5)
          .to('.intro-progress-fill', {scaleX:1,duration:10.5,ease:'none'}, 0);
      }
      tl.call(() => setChapter('The field comes into view'), [], 2)
        .call(() => setChapter('See the evidence beneath'), [], reduced ? 3.5 : 5.6)
        .call(() => setChapter('Continue into CropEvidence'), [], reduced ? 6 : 9);
      if (startAway) {tl.progress(1,true);finished.current=true;setEnded(true);}
      else if (!document.hidden) tl.play();
    }, node);
    return () => {transition.current?.kill();ctx.revert();timeline.current=null;};
  }, [ready, reduced]);

  useEffect(() => {
    const node = scene.current;
    const updateNav = () => {
      onNavChange(node.getBoundingClientRect().bottom < window.innerHeight * .7);
      if (window.scrollY > 50 && !transition.current?.isActive() && !finished.current) {
        interrupted.current = true;
        timeline.current?.pause();
        setPaused(true);
      }
    };
    const takeOver = event => {
      if (event.type === 'keydown' && !['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key)) return;
      if (event.type === 'keydown' && event.target.closest('button,a,input,select,textarea')) return;
      interrupted.current = true;
      transition.current?.kill();
      if (!finished.current) {timeline.current?.pause();setPaused(true);userPaused.current=true;}
    };
    const visibility = () => {
      if (document.hidden) {timeline.current?.pause();transition.current?.kill();}
      else if (!userPaused.current && !interrupted.current && !finished.current) timeline.current?.play();
    };
    window.addEventListener('scroll', updateNav, {passive:true});
    window.addEventListener('wheel', takeOver, {passive:true});
    window.addEventListener('touchmove', takeOver, {passive:true});
    window.addEventListener('keydown', takeOver);
    document.addEventListener('visibilitychange', visibility);
    updateNav();
    return () => {
      window.removeEventListener('scroll', updateNav);
      window.removeEventListener('wheel', takeOver);
      window.removeEventListener('touchmove', takeOver);
      window.removeEventListener('keydown', takeOver);
      document.removeEventListener('visibilitychange', visibility);
      transition.current?.kill();
    };
  }, [onNavChange]);

  const toggle = () => {
    if (!timeline.current) return;
    if (ended) {
      interrupted.current=false;finished.current=false;userPaused.current=false;
      setEnded(false);setPaused(false);setChapter('Through the clouds');
      timeline.current.restart();
    } else {
      userPaused.current = !paused;
      setPaused(!paused);
      if (paused) {interrupted.current=false;timeline.current.play();}
      else timeline.current.pause();
    }
  };

  return <section ref={scene} id="intro" className="intro-film" aria-label="CropEvidence introduction: Through the clouds" data-reduced={reduced} data-ready={ready}>
    <div className="intro-world" aria-hidden="true">
      <img data-film-asset className="intro-landscape" src="/assets/intro-countryside.webp" alt="" fetchPriority="high" onError={e=>{if(!e.currentTarget.src.endsWith('/hero-landscape.webp'))e.currentTarget.src='/assets/hero-landscape.webp';}}/>
      <div className="intro-field-group">
        <img data-film-asset className="intro-map intro-map-front" src="/assets/hero-map-sheet.webp" alt=""/>
        <img data-film-asset className="intro-map intro-map-back" src="/assets/hero-map-sheet.webp" alt=""/>
        <img data-film-asset className="intro-terrain" src="/assets/hero-field.webp" alt=""/>
      </div>
      <img data-film-asset className="intro-cloud intro-cloud-left" src="/assets/cloud-bank.webp" alt=""/>
      <img data-film-asset className="intro-cloud intro-cloud-right" src="/assets/cloud-bank.webp" alt=""/>
      <img data-film-asset className="intro-cloud intro-cloud-front" src="/assets/cloud-bank.webp" alt=""/>
    </div>
    <div className="intro-topline"><img src="/brand/logo.svg" alt="CropEvidence" width="210" height="41"/><span>Concept preview · Simulated data</span></div>
    <div className="intro-copy"><p className="intro-kicker">A closer look at the land</p><h2><span className="intro-copy-line"><span>Every field</span></span><span className="intro-copy-line"><span>has a story.</span></span></h2></div>
    <div className="intro-bottom"><div className="intro-transport"><button onClick={toggle} disabled={!ready} aria-label={ended?'Replay intro':paused?'Play intro':'Pause intro'}><Icon name={ended||paused?'play':'pause'}/>{ended?'Replay intro':paused?'Play intro':'Pause intro'}</button><button onClick={()=>arrive(true)}>Skip intro<Icon name="arrow-right"/></button></div><span className="intro-chapter">{ready?chapter:'Preparing the view…'}</span><span className="intro-mode">{reduced?'Gentle motion':'Through the clouds'} · {reduced?'07':'11'} sec</span></div>
    <div className="intro-progress" aria-hidden="true"><div className="intro-progress-fill"/></div>
  </section>;
}
