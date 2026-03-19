import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export const CrisisComparison: React.FC = () => {
  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Diagonal Background Accent */}
      <div 
        className="absolute inset-0 bg-white/[0.02] -z-10"
        style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)' }}
      />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            Your Marketing Speaks to Humans. <br />
            <span className="text-gold">AI Decides Before They Do.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
          {/* Connecting Arrow */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
            <div className="px-4 py-2 glass-card text-[10px] font-mono text-gold mb-2 whitespace-nowrap">
              AI PROCUREMENT AGENT
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold to-transparent relative">
              <motion.div
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_#C9A84C]"
              />
            </div>
            <ArrowRight className="text-gold w-6 h-6 mt-2" />
          </div>

          {/* Left Panel: Human View */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden group"
          >
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                What You Publish
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="h-40 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/agency/800/400" 
                  alt="Website Mockup" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-4 w-2/3 bg-white/20 rounded mb-2" />
                  <div className="h-3 w-1/2 bg-white/10 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="space-y-2">
                    <div className="h-20 bg-white/5 rounded-lg" />
                    <div className="h-2 w-full bg-white/10 rounded" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-gold text-xs font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Stunning Visual Design
              </div>
            </div>
          </motion.div>

          {/* Right Panel: AI View */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden bg-black/40"
          >
            <div className="p-4 border-b border-white/5 bg-black/60 flex items-center justify-between">
              <div className="text-[10px] font-mono text-gold uppercase tracking-widest">
                What AI Agents See
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              </div>
            </div>
            <div className="p-8 font-mono text-[11px] space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              <div className="text-white/40">{"{"}</div>
              <div className="pl-4 space-y-2">
                <div>
                  <span className="text-blue-400">"vendor_id"</span>: <span className="text-gold">"SL-2024-X"</span>,
                </div>
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-2 rounded">
                  <AlertCircle className="w-3 h-3" />
                  <span>ERROR: No structured pricing schema</span>
                </div>
                <div>
                  <span className="text-blue-400">"compliance_metadata"</span>: <span className="text-red-400">null</span>,
                </div>
                <div className="flex items-center gap-2 text-yellow-400 bg-yellow-400/10 p-2 rounded">
                  <AlertCircle className="w-3 h-3" />
                  <span>WARNING: Missing OpenAPI spec</span>
                </div>
                <div>
                  <span className="text-blue-400">"trust_signals"</span>: {"["}
                </div>
                <div className="pl-4 text-white/40">
                  "ISO_27001_NOT_FOUND",
                  <br />
                  "SOC2_NOT_FOUND"
                </div>
                <div>{"]"},</div>
                <div className="pt-4 text-white/60 border-t border-white/5">
                  <span className="text-gold">RESULT:</span> Vendor rank #47 of 50
                </div>
                <div className="text-red-500">
                  <span className="text-gold">ACTION:</span> EXCLUDE_FROM_SHORTLIST
                </div>
              </div>
              <div className="text-white/40">{"}"}</div>
            </div>
          </motion.div>
        </div>

        <ComparisonGrid />
      </div>
    </section>
  );
};

import { ComparisonGrid } from './ComparisonGrid';
