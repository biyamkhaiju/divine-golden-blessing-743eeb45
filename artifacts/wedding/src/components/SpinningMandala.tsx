export function SpinningMandala({ intensity = 1 }: { intensity?: number }) {
  const center: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
        opacity: intensity,
        transition: "opacity 2.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Radial glow bloom */}
      <div
        style={{
          ...center,
          width: "min(90vmin, 700px)",
          height: "min(90vmin, 700px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.42) 0%, rgba(212,175,55,0.18) 45%, transparent 72%)",
          animation: "chakra-pulse 5s ease-in-out infinite",
          filter: "blur(6px)",
        }}
      />

      {/* Ring 1 — outermost, slow CW */}
      <svg
        viewBox="-360 -360 720 720"
        aria-hidden
        style={{
          ...center,
          width: "min(110vmin, 860px)",
          height: "min(110vmin, 860px)",
          animation: "mandala-cw 90s linear infinite",
          filter: "drop-shadow(0 0 16px rgba(212,175,55,0.55))",
          opacity: 0.85,
          willChange: "transform",
        }}
      >
        <defs>
          <linearGradient id="mg1" x1="0" y1="-1" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B6914" />
          </linearGradient>
          <radialGradient id="pf1" cx="0" cy="-0.5" r="1">
            <stop offset="0%" stopColor="#FFF2D6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B6914" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <circle r="340" fill="none" stroke="url(#mg1)" strokeWidth="1.2" opacity="0.8" />
        <circle r="322" fill="none" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="2 6" opacity="0.7" />
        <circle r="300" fill="none" stroke="url(#mg1)" strokeWidth="1.6" opacity="0.85" />
        {Array.from({ length: 36 }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / 36})`}>
            <path d="M0,-338 L6,-292 L-6,-292 Z" fill="url(#pf1)" opacity="0.9" />
            <circle cy="-350" r="2.5" fill="#FFF2D6" opacity="1" />
          </g>
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / 18 + 5})`}>
            <path d="M0,-283 Q30,-252 18,-220 Q0,-235 -18,-220 Q-30,-252 0,-283 Z" fill="url(#pf1)" stroke="#D4AF37" strokeWidth="0.8" opacity="0.75" />
          </g>
        ))}
      </svg>

      {/* Ring 2 — middle, CCW */}
      <svg
        viewBox="-260 -260 520 520"
        aria-hidden
        style={{
          ...center,
          width: "min(78vmin, 620px)",
          height: "min(78vmin, 620px)",
          animation: "mandala-ccw 60s linear infinite",
          filter: "drop-shadow(0 0 14px rgba(212,175,55,0.65))",
          opacity: 0.9,
          willChange: "transform",
        }}
      >
        <circle r="245" fill="none" stroke="#D4AF37" strokeWidth="1.4" opacity="0.75" />
        <circle r="215" fill="none" stroke="#D4AF37" strokeWidth="0.7" strokeDasharray="3 4" opacity="0.7" />
        <circle r="190" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.65" />
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / 24})`}>
            <line x1="0" y1="-190" x2="0" y2="-242" stroke="#D4AF37" strokeWidth="1.4" opacity="0.8" />
            <circle cy="-250" r="2.2" fill="#FFF2D6" opacity="1" />
          </g>
        ))}
        {Array.from({ length: 48 }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / 48})`}>
            <circle cy="-200" r="3.2" fill="#D4AF37" opacity="0.6" />
          </g>
        ))}
      </svg>

      {/* Ring 3 — inner lotus, fast CW */}
      <svg
        viewBox="-170 -170 340 340"
        aria-hidden
        style={{
          ...center,
          width: "min(50vmin, 400px)",
          height: "min(50vmin, 400px)",
          animation: "mandala-cw 40s linear infinite",
          filter: "drop-shadow(0 0 18px rgba(212,175,55,0.75))",
          opacity: 0.95,
          willChange: "transform",
        }}
      >
        <defs>
          <radialGradient id="pf2" cx="0" cy="-0.5" r="1">
            <stop offset="0%" stopColor="#FFF2D6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B6914" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / 8})`}>
            <path d="M0,-72 Q44,-110 0,-162 Q-44,-110 0,-72 Z" fill="url(#pf2)" stroke="#D4AF37" strokeWidth="1.2" opacity="0.9" />
          </g>
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / 8 + 22.5})`}>
            <path d="M0,-65 Q22,-92 0,-122 Q-22,-92 0,-65 Z" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.75" />
          </g>
        ))}
        <circle r="60" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.75" />
        <circle r="44" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
        <circle r="18" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.75" />
      </svg>

      <style>{`
        @keyframes mandala-cw  { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(360deg);  } }
        @keyframes mandala-ccw { from { transform: translate(-50%,-50%) rotate(360deg); } to { transform: translate(-50%,-50%) rotate(0deg);   } }
        @keyframes chakra-pulse {
          0%,100% { opacity:.55; transform:translate(-50%,-50%) scale(1); }
          50%      { opacity:1;   transform:translate(-50%,-50%) scale(1.08); }
        }
      `}</style>
    </div>
  );
}
