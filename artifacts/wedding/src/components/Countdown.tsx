import { useState, useEffect } from "react";

const toNepaliDigits = (num: number) => {
  const nepali = ["०","१","२","३","४","५","६","७","८","९"];
  return String(num).split("").map((d) => nepali[+d]).join("");
};

const pad = (n: number) => String(n).padStart(2, "0");

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-12-12T17:00:00+05:45").getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/sriyantra.png"
          alt=""
          aria-hidden
          className="w-[380px] h-[380px] md:w-[520px] md:h-[520px] object-contain opacity-[0.07] animate-[spin_120s_linear_infinite]"
        />
      </div>

      {/* Card wrapper */}
      <div className="relative z-10 rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#3a0e12]/70 to-[#2A0B0D]/80 backdrop-blur-md shadow-[0_0_60px_rgba(212,175,55,0.12)] overflow-hidden px-6 md:px-10 py-10 md:py-14 flex flex-col items-center gap-8 md:gap-10">

        {/* Corner ornaments */}
        {[
          "top-3 left-3 border-t border-l",
          "top-3 right-3 border-t border-r",
          "bottom-3 left-3 border-b border-l",
          "bottom-3 right-3 border-b border-r",
        ].map((cls) => (
          <span key={cls} className={`absolute w-6 h-6 md:w-8 md:h-8 border-[#D4AF37]/50 ${cls}`} />
        ))}

        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-cinzel text-[#D4AF37]/60 tracking-[0.4em] uppercase text-[10px] md:text-xs">
            Save the Date
          </p>
          <p className="font-yatra text-gold-gradient text-xl md:text-3xl">
            शुभ मुहूर्त काउन्टडाउन
          </p>
          <div className="flex items-center gap-3 mt-1">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <span className="font-cinzel text-[#D4AF37]/70 text-[10px] md:text-xs tracking-widest">12 · XII · 2026</span>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
          </div>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 w-full">
          {[
            { label: "दिन",     nepali: toNepaliDigits(timeLeft.days),    arabic: pad(timeLeft.days),    accent: false },
            { label: "घण्टा",   nepali: toNepaliDigits(timeLeft.hours),   arabic: pad(timeLeft.hours),   accent: false },
            { label: "मिनेट",  nepali: toNepaliDigits(timeLeft.minutes), arabic: pad(timeLeft.minutes), accent: false },
            { label: "सेकेन्ड", nepali: toNepaliDigits(timeLeft.seconds), arabic: pad(timeLeft.seconds), accent: true  },
          ].map(({ label, nepali, arabic, accent }) => (
            <div
              key={label}
              className={`relative flex flex-col items-center justify-center gap-1 md:gap-2 py-4 md:py-7 px-1 rounded-xl border overflow-hidden
                ${accent
                  ? "border-[#D4AF37]/60 bg-gradient-to-b from-[#D4AF37]/12 to-[#D4AF37]/5 shadow-[0_0_20px_rgba(212,175,55,0.22)]"
                  : "border-[#D4AF37]/25 bg-[#2A0B0D]/60"
                }`}
            >
              {/* Nepali large */}
              <span className="font-yatra text-gold-gradient text-2xl sm:text-3xl md:text-5xl leading-none tabular-nums">
                {nepali}
              </span>
              {/* Arabic small */}
              <span className="font-cinzel text-[#D4AF37]/40 text-[9px] md:text-xs tabular-nums">
                {arabic}
              </span>
              {/* Label */}
              <span className="font-sans text-[#D4AF37]/75 text-[9px] sm:text-xs md:text-sm tracking-widest uppercase">
                {label}
              </span>
              {/* Accent pulse on seconds */}
              {accent && (
                <span className="absolute inset-0 rounded-xl animate-[ping_1s_ease-in-out_infinite] border border-[#D4AF37]/20 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="font-cinzel text-[#D4AF37]/45 text-[10px] md:text-xs tracking-[0.35em] uppercase">
          Himalaya Grand Banquet · Kathmandu
        </p>
      </div>
    </div>
  );
};
