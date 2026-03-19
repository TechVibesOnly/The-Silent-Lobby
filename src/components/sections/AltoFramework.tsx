import React from 'react';
import { motion } from 'motion/react';
import { Network, ShieldCheck, GitBranch, Zap, Eye, LineChart } from 'lucide-react';

export const AltoFramework: React.FC = () => {
  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden" id="methodology">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold mb-4"
          >
            The ALTO Framework™
          </motion.h2>
          <p className="text-white/60 font-mono text-sm uppercase tracking-widest">
            Agent Logic & Trust Optimization — The World's First Systematic Methodology for AI Procurement Visibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          {/* Card 1 - Structured Data Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 glass-card p-8 flex flex-col md:flex-row gap-8"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <Network className="w-6 h-6" />
                </div>
                <span className="font-mono text-2xl text-white/20">01</span>
              </div>
              <h3 className="font-display text-3xl font-bold mb-4">Structured Data Architecture</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Rewriting technical documentation, pricing, and compliance data into machine-readable formats (JSON-LD, OpenAPI, Schema.org) that procurement agents parse with 100% confidence.
              </p>
            </div>
            <div className="flex-1 bg-black/40 rounded-xl p-6 font-mono text-[10px] text-blue-400 overflow-hidden border border-white/5">
              <div className="text-white/20 mb-2">// Example JSON-LD Output</div>
              <pre className="whitespace-pre-wrap">
{`{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Enterprise SaaS",
  "offers": {
    "@type": "Offer",
    "price": "850000",
    "priceCurrency": "INR"
  }
}`}
              </pre>
            </div>
          </motion.div>

          {/* Card 2 - Agent Trust Signals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-mono text-2xl text-white/20">02</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Agent Trust Signals</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Reverse-engineering trust markers each procurement platform uses — SOC2 metadata, financial stability indicators, SLA structuring.
            </p>
          </motion.div>

          {/* Card 3 - Logic Gate Content Strategy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-2 glass-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <GitBranch className="w-6 h-6" />
                </div>
                <span className="font-mono text-2xl text-white/20">03</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Logic Gate Content Strategy</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Content architectures specifically designed to pass "lowest risk" filters of AI decision trees — not human emotions.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 space-y-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <div className="h-1 bg-white/10 rounded-full flex-1" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4 - Agent-Callable API Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <Zap className="w-6 h-6" />
              </div>
              <span className="font-mono text-2xl text-white/20">04</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Agent-Callable API Design</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Ensuring vendors' systems expose the correct endpoints that procurement agents use to verify real-time inventory, pricing, and capacity.
            </p>
          </motion.div>

          {/* Card 5 - Continuous Agent Monitoring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 glass-card p-8 flex flex-col md:flex-row gap-8"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <Eye className="w-6 h-6 animate-pulse" />
                </div>
                <span className="font-mono text-2xl text-white/20">05</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Continuous Agent Monitoring</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Monthly audits of how clients rank across top 10 AI procurement platforms, with iterative optimization based on ranking data.
              </p>
            </div>
            <div className="flex-1 flex items-end">
              <div className="w-full h-24 flex items-end gap-1">
                {[40, 60, 45, 70, 55, 85, 75, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex-1 bg-gold/20 border-t-2 border-gold"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
