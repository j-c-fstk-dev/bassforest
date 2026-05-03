import React from 'react';

const LiveStream: React.FC = () => {
  return (
    <div id="live-stream-section" className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 py-12">
      
      {/* VIDEO EMBED */}
      <div className="mb-12">
        <p className="text-forest-400 text-sm uppercase tracking-[0.3em] mb-4 text-center">Full Livestream Replay — Earth Day 2026</p>
        <div className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(57,255,20,0.2)] border border-neon-green/20">
          <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
            <iframe 
              src="https://player.vimeo.com/video/1188157126?h=ce985abd64&badge=0&autopause=0&player_id=0&app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
              title="BASS FOREST - EARTH DAY"
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>

      
    </div>
  );
};

export default LiveStream;