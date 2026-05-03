import React from 'react';

const WhatsNext: React.FC = () => {
  return (
    <section className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-black text-neon-green mb-6 tracking-widest">
          What's Next
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto rounded-full mb-8" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          The movement continues.
        </p>
        
        <div className="bg-forest-900/40 backdrop-blur-md p-8 rounded-3xl border border-neon-green/20 mb-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Global Tree Planting Day — July 26, 2026
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Bass Forest will continue to activate artists, partners and communities leading up to this global milestone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;
