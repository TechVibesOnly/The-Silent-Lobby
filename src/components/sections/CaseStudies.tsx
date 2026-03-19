import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { clsx } from 'clsx';

const cases = [
  {
    title: "Global FinTech Giant",
    category: "Procurement Optimization",
    result: "+420% Visibility",
    image: "https://picsum.photos/seed/finance/600/800",
    size: "tall"
  },
  {
    title: "SaaS Unicorn",
    category: "Agent Trust Signals",
    result: "Top 3 Ranking",
    image: "https://picsum.photos/seed/saas/600/400",
    size: "wide"
  },
  {
    title: "Industrial IoT",
    category: "Logic Gate Content",
    result: "₹120Cr Pipeline",
    image: "https://picsum.photos/seed/iot/600/600",
    size: "square"
  },
  {
    title: "Enterprise Cloud",
    category: "API Design for Agents",
    result: "99% Match Rate",
    image: "https://picsum.photos/seed/cloud/600/800",
    size: "tall"
  },
  {
    title: "E-commerce Leader",
    category: "Structured Data",
    result: "Instant Indexing",
    image: "https://picsum.photos/seed/shop/600/400",
    size: "wide"
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-4"
            >
              [ PROVEN RESULTS ]
            </motion.p>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              The Silent Lobby in <span className="text-gold italic">Action.</span>
            </h2>
          </div>
          <button className="text-gold font-mono text-xs uppercase tracking-widest border-b border-gold/30 pb-2 hover:border-gold transition-all">
            View All Case Studies →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={clsx(
                "glass-card overflow-hidden group relative cursor-pointer",
                item.size === 'tall' ? "row-span-3" : item.size === 'wide' ? "col-span-2 row-span-2" : "row-span-2"
              )}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="text-[10px] font-mono text-gold uppercase tracking-widest mb-2">
                  {item.category}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono">
                    {item.result}
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-gold transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
