import React from 'react';
import { SectionId } from '../types';
import { MonitorPlay, Sprout, Globe2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MonitorPlay className="w-12 h-12 text-neon-blue" />,
      title: "Watch & Participate",
      desc: "Join the global electronic music livestream and participate from anywhere in the world."
    },
    {
      icon: <Sprout className="w-12 h-12 text-neon-green" />,
      title: "Donate to Plant",
      desc: "Donations collected during the event are routed through the Monthly Earth Day infrastructure and allocated to aligned reforestation organizations."
    },
    {
      icon: <Globe2 className="w-12 h-12 text-emerald-400" />,
      title: "Global Planting Day",
      desc: "On June 5, 2026, planting actions take place worldwide as part of a coordinated, decentralized effort."
    }
  ];

  return (
    <section id={SectionId.HOW_IT_WORKS} className="py-24 bg-forest-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">HOW IT WORKS</h2>
          <div className="w-24 h-1 bg-neon-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group bg-forest-900/30 border border-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-forest-900/50 hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-neon-green/10 transition-colors"></div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-forest-950 p-4 rounded-full border border-white/10 mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;