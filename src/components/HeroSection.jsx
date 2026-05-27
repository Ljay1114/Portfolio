import { useRef } from "react";
import useHeroScene from "../hooks/useHeroScene";

export default function HeroSection() {
  const heroCanvasRef = useRef(null);
  useHeroScene(heroCanvasRef);

  return (
    <section aria-label="Hero section" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <canvas id="hero-canvas" ref={heroCanvasRef} />
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop z-10 text-center">
        <h1 className="stagger-reveal font-display-xl text-headline-hero-mobile md:text-display-xl tracking-tighter mb-4">
          <span className="block">LEXEL JAY</span>
          <span className="block gradient-text">ALEJO</span>
        </h1>
        <p className="stagger-reveal font-lead text-lead text-on-surface-variant max-w-2xl mx-auto mb-10 opacity-0">
        An AI-driven software developer engineering intelligent systems and refined user experiences through the integration of artificial intelligence, automation, and disciplined architecture.
        </p>
        <div className="stagger-reveal opacity-0">
          <a className="inline-flex items-center gap-2 font-label-caps text-label-caps tracking-widest uppercase border border-primary text-primary px-10 py-4 hover:bg-primary/10 transition-all duration-300 group" href="#work">
            View Portfolio
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  );
}
