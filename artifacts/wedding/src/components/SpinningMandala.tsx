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
      {/* Radial gold glow bloom behind the ring */}
      <div
        style={{
          ...center,
          width: "min(72vmin, 560px)",
          height: "min(72vmin, 560px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.28) 0%, rgba(212,175,55,0.10) 50%, transparent 72%)",
          animation: "chakra-pulse 5s ease-in-out infinite",
          filter: "blur(8px)",
        }}
      />

      {/* Outer ring — slow CW */}
      <img
        src="/mandala-ring.png"
        aria-hidden
        alt=""
        style={{
          ...center,
          width: "min(105vmin, 820px)",
          height: "min(105vmin, 820px)",
          animation: "mandala-cw 80s linear infinite",
          mixBlendMode: "screen",
          filter: "brightness(0.85) saturate(1.25) drop-shadow(0 0 8px rgba(212,175,55,0.22))",
          opacity: 0.30,
          flexShrink: 0,
        }}
      />

      {/* Inner ring — faster CCW, slightly smaller */}
      <img
        src="/mandala-ring.png"
        aria-hidden
        alt=""
        style={{
          ...center,
          width: "min(65vmin, 520px)",
          height: "min(65vmin, 520px)",
          animation: "mandala-ccw 55s linear infinite",
          mixBlendMode: "screen",
          filter: "brightness(0.80) saturate(1.2) drop-shadow(0 0 6px rgba(212,175,55,0.18))",
          opacity: 0.18,
          flexShrink: 0,
        }}
      />

      <style>{`
        @keyframes mandala-cw  { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(360deg);  } }
        @keyframes mandala-ccw { from { transform: translate(-50%,-50%) rotate(360deg); } to { transform: translate(-50%,-50%) rotate(0deg);   } }
        @keyframes chakra-pulse {
          0%,100% { opacity:.45; transform:translate(-50%,-50%) scale(1); }
          50%      { opacity:.9;  transform:translate(-50%,-50%) scale(1.06); }
        }
      `}</style>
    </div>
  );
}
