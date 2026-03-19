import React from 'react';
import { motion } from 'motion/react';

export const AltoDashboard: React.FC = () => {
  const metrics = [
    { label: 'Structured Data', value: 91, color: '#C9A84C' },
    { label: 'Agent Trust Signals', value: 84, color: '#4ADE80' },
    { label: 'Logic Gate Content', value: 79, color: '#60A5FA' },
    { label: 'API Design', value: 88, color: '#F472B6' },
    { label: 'Monitoring', value: 76, color: '#A78BFA' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="glass-card p-8 w-full max-w-[600px] aspect-[6/5] flex flex-col justify-between relative overflow-hidden group"
      style={{ perspective: '1000px' }}
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 blur-[100px] rounded-full" />

      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-mono text-xs text-gold uppercase tracking-widest mb-1">ALTO Score Engine</h3>
          <p className="text-white/60 text-sm">Real-time Agent Visibility Index</p>
        </div>
        <div className="px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-[10px] font-mono text-gold">
          LIVE_FEED: ACTIVE
        </div>
      </div>

      {/* Score Ring */}
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="relative flex items-center justify-center">
          <svg className="w-48 h-48 -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="12"
            />
            <motion.circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="12"
              strokeDasharray="552.92"
              initial={{ strokeDashoffset: 552.92 }}
              animate={{ strokeDashoffset: 552.92 * (1 - 847 / 1000) }}
              transition={{ duration: 2, delay: 1.8, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="font-mono text-5xl font-bold text-white"
            >
              847
            </motion.span>
            <span className="font-mono text-xs text-white/40">/ 1000</span>
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-3">
        {metrics.map((metric, i) => (
          <div key={metric.label} className="space-y-1">
            <div className="flex justify-between text-[10px] font-mono uppercase tracking-tighter">
              <span className="text-white/60">{metric.label}</span>
              <span className="text-white">{metric.value}%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metric.value}%` }}
                transition={{ duration: 1, delay: 2.5 + i * 0.1 }}
                className="h-full rounded-full"
                style={{ backgroundColor: metric.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Agent Icons */}
      <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
        <div className="flex gap-4">
          {['SF', 'MS', 'SAP'].map((agent) => (
            <div key={agent} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-[10px] border border-white/10">
                {agent}
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            </div>
          ))}
        </div>
        <div className="text-[10px] font-mono text-white/40">
          RANK: #04/500
        </div>
      </div>
    </motion.div>
  );
};
