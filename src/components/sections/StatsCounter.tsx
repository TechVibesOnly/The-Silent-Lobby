import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatProps {
  value: string;
  label: string;
  sublabel: string;
  suffix?: string;
}

const StatItem: React.FC<StatProps> = ({ value, label, sublabel, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-center group">
      <div className="font-mono text-4xl md:text-6xl font-bold text-gold mb-4 relative inline-block">
        {value.startsWith('₹') ? '₹' : ''}{count}{value.includes('%') ? '%' : ''}{suffix}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -bottom-2 left-0 h-0.5 bg-gold shadow-[0_0_10px_#C9A84C]"
        />
      </div>
      <p className="font-display font-bold text-lg mt-4">{label}</p>
      <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{sublabel}</p>
    </div>
  );
};

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
          <StatItem value="₹8500" label="SAM in India" sublabel="AI Procurement Optimization" suffix=" Cr" />
          <StatItem value="73%" label="Procurement" sublabel="Pre-Filtered by AI Agents" />
          <StatItem value="10" label="AI Platforms" sublabel="Monitored" />
          <StatItem value="94%" label="Vendors Are" sublabel="Invisible to AI Agents" />
        </div>
      </div>
    </section>
  );
};
