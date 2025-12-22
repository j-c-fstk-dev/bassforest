import React from 'react';
import { SectionId } from '../types';

const Lineup: React.FC = () => {
  return (
    <section id={SectionId.LINEUP} className="py-24 bg-gradient-to-b from-forest-950 to-forest-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase">THE LINEUP</h2>
          <p className="text-gray-400 max-w-xl text-lg">
            A curated mix of global electronic artists — from underground to mid-tier and established names.
          </p>
          <ul className="mt-8 flex flex-col md:flex-row items-center justify-center gap-x-12 gap-y-4 text-sm font-bold text-neon-green uppercase tracking-[0.2em]">
            <li className="flex items-center gap-2">Open artist submissions</li>
            <li className="flex items-center gap-2">Global participation</li>
            <li className="flex items-center gap-2">Community-driven curation</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
           <p className="text-lg text-white/80 mb-6">Want to play at Bass Forest?</p>
           <a 
             href="https://forms.gle/p2Yzc8EtzRXzK3wg6"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block border border-neon-green text-neon-green hover:bg-neon-green hover:text-forest-950 px-10 py-4 rounded-full font-bold transition-all uppercase tracking-[0.2em] text-sm transform hover:scale-105"
           >
             Artist Submission Form
           </a>
        </div>
      </div>
    </section>
  );
};

export default Lineup;