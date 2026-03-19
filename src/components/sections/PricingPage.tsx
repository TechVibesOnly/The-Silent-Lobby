import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Zap, Building2, Rocket, ArrowRight, CheckCircle2, HelpCircle, ChevronDown, IndianRupee } from 'lucide-react';
import { clsx } from 'clsx';

export const PricingPage: React.FC = () => {
  const [revenue, setRevenue] = useState(100); // in Cr
  const [b2bPercent, setB2bPercent] = useState(40); // in %
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculations = useMemo(() => {
    const totalB2bRevenue = revenue * (b2bPercent / 100);
    const agentRevenue = totalB2bRevenue * 0.35; // 35% of B2B procurement is AI-driven
    const visibility = 6; // Industry average
    const competitorCapture = agentRevenue * 0.8; // 80% of agent-driven revenue goes to competitors with better visibility
    const retainerCost = 8.5; // 8.5L/month
    const potentialUplift = agentRevenue * 0.25; // 25% revenue uplift with ALTO

    return {
      agentRevenue: agentRevenue.toFixed(1),
      visibility,
      competitorCapture: competitorCapture.toFixed(1),
      retainerCost,
      potentialUplift: potentialUplift.toFixed(1)
    };
  }, [revenue, b2bPercent]);

  const pricingTiers = [
    {
      name: "AI Visibility Audit",
      price: "₹3.5L",
      period: "One-Time",
      description: "A deep-dive technical audit of your enterprise's AI visibility.",
      features: [
        "Full ALTO Score Report",
        "Agent Trust Signal Analysis",
        "API Discovery Compliance Check",
        "60-Minute Executive Briefing",
        "Competitor Benchmarking",
        "Actionable Roadmap"
      ],
      cta: "Book Audit",
      highlight: false
    },
    {
      name: "Foundation Retainer",
      price: "₹8.5L",
      period: "/month",
      description: "Ongoing optimization and monitoring for the AI procurement era.",
      features: [
        "Continuous Schema Optimization",
        "Monthly Visibility Monitoring",
        "Competitor Agent Benchmarking",
        "Quarterly Strategy Refinement",
        "Dedicated Account Manager",
        "Priority Support",
        "Monthly Performance Reports"
      ],
      cta: "Start Retainer",
      highlight: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise Retainer",
      price: "₹25L",
      period: "/month",
      description: "Global enterprise optimization with real-time agent monitoring.",
      features: [
        "Dedicated Engagement Director",
        "Real-time Agent Monitoring",
        "Custom OpenAPI Spec Development",
        "Global Multi-Region Optimization",
        "Unlimited Agent Guides",
        "Custom Dashboard Integration",
        "24/7 Priority Support"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  const faqs = [
    {
      q: "How is ALTO different from regular SEO?",
      a: "Regular SEO optimizes for human search behavior and keyword matching. ALTO (Agent-Led Trust Optimization) optimizes for machine decision-making, structured data parsing, and cryptographic trust signals required by AI procurement agents."
    },
    {
      q: "How long until we see results?",
      a: "Audit results are immediate. Implementation typically takes 4-8 weeks, and visibility uplift in agent recommendation rates is usually observed within 3-6 months as agent indexes refresh."
    },
    {
      q: "What happens if AI platforms change their algorithms?",
      a: "Our Foundation and Enterprise retainers include continuous monitoring. We maintain direct relationships with major agent vendors and adjust your ALTO strategy in real-time as algorithms evolve."
    },
    {
      q: "Do you work with companies outside India?",
      a: "Yes. While we are headquartered in India, we optimize for global procurement agents and work with enterprises in the US, Europe, and Southeast Asia."
    },
    {
      q: "What's your money-back guarantee?",
      a: "We guarantee a minimum 20% uplift in your ALTO Score within the first 6 months of a Foundation or Enterprise retainer, or we work for free until that target is met."
    },
    {
      q: "Can we start with the audit and decide later?",
      a: "Absolutely. 90% of our clients start with a one-time AI Visibility Audit to understand their current standing before committing to a retainer."
    }
  ];

  return (
    <div className="bg-bg-dark text-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold mb-8"
          >
            Transparent Pricing. <br />
            <span className="text-gold italic">Measurable ROI.</span>
          </motion.h1>
        </div>

        {/* ROI Calculator */}
        <div className="max-w-5xl mx-auto mb-32">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-12">
                <h3 className="font-display text-2xl font-bold mb-8">ROI Calculator</h3>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-mono text-white/40 uppercase tracking-widest">Annual Revenue</label>
                      <span className="text-gold font-mono font-bold">₹{revenue} Cr</span>
                    </div>
                    <input 
                      type="range" 
                      min="25" 
                      max="5000" 
                      step="25"
                      value={revenue}
                      onChange={(e) => setRevenue(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-gold"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-mono text-white/40 uppercase tracking-widest">B2B Procurement %</label>
                      <span className="text-gold font-mono font-bold">{b2bPercent}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="90" 
                      step="5"
                      value={b2bPercent}
                      onChange={(e) => setB2bPercent(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-gold"
                    />
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-xs text-white/40 leading-relaxed italic">
                    *Calculations based on 2024 industry averages for AI-driven B2B procurement decision-making.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <ResultItem 
                    label="AI-Driven Procurement Revenue" 
                    value={`₹${calculations.agentRevenue} Cr`} 
                    description="Estimated revenue flowing through AI agents"
                  />
                  <ResultItem 
                    label="Current AI Visibility" 
                    value={`${calculations.visibility}%`} 
                    description="Industry average for non-optimized enterprises"
                    warning
                  />
                  <ResultItem 
                    label="Revenue Leakage to Competitors" 
                    value={`₹${calculations.competitorCapture} Cr`} 
                    description="Revenue captured by competitors with better AI visibility"
                    danger
                  />
                  <div className="p-6 bg-gold/10 border border-gold/30 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-mono text-gold uppercase tracking-widest">Potential Revenue Uplift</span>
                      <span className="text-2xl font-mono font-bold text-white">₹{calculations.potentialUplift} Cr / yr</span>
                    </div>
                    <p className="text-xs text-white/60">With ALTO optimization (Foundation Retainer: ₹8.5L/mo)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {pricingTiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={clsx(
                "glass-card p-10 flex flex-col h-full relative group",
                tier.highlight && "border-gold/50 bg-gold/5 scale-105 z-10"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black font-mono font-bold text-[10px] px-4 py-1 rounded-full uppercase tracking-widest">
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-white/40">{tier.description}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl font-mono font-bold">{tier.price}</span>
                <span className="text-sm text-white/40 font-mono">{tier.period}</span>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className={clsx(
                "w-full py-5 rounded-2xl font-bold transition-all",
                tier.highlight ? "gold-gradient text-black hover:scale-105" : "border border-white/10 hover:bg-white/5"
              )}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-display font-bold">{faq.q}</span>
                  <ChevronDown className={clsx(
                    "w-5 h-5 text-white/20 transition-transform",
                    openFaq === i && "rotate-180"
                  )} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="px-8 pb-6"
                    >
                      <p className="text-white/60 text-sm leading-relaxed pt-2 border-t border-white/5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultItem = ({ label, value, description, warning, danger }: { label: string, value: string, description: string, warning?: boolean, danger?: boolean }) => (
  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
    <div className="flex justify-between items-center mb-1">
      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{label}</span>
      <span className={clsx(
        "text-xl font-mono font-bold",
        warning ? "text-amber-400" : danger ? "text-red-400" : "text-white"
      )}>{value}</span>
    </div>
    <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{description}</p>
  </div>
);
