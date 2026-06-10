import { useRef, useState, useEffect, useCallback } from "react";
import { Router, Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GoldenPetals } from "@/components/GoldenPetals";
import { SpinningMandala } from "@/components/SpinningMandala";
import { GaneshReveal } from "@/components/GaneshReveal";
import { MandalaRingOverlay } from "@/components/MandalaRingOverlay";
import { MusicPlayer } from "@/components/MusicPlayer";
import Home from "@/pages/Home";
import Story from "@/pages/Story";
import Banquet from "@/pages/Banquet";
import Photos from "@/pages/Photos";

const queryClient = new QueryClient();

function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.32;
    a.play().catch(() => {});
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsRevealed(true), 8500);
    return () => clearTimeout(t);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <audio ref={audioRef} src="/wedding-music.mp3" loop preload="auto" />
        <GoldenPetals />
        <SpinningMandala intensity={1} />
        <GaneshReveal isRevealed={isRevealed} onPlay={handlePlay} />
        {isRevealed && <MandalaRingOverlay />}
        {isRevealed && (
          <div className="relative z-20 animate-in fade-in duration-1000">
            <Router>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/story" component={Story} />
                <Route path="/banquet" component={Banquet} />
                <Route path="/photos" component={Photos} />
              </Switch>
            </Router>
          </div>
        )}
        <MusicPlayer audioRef={audioRef} />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
