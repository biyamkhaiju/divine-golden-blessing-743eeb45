import React, { useEffect } from "react";

interface Props {
  src: string;
  alt?: string;
  onClose: () => void;
}

export function Lightbox({ src, alt = "", onClose }: Props) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const hqSrc = src.replace(/[?&]w=\d+/, (m) => m.replace(/\d+/, "1400"))
                   .replace(/[?&]q=\d+/, (m) => m.replace(/\d+/, "92"));

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/92 backdrop-blur-sm"
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-5 text-white/55 hover:text-white font-light"
        style={{ fontSize: "2.8rem", lineHeight: 1 }}
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <img
        src={hqSrc}
        alt={alt}
        className="max-w-[92vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 0 80px rgba(212,175,55,0.18), 0 20px 60px rgba(0,0,0,0.7)" }}
      />
    </div>
  );
}
