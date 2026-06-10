import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "wouter";
import { Countdown } from "@/components/Countdown";

export default function Invitation() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center pt-16 md:pt-24 pb-20 md:pb-32 overflow-x-hidden">

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 text-center space-y-12 md:space-y-16">

        {/* Top Ganesh & Mantra */}
        <ScrollReveal className="flex flex-col items-center space-y-4 md:space-y-6">
          <img src="/ganesh.png" alt="Ganesh" className="w-16 h-16 md:w-24 md:h-24 animate-shimmer" />
          <div className="font-yatra text-gold-gradient text-base md:text-xl leading-loose max-w-sm md:max-w-lg mx-auto">
            <p>ॐ श्री गणेशाय नमः</p>
            <p className="text-sm md:text-lg">वक्रतुंड महाकाय सूर्यकोटि समप्रभ।</p>
            <p className="text-sm md:text-lg">निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p>
          </div>
        </ScrollReveal>

        {/* Shubha Vivah couple */}
        <ScrollReveal className="flex flex-col items-center space-y-8 md:space-y-10">
          <img
            src="/shubha-vivah-couple.png"
            alt="Shubha Vivah"
            className="w-full max-w-xs sm:max-w-sm md:max-w-2xl filter drop-shadow-[0_0_24px_rgba(212,175,55,0.55)]"
          />

          {/* Names */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="font-yatra text-4xl sm:text-5xl md:text-7xl text-gold-gradient tracking-wide leading-tight">
              आशीष{" "}
              <span className="text-[#D4AF37] text-2xl sm:text-3xl md:text-5xl align-middle mx-1 md:mx-2">❤</span>{" "}
              आयुषी
            </h1>
            <p className="font-cinzel text-[#D4AF37] tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-base opacity-80">
              December 12, 2026
            </p>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />

        {/* Family details */}
        <ScrollReveal className="space-y-6 md:space-y-8 text-center px-2 md:px-4 max-w-3xl mx-auto">
          <div className="font-sans text-sm sm:text-base md:text-xl text-[#FDFBF7]/90 leading-relaxed space-y-3 md:space-y-4">
            <p>सुपुत्र: श्री राम प्रसाद शर्मा तथा श्रीमती सीता शर्मा</p>
            <p className="text-[#D4AF37] text-lg md:text-xl">र</p>
            <p>सुपुत्री: श्री हरि बहादुर थापा तथा श्रीमती गीता थापा</p>
          </div>

          <p className="font-yatra text-base sm:text-lg md:text-2xl text-gold-gradient pt-2 md:pt-4 leading-loose">
            हाम्रो शुभ विवाहको पावन अवसरमा यहाँको गरिमामय उपस्थितिको लागि हार्दिक निमन्त्रणा गर्दछौं।
          </p>
        </ScrollReveal>

        {/* Our Story link */}
        <ScrollReveal className="flex justify-center">
          <Link
            href="/story"
            className="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/kalash.png"
              alt="Kalash"
              className="w-14 h-14 md:w-20 md:h-20 animate-[bounce_3s_ease-in-out_infinite] filter drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]"
            />
            <span className="font-cinzel text-[#D4AF37] tracking-[0.35em] uppercase text-[10px] md:text-xs border border-[#D4AF37]/40 px-5 py-2 group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
              OUR STORY →
            </span>
          </Link>
        </ScrollReveal>

        {/* Countdown */}
        <ScrollReveal>
          <Countdown />
        </ScrollReveal>

        {/* Venue teaser */}
        <ScrollReveal className="mt-12 md:mt-24 w-full h-[50vh] md:h-[70vh] relative flex items-center justify-center rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.1)] border border-[#D4AF37]/20 group">
          <div className="absolute inset-0 bg-black/60 z-10 transition-colors duration-500 group-hover:bg-black/40" />
          <img
            src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1600&q=80"
            alt="Venue"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="relative z-20 text-center space-y-3 md:space-y-6 px-4">
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl text-gold-gradient">The Grand Celebration</h2>
            <p className="font-sans tracking-widest text-[#FDFBF7] text-xs sm:text-sm md:text-lg">
              HIMALAYA GRAND BANQUET, KATHMANDU
            </p>
            <div className="pt-4 md:pt-8">
              <Link
                href="/banquet"
                className="inline-flex items-center justify-center px-5 md:px-8 py-2.5 md:py-3 text-xs md:text-base font-cinzel tracking-widest border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2A0B0D] transition-all duration-300"
              >
                VIEW BANQUET →
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
