import { useEffect, useState } from "react";

interface Props {
  isRevealed: boolean;
  onPlay?: () => void;
}

export const GaneshReveal = ({ isRevealed, onPlay }: Props) => {
  const [opacity, setOpacity] = useState(1);
  const [gone, setGone] = useState(false);
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    if (!tapped) {
      setTapped(true);
      onPlay?.();
    }
  };

  useEffect(() => {
    if (isRevealed) {
      setOpacity(0);
      const t = setTimeout(() => setGone(true), 2400);
      return () => clearTimeout(t);
    }
  }, [isRevealed]);

  if (gone) return null;

  return (
    <div
      onClick={handleTap}
      className="fixed inset-0 z-30 flex flex-col items-center justify-center select-none"
      style={{
        opacity,
        transition: "opacity 2.4s cubic-bezier(0.4,0,0.2,1)",
        background:
          "radial-gradient(circle at center, rgba(100,28,36,0.45) 0%, rgba(72,20,25,0.55) 45%, rgba(38,10,14,0.68) 100%)",
        cursor: tapped ? "default" : "pointer",
        pointerEvents: isRevealed ? "none" : "auto",
      }}
    >
      {/* Top mantra */}
      <p
        style={{
          position: "absolute",
          top: "clamp(18px,4vw,36px)",
          fontFamily: "'Cinzel Decorative', serif",
          color: "#D4AF37",
          letterSpacing: "0.35em",
          fontSize: "clamp(0.6rem,1.4vw,0.8rem)",
          opacity: 0.85,
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        ॥ श्री गणेशाय नमः ॥
      </p>

      {/* Ganesh image */}
      <div className="relative flex items-center justify-center">
        <div
          className="absolute rounded-full"
          style={{
            inset: "clamp(-30px,-5vw,-50px)",
            background: "radial-gradient(circle, rgba(212,175,55,0.36) 0%, transparent 70%)",
            animation: "g-aura 3.8s ease-in-out infinite",
          }}
        />
        <img
          src="/ganesh.png"
          alt="Lord Ganesh"
          draggable={false}
          style={{
            position: "relative",
            width: "min(52vmin, 360px)",
            height: "auto",
            userSelect: "none",
            animation: "g-shimmer 3.2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Couple names */}
      <p
        style={{
          marginTop: "clamp(16px,3.5vmin,30px)",
          fontFamily: "'Yatra One', system-ui",
          color: "#D4AF37",
          fontSize: "clamp(1rem,3vw,1.6rem)",
          letterSpacing: "0.12em",
          opacity: 0,
          animation: "g-fadeup 1.2s 1.5s forwards",
          textAlign: "center",
        }}
      >
        आशीष &amp; आयुषी
      </p>

      {/* Date */}
      <p
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          color: "rgba(212,175,55,0.65)",
          letterSpacing: "0.38em",
          fontSize: "clamp(0.55rem,1.2vw,0.75rem)",
          textTransform: "uppercase",
          opacity: 0,
          animation: "g-fadeup 1.2s 2s forwards",
          marginTop: "clamp(6px,1.2vmin,12px)",
          textAlign: "center",
        }}
      >
        Shubha Vivah · 12 December 2026
      </p>

      {/* Tap hint */}
      <p
        style={{
          position: "absolute",
          bottom: "clamp(18px,4vw,32px)",
          fontFamily: "'Cinzel Decorative', serif",
          color: tapped ? "rgba(212,175,55,0)" : "rgba(212,175,55,0.5)",
          letterSpacing: "0.35em",
          fontSize: "clamp(0.5rem,1vw,0.65rem)",
          textTransform: "uppercase",
          animation: tapped ? "none" : "g-pulse 2.2s ease-in-out infinite",
          transition: "color 0.5s ease",
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        ✦ Tap anywhere to begin ✦
      </p>

      <style>{`
        @keyframes g-shimmer {
          0%,100% { filter: drop-shadow(0 0 10px rgba(212,175,55,.55)) drop-shadow(0 0 24px rgba(212,175,55,.28)); }
          50%      { filter: drop-shadow(0 0 22px rgba(255,240,180,.95)) drop-shadow(0 0 48px rgba(212,175,55,.65)); }
        }
        @keyframes g-aura {
          0%,100% { opacity:.5; transform:scale(.97); }
          50%      { opacity:1;  transform:scale(1.07); }
        }
        @keyframes g-fadeup {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes g-pulse {
          0%,100% { opacity:.45; }
          50%      { opacity:.85; }
        }
      `}</style>
    </div>
  );
};
