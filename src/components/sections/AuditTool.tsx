import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { performAltoAudit, AuditResult } from '../../services/gemini';
import { Search, Loader2, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export const AuditTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'result'>('idle');
  const [result, setResult] = useState<AuditResult | null>(null);
  const [scanStep, setScanStep] = useState(0);

  const scanSteps = [
    "Initializing ALTO Crawler...",
    "Parsing DOM for Structured Data...",
    "Simulating Salesforce Agentforce Scan...",
    "Checking Logic Gate Compliance...",
    "Generating AI Visibility Report..."
  ];

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setStatus('scanning');
    setScanStep(0);

    // Simulate progress
    const interval = setInterval(() => {
      setScanStep(prev => (prev < scanSteps.length - 1 ? prev + 1 : prev));
    }, 1500);

    try {
      const auditResult = await performAltoAudit(url);
      setResult(auditResult);
      clearInterval(interval);
      setStatus('result');
    } catch (error) {
      clearInterval(interval);
      setStatus('idle');
      alert("Audit failed. Please try again.");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="audit">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-4"
            >
              [ THE ALTO AUDIT ENGINE ]
            </motion.p>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Is Your Brand <span className="text-gold italic">Invisible</span> to AI?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Run a real-time simulation of how enterprise AI agents perceive, rank, and recommend your business.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.form
                  key="idle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleAudit}
                  className="space-y-6"
                >
                  <div className="relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 w-5 h-5" />
                    <input
                      type="url"
                      required
                      placeholder="Enter your enterprise URL (e.g. https://acme.com)"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-6 font-sans text-lg focus:outline-none focus:border-gold/50 transition-all"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gold-gradient text-black font-bold py-6 rounded-2xl text-lg hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_30px_rgba(201,168,76,0.2)]"
                  >
                    Run Free ALTO Audit →
                  </button>
                  <p className="text-center text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    * No credit card required. Enterprise-grade simulation.
                  </p>
                </motion.form>
              )}

              {status === 'scanning' && (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="relative w-24 h-24 mb-8">
                    <Loader2 className="w-full h-full text-gold animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gold/20 rounded-full animate-ping" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{scanSteps[scanStep]}</h3>
                  <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gold"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </motion.div>
              )}

              {status === 'result' && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative flex items-center justify-center">
                      <svg className="w-40 h-40 -rotate-90">
                        <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                        <motion.circle
                          cx="80"
                          cy="80"
                          r="70"
                          fill="none"
                          stroke={result.score > 700 ? "#4ADE80" : result.score > 400 ? "#C9A84C" : "#F87171"}
                          strokeWidth="10"
                          strokeDasharray="439.8"
                          initial={{ strokeDashoffset: 439.8 }}
                          animate={{ strokeDashoffset: 439.8 * (1 - result.score / 1000) }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-mono text-4xl font-bold">{result.score}</span>
                        <span className="text-[10px] font-mono text-white/40">ALTO SCORE</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-2 text-gold">
                        <CheckCircle2 className="w-5 h-5" />
                        <h4 className="font-display font-bold text-xl">Audit Complete</h4>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {result.summary}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-[10px] font-mono text-white/40 mb-1">AGENT TRUST</div>
                          <div className="text-lg font-bold">{result.agentTrust}%</div>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-[10px] font-mono text-white/40 mb-1">API DESIGN</div>
                          <div className="text-lg font-bold">{result.apiDesign}%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-mono text-[10px] text-gold uppercase tracking-widest">Critical Recommendations</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {result.recommendations.map((rec, i) => (
                        <div key={i} className="p-4 glass-card border-gold/20 flex gap-3">
                          <AlertTriangle className="w-4 h-4 text-gold shrink-0" />
                          <span className="text-xs text-white/80">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-white/40 hover:text-white text-xs font-mono transition-colors"
                    >
                      ← RUN NEW AUDIT
                    </button>
                    <button className="flex items-center gap-2 text-gold hover:underline text-sm font-bold">
                      Download Full Technical PDF <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
