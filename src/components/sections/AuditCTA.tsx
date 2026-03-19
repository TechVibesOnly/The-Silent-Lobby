import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowRight } from 'lucide-react';

export const AuditCTA: React.FC = () => {
  const [domain, setDomain] = useState('');

  const handleAnalyze = () => {
    if (!domain) return;
    window.location.hash = `audit?domain=${encodeURIComponent(domain)}`;
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-bg-dark">
      {/* Dense Particle Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-8xl font-bold mb-8"
          >
            How Invisible <br />
            Are You?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Enter your company domain and we'll show you your ALTO Score — how AI procurement agents currently see (or can't see) your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-2 md:p-4 flex flex-col md:flex-row gap-4 relative group"
          >
            {/* Animated Scan Line */}
            <motion.div 
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-px bg-gold/50 shadow-[0_0_15px_#C9A84C] z-20 pointer-events-none"
            />

            <div className="flex-1 relative flex items-center">
              <Globe className="absolute left-6 text-white/20 w-6 h-6" />
              <input
                type="text"
                placeholder="yourbusiness.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-6 font-sans text-xl focus:outline-none focus:border-gold/50 transition-all"
              />
            </div>
            <button
              onClick={handleAnalyze}
              className="gold-gradient text-black font-bold px-12 py-6 rounded-2xl text-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Analyze <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-8 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]"
          >
            <span>Free</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center" />
            <span>No credit card</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center" />
            <span>Results in 60 seconds</span>
            <span className="w-1 h-1 bg-white/20 rounded-full self-center" />
            <span>Used by 500+ enterprises</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
