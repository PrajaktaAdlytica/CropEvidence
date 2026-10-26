import React,{useEffect,useRef,useState} from 'react';

export function Clouds({tone='sky',label='this section'}){
  const ref=useRef(null);
  const [visible,setVisible]=useState(false);
  const [paused,setPaused]=useState(false);
  const [hidden,setHidden]=useState(document.hidden);
  useEffect(()=>{
    const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting));
    if(ref.current)observer.observe(ref.current);
    const visibility=()=>setHidden(document.hidden);
    document.addEventListener('visibilitychange',visibility);
    return()=>{observer.disconnect();document.removeEventListener('visibilitychange',visibility);};
  },[]);
  return <>
    <div className={`evidence-clouds cloud-${tone}`} ref={ref} aria-hidden="true" data-running={visible&&!paused&&!hidden}>
      <img src="/assets/cloud-bank.webp" alt="" className="cloud-far" loading="lazy"/>
      <img src="/assets/cloud-bank.webp" alt="" className="cloud-near" loading="lazy"/>
    </div>
    <button className="cloud-toggle" aria-pressed={paused} aria-label={`${paused?'Resume':'Pause'} clouds in ${label}`} onClick={()=>setPaused(!paused)}>
      <img src={`/icons/${paused?'play':'pause'}.svg`} alt=""/>{paused?'Resume clouds':'Pause clouds'}
    </button>
  </>;
}
