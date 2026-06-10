import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "wouter";

const SCHEDULE = [
  { time:"11:00 AM", np:"मेहेन्दी र सङ्गीत", en:"Mehendi & Sangeet",      icon:"🌿" },
  { time:"12:30 PM", np:"वर माला",            en:"Var Mala Ceremony",      icon:"💐" },
  { time:"2:00 PM",  np:"सप्तपदी",             en:"Saptapadi — Seven Vows", icon:"🔥" },
  { time:"5:00 PM",  np:"स्वागत समारोह",        en:"Reception & Feast",      icon:"🥂" },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700&q=82",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=82",
  "https://images.unsplash.com/photo-1583391099995-5b40bff7f2d2?w=700&q=82",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=82",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&q=82",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=82",
];

function Divider({ icon="❧", wide=false }: { icon?:string; wide?:boolean }) {
  return (
    <div className={`flex items-center gap-4 mx-auto ${wide?"w-full max-w-md":"w-full max-w-xs"}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/38"/>
      <span className="text-[#D4AF37]/62 text-sm shrink-0 select-none">{icon}</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/38"/>
    </div>
  );
}

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

export default function Banquet() {
  return (
    <main className="min-h-screen w-full text-[#FDFBF7] overflow-x-hidden relative">

      {/* Fixed warm background */}
      <div className="fixed inset-0 -z-10" style={{ background:"#5B0F14" }}/>
      <div className="fixed inset-0 -z-10" style={{
        backgroundImage:"url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=40')",
        backgroundSize:"cover", backgroundPosition:"center",
        filter:"blur(28px) brightness(0.28) saturate(1.3)",
        transform:"scale(1.08)",
      }}/>
      <div className="fixed inset-0 -z-10 bg-[#5B0F14]/55"/>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-4 flex items-center justify-between"
        style={{background:"linear-gradient(to bottom, rgba(45,8,12,0.80), transparent)", backdropFilter:"blur(6px)"}}>
        <Link href="/photos" className="font-cinzel text-[#D4AF37]/65 hover:text-[#D4AF37] tracking-[0.22em] text-[9px] uppercase transition-colors">← Photos</Link>
        <span className="font-cinzel text-[#D4AF37]/40 tracking-[0.38em] text-[8px] uppercase">The Venue</span>
        <Link href="/" className="font-cinzel text-[#D4AF37]/65 hover:text-[#D4AF37] tracking-[0.22em] text-[9px] uppercase transition-colors">Home →</Link>
      </nav>

      {/* ── CINEMATIC HERO ─────────────────────────────── */}
      <div className="relative h-[65vh] md:h-[82vh] w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800&q=88"
          alt="Himalaya Grand Banquet"
          className="absolute inset-0 w-full h-full object-cover"
          style={{filter:"brightness(0.52) saturate(1.35)"}}/>
        <div className="absolute inset-0" style={{
          background:"linear-gradient(to top, #3d0b10 0%, rgba(61,11,16,0.50) 48%, rgba(61,11,16,0.10) 100%)"
        }}/>
        <GaneshMandala opacity={0.06} size="105vmin" speed="cw-slow"/>

        <div className="absolute bottom-0 left-0 right-0 text-center pb-14 md:pb-18 px-5 space-y-3 page-hero-in z-10">
          <p className="font-cinzel text-[#D4AF37]/60 tracking-[0.58em] uppercase text-[9px]">Join Us At</p>
          <h1 className="font-cinzel text-gold-gradient leading-tight"
            style={{fontSize:"clamp(1.8rem, 5.5vw, 4.5rem)"}}>
            Himalaya Grand Banquet
          </h1>
          <p className="font-cinzel text-[#D4AF37]/68 tracking-[0.40em] text-xs md:text-sm uppercase">
            Durbar Marg · Kathmandu
          </p>
          <p className="font-cinzel text-[#FDFBF7]/40 tracking-[0.30em] text-[9px]">12 December 2026</p>
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 py-18 md:py-28 space-y-22 md:space-y-32">

        {/* Venue Info Cards */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl overflow-hidden border border-[#D4AF37]/20 divide-y sm:divide-y-0 sm:divide-x divide-[#D4AF37]/14">
            {[
              {icon:"👥",t:"Capacity",     b:"500+ Guests"},
              {icon:"🏛",t:"Facilities",   b:"3 Premium Halls\nValet Parking"},
              {icon:"🍽",t:"Dining",        b:"Multi-Cuisine Buffet\nTraditional Nepali Feast"},
            ].map(({icon,t,b})=>(
              <div key={t} className="glass-card py-9 px-6 text-center space-y-2.5">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-cinzel text-[#D4AF37]/88 text-xs md:text-sm">{t}</h3>
                <p className="font-sans text-[#FDFBF7]/78 text-sm md:text-base whitespace-pre-line leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Schedule */}
        <ScrollReveal className="space-y-10">
          <div className="text-center space-y-3">
            <p className="font-cinzel text-[#D4AF37]/52 tracking-[0.55em] uppercase text-[9px]">12 December 2026</p>
            <h2 className="font-cinzel text-gold-gradient text-2xl md:text-4xl">Ceremony Schedule</h2>
            <Divider icon="🌸" wide/>
          </div>
          <div className="space-y-3 max-w-2xl mx-auto">
            {SCHEDULE.map(({time,np,en,icon},i)=>(
              <div key={i} className="glass-card glass-card-hover rounded-xl px-5 md:px-8 py-4 md:py-5 flex items-center gap-5">
                <span className="text-2xl shrink-0">{icon}</span>
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent shrink-0"/>
                <div className="flex-1">
                  <p className="font-yatra text-gold-gradient text-base md:text-xl leading-tight">{np}</p>
                  <p className="font-cinzel text-[#FDFBF7]/60 text-[9px] tracking-widest uppercase mt-0.5">{en}</p>
                </div>
                <span className="font-cinzel text-[#D4AF37]/70 text-[10px] md:text-xs shrink-0 hidden sm:block">{time}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery */}
        <ScrollReveal className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="font-cinzel text-gold-gradient text-2xl md:text-4xl">Venue Glimpses</h2>
            <Divider wide/>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {GALLERY.map((src,i)=>(
              <div key={i}
                className={`group overflow-hidden rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/35 transition-colors duration-400
                  ${i===0?"sm:col-span-2 sm:row-span-2":"aspect-square"}`}
                style={{aspectRatio:i===0?undefined:"1"}}>
                <img src={src} alt={`Glimpse ${i+1}`}
                  className="w-full h-full object-cover opacity-78 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"/>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Address */}
        <ScrollReveal>
          <div className="gold-border-wrap max-w-lg mx-auto">
            <div className="rounded-[calc(1rem-1px)] glass-card p-9 md:p-12 text-center space-y-5">
              <h2 className="font-cinzel text-[#D4AF37]/85 text-lg md:text-xl">Find Us</h2>
              <Divider icon="📍" wide/>
              <div className="space-y-2 font-sans text-[#FDFBF7]/75 text-sm md:text-base leading-relaxed">
                <p className="text-[#D4AF37]/68 font-cinzel tracking-widest text-[9px] uppercase">Address</p>
                <p>Durbar Marg, Kathmandu 44600, Nepal</p>
                <p className="text-[#FDFBF7]/42 text-sm">+977 1-422XXXX · info@himalayagrand.com</p>
              </div>
              <a href="https://maps.google.com/?q=Durbar+Marg+Kathmandu" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/45 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">
                View on Map →
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer nav */}
        <ScrollReveal className="text-center space-y-5 pb-8">
          <Divider icon="ॐ" wide/>
          <p className="font-yatra text-gold-gradient text-xl md:text-2xl">आशीष र आयुषी — सधैँ सँगसँगै</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="inline-flex items-center justify-center px-8 py-3 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/42 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">← Back to Home</Link>
            <Link href="/photos" className="inline-flex items-center justify-center px-8 py-3 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/42 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">← Our Photos</Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
