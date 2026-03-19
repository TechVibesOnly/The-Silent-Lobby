import React from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

const comparisons = [
  {
    title: "Trust Signal",
    old: "Brand story, testimonials",
    new: "ISO/SOC2 structured metadata"
  },
  {
    title: "Pricing",
    old: "Compelling copy",
    new: "Schema.org PriceSpecification JSON-LD"
  },
  {
    title: "Risk Assessment",
    old: "Case study narrative",
    new: "Uptime SLAs in machine-readable format"
  },
  {
    title: "Compliance",
    old: "Mention in About page",
    new: "Structured compliance registry entries"
  },
  {
    title: "Integration",
    old: "Feature list page",
    new: "OpenAPI 3.0 spec, agent-callable endpoints"
  },
  {
    title: "ROI Proof",
    old: "Percentage claims in copy",
    new: "Benchmark datasets with methodology URLs"
  }
];

export const ComparisonGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
      {comparisons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card overflow-hidden flex flex-col"
        >
          <div className="p-4 border-b border-white/5 bg-white/5">
            <h4 className="font-mono text-[10px] text-gold uppercase tracking-widest">{item.title}</h4>
          </div>
          <div className="flex flex-1">
            <div className="flex-1 p-6 bg-red-500/5 border-r border-white/5 opacity-40 grayscale">
              <p className="text-[10px] font-mono text-red-400 uppercase mb-2">Human Marketing (Old)</p>
              <p className="text-sm text-white/80">{item.old}</p>
            </div>
            <div className="flex-1 p-6 bg-gold/5">
              <p className="text-[10px] font-mono text-gold uppercase mb-2">Agent Logic Gate (New)</p>
              <p className="text-sm text-white font-medium">{item.new}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
