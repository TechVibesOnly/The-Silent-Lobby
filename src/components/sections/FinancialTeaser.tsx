import React from 'react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Year 1', retainer: 0.91, saas: 0, audit: 0.84, total: 1.99 },
  { name: 'Year 2', retainer: 4.20, saas: 1.80, audit: 2.10, total: 8.90 },
  { name: 'Year 3', retainer: 13.82, saas: 7.20, audit: 4.50, total: 27.62 },
  { name: 'Year 4', retainer: 37.62, saas: 18.90, audit: 7.20, total: 68.92 },
  { name: 'Year 5', retainer: 89.76, saas: 38.40, audit: 9.80, total: 149.56 },
];

export const FinancialTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-bg-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">The Numbers Behind the Opportunity</h2>
          <p className="text-white/60">Exponential growth in the machine-to-machine economy.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-card p-8"
          >
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRetainer" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSaaS" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorAudit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#C9A84C" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 12}}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 12}}
                    label={{ value: '₹ Crore', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.3)' }}
                  />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#10121C', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px'}}
                  />
                  <Legend verticalAlign="top" height={36}/>
                  <Area 
                    type="monotone" 
                    dataKey="retainer" 
                    name="Retainer Revenue"
                    stroke="#3B82F6" 
                    fillOpacity={1} 
                    fill="url(#colorRetainer)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="saas" 
                    name="SaaS Platform"
                    stroke="#14B8A6" 
                    fillOpacity={1} 
                    fill="url(#colorSaaS)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="audit" 
                    name="Audit Revenue"
                    stroke="#C9A84C" 
                    fillOpacity={1} 
                    fill="url(#colorAudit)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8 p-6 bg-gold/5 border border-gold/20 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gold font-bold text-xl">74% EBITDA Margin</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">By Year 5 Operations</p>
              </div>
              <div className="h-12 w-px bg-gold/20 hidden md:block" />
              <div className="text-center md:text-right">
                <p className="text-white font-bold text-xl">₹1,100–1,800 Cr</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">Projected Exit Valuation</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            {[
              { label: 'LTV:CAC Ratio', value: '9.4x → 18.2x', desc: 'Industry leading efficiency' },
              { label: 'Gross Margin', value: '82%', desc: 'Steady state projection' },
              { label: 'Break-Even', value: 'Month 14', desc: 'Rapid path to profitability' },
              { label: 'Seed Ask', value: '₹3.8 Crore', desc: 'For 18 months runway' },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <p className="text-[10px] font-mono text-gold uppercase tracking-widest mb-1">{metric.label}</p>
                <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
                <p className="text-xs text-white/40">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
