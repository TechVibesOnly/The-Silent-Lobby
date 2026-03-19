import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Building2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "AI Visibility Audit (One-Time)",
      description: "A comprehensive technical audit of your enterprise's visibility across 10+ major AI procurement platforms. We simulate agent behavior to find your logic gate failures.",
      features: [
        "Full ALTO Score Report",
        "Agent Trust Signal Analysis",
        "API Discovery Compliance Check",
        "60-Minute Executive Briefing"
      ],
      timeline: "2-3 Weeks",
      price: "₹3,50,000 – ₹8,50,000",
      image: "https://picsum.photos/seed/audit/800/600",
      cta: "Book Audit",
      layout: "left"
    },
    {
      id: 2,
      title: "Foundation Retainer",
      description: "Ongoing optimization and monitoring to ensure your business stays visible as agent algorithms evolve. We implement the ALTO Framework™ across your entire digital footprint.",
      features: [
        "Continuous Schema Optimization",
        "Monthly Visibility Monitoring",
        "Competitor Agent Benchmarking",
        "Quarterly Strategy Refinement"
      ],
      timeline: "Ongoing",
      price: "₹8,50,000 – ₹15,00,000/mo",
      image: "https://picsum.photos/seed/foundation/800/600",
      cta: "Start Retainer",
      layout: "right",
      badge: "78% of audit clients upgrade to this"
    },
    {
      id: 3,
      title: "Enterprise Retainer",
      description: "For global enterprises requiring deep integration and real-time agent monitoring. Includes dedicated engagement directors and custom agent-callable endpoint development.",
      features: [
        "Dedicated Engagement Director",
        "Real-time Agent Monitoring",
        "Custom OpenAPI Spec Development",
        "Global Multi-Region Optimization"
      ],
      timeline: "Ongoing",
      price: "₹25,00,000 – ₹45,00,000/mo",
      image: "https://picsum.photos/seed/enterprise/800/600",
      cta: "Contact Sales",
      layout: "left"
    },
    {
      id: 4,
      title: "SaaS Platform (Coming 2027)",
      description: "The world's first self-service platform for ALTO optimization. Monitor your scores, deploy schemas, and track agent inquiries from a single dashboard.",
      features: [
        "Self-Service ALTO Monitoring",
        "Automated Schema Deployment",
        "Agent Inquiry Tracking",
        "AI-Driven Recommendations"
      ],
      timeline: "Q3 2027",
      price: "Waitlist Open",
      image: "https://picsum.photos/seed/saas/800/600",
      cta: "Join Waitlist",
      layout: "right",
      isFuture: true,
      badge: "Launching Q3 2027 — Join 2,400+ on waitlist"
    }
  ];

  return (
    <div className="bg-bg-dark text-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl font-bold mb-8"
          >
            Speak Machine. <br />
            <span className="text-gold italic">Win Business.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            The world's first agency purpose-built for the AI procurement era. We don't just optimize for search; we optimize for decision-making.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={clsx(
                "flex flex-col lg:flex-row items-center gap-16 relative",
                service.layout === 'right' && "lg:flex-row-reverse",
                service.isFuture && "opacity-50 grayscale"
              )}
            >
              {/* Image Side */}
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Price Tag Overlay */}
                  <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
                    <span className="font-mono text-gold font-bold">{service.price}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-8">
                {service.badge && (
                  <span className="px-4 py-1 bg-gold/10 text-gold text-[10px] font-mono rounded-full uppercase tracking-widest border border-gold/20">
                    {service.badge}
                  </span>
                )}
                <h2 className="font-display text-4xl md:text-5xl font-bold">{service.title}</h2>
                <p className="text-lg text-white/60 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <button className={clsx(
                    "px-10 py-4 rounded-full font-bold transition-all flex items-center gap-2",
                    service.isFuture ? "bg-white/10 text-white/40 cursor-not-allowed" : "gold-gradient text-black hover:scale-105"
                  )}>
                    {service.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-xs font-mono text-white/20 uppercase tracking-widest">
                    Timeline: <span className="text-white/60">{service.timeline}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { clsx } from 'clsx';
