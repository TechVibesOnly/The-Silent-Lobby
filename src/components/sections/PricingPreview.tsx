import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

const tiers = [
  {
    name: "AI Visibility Audit",
    price: "₹3,50,000 – ₹8,50,000",
    badge: "START HERE",
    features: ["ALTO Score (0-1000)", "Gap Analysis", "90-Day Roadmap", "30-day delivery"],
    cta: "Request Audit",
    note: "78% convert to retainer",
    highlight: false
  },
  {
    name: "Foundation Retainer",
    price: "₹8,50,000",
    period: "/month",
    badge: "MOST POPULAR",
    features: ["6-month min", "Full Structured Data Overhaul", "JSON-LD Implementation", "OpenAPI Spec Writing", "5 Platforms Monitored", "Monthly Performance Reports"],
    cta: "Start Foundation",
    note: "",
    highlight: true
  },
  {
    name: "Enterprise Retainer",
    price: "₹25,00,000 – ₹45,00,000",
    period: "/month",
    badge: "ENTERPRISE",
    features: ["12-month min", "All 10 Platforms", "Real-time Dashboard", "Competitive Intelligence", "Dedicated CXO Reviews", "Custom API Development"],
    cta: "Talk to Enterprise Team",
    note: "",
    highlight: false
  }
];

export const PricingPreview: React.FC = () => {
  return (
    <section className="py-24 bg-bg-dark" id="solutions">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Three Tiers of AI Visibility</h2>
          <p className="text-white/60">Choose your path to algorithmic dominance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={clsx(
                "glass-card p-8 flex flex-col relative",
                tier.highlight ? "border-gold/50 shadow-[0_0_40px_rgba(201,168,76,0.1)] -translate-y-4" : "border-white/5"
              )}
            >
              {tier.badge && (
                <div className={clsx(
                  "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest",
                  tier.highlight ? "bg-gold text-black" : "bg-white/10 text-white/60"
                )}>
                  {tier.badge}
                </div>
              )}

              <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-8">
                <span className="text-3xl font-bold text-gold">{tier.price}</span>
                {tier.period && <span className="text-white/40 text-sm">{tier.period}</span>}
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <MagneticButton className={clsx(
                  "w-full py-4 font-bold flex items-center justify-center gap-2",
                  tier.highlight ? "gold-gradient text-black" : "border border-white/10 hover:bg-white/5"
                )}>
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                {tier.note && (
                  <p className="text-center text-[10px] font-mono text-white/40 italic">
                    {tier.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { clsx } from 'clsx';
