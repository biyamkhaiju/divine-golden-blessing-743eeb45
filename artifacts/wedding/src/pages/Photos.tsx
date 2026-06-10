import React, { useState } from "react";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Photo { id:string; url:string; caption:string }
const STORAGE_KEY_GROOM = "wedding_photos_groom";
const STORAGE_KEY_BRIDE  = "wedding_photos_bride";

const DEFAULT_GROOM: Photo[] = [
  { id:"g1", url:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=82", caption:"Aashish" },
  { id:"g2", url:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=82", caption:"Pre-wedding" },
  { id:"g3", url:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=82", caption:"Celebration" },
  { id:"g4", url:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=82", caption:"Portrait" },
];
const DEFAULT_BRIDE: Photo[] = [
  { id:"b1", url:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=82", caption:"Aayushi" },
  { id:"b2", url:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=82", caption:"Bridal look" },
  { id:"b3", url:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=82", caption:"Haldi ceremony" },
  { id:"b4", url:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=82", caption:"Mehndi" },
];

function usePhotoStore(key:string, defaults:Photo[]) {
  const [photos, setPhotos] = useState<Photo[]>(()=>{
    try { const s=localStorage.getItem(key); return s?JSON.parse(s):defaults; }
    catch { return defaults; }
  });
  const save = (u:Photo[])=>{ setPhotos(u); try{localStorage.setItem(key,JSON.stringify(u))}catch{} };
  return { photos, add:(url:string,caption:string)=>save([...photos,{id:Date.now().toString(),url,caption}]), remove:(id:string)=>save(photos.filter(p=>p.id!==id)) };
}

function AddPhotoForm({ onAdd }: { onAdd:(url:string,caption:string)=>void }) {
  const [open,setOpen]=useState(false);
  const [url,setUrl]=useState("");
  const [caption,setCaption]=useState("");
  const submit=(e:React.FormEvent)=>{ e.preventDefault(); if(!url.trim())return; onAdd(url.trim(),caption.trim()); setUrl("");setCaption("");setOpen(false); };
  if(!open) return (
    <button onClick={()=>setOpen(true)}
      className="flex items-center gap-2 px-5 py-2.5 border border-dashed border-[#D4AF37]/42 text-[#D4AF37]/72 hover:text-[#D4AF37] hover:border-[#D4AF37]/72 font-cinzel tracking-[0.2em] text-[9px] uppercase transition-all duration-300 rounded-xl">
      <span className="text-base leading-none font-light">+</span> Add Photo
    </button>
  );
  return (
    <form onSubmit={submit} className="glass-card rounded-xl p-4 space-y-3 max-w-xs w-full">
      <p className="font-cinzel text-[#D4AF37]/72 text-[9px] tracking-[0.3em] uppercase">Add a Photo</p>
      <input type="url" placeholder="Paste image URL…" value={url} onChange={e=>setUrl(e.target.value)} required
        className="w-full bg-[#3d0b10]/60 border border-[#D4AF37]/22 rounded-lg px-3 py-2 text-sm text-[#FDFBF7] placeholder-[#FDFBF7]/28 focus:outline-none focus:border-[#D4AF37]/55 font-sans"/>
      <input type="text" placeholder="Caption (optional)" value={caption} onChange={e=>setCaption(e.target.value)}
        className="w-full bg-[#3d0b10]/60 border border-[#D4AF37]/22 rounded-lg px-3 py-2 text-sm text-[#FDFBF7] placeholder-[#FDFBF7]/28 focus:outline-none focus:border-[#D4AF37]/55 font-sans"/>
      <div className="flex gap-2">
        <button type="submit" className="flex-1 py-2 border border-[#D4AF37]/42 text-[#D4AF37] font-cinzel text-[9px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all rounded-lg">Add</button>
        <button type="button" onClick={()=>setOpen(false)} className="flex-1 py-2 border border-white/12 text-[#FDFBF7]/42 font-cinzel text-[9px] tracking-[0.25em] uppercase hover:border-white/28 transition-all rounded-lg">Cancel</button>
      </div>
    </form>
  );
}

function Gallery({ photos, onRemove }: { photos:Photo[]; onRemove:(id:string)=>void }) {
  if(photos.length===0) return (
    <div className="text-center py-16 border border-dashed border-[#D4AF37]/18 rounded-2xl">
      <p className="font-cinzel text-[#D4AF37]/32 text-[9px] tracking-[0.3em] uppercase">No photos yet — add the first one</p>
    </div>
  );
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
      {photos.map((p,i)=>(
        <div key={p.id}
          className={`group relative overflow-hidden rounded-xl border border-[#D4AF37]/12 hover:border-[#D4AF37]/40 transition-all duration-400
            ${i===0?"col-span-2 row-span-2 aspect-square":"aspect-square"}`}>
          <img src={p.url} alt={p.caption||`Photo ${i+1}`}
            className="w-full h-full object-cover opacity-82 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2e0909]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
          {p.caption&&(
            <p className="absolute bottom-2.5 left-3 right-8 text-[10px] font-cinzel text-[#D4AF37]/92 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">{p.caption}</p>
          )}
          <button onClick={()=>onRemove(p.id)}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#3d0b10]/70 text-white/65 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-rose-900 hover:text-white transition-all duration-200">
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

function Divider({ icon="❧" }: { icon?:string }) {
  return (
    <div className="flex items-center gap-4 w-full max-w-sm mx-auto">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/38"/>
      <span className="text-[#D4AF37]/62 text-base shrink-0">{icon}</span>
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
          width:size, maxWidth:"none", opacity,
          mixBlendMode:"screen",
          filter:`brightness(1.35) saturate(1.6) drop-shadow(0 0 ${Math.round(opacity*400)}px rgba(212,175,55,0.85)) drop-shadow(0 0 ${Math.round(opacity*200)}px rgba(255,210,80,0.55))`
        }}/>
    </div>
  );
}

export default function Photos() {
  const groom = usePhotoStore(STORAGE_KEY_GROOM, DEFAULT_GROOM);
  const bride  = usePhotoStore(STORAGE_KEY_BRIDE,  DEFAULT_BRIDE);

  return (
    <main className="min-h-screen w-full overflow-x-hidden text-[#FDFBF7] relative">

      {/* Fixed warm background */}
      <div className="fixed inset-0 -z-10" style={{ background:"#5B0F14" }}/>
      <div className="fixed inset-0 -z-10" style={{
        backgroundImage:"url('https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1600&q=40')",
        backgroundSize:"cover", backgroundPosition:"center",
        filter:"blur(28px) brightness(0.28) saturate(1.4)",
        transform:"scale(1.08)",
      }}/>
      <div className="fixed inset-0 -z-10 bg-[#5B0F14]/55"/>

      {/* Fixed Ganesh mandala on entire page */}
      <div className="fixed inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden>
        <img src="/ganesh.png" alt=""
          className="mandala-cw-slow shrink-0"
          style={{ width:"145vmin", maxWidth:"none", opacity:0.06, filter:"sepia(1) saturate(14) hue-rotate(-22deg) brightness(1.15)" }}/>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-4 flex items-center justify-between"
        style={{background:"linear-gradient(to bottom, rgba(45,8,12,0.82), transparent)", backdropFilter:"blur(6px)"}}>
        <Link href="/story" className="font-cinzel text-[#D4AF37]/65 hover:text-[#D4AF37] tracking-[0.22em] text-[9px] uppercase transition-colors">← Story</Link>
        <span className="font-cinzel text-[#D4AF37]/40 tracking-[0.38em] text-[8px] uppercase">Our Photos</span>
        <Link href="/banquet" className="font-cinzel text-[#D4AF37]/65 hover:text-[#D4AF37] tracking-[0.22em] text-[9px] uppercase transition-colors">Venue →</Link>
      </nav>

      {/* Hero */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-14 min-h-[60vh] overflow-hidden"
        style={{ background:"radial-gradient(ellipse 110% 70% at 50% 35%, #8a1c24 0%, #5B0F14 52%, #3d0b10 100%)" }}>
        <GaneshMandala opacity={0.09} size="145vmin" speed="cw-slow"/>
        <div className="absolute inset-0 pointer-events-none" style={{
          background:"radial-gradient(ellipse 65% 60% at 50% 50%, transparent 0%, rgba(25,5,8,0.68) 100%)"
        }}/>
        <div className="absolute inset-6 sm:inset-10 pointer-events-none">
          {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r","bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"]
            .map((p,i)=><div key={i} className={`absolute w-10 h-10 ${p} border-[#D4AF37]/28`}/>)}
        </div>
        <ScrollReveal className="flex flex-col items-center gap-5 relative z-10">
          <img src="/ganesh.png" alt="Ganesh" className="w-14 h-14 md:w-20 md:h-20 animate-shimmer animate-float"/>
          <h1 className="font-yatra text-gold-gradient leading-tight" style={{fontSize:"clamp(2.8rem, 8vw, 5.5rem)"}}>
            हाम्रा तस्बिरहरू
          </h1>
          <p className="font-cinzel text-[#D4AF37]/62 tracking-[0.45em] uppercase text-[10px] md:text-xs">Our Photos</p>
          <Divider/>
          <p className="font-sans text-[#FDFBF7]/75 text-sm md:text-lg italic max-w-md leading-relaxed">
            Memories we'll cherish forever — captured in a golden frame.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-5xl mx-auto px-5 pb-28 space-y-20 md:space-y-24 relative z-10">

        {/* Groom */}
        <ScrollReveal className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-cinzel text-[#D4AF37]/50 tracking-[0.5em] uppercase text-[9px] mb-1">The Groom</p>
              <h2 className="font-yatra text-4xl md:text-5xl text-gold-gradient">आशीष</h2>
              <p className="font-cinzel text-[#D4AF37]/42 tracking-widest text-[9px] mt-0.5">Aashish</p>
            </div>
            <AddPhotoForm onAdd={groom.add}/>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-[#D4AF37]/28 via-[#D4AF37]/08 to-transparent"/>
          <Gallery photos={groom.photos} onRemove={groom.remove}/>
        </ScrollReveal>

        {/* Heart divider */}
        <ScrollReveal>
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/22 to-transparent"/>
            <span className="font-yatra text-gold-gradient text-4xl">❤</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#D4AF37]/22 to-transparent"/>
          </div>
        </ScrollReveal>

        {/* Bride */}
        <ScrollReveal className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-cinzel text-[#D4AF37]/50 tracking-[0.5em] uppercase text-[9px] mb-1">The Bride</p>
              <h2 className="font-yatra text-4xl md:text-5xl text-gold-gradient">आयुषी</h2>
              <p className="font-cinzel text-[#D4AF37]/42 tracking-widest text-[9px] mt-0.5">Aayushi</p>
            </div>
            <AddPhotoForm onAdd={bride.add}/>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-[#D4AF37]/28 via-[#D4AF37]/08 to-transparent"/>
          <Gallery photos={bride.photos} onRemove={bride.remove}/>
        </ScrollReveal>

        {/* Footer nav */}
        <ScrollReveal>
          <div className="text-center space-y-5">
            <Divider icon="ॐ"/>
            <p className="font-yatra text-gold-gradient text-xl md:text-2xl">आशीष र आयुषी — सधैँ सँगसँगै</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/" className="inline-flex items-center justify-center px-8 py-3 font-cinzel tracking-[0.25em] text-[10px] uppercase border border-[#D4AF37]/42 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">← Back to Home</Link>
              <Link href="/banquet" className="inline-flex items-center justify-center px-8 py-3 font-cinzel tracking-[0.25em] text-[10px] uppercase border border-[#D4AF37]/42 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3d0b10] transition-all duration-300 rounded-sm">View Venue →</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
