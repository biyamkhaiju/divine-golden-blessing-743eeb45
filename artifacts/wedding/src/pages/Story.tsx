import React from "react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ── data ──────────────────────────────────────── */
const TIMELINE = [
  { year:"2020", np:"पहिलो भेट",    en:"First Meeting",     icon:"✨",
    desc:"Two souls crossed paths at a family gathering in Kathmandu — a fleeting glance that neither could forget. The world grew a little more beautiful that day.",
    img:"https://images.unsplash.com/photo-1529636444744-adffc9135a5e?w=800&q=82" },
  { year:"2021", np:"मित्रता",       en:"Friendship Blooms", icon:"🌸",
    desc:"Late-night calls, shared dreams, and long walks through Patan Durbar Square turned strangers into the best of friends. Every moment felt like home.",
    img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=82" },
  { year:"2023", np:"प्रेम",         en:"Love Declared",     icon:"❤",
    desc:"Under a canopy of marigolds at Pashupatinath, Aashish took Aayushi's hands and said what his heart had known all along. She said yes with tears of joy.",
    img:"https://images.unsplash.com/photo-1583391099995-5b40bff7f2d2?w=800&q=82" },
  { year:"2025", np:"सगाई",          en:"Engagement",        icon:"💍",
    desc:"Surrounded by both families, rings were exchanged and a lifelong promise was made — to journey through life together, always.",
    img:"https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=82" },
  { year:"Dec 2026", np:"शुभ विवाह", en:"Wedding Day",       icon:"🪔",
    desc:"On the auspicious twelfth of December, they take their seven sacred vows — Saptapadi — and begin their forever in the presence of God and loved ones.",
    img:"https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=82" },
];

const MILESTONES = [
  { year:"2020", np:"पहिलो भेट",    en:"First Meeting",  icon:"✨", col:"from-rose-900/35" },
  { year:"2021", np:"मित्रता",       en:"Friendship",     icon:"🌸", col:"from-red-900/30"  },
  { year:"2023", np:"प्रेम",         en:"Love Declared",  icon:"❤",  col:"from-rose-800/35" },
  { year:"2025", np:"सगाई",          en:"Engagement",     icon:"💍", col:"from-amber-900/30" },
  { year:"Dec 2026", np:"शुभ विवाह", en:"Wedding Day",   icon:"🪔", col:"from-yellow-900/28" },
];

const PHOTOS_GROOM = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=82",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=82",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=82",
];
const PHOTOS_BRIDE = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=82",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=82",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=82",
];

/* ── helpers ────────────────────────────────────── */
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
      <img src="/ganesh.png" alt=""
        className={`mandala-${speed} shrink-0`}
        style={{ width:size, maxWidth:"none", opacity, filter:"sepia(1) saturate(14) hue-rotate(-22deg) brightness(1.15)" }}/>
    </div>
  );
}

