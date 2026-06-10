import React from "react";

const PETALS = [
  { x:  3, size:14, dur:16, delay: -2,  op:0.72, rot: 12,  color:"crimson" },
  { x:  9, size:10, dur:12, delay: -8,  op:0.58, rot:-18,  color:"rose"    },
  { x: 15, size:18, dur:20, delay: -5,  op:0.68, rot: 30,  color:"gold"    },
  { x: 21, size:12, dur:14, delay:-11,  op:0.60, rot: -8,  color:"crimson" },
  { x: 28, size:16, dur:18, delay: -1,  op:0.74, rot: 22,  color:"rose"    },
  { x: 35, size: 9, dur:11, delay:-14,  op:0.50, rot:-35,  color:"gold"    },
  { x: 41, size:20, dur:19, delay: -6,  op:0.70, rot:  5,  color:"crimson" },
  { x: 47, size:13, dur:15, delay: -9,  op:0.62, rot:-25,  color:"rose"    },
  { x: 53, size:15, dur:17, delay: -3,  op:0.66, rot: 18,  color:"gold"    },
  { x: 59, size:11, dur:13, delay:-12,  op:0.56, rot:-14,  color:"crimson" },
  { x: 65, size:17, dur:21, delay: -7,  op:0.72, rot: 28,  color:"rose"    },
  { x: 71, size:12, dur:14, delay: -4,  op:0.58, rot:-20,  color:"gold"    },
  { x: 77, size:19, dur:18, delay:-10,  op:0.76, rot: 10,  color:"crimson" },
  { x: 83, size:13, dur:12, delay: -2,  op:0.60, rot:-30,  color:"rose"    },
  { x: 89, size:16, dur:16, delay:-16,  op:0.50, rot: 40,  color:"gold"    },
  { x: 94, size:14, dur:20, delay: -4,  op:0.64, rot: -5,  color:"crimson" },
  { x:  6, size:11, dur:13, delay:-13,  op:0.52, rot: 15,  color:"rose"    },
  { x: 24, size:16, dur:17, delay: -8,  op:0.68, rot:-22,  color:"gold"    },
  { x: 38, size:13, dur:15, delay: -1,  op:0.56, rot: 32,  color:"crimson" },
  { x: 56, size:18, dur:22, delay: -9,  op:0.74, rot:-12,  color:"rose"    },
  { x: 12, size: 8, dur:14, delay:-17,  op:0.44, rot: 25,  color:"gold"    },
  { x: 44, size:20, dur:19, delay: -5,  op:0.70, rot:-40,  color:"crimson" },
  { x: 68, size:14, dur:16, delay: -3,  op:0.62, rot: 16,  color:"rose"    },
  { x: 87, size:10, dur:12, delay:-10,  op:0.48, rot:-28,  color:"gold"    },
  { x: 32, size:15, dur:18, delay: -6,  op:0.66, rot:  8,  color:"crimson" },
  { x: 74, size:12, dur:14, delay:-14,  op:0.54, rot:-20,  color:"rose"    },
  { x: 50, size:17, dur:20, delay: -2,  op:0.72, rot: 35,  color:"gold"    },
  { x: 18, size:13, dur:15, delay:-11,  op:0.58, rot:-15,  color:"crimson" },
];

const COLORS = {
  crimson: {
    c0: "#FF6B7A", c1: "#C0203A", c2: "#7B0E20",
    shadow: "rgba(180,30,55,0.6)"
  },
  rose: {
    c0: "#FFB3C0", c1: "#E05070", c2: "#9B2040",
    shadow: "rgba(200,60,90,0.5)"
  },
  gold: {
    c0: "#FFF8DC", c1: "#D4AF37", c2: "#7A5A10",
    shadow: "rgba(212,175,55,0.55)"
  },
};

/* Natural rose-petal shape: slightly asymmetric, rounded teardrop */
const PETAL_PATH = "M16,3 C20,5 27,11 26,19 C25,26 21,30 16,31 C11,30 7,26 6,19 C5,11 12,5 16,3 Z";
/* Inner vein line */
const VEIN_PATH  = "M16,6 Q17,18 16,29";

