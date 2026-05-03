import React from 'react';
import TreeCounter from './TreeCounter';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HOME} 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/forestfog/1920/1080')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/60 to-forest-950"></div>
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        
        {/* Live Tree Counter Badge - Animation moved inside TreeCounter for the badge only */}
        <div className="mb-8">
          <TreeCounter />
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-forest-300 drop-shadow-[0_0_25px_rgba(52,211,153,0.3)] mb-4 tracking-tight">
          BASS FOREST
        </h1>

        {/* Date & Tagline */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-forest-300 font-bold tracking-widest text-sm md:text-xl mb-8">
          <span className="flex items-center gap-2">
            EARTH DAY 2026
          </span>
          <span className="hidden md:inline text-forest-600">•</span>
          <span>LIVESTREAM</span>
        </div>

        <div className="max-w-3xl space-y-6 mb-10">
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
            The global broadcast has concluded — watch the full replay and continue supporting the mission.
          </p>
          <p className="text-base md:text-lg text-forest-400 leading-relaxed font-medium">
          Bass Forest brought together artists and audiences worldwide for a global electronic music livestream supporting a coordinated tree planting initiative on Earth Day 2026.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href="#live-stream-section" className="group relative px-8 py-4 bg-gradient-to-r from-neon-green to-emerald-500 overflow-hidden rounded-full hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 w-full h-full blur-xl bg-neon-green opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <span className="relative text-forest-950 font-display font-black text-lg md:text-xl tracking-widest flex items-center justify-center gap-2">
              ▶ WATCH REPLAY
            </span>
          </a>
          <a href="https://monthlyearthday.org/" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full hover:scale-105 transition-transform duration-300 border border-neon-green/50">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-green to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <span className="relative text-neon-green font-display font-black text-lg md:text-xl tracking-widest flex items-center justify-center gap-2">
              🌱 SUPPORT THE MISSION
            </span>
          </a>
        </div>

        {/* Total Impact */}
        <div className="mt-12 w-full">
          <p className="text-forest-400 text-sm uppercase tracking-[0.3em] mb-4">Total Impact from Earth Day 2026</p>
          <TreeCounter />
        </div>

      </div>

      {/* Decorative Gradient Fade at bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-forest-950 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;