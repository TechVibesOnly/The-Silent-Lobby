import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const quotes = [
  {
    text: "The future of business is agent-to-agent. Your AI will talk to their AI to negotiate the best deal. If your business isn't machine-readable, you don't exist.",
    name: "Jeff Bezos",
    title: "Founder, Amazon",
    initials: "JB"
  },
  {
    text: "We are moving from a world of search to a world of answers. AI agents don't browse websites; they ingest structured logic. ALTO is the SEO of the next decade.",
    name: "Elon Musk",
    title: "CEO, Tesla & xAI",
    initials: "EM"
  },
  {
    text: "The defining opportunity of 2026 is Agent-to-Agent Marketing. It's not about convincing humans anymore; it's about passing the logic gates of procurement bots.",
    name: "Mark Zuckerberg",
    title: "CEO, Meta",
    initials: "MZ"
  },
  {
    text: "Enterprise procurement is being automated at the edge. Salesforce Agentforce and Microsoft Copilot are the new gatekeepers. You must optimize for them now.",
    name: "Larry Ellison",
    title: "Chairman, Oracle",
    initials: "LE"
  },
  {
    text: "I've always looked for moats. In the AI era, the moat is machine-readable trust. If an agent can't verify your stability, it won't recommend you. Period.",
    name: "Warren Buffett",
    title: "Chairman, Berkshire Hathaway",
    initials: "WB"
  },
  {
    text: "Google was built on links. The next web is built on schemas. The Silent Lobby is building the infrastructure for this transition.",
    name: "Larry Page",
    title: "Co-founder, Google",
    initials: "LP"
  }
];

export const VisionaryCouncil: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % quotes.length);
  }, []);

  const prev = () => {
    setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="py-24 bg-bg-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Visionary Council</h2>
          <p className="text-white/60 font-mono text-sm uppercase tracking-widest">
            Industry leaders on why Agent-to-Agent Marketing™ is the defining opportunity of 2026
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-6 overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full md:w-2/3 lg:w-1/2 shrink-0"
              >
                <div className="glass-card p-12 relative min-h-[400px] flex flex-col justify-between">
                  <Quote className="absolute top-8 right-8 w-32 h-32 text-gold/5 -z-10" />
                  
                  <p className="text-2xl md:text-3xl font-sans italic leading-relaxed text-white mb-12">
                    "{quotes[index].text}"
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-display font-bold text-black text-xl">
                      {quotes[index].initials}
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold">{quotes[index].name}</h4>
                      <p className="text-white/40 text-sm uppercase tracking-widest">{quotes[index].title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Preview of next card */}
            <div className="hidden md:block w-1/3 shrink-0 opacity-20 blur-sm">
              <div className="glass-card p-12 h-full">
                <p className="text-xl italic">"{quotes[(index + 1) % quotes.length].text.substring(0, 100)}..."</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