export function GoldenPetals() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {PETALS.map((p, i) => {
        const c = COLORS[p.color as keyof typeof COLORS];
        const swayAmp = 18 + (i % 5) * 6;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "-70px",
              left: `${p.x}%`,
              width: p.size,
              height: p.size * 1.75,
              willChange: "transform, opacity",
              animation: `petal-fall-${i % 4} ${p.dur}s ${p.delay}s linear infinite`,
            }}
          >
            <svg
              viewBox="0 0 32 34"
              style={{
                width: "100%",
                height: "100%",
                transform: `rotate(${p.rot}deg)`,
                filter: `drop-shadow(0 2px ${Math.round(p.size * 0.4)}px ${c.shadow})`,
                opacity: p.op,
              }}
            >
              <defs>
                <radialGradient id={`pg${i}`} cx="44%" cy="22%" r="72%">
                  <stop offset="0%"   stopColor={c.c0} stopOpacity="0.95" />
                  <stop offset="52%"  stopColor={c.c1} stopOpacity="0.85" />
                  <stop offset="100%" stopColor={c.c2} stopOpacity="0.45" />
                </radialGradient>
              </defs>
              <path d={PETAL_PATH} fill={`url(#pg${i})`} />
              <path d={VEIN_PATH} stroke={c.c2} strokeWidth="0.6" fill="none" opacity="0.38" />
            </svg>
          </div>
        );
      })}

      <style>{`
        @keyframes petal-fall-0 {
          0%   { transform: translateY(0)     translateX(0px)   rotate(0deg)   scale(1);    opacity:0; }
          5%   {                                                                              opacity:1; }
          28%  { transform: translateY(24vh)  translateX(22px)  rotate(48deg)  scale(0.95); }
          54%  { transform: translateY(52vh)  translateX(-18px) rotate(100deg) scale(0.88); }
          78%  { transform: translateY(77vh)  translateX(14px)  rotate(152deg) scale(0.78); }
          94%  {                                                                              opacity:0.6; }
          100% { transform: translateY(112vh) translateX(-6px)  rotate(210deg) scale(0.58); opacity:0; }
        }
        @keyframes petal-fall-1 {
          0%   { transform: translateY(0)     translateX(0px)   rotate(0deg)   scale(1);    opacity:0; }
          5%   {                                                                              opacity:1; }
          30%  { transform: translateY(26vh)  translateX(-24px) rotate(-42deg) scale(0.96); }
          56%  { transform: translateY(54vh)  translateX(16px)  rotate(-92deg) scale(0.87); }
          80%  { transform: translateY(79vh)  translateX(-10px) rotate(-148deg) scale(0.75); }
          94%  {                                                                              opacity:0.55; }
          100% { transform: translateY(112vh) translateX(8px)   rotate(-210deg) scale(0.55); opacity:0; }
        }
        @keyframes petal-fall-2 {
          0%   { transform: translateY(0)     translateX(0px)   rotate(0deg)   scale(1);    opacity:0; }
          6%   {                                                                              opacity:1; }
          25%  { transform: translateY(22vh)  translateX(16px)  rotate(35deg)  scale(0.97); }
          50%  { transform: translateY(50vh)  translateX(-22px) rotate(80deg)  scale(0.90); }
          76%  { transform: translateY(76vh)  translateX(18px)  rotate(130deg) scale(0.80); }
          93%  {                                                                              opacity:0.65; }
          100% { transform: translateY(112vh) translateX(-12px) rotate(190deg) scale(0.60); opacity:0; }
        }
        @keyframes petal-fall-3 {
          0%   { transform: translateY(0)     translateX(0px)   rotate(0deg)   scale(1);    opacity:0; }
          7%   {                                                                              opacity:1; }
          32%  { transform: translateY(28vh)  translateX(-14px) rotate(-55deg) scale(0.94); }
          58%  { transform: translateY(56vh)  translateX(20px)  rotate(-110deg) scale(0.86); }
          82%  { transform: translateY(80vh)  translateX(-16px) rotate(-165deg) scale(0.76); }
          94%  {                                                                              opacity:0.5; }
          100% { transform: translateY(112vh) translateX(6px)   rotate(-220deg) scale(0.55); opacity:0; }
        }
      `}</style>
    </div>
  );
}
