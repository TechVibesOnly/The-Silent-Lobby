import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, Shield, Mail, Globe, User, Building2, IndianRupee, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ALTOScoreRing } from '../ui/ALTOScoreRing';
import { clsx } from 'clsx';
import { performAltoAudit, AuditResult } from '../../services/gemini';

const schema = z.object({
  domain: z.string().url().or(z.string().regex(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/)),
  companyName: z.string().min(2),
  name: z.string().min(2),
  email: z.string().email().refine(email => !['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'].some(d => email.endsWith(d)), {
    message: "Please use your work email address."
  }),
  industry: z.string(),
  revenueRange: z.string()
});

type FormData = z.infer<typeof schema>;

export const AuditPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [scanStep, setScanStep] = useState(0);

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  // Extract domain from URL hash if present
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('?')) {
      const params = new URLSearchParams(hash.split('?')[1]);
      const domainParam = params.get('domain');
      if (domainParam) {
        setValue('domain', domainParam);
      }
    }
  }, [setValue]);

  const domain = watch('domain');

  const scanSteps = [
    { name: "Structured Data Architecture", icon: Globe },
    { name: "Agent Trust Signals", icon: Shield },
    { name: "Logic Gate Content", icon: Building2 },
    { name: "API Design Compliance", icon: Mail },
    { name: "Agent Monitoring Readiness", icon: IndianRupee }
  ];

  const onSubmit = async (data: FormData) => {
    setStep(2);
    
    // Simulate scan steps
    const interval = setInterval(() => {
      setScanStep(prev => (prev < scanSteps.length - 1 ? prev + 1 : prev));
    }, 2000);

    try {
      const result = await performAltoAudit(data.domain);
      setAuditResult(result);
      clearInterval(interval);
      setTimeout(() => setStep(3), 1000);
    } catch (error) {
      clearInterval(interval);
      alert("Audit failed. Please try again.");
      setStep(1);
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-4">Step 1 of 3</p>
                <h1 className="font-display text-5xl font-bold mb-4">Your Free ALTO Score</h1>
                <p className="text-white/60">See exactly how AI procurement agents rank your business right now.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 md:p-12 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/40 uppercase">Company Domain</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input 
                        {...register('domain')}
                        placeholder="www.yourbusiness.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-gold/50 transition-all"
                      />
                    </div>
                    {errors.domain && <p className="text-red-400 text-[10px]">{errors.domain.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/40 uppercase">Company Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input 
                        {...register('companyName')}
                        placeholder="Acme Corp"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-gold/50 transition-all"
                      />
                    </div>
                    {errors.companyName && <p className="text-red-400 text-[10px]">{errors.companyName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/40 uppercase">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input 
                        {...register('name')}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-gold/50 transition-all"
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-[10px]">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/40 uppercase">Work Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input 
                        {...register('email')}
                        placeholder="john@acme.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-gold/50 transition-all"
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-[10px]">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/40 uppercase">Industry</label>
                    <select 
                      {...register('industry')}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-gold/50 transition-all appearance-none"
                    >
                      <option value="SaaS/Technology">SaaS/Technology</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/40 uppercase">Annual Revenue</label>
                    <select 
                      {...register('revenueRange')}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-gold/50 transition-all appearance-none"
                    >
                      <option value="₹25-100Cr">₹25-100Cr</option>
                      <option value="₹100-500Cr">₹100-500Cr</option>
                      <option value="₹500Cr+">₹500Cr+</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full gold-gradient text-black font-bold py-6 rounded-2xl text-lg hover:scale-[1.01] transition-all"
                >
                  Analyze My AI Visibility →
                </button>

                <div className="flex justify-center gap-6 text-[10px] font-mono text-white/20 uppercase tracking-widest">
                  <span>🔒 Your data is secure</span>
                  <span>No spam</span>
                  <span>Results in 60 seconds</span>
                </div>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-4">Step 2 of 3</p>
                <h2 className="font-display text-4xl font-bold mb-2">Simulating Agent Procurement</h2>
                <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Environment: {domain} · AI Agent Simulation Active</p>
              </div>

              <div className="space-y-4">
                {scanSteps.map((s, i) => (
                  <div key={i} className="glass-card p-6 relative overflow-hidden">
                    {/* Scan Line Animation */}
                    {i === scanStep && (
                      <motion.div 
                        animate={{ left: ['0%', '100%'] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute top-0 bottom-0 w-1 bg-gold shadow-[0_0_10px_#C9A84C] z-10"
                      />
                    )}
                    
                    <div className="flex items-center justify-between relative z-20">
                      <div className="flex items-center gap-4">
                        <div className={clsx(
                          "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                          i <= scanStep ? "bg-gold/20 text-gold" : "bg-white/5 text-white/20"
                        )}>
                          <s.icon className="w-5 h-5" />
                        </div>
                        <span className={clsx(
                          "font-display font-medium",
                          i <= scanStep ? "text-white" : "text-white/20"
                        )}>{s.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {i < scanStep ? (
                          <span className="text-green-500 font-mono text-xs">COMPLETED</span>
                        ) : i === scanStep ? (
                          <span className="text-gold font-mono text-xs animate-pulse">SCANNING...</span>
                        ) : (
                          <span className="text-white/10 font-mono text-xs">PENDING</span>
                        )}
                        
                        <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: i < scanStep ? '100%' : i === scanStep ? '60%' : '0%' }}
                            className="h-full bg-gold"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && auditResult && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-6xl mx-auto"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-16 glass-card p-12">
                <ALTOScoreRing score={auditResult.score} size="lg" />
                <div className="flex-1 text-center md:text-left">
                  <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">{watch('companyName')}</h1>
                  <p className="font-mono text-gold text-xl mb-6 tracking-widest">{watch('domain')}</p>
                  <p className="text-white/60 text-lg leading-relaxed max-w-2xl">{auditResult.summary}</p>
                </div>
              </div>

              {/* 5-Dimension Breakdown */}
              <div className="mb-20">
                <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gold" />
                  5-Dimension Breakdown
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {auditResult.dimensions.map((dim, i) => {
                    const Icon = scanSteps.find(s => s.name.includes(dim.name) || dim.name.includes(s.name))?.icon || Globe;
                    return (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6 flex flex-col md:flex-row items-center gap-8 group hover:bg-white/5 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-end mb-2">
                            <span className="font-display font-bold text-lg">{dim.name}</span>
                            <span className="font-mono text-gold font-bold">{dim.score}/100</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${dim.score}%` }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              className="h-full bg-gold"
                            />
                          </div>
                          <p className="text-sm text-white/40 mt-3">{dim.summary}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Recommendations Section */}
              <div className="mb-20">
                <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gold" />
                  Priority Recommendations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {auditResult.recommendations.map((rec, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card p-8 flex flex-col h-full border-white/5 hover:border-gold/30 transition-all"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{rec.dimension}</span>
                        <span className={clsx(
                          "px-3 py-1 rounded-full text-[10px] font-mono font-bold",
                          rec.priority === 'HIGH' ? "bg-red-500/20 text-red-400" : 
                          rec.priority === 'MEDIUM' ? "bg-blue-500/20 text-blue-400" : 
                          "bg-teal-500/20 text-teal-400"
                        )}>
                          {rec.priority} PRIORITY
                        </span>
                      </div>
                      <h4 className="text-xl font-display font-bold mb-4 leading-tight">{rec.action}</h4>
                      <p className="text-sm text-white/60 mb-8 flex-1">Expected Impact: <span className="text-white">{rec.impact}</span></p>
                      
                      {rec.priority === 'HIGH' && (
                        <button className="w-full py-4 border border-gold/30 rounded-xl text-gold font-bold hover:bg-gold text-black transition-all flex items-center justify-center gap-2">
                          Fix This <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Industry Benchmark */}
              <div className="mb-20 glass-card p-12 text-center">
                <h3 className="font-display text-2xl font-bold mb-4">Industry Benchmark</h3>
                <p className="text-white/60 mb-8">
                  You score better than <span className="text-gold font-bold">{(auditResult.score / 10).toFixed(1)}%</span> of companies in the <span className="text-white">{watch('industry')}</span> industry.
                </p>
                <div className="max-w-2xl mx-auto relative h-8 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${auditResult.score / 10}%` }}
                    transition={{ duration: 2 }}
                    className="absolute inset-y-0 left-0 bg-gold/30 border-r-2 border-gold"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-6 text-[10px] font-mono text-white/20 uppercase">
                    <span>Bottom 10%</span>
                    <span>Industry Average</span>
                    <span>Top 10%</span>
                  </div>
                </div>
              </div>

              {/* Final CTA Section */}
              <div className="glass-card p-12 text-center bg-gold/5 border-gold/20">
                <h2 className="font-display text-4xl font-bold mb-4">Ready to fix this?</h2>
                <p className="text-white/60 mb-12 max-w-xl mx-auto">
                  Our agents are standing by to optimize your visibility across all 10 major procurement platforms.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                  <button className="gold-gradient text-black font-bold px-10 py-5 rounded-2xl text-lg hover:scale-105 transition-all">
                    Book a 30-min Strategy Call
                  </button>
                  <button className="px-10 py-5 border border-white/10 rounded-2xl text-lg hover:bg-white/5 transition-all">
                    Download Full Report (PDF)
                  </button>
                </div>
                <div className="max-w-md mx-auto relative">
                  <input 
                    type="email" 
                    placeholder="Enter email for full report"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold/50"
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-4 bg-gold text-black font-bold rounded-lg text-sm">
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