/* ═══════════════════════════════════════════════════ */
export default function Story() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden text-[#FDFBF7]">

      {/* Fixed warm background */}
      <div className="fixed inset-0 -z-10" style={{ background:"#5B0F14" }}/>
      <div className="fixed inset-0 -z-10" style={{
        backgroundImage:"url('https://images.unsplash.com/photo-1583391099995-5b40bff7f2d2?w=1600&q=40')",
        backgroundSize:"cover", backgroundPosition:"center",
        filter:"blur(28px) brightness(0.28) saturate(1.5)",
        transform:"scale(1.08)",
      }}/>
      <div className="fixed inset-0 -z-10 bg-[#5B0F14]/55"/>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-4 flex items-center justify-between"
        style={{background:"linear-gradient(to bottom, rgba(45,8,12,0.80), transparent)", backdropFilter:"blur(6px)"}}>
        <Link href="/" className="font-cinzel text-[#D4AF37]/65 hover:text-[#D4AF37] tracking-[0.22em] text-[9px] uppercase transition-colors">← Home</Link>
        <span className="font-cinzel text-[#D4AF37]/40 tracking-[0.38em] text-[8px] uppercase">Our Story</span>
        <Link href="/photos" className="font-cinzel text-[#D4AF37]/65 hover:text-[#D4AF37] tracking-[0.22em] text-[9px] uppercase transition-colors">Photos →</Link>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 min-h-[68vh] overflow-hidden"
        style={{ background:"radial-gradient(ellipse 110% 70% at 50% 35%, #8a1c24 0%, #5B0F14 52%, #3d0b10 100%)" }}>

        <GaneshMandala opacity={0.09} size="145vmin" speed="cw-slow"/>
        <div className="absolute inset-0 pointer-events-none" style={{
          background:"radial-gradient(ellipse 65% 60% at 50% 50%, transparent 0%, rgba(25,5,8,0.68) 100%)"
        }}/>

        {/* Corner frame */}
        <div className="absolute inset-6 sm:inset-10 pointer-events-none">
          {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r","bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"]
            .map((p,i)=><div key={i} className={`absolute w-10 h-10 ${p} border-[#D4AF37]/28`}/>)}
        </div>

        <div className="flex flex-col items-center gap-5 page-hero-in relative z-10">
          <img src="/ganesh.png" alt="Ganesh" className="w-14 h-14 md:w-20 md:h-20 animate-shimmer animate-float"/>
          <h1 className="font-yatra text-gold-gradient leading-tight" style={{fontSize:"clamp(2.8rem, 8vw, 5.5rem)"}}>
            हाम्रो कहानी
          </h1>
          <p className="font-cinzel text-[#D4AF37]/62 tracking-[0.45em] uppercase text-[10px] md:text-xs">Our Story</p>
          <Divider wide/>
          <p className="font-sans text-[#FDFBF7]/78 text-base md:text-xl max-w-lg leading-relaxed italic">
            "दुई मनको मिलन, एउटा जीवनको सुरुवात।"
          </p>
          <p className="font-cinzel text-[#D4AF37]/42 text-[9px] tracking-widest">
            "The union of two hearts, the beginning of one life."
          </p>
        </div>
      </div>

      {/* ── STORY TIMELINE ───────────────────────────────── */}
      <section className="relative py-16 md:py-20 px-5">
        <div className="max-w-5xl mx-auto space-y-5 md:space-y-6">
          {TIMELINE.map((item,i)=>(
            <ScrollReveal key={i}>
              <div className="gold-border-wrap">
                <div className={`rounded-[calc(1rem-1px)] overflow-hidden flex flex-col bg-[#5B0F14]/70 backdrop-blur-md
                  ${i%2!==0?"md:flex-row-reverse":"md:flex-row"}`}>
                  <div className="relative w-full md:w-[42%] h-52 md:h-auto overflow-hidden shrink-0">
                    <img src={item.img} alt={item.en}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-106 transition-all duration-700"/>
                    <div className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-${i%2!==0?"l":"r"} from-transparent to-[#3d0b10]/85`}/>
                    <div className="absolute top-4 left-4 flex items-center gap-2.5 backdrop-blur-sm bg-black/20 rounded-lg px-3 py-1.5">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-cinzel text-[#D4AF37]/82 text-[9px] tracking-[0.32em] uppercase">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6 md:p-9 lg:p-12 flex flex-col justify-center gap-4">
                    <div>
                      <h3 className="font-yatra text-gold-gradient" style={{fontSize:"clamp(1.5rem, 3vw, 2.2rem)"}}>{item.np}</h3>
                      <p className="font-cinzel text-[#D4AF37]/55 text-[9px] tracking-[0.38em] uppercase mt-1">{item.en}</p>
                    </div>
                    <div className="w-10 h-px bg-[#D4AF37]/32"/>
                    <p className="font-sans text-[#FDFBF7]/80 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── हाम्रो यात्रा — MILESTONES ───────────────────── */}
      <section className="relative py-24 md:py-36 px-5 overflow-hidden"
        style={{ background:"radial-gradient(ellipse 120% 70% at 50% 50%, #7d1921 0%, #5B0F14 55%, #3d0b10 100%)" }}>

        <GaneshMandala opacity={0.10} size="148vmin" speed="cw-slow"/>
        <div className="absolute inset-0 pointer-events-none" style={{
          background:"radial-gradient(ellipse 65% 60% at 50% 50%, transparent 0%, rgba(25,5,8,0.62) 100%)"
        }}/>

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center space-y-4 mb-14">
            <img src="/kalash.png" alt="" className="w-14 h-14 md:w-20 md:h-20 mx-auto animate-shimmer opacity-70"/>
            <h2 className="font-yatra text-gold-gradient" style={{fontSize:"clamp(2.2rem, 6vw, 4rem)"}}>हाम्रो यात्रा</h2>
            <p className="font-cinzel text-[#D4AF37]/58 tracking-[0.5em] uppercase text-[9px]">Our Journey</p>
            <Divider icon="✦" wide/>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
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
        </div>
      </section>

      {/* ── हाम्रा तस्बिरहरू — PHOTO GALLERY ────────────── */}
      <section className="relative py-24 md:py-36 px-5">
        <div className="max-w-5xl mx-auto space-y-12">
          <ScrollReveal className="text-center space-y-4">
            <h2 className="font-yatra text-gold-gradient" style={{fontSize:"clamp(2.2rem, 6vw, 4rem)"}}>हाम्रा तस्बिरहरू</h2>
            <p className="font-cinzel text-[#D4AF37]/58 tracking-[0.45em] uppercase text-[9px]">Our Photos</p>
            <Divider wide/>
            <p className="font-sans text-[#FDFBF7]/70 text-sm md:text-base italic max-w-sm mx-auto leading-relaxed">
              Memories we'll cherish forever — captured in a golden frame.
            </p>
          </ScrollReveal>

          {/* Groom */}
          <ScrollReveal className="space-y-4">
            <div>
              <p className="font-cinzel text-[#D4AF37]/50 tracking-[0.48em] uppercase text-[9px] mb-1">The Groom</p>
              <h3 className="font-yatra text-gold-gradient text-2xl md:text-3xl">आशीष</h3>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {PHOTOS_GROOM.map((src,i)=>(
                <div key={i} className="group overflow-hidden rounded-xl border border-[#D4AF37]/14 hover:border-[#D4AF37]/42 transition-colors duration-400" style={{aspectRatio:"1"}}>
                  <img src={src} alt={`Aashish ${i+1}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600"/>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex items-center gap-5">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent"/>
            <span className="font-yatra text-gold-gradient text-3xl">❤</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#D4AF37]/25 to-transparent"/>
          </ScrollReveal>

          {/* Bride */}
          <ScrollReveal className="space-y-4">
            <div className="text-right">
              <p className="font-cinzel text-[#D4AF37]/50 tracking-[0.48em] uppercase text-[9px] mb-1">The Bride</p>
              <h3 className="font-yatra text-gold-gradient text-2xl md:text-3xl">आयुषी</h3>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {PHOTOS_BRIDE.map((src,i)=>(
                <div key={i} className="group overflow-hidden rounded-xl border border-[#D4AF37]/14 hover:border-[#D4AF37]/42 transition-colors duration-400" style={{aspectRatio:"1"}}>
                  <img src={src} alt={`Aayushi ${i+1}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600"/>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="text-center">
            <Link href="/photos"
              className="inline-flex items-center gap-2 px-9 py-3.5 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/45 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">
              View Full Gallery →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── समारोह स्थल — VENUE at end ───────────────────── */}
      <section className="relative overflow-hidden">
        <div className="relative h-[52vh] md:h-[68vh] w-full overflow-hidden">
          <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1800&q=85"
            alt="Himalaya Grand Banquet" className="absolute inset-0 w-full h-full object-cover"
            style={{filter:"brightness(0.58) saturate(1.2)"}}/>
          <div className="absolute inset-0" style={{
            background:"linear-gradient(to top, #3d0b10 0%, rgba(61,11,16,0.48) 45%, rgba(61,11,16,0.10) 100%)"
          }}/>
          <GaneshMandala opacity={0.05} size="100vmin" speed="cw-slow"/>
          <ScrollReveal className="absolute bottom-0 left-0 right-0 text-center pb-12 md:pb-16 px-5 space-y-2.5 z-10">
            <p className="font-cinzel text-[#D4AF37]/62 tracking-[0.58em] uppercase text-[9px]">समारोह स्थल</p>
            <h2 className="font-cinzel text-gold-gradient" style={{fontSize:"clamp(1.6rem, 4.5vw, 3.8rem)"}}>
              Himalaya Grand Banquet
            </h2>
            <p className="font-cinzel text-[#D4AF37]/65 tracking-[0.38em] text-xs md:text-sm">DURBAR MARG · KATHMANDU · 12 DEC 2026</p>
          </ScrollReveal>
        </div>

        <div className="relative py-14 md:py-18 px-5"
          style={{ background:"radial-gradient(ellipse 100% 80% at 50% 50%, #6e151c 0%, #3d0b10 100%)" }}>
          <GaneshMandala opacity={0.06} size="110vmin" speed="ccw-medium"/>
          <div className="absolute inset-0 pointer-events-none" style={{
            background:"radial-gradient(ellipse 60% 70% at 50% 50%, transparent 0%, rgba(20,4,8,0.62) 100%)"
          }}/>
          <div className="max-w-xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="glass-card rounded-2xl p-8 md:p-12 text-center space-y-5">
                <Divider icon="🏛" wide/>
                <p className="font-sans text-[#FDFBF7]/78 text-sm md:text-base leading-relaxed">
                  Durbar Marg, Kathmandu 44600, Nepal
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/banquet"
                    className="inline-flex items-center justify-center px-8 py-3 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/45 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">
                    Full Venue Details →
                  </Link>
                  <a href="https://maps.google.com/?q=Durbar+Marg+Kathmandu" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/38 text-[#D4AF37]/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/65 transition-all duration-300 rounded-sm">
                    View on Map →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <section className="text-center px-6 py-16 space-y-6 border-t border-[#D4AF37]/10"
        style={{ background:"#2e0909" }}>
        <ScrollReveal className="space-y-4">
          <Divider icon="ॐ" wide/>
          <p className="font-yatra text-gold-gradient leading-loose" style={{fontSize:"clamp(1.5rem, 4vw, 2.5rem)"}}>
            आशीष र आयुषी — सधैँ सँगसँगै
          </p>
          <p className="font-cinzel text-[#D4AF37]/42 tracking-widest text-[9px]">Aashish & Aayushi — Together Forever</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/"
              className="inline-flex items-center justify-center px-8 py-3 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/42 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">
              ← Home
            </Link>
            <Link href="/photos"
              className="inline-flex items-center justify-center px-8 py-3 font-cinzel tracking-[0.28em] text-[9px] uppercase border border-[#D4AF37]/42 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">
              Our Photos →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
