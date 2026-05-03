import React from 'react';

const WhatHappened: React.FC = () => {
  return (
    <section className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-black text-neon-green mb-6 tracking-widest">
          What Happened on Earth Day
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto rounded-full" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Bass Forest brought together artists and audiences worldwide for a global electronic music livestream supporting a coordinated tree planting initiative on Earth Day 2026.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          The event generated participation, awareness, and funding toward the upcoming Global Tree Planting Day on July 26, 2026.
        </p>
      </div>
    </section>
  );
};

export default WhatHappened;
