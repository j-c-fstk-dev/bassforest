import React, { useState } from 'react';
import { SectionId } from '../types';
import { Send, Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-gradient-to-t from-black to-forest-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Text Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
            GET INVOLVED
          </h2>
          <div className="text-gray-400 text-lg mb-8 leading-relaxed space-y-4">
            <p>Bass Forest is built through collaboration.</p>
            <p>Artists, sponsors, partners and supporters are invited to take part in shaping the first edition of this annual event.</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 bg-forest-900/20 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          {status === 'success' ? (
            <div className="h-[400px] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-neon-green rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(57,255,20,0.4)]">
                <Send className="text-forest-950 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white">Message Sent!</h3>
              <p className="text-gray-400 mt-3">We'll get back to you at the speed of light.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-forest-400 mb-2 uppercase tracking-[0.2em]">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-forest-950/50 border border-forest-800 rounded-xl p-4 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/20 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-forest-400 mb-2 uppercase tracking-[0.2em]">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-forest-950/50 border border-forest-800 rounded-xl p-4 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-forest-400 mb-2 uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  rows={5}
                  required
                  className="w-full bg-forest-950/50 border border-forest-800 rounded-xl p-4 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/20 transition-all resize-none"
                  placeholder="Tell us how you'd like to get involved..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-white text-forest-950 font-display font-black py-5 rounded-xl hover:bg-neon-green transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-xl"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-forest-950 border-t-transparent rounded-full animate-spin"></div>
                    SENDING...
                  </span>
                ) : (
                  <>SEND MESSAGE <Send size={18} /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;