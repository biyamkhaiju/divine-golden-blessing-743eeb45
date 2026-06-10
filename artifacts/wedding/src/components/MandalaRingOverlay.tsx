/* Fixed mandala-ring.png overlay — sits above page content (z-21),
   below petals (z-25). mix-blend-mode:screen dissolves the black
   background so only the golden ring glows through on every page. */
export function MandalaRingOverlay() {
  const base: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    pointerEvents: "none",
    userSelect: "none",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 21,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Outer ring — slow CW */}
      <img
        src="/mandala-ring.png"
        aria-hidden
        alt=""
        style={{
          ...base,
          width: "min(108vmin, 840px)",
          height: "min(108vmin, 840px)",
          transform: "translate(-50%, -50%)",
          animation: "mro-cw 75s linear infinite",
          mixBlendMode: "screen",
          filter: "brightness(0.88) saturate(1.3) drop-shadow(0 0 12px rgba(212,175,55,0.25))",
          opacity: 0.28,
          willChange: "transform",
          flexShrink: 0,
        }}
      />

      {/* Inner ring — faster CCW */}
      <img
        src="/mandala-ring.png"
        aria-hidden
        alt=""
        style={{
          ...base,
          width: "min(68vmin, 540px)",
          height: "min(68vmin, 540px)",
          transform: "translate(-50%, -50%)",
          animation: "mro-ccw 50s linear infinite",
          mixBlendMode: "screen",
          filter: "brightness(0.82) saturate(1.2) drop-shadow(0 0 8px rgba(212,175,55,0.18))",
          opacity: 0.16,
          willChange: "transform",
          flexShrink: 0,
        }}
      />

      <style>{`
        @keyframes mro-cw  { from { transform:translate(-50%,-50%) rotate(0deg);   } to { transform:translate(-50%,-50%) rotate(360deg);  } }
        @keyframes mro-ccw { from { transform:translate(-50%,-50%) rotate(360deg); } to { transform:translate(-50%,-50%) rotate(0deg);   } }
      `}</style>
    </div>
  );
}
