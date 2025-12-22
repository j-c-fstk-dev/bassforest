import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target Date: April 22, 2026
    const targetDate = new Date('2026-04-22T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="bg-forest-950/80 backdrop-blur-md border border-neon-green/50 rounded-lg p-3 md:p-6 min-w-[70px] md:min-w-[100px] flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.15)] ring-1 ring-white/5">
        <span className="text-2xl md:text-5xl font-display font-black text-white tabular-nums drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-forest-300 font-bold text-[10px] md:text-xs mt-3 uppercase tracking-[0.3em] drop-shadow-md">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center mt-8 md:mt-12 animate-in fade-in zoom-in duration-1000">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;