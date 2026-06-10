import { useState, useEffect, RefObject } from "react";

interface Props {
  audioRef: RefObject<HTMLAudioElement>;
}

export function MusicPlayer({ audioRef }: Props) {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    setPlaying(!a.paused);
    const onPlay  = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener("play",  onPlay);
    a.addEventListener("pause", onPause);
    return () => {
      a.removeEventListener("play",  onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, [audioRef]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
    } else {
      a.volume = 0.32;
      a.play().catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      title={playing ? "Pause Kudmayi" : "Play Kudmayi"}
      style={{
        position: "fixed",
        bottom: "22px",
        right: "22px",
        zIndex: 100,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: `1.5px solid ${playing ? "rgba(212,175,55,0.75)" : "rgba(212,175,55,0.3)"}`,
        background: "rgba(20,4,6,0.85)",
        backdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: playing
          ? "0 0 22px rgba(212,175,55,0.5), 0 0 6px rgba(212,175,55,0.2)"
          : "0 2px 16px rgba(0,0,0,0.5)",
        transition: "all 0.4s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      {playing ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M3 9v6h4l5 5V4L7 9H3Z" fill="#D4AF37" />
          <path d="M16.5 12A4.5 4.5 0 0 0 14 8.07v7.86A4.5 4.5 0 0 0 16.5 12Z" fill="#D4AF37" opacity=".7"/>
          <path d="M14 3.23v2.06A7 7 0 0 1 19 12a7 7 0 0 1-5 6.71v2.06A9 9 0 0 0 21 12 9 9 0 0 0 14 3.23Z" fill="#D4AF37" opacity=".4"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M3 9v6h4l5 5V4L7 9H3Z" fill="#D4AF37" opacity=".5" />
          <line x1="23" y1="9" x2="17" y2="15" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
          <line x1="17" y1="9" x2="23" y2="15" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )}
      {playing && (
        <span style={{
          position: "absolute",
          inset: "-6px",
          borderRadius: "50%",
          border: "1px solid rgba(212,175,55,0.35)",
          animation: "mp-ring 2.2s ease-in-out infinite",
          pointerEvents: "none",
        }} />
      )}
      <style>{`@keyframes mp-ring{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.35);opacity:0}}`}</style>
    </button>
  );
}
