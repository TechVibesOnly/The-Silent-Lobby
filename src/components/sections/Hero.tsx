import React from 'react';
import { motion } from 'motion/react';
import { MagneticButton } from '../ui/MagneticButton';
import { Play } from 'lucide-react';
import { AltoDashboard } from './AltoDashboard';
import { clsx } from 'clsx';

export const Hero: React.FC = () => {
  const words = ["We", "Speak", "the", "Language", "of", "AI", "Agents.™"];

  return (
    <section className="min-h-screen flex items-center relative pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="font-mono text-[10px] text-gold uppercase tracking-[0.3em] border border-gold/30 px-3 py-1 rounded-full bg-gold/5">
                [ INDIA'S FIRST ALGORITHMIC SEO AGENCY ]
                <span className="inline-block w-1.5 h-3 bg-gold ml-1 animate-blink" />
              </span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-8xl font-bold leading-[0.9] mb-8">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + i * 0.1,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  className={clsx(
                    "inline-block mr-[0.2em]",
                    word === "AI" || word === "Agents.™" ? "text-gold text-glow" : ""
                  )}
                >
                  {word}
                  {word === "Language" && <br />}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="font-sans text-lg md:text-xl text-white/60 max-w-lg mb-10 leading-relaxed"
            >
              73% of B2B procurement decisions are pre-filtered 
              by AI agents before any human reads your proposal.
              <span className="text-white block mt-2">We make you the one they always recommend.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <MagneticButton 
                onClick={() => window.location.hash = 'audit'}
                className="gold-gradient text-black font-bold px-10"
              >
                Get Your Free ALTO Score →
              </MagneticButton>
              <MagneticButton className="border border-gold/30 text-gold hover:bg-gold/5 flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                Watch How It Works
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex items-center gap-6 text-[11px] font-mono text-white/40 uppercase tracking-widest"
            >
              <div className="flex gap-1 text-gold">
                {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
              </div>
              <div>Trusted by 40+ enterprise brands</div>
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              <div>₹8,500Cr market opportunity</div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center lg:justify-end">
            <AltoDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};
