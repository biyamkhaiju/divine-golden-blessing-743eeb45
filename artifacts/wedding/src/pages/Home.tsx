import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Countdown } from "@/components/Countdown";

/* ─── DATA ──────────────────────────────────────── */
const MILESTONES = [
  { year: "2020", np: "पहिलो भेट",    en: "First Meeting",  icon: "✨", col: "from-rose-900/35" },
  { year: "2021", np: "मित्रता",       en: "Friendship",     icon: "🌸", col: "from-red-900/30"  },
  { year: "2023", np: "प्रेम",         en: "Love Declared",  icon: "❤",  col: "from-rose-800/35" },
  { year: "2025", np: "सगाई",          en: "Engagement",     icon: "💍", col: "from-amber-900/30" },
  { year: "Dec 2026", np: "शुभ विवाह", en: "Wedding Day",   icon: "🪔", col: "from-yellow-900/28" },
];
const CHAPTERS = [
  { href:"/story",   np:"हाम्रो कहानी",     en:"Our Story",  sub:"From first glance to forever",     img:"/indian-couple.png", icon:"✨" },
  { href:"/photos",  np:"हाम्रा तस्बिरहरू", en:"Our Photos", sub:"Moments captured in gold",          img:"/indian-couple.png", icon:"📸" },
  { href:"/banquet", np:"समारोह स्थल",       en:"The Venue",  sub:"Himalaya Grand Banquet",           img:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80", icon:"🏛" },
];
const SCHEDULE = [
  { time:"11:00 AM", np:"मेहेन्दी र सङ्गीत", en:"Mehendi & Sangeet",      icon:"🌿" },
  { time:"12:30 PM", np:"वर माला",            en:"Var Mala Ceremony",      icon:"💐" },
  { time:"2:00 PM",  np:"सप्तपदी",             en:"Saptapadi — Seven Vows", icon:"🔥" },
  { time:"5:00 PM",  np:"स्वागत समारोह",        en:"Reception & Feast",      icon:"🥂" },
];

/* ─── HELPERS ────────────────────────────────────── */
function Divider({ icon="❧", wide=false }: { icon?:string; wide?:boolean }) {
  return (
    <div className={`flex items-center gap-4 mx-auto ${wide?"w-full max-w-md":"w-full max-w-xs"}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/38"/>
      <span className="text-[#D4AF37]/62 text-sm shrink-0 select-none">{icon}</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/38"/>
    </div>
  );
}

/* Spinning Ganesh mandala — the same lotus rings from the intro */
function GaneshMandala({ opacity=0.08, size="140vmin", speed="cw-slow" }: { opacity?:number; size?:string; speed?:string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none" aria-hidden>
      <img src="/mandala-ring.png" alt=""
        className={`mandala-${speed} shrink-0`}
        style={{
          width:size, maxWidth:"none", opacity: opacity * 0.55,
          mixBlendMode:"screen",
          filter:"brightness(0.9) saturate(1.3) drop-shadow(0 0 10px rgba(212,175,55,0.3))"
        }}/>
    </div>
  );
}

/* Block wrapper — gives each section its characteristic warm base + atmospheric blur */
function Block({ children, className="", style={} }: { children:React.ReactNode; className?:string; style?:React.CSSProperties }) {
  return (
    <section className={`relative overflow-hidden ${className}`} style={style}>
      {/* Atmospheric warm haze across the entire block */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backdropFilter:"blur(0px)",
        background:"radial-gradient(ellipse 100% 80% at 50% 50%, rgba(122,24,32,0.18) 0%, rgba(30,6,10,0.55) 100%)"
      }}/>
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/* ══════════════════════════════════════════════════ */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const fn = ()=>setScrolled(window.scrollY>56);
    window.addEventListener("scroll",fn,{passive:true});
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  return (
    <div className="relative w-full overflow-x-hidden text-[#FDFBF7]">

      {/* ── FIXED NAV ──────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled?"nav-scrolled":""}`}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <span className="font-yatra text-gold-gradient text-base md:text-lg tracking-wide">आशीष ❤ आयुषी</span>
          <div className="hidden sm:flex items-center gap-7">
            {[{h:"/story",l:"Story"},{h:"/photos",l:"Photos"},{h:"/banquet",l:"Venue"}].map(({h,l})=>(
              <Link key={h} href={h} className="font-cinzel text-[#D4AF37]/65 hover:text-[#D4AF37] tracking-[0.22em] text-[10px] uppercase transition-colors duration-200">{l}</Link>
            ))}
          </div>
          <p className="font-cinzel text-[#D4AF37]/42 text-[9px] tracking-[0.35em] uppercase hidden sm:block">12 · XII · 2026</p>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          HERO — exactly h-screen so the ring center =
          viewport center = couple image center always
      ══════════════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden text-center"
        style={{ background:"radial-gradient(ellipse 120% 75% at 50% 30%, #8a1c24 0%, #5B0F14 52%, #3d0b10 100%)" }}>

        {/* Spinning mandala rings */}
        <GaneshMandala opacity={0.09} size="148vmin" speed="cw-slow"/>
        <GaneshMandala opacity={0.05} size="75vmin" speed="ccw-medium"/>

        {/* Radial vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background:"radial-gradient(ellipse 70% 65% at 50% 48%, transparent 0%, rgba(30,5,8,0.70) 100%)"
        }}/>

        {/* Gold corner ornaments */}
        <div className="absolute inset-6 sm:inset-10 pointer-events-none">
          {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r","bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"]
            .map((p,i)=><div key={i} className={`absolute w-12 h-12 sm:w-16 sm:h-16 ${p} border-[#D4AF37]/38`}/>)}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-px bg-[#D4AF37]/25"/>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-px bg-[#D4AF37]/25"/>
        </div>

        {/* ── Shubha Vivah couple — absolute center of the viewport (= center of spinning ring) ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{zIndex:8}}>
          <img
            src="/shubha-vivah-couple.png"
            alt="Shubha Vivah"
            style={{
              width:"min(62vmin,360px)",
              filter:"drop-shadow(0 0 60px rgba(212,175,55,0.54)) drop-shadow(0 6px 36px rgba(0,0,0,0.60))",
            }}
          />
        </div>

        {/* Top content — Ganesh + mantra */}
        <div className="absolute inset-x-0 top-0 flex flex-col items-center gap-2 px-5 pt-14 sm:pt-18 z-10 hero-stagger">
          <div className="flex flex-col items-center gap-1.5 hero-item">
            <img src="/ganesh.png" alt="Lord Ganesh" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 animate-shimmer animate-float"/>
            <p className="font-yatra text-gold-gradient text-xs sm:text-sm md:text-base tracking-widest">ॐ श्री गणेशाय नमः</p>
            <p className="font-sans text-[#D4AF37]/58 text-xs sm:text-sm italic max-w-[260px] sm:max-w-xs leading-relaxed">
              वक्रतुंड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव।
            </p>
          </div>
          <div className="hero-item w-full max-w-[140px] sm:max-w-[180px]"><Divider/></div>
        </div>

        {/* Bottom content — single-line names close-below couple image */}
        <div className="absolute inset-x-0 flex flex-col items-center gap-1.5 px-5 z-10 hero-stagger"
          style={{top:"calc(50% + min(27vmin,168px))"}}>
          <div className="text-center hero-item">
            <h1 className="font-yatra text-gold-gradient tracking-wide"
              style={{fontSize:"clamp(1.5rem, 5.5vw, 4.5rem)", lineHeight:1.25}}>
              आशीष <span style={{fontSize:"0.58em", color:"#d63652", filter:"drop-shadow(0 0 8px rgba(192,32,58,0.85))"}}>❤</span> आयुषी
            </h1>
            <div className="flex items-center justify-center gap-3 mt-1.5">
              <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/38"/>
              <span className="text-[#D4AF37]/48 text-[8px]">✦</span>
              <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/38"/>
            </div>
          </div>
          <p className="font-cinzel text-[#D4AF37]/68 tracking-[0.35em] uppercase text-[8px] sm:text-[9px] md:text-[10px] hero-item">Aashish &amp; Aayushi</p>
          <p className="font-cinzel text-[#D4AF37]/45 tracking-[0.25em] text-[7px] sm:text-[8px] md:text-[9px] hero-item">December 12, 2026 · Kathmandu, Nepal</p>
          <div className="flex flex-col items-center gap-1.5 opacity-45 pt-1 hero-item">
            <p className="font-cinzel text-[#D4AF37] text-[7px] sm:text-[8px] tracking-[0.5em] uppercase">Scroll to explore</p>
            <div className="w-4 h-7 rounded-full border border-[#D4AF37]/42 flex items-start justify-center pt-1">
              <div className="w-1 h-1.5 rounded-full bg-[#D4AF37]/80 animate-scroll-dot"/>
            </div>
          </div>
        </div>
      </section>

      {/* ── Invitation text — just below the hero ── */}
      <section className="relative py-14 md:py-20 px-5 text-center overflow-hidden"
        style={{ background:"radial-gradient(ellipse 110% 80% at 50% 50%, #6e151c 0%, #5B0F14 55%, #3d0b10 100%)" }}>
        <GaneshMandala opacity={0.07} size="130vmin" speed="ccw-medium"/>
        <div className="absolute inset-0 pointer-events-none" style={{
          background:"radial-gradient(ellipse 70% 65% at 50% 50%, transparent 0%, rgba(25,5,8,0.62) 100%)"
        }}/>
        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <Divider icon="✦" wide/>
          <p className="font-sans text-[#FDFBF7]/85 text-sm md:text-[1.05rem] leading-relaxed">
            सुपुत्र: <span className="text-[#D4AF37]/92 font-medium">श्री राम प्रसाद शर्मा</span> तथा{" "}
            <span className="text-[#D4AF37]/92 font-medium">श्रीमती सीता शर्मा</span>
          </p>
          <p className="font-cinzel text-[#D4AF37]/40 text-[9px] tracking-[0.3em]">— र —</p>
          <p className="font-sans text-[#FDFBF7]/85 text-sm md:text-[1.05rem] leading-relaxed">
            सुपुत्री: <span className="text-[#D4AF37]/92 font-medium">श्री हरि बहादुर थापा</span> तथा{" "}
            <span className="text-[#D4AF37]/92 font-medium">श्रीमती गीता थापा</span>
          </p>
          <p className="font-yatra text-gold-gradient text-sm md:text-base pt-1 leading-loose max-w-md mx-auto">
            हाम्रो शुभ विवाहको पावन अवसरमा यहाँको गरिमामय उपस्थितिको लागि हार्दिक निमन्त्रणा।
          </p>
          <Divider icon="✦" wide/>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          BLOCK 2 — हाम्रो यात्रा
      ════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 px-5 overflow-hidden"
        style={{ background:"radial-gradient(ellipse 130% 70% at 50% 50%, #7d1921 0%, #5B0F14 55%, #3d0b10 100%)" }}>

        <GaneshMandala opacity={0.10} size="145vmin" speed="cw-slow"/>
        {/* Inner soft blur vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background:"radial-gradient(ellipse 65% 60% at 50% 50%, transparent 0%, rgba(25,5,8,0.62) 100%)"
        }}/>

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <img src="/kalash.png" alt="" className="w-14 h-14 md:w-20 md:h-20 mx-auto animate-shimmer opacity-72"/>
            <h2 className="font-yatra text-gold-gradient" style={{fontSize:"clamp(2.4rem, 7vw, 4.5rem)"}}>हाम्रो यात्रा</h2>
            <p className="font-cinzel text-[#D4AF37]/58 tracking-[0.5em] uppercase text-[9px] md:text-[10px]">Our Journey Together</p>
            <Divider icon="✦" wide/>
            <p className="font-sans text-[#FDFBF7]/78 text-base md:text-lg italic max-w-sm mx-auto leading-relaxed">
              "दुई मनको मिलन, एउटा जीवनको सुरुवात।"
            </p>
            <p className="font-cinzel text-[#D4AF37]/40 text-[9px] tracking-widest italic">
              "The union of two hearts, the beginning of one life."
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-12">
            {MILESTONES.map((m,i)=>(
              <ScrollReveal key={i} style={{transitionDelay:`${i*75}ms`}}>
                <div className={`glass-card glass-card-hover rounded-2xl p-5 md:p-7 text-center space-y-2.5 h-full bg-gradient-to-b ${m.col} to-transparent`}>
                  <span className="text-2xl md:text-3xl block drop-shadow-sm">{m.icon}</span>
                  <p className="font-cinzel text-[#D4AF37]/58 text-[9px] tracking-[0.35em] uppercase">{m.year}</p>
                  <h3 className="font-yatra text-gold-gradient text-lg md:text-xl leading-tight">{m.np}</h3>
                  <p className="font-cinzel text-[#D4AF37]/48 text-[8px] tracking-widest uppercase">{m.en}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center">
            <Link href="/story"
              className="inline-flex items-center gap-3 px-9 py-3.5 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/42 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">
              Read Our Full Story →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          BLOCK 3 — SACRED CHAPTERS
      ════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 px-5 overflow-hidden"
        style={{ background:"radial-gradient(ellipse 110% 65% at 50% 50%, #6e151c 0%, #5B0F14 50%, #3d0b10 100%)" }}>

        <GaneshMandala opacity={0.07} size="130vmin" speed="ccw-medium"/>
        <div className="absolute inset-0 pointer-events-none" style={{
          background:"radial-gradient(ellipse 70% 65% at 50% 50%, transparent 0%, rgba(25,5,8,0.58) 100%)"
        }}/>

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center space-y-3 mb-14 md:mb-18">
            <p className="font-cinzel text-[#D4AF37]/52 tracking-[0.6em] uppercase text-[9px]">Explore</p>
            <h2 className="font-cinzel text-gold-gradient text-2xl md:text-4xl">Sacred Chapters</h2>
            <Divider wide/>
            <p className="font-sans text-[#FDFBF7]/68 text-sm md:text-base italic leading-relaxed">
              Each chapter tells our beautiful story — tap to explore
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {CHAPTERS.map((ch,i)=>(
              <ScrollReveal key={ch.href} style={{transitionDelay:`${i*90}ms`}}>
                <Link href={ch.href}>
                  <div className="gold-border-wrap cursor-pointer group chapter-card">
                    <div className="rounded-[calc(1rem-1px)] overflow-hidden relative bg-[#5B0F14]" style={{aspectRatio:"3/4"}}>
                      <img src={ch.img} alt={ch.en}
                        className="chapter-img absolute inset-0 w-full h-full object-cover"
                        style={{opacity:0.72}}/>
                      <div className="chapter-overlay absolute inset-0"
                        style={{background:"linear-gradient(to top, rgba(22,4,7,0.96) 0%, rgba(22,4,7,0.32) 55%, rgba(22,4,7,0.05) 100%)"}}/>
                      <div className="absolute inset-0 flex flex-col items-center justify-end p-5 md:p-8 text-center">
                        <span className="text-3xl mb-3 drop-shadow-lg">{ch.icon}</span>
                        <h3 className="font-yatra text-xl md:text-2xl text-gold-gradient leading-snug">{ch.np}</h3>
                        <p className="font-cinzel text-[#D4AF37]/70 text-[9px] tracking-[0.38em] uppercase mt-1">{ch.en}</p>
                        <p className="font-sans text-[#FDFBF7]/72 text-sm mt-2.5 leading-snug">{ch.sub}</p>
                        <span className="chapter-label mt-5 font-cinzel text-[#D4AF37] text-[9px] tracking-[0.42em] uppercase">EXPLORE →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          BLOCK 4 — CEREMONY & COUNTDOWN
      ════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 px-5 overflow-hidden"
        style={{ background:"radial-gradient(ellipse 130% 70% at 50% 50%, #7d1921 0%, #5B0F14 55%, #3d0b10 100%)" }}>

        <GaneshMandala opacity={0.08} size="142vmin" speed="cw-slow"/>
        <div className="absolute inset-0 pointer-events-none" style={{
          background:"radial-gradient(ellipse 65% 60% at 50% 50%, transparent 0%, rgba(25,5,8,0.60) 100%)"
        }}/>

        <div className="max-w-4xl mx-auto relative z-10 space-y-20 md:space-y-28">

          {/* Countdown */}
          <div>
            <ScrollReveal className="text-center space-y-4 mb-10">
              <img src="/om.png" alt="" className="w-12 h-12 md:w-16 md:h-16 mx-auto animate-shimmer opacity-68"/>
              <p className="font-cinzel text-[#D4AF37]/58 tracking-[0.58em] uppercase text-[9px]">The Sacred Day Approaches</p>
              <h2 className="font-yatra text-gold-gradient" style={{fontSize:"clamp(2rem, 5.5vw, 3.5rem)"}}>१२ · १२ · २०२६</h2>
              <Divider icon="🪔" wide/>
            </ScrollReveal>
            <ScrollReveal><Countdown/></ScrollReveal>
          </div>

          {/* Schedule */}
          <div>
            <ScrollReveal className="text-center space-y-3 mb-10">
              <p className="font-cinzel text-[#D4AF37]/52 tracking-[0.55em] uppercase text-[9px]">12 December 2026</p>
              <h2 className="font-cinzel text-gold-gradient text-2xl md:text-3xl">Ceremony Schedule</h2>
              <Divider icon="🌸" wide/>
            </ScrollReveal>
            <div className="max-w-2xl mx-auto space-y-3">
              {SCHEDULE.map(({time,np,en,icon},i)=>(
                <ScrollReveal key={i} style={{transitionDelay:`${i*70}ms`}}>
                  <div className="glass-card glass-card-hover rounded-xl px-5 md:px-8 py-4 md:py-5 flex items-center gap-5">
                    <span className="text-2xl shrink-0">{icon}</span>
                    <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent shrink-0"/>
                    <div className="flex-1 min-w-0">
                      <p className="font-yatra text-gold-gradient text-base md:text-xl leading-tight">{np}</p>
                      <p className="font-cinzel text-[#FDFBF7]/60 text-[9px] tracking-widest uppercase mt-0.5">{en}</p>
                    </div>
                    <span className="font-cinzel text-[#D4AF37]/70 text-[10px] md:text-xs shrink-0 hidden sm:block">{time}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          BLOCK 5 — THE VENUE
      ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">

        {/* Cinematic venue hero */}
        <div className="relative h-[60vh] md:h-[78vh] w-full overflow-hidden">
          <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800&q=88"
            alt="Himalaya Grand Banquet"
            className="absolute inset-0 w-full h-full object-cover"
            style={{filter:"brightness(0.58) saturate(1.25)"}}/>
          <div className="absolute inset-0" style={{
            background:"linear-gradient(to top, #3d0b10 0%, rgba(61,11,16,0.50) 45%, rgba(61,11,16,0.10) 100%)"
          }}/>
          <GaneshMandala opacity={0.05} size="100vmin" speed="cw-slow"/>
          <ScrollReveal className="absolute bottom-0 left-0 right-0 text-center pb-12 md:pb-18 px-5 space-y-3 z-10">
            <p className="font-cinzel text-[#D4AF37]/65 tracking-[0.58em] uppercase text-[9px]">Join Us At</p>
            <h2 className="font-cinzel text-gold-gradient leading-tight" style={{fontSize:"clamp(1.8rem, 5vw, 4.2rem)"}}>
              Himalaya Grand Banquet
            </h2>
            <p className="font-cinzel text-[#D4AF37]/68 tracking-[0.40em] text-xs md:text-sm uppercase">Durbar Marg · Kathmandu</p>
            <p className="font-cinzel text-[#FDFBF7]/42 tracking-[0.28em] text-[9px]">12 December 2026</p>
          </ScrollReveal>
        </div>

        {/* Venue details */}
        <div className="relative py-18 md:py-24 px-5"
          style={{ background:"radial-gradient(ellipse 110% 80% at 50% 50%, #6e151c 0%, #3d0b10 100%)" }}>
          <GaneshMandala opacity={0.06} size="115vmin" speed="ccw-medium"/>
          <div className="absolute inset-0 pointer-events-none" style={{
            background:"radial-gradient(ellipse 60% 70% at 50% 50%, transparent 0%, rgba(20,4,8,0.60) 100%)"
          }}/>

          <div className="max-w-4xl mx-auto relative z-10 space-y-10 md:space-y-12 py-6">
            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl overflow-hidden border border-[#D4AF37]/20 divide-y sm:divide-y-0 sm:divide-x divide-[#D4AF37]/14">
                {[
                  {icon:"👥",t:"Capacity",     b:"500+ Guests"},
                  {icon:"🏛",t:"Facilities",   b:"3 Premium Halls\nValet Parking"},
                  {icon:"🍽",t:"Dining",        b:"Multi-Cuisine Buffet\nAuthentic Nepali Feast"},
                ].map(({icon,t,b})=>(
                  <div key={t} className="glass-card py-9 px-6 text-center space-y-2.5">
                    <span className="text-2xl">{icon}</span>
                    <h3 className="font-cinzel text-[#D4AF37]/88 text-xs md:text-sm">{t}</h3>
                    <p className="font-sans text-[#FDFBF7]/78 text-sm md:text-base whitespace-pre-line leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="text-center space-y-5">
              <Divider icon="📍" wide/>
              <p className="font-sans text-[#FDFBF7]/75 text-sm md:text-base leading-relaxed">
                <span className="text-[#D4AF37]/82">Address:</span> Durbar Marg, Kathmandu 44600, Nepal
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://maps.google.com/?q=Durbar+Marg+Kathmandu" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-9 py-3.5 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/45 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">
                  View on Map →
                </a>
                <Link href="/banquet"
                  className="inline-flex items-center justify-center px-9 py-3.5 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/45 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">
                  Full Venue Details →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Footer */}
        <div className="py-16 px-5 text-center space-y-5 border-t border-[#D4AF37]/12"
          style={{ background:"#2e0909" }}>
          <img src="/ganesh.png" alt="" className="w-10 h-10 mx-auto animate-shimmer" style={{opacity:0.48}}/>
          <p className="font-yatra text-gold-gradient text-xl md:text-2xl">आशीष &amp; आयुषी</p>
          <p className="font-cinzel text-[#D4AF37]/38 tracking-[0.45em] text-[9px] uppercase">December · 12 · 2026</p>
          <Divider icon="ॐ" wide/>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[{h:"/story",l:"Our Story"},{h:"/photos",l:"Photos"},{h:"/banquet",l:"Venue"}].map(({h,l})=>(
              <Link key={h} href={h}
                className="font-cinzel text-[#D4AF37]/42 hover:text-[#D4AF37] text-[9px] tracking-[0.35em] uppercase transition-colors duration-200">{l}</Link>
            ))}
          </div>
          <p className="font-cinzel text-[#D4AF37]/18 text-[8px] tracking-[0.42em] uppercase pt-2">
            © 2026 · Crafted with ❤ for Aashish &amp; Aayushi
          </p>
        </div>
      </section>

    </div>
  );
}
