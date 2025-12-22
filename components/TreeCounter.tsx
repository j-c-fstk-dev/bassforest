import React, { useState, useEffect } from 'react';
import { TreePine, Info } from 'lucide-react';

const TreeCounter: React.FC = () => {
  // Simulate a live counter starting at a high number
  const [count, setCount] = useState(1245389);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Add random amount of trees every few seconds to simulate live donations
      const add = Math.floor(Math.random() * 5) + 1;
      setCount(prev => prev + add);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 relative">
      <div 
        className="animate-float bg-gradient-to-r from-forest-900 to-forest-800 rounded-full px-6 py-2 flex items-center gap-3 border border-forest-500/30 shadow-lg cursor-pointer hover:border-neon-green/40 transition-all active:scale-95 select-none"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        onClick={() => setShowInfo(!showInfo)}
      >
        <div className="bg-neon-green/20 p-2 rounded-full">
          <TreePine className="text-neon-green w-5 h-5 animate-pulse" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs text-forest-300 uppercase tracking-wider font-semibold">Trees Funded Live</span>
          <span className="font-display text-xl md:text-2xl font-bold text-white tracking-widest">
            {count.toLocaleString()}
          </span>
        </div>
      </div>
      
      {/* Information text - Static position outside the float animation */}
      <div className={`transition-all duration-300 max-w-[320px] ${showInfo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="flex items-start gap-2 bg-forest-900/40 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
          <Info className="text-neon-green w-4 h-4 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] md:text-xs text-forest-300 font-medium leading-relaxed text-center md:text-left">
            Live counter reflecting contributions and pledges connected to Bass Forest and Monthly Earth Day initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreeCounter;