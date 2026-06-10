import React from "react";

/* Petals fall gently from the top — like flowers drifting down at a wedding */
const PETALS = [
  { x:  4, size: 18, dur: 14, delay:  -2, op: 0.55, rot:  12 },
  { x: 11, size: 13, dur: 11, delay:  -8, op: 0.40, rot: -18 },
  { x: 19, size: 22, dur: 18, delay:  -5, op: 0.58, rot:  30 },
  { x: 27, size: 15, dur: 13, delay: -11, op: 0.44, rot:  -8 },
  { x: 34, size: 20, dur: 20, delay:  -1, op: 0.50, rot:  22 },
  { x: 41, size: 11, dur: 10, delay: -14, op: 0.36, rot: -35 },
  { x: 48, size: 24, dur: 17, delay:  -6, op: 0.62, rot:   5 },
  { x: 55, size: 17, dur: 14, delay:  -9, op: 0.50, rot: -25 },
  { x: 62, size: 19, dur: 15, delay:  -3, op: 0.48, rot:  18 },
  { x: 69, size: 13, dur: 11, delay: -12, op: 0.40, rot: -14 },
  { x: 76, size: 21, dur: 19, delay:  -7, op: 0.56, rot:  28 },
  { x: 83, size: 15, dur: 13, delay:  -4, op: 0.42, rot: -20 },
  { x: 90, size: 23, dur: 16, delay: -10, op: 0.60, rot:  10 },
  { x: 96, size: 16, dur: 12, delay:  -2, op: 0.48, rot: -30 },
  { x:  7, size: 14, dur: 18, delay: -16, op: 0.34, rot:  40 },
  { x: 23, size: 18, dur: 14, delay:  -4, op: 0.46, rot:  -5 },
  { x: 37, size: 12, dur: 10, delay: -13, op: 0.36, rot:  15 },
  { x: 52, size: 20, dur: 16, delay:  -8, op: 0.53, rot: -22 },
  { x: 65, size: 16, dur: 12, delay:  -1, op: 0.44, rot:  32 },
  { x: 79, size: 22, dur: 20, delay:  -9, op: 0.58, rot: -12 },
  { x: 15, size: 10, dur: 13, delay: -17, op: 0.30, rot:  25 },
  { x: 44, size: 24, dur: 17, delay:  -5, op: 0.56, rot: -40 },
];

/* Elongated lotus-petal teardrop, centred in 32×32 viewBox */
const PATH = "M16,2 C22,8 24,22 16,30 C8,22 10,8 16,2 Z";

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
      {PETALS.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "-60px",           /* start above the viewport */
            left: `${p.x}%`,
            width: p.size,
            height: p.size * 1.8,
            willChange: "transform, opacity",
            animation: `petal-fall ${p.dur}s ${p.delay}s linear infinite`,
          }}
        >
          <svg
            viewBox="0 0 32 32"
            style={{
              width: "100%",
              height: "100%",
              transform: `rotate(${p.rot}deg)`,
              filter: `drop-shadow(0 0 ${Math.round(p.size * 0.32)}px rgba(212,175,55,${(p.op * 0.9).toFixed(2)}))`,
            }}
          >
            <defs>
              <radialGradient id={`pg${i}`} cx="50%" cy="25%" r="75%">
                <stop offset="0%"   stopColor="#FFF8DC" stopOpacity={Math.min(p.op + 0.18, 1)} />
                <stop offset="50%"  stopColor="#D4AF37" stopOpacity={p.op} />
                <stop offset="100%" stopColor="#8B6914" stopOpacity={p.op * 0.35} />
              </radialGradient>
            </defs>
            <path d={PATH} fill={`url(#pg${i})`} />
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes petal-fall {
          0%   { transform: translateY(0)      translateX(0px)   rotate(0deg)   scale(1);    opacity: 0;   }
          6%   {                                                                              opacity: 1;   }
          30%  { transform: translateY(25vh)   translateX(20px)  rotate(45deg)  scale(0.96); }
          55%  { transform: translateY(52vh)   translateX(-16px) rotate(95deg)  scale(0.90); }
          78%  { transform: translateY(78vh)   translateX(12px)  rotate(145deg) scale(0.80); }
          93%  {                                                                              opacity: 0.7; }
          100% { transform: translateY(112vh)  translateX(-8px)  rotate(200deg) scale(0.60); opacity: 0;   }
        }
      `}</style>
    </div>
  );
}
