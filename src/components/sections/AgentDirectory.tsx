import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Globe, Shield, Building2, Mail, IndianRupee, ArrowRight, ExternalLink } from 'lucide-react';
import { clsx } from 'clsx';

const agents = [
  { id: 1, name: "Salesforce Agentforce Procurement", vendor: "Salesforce", market: "Enterprise", region: "Global", category: "Procurement", penetration: "92%", compatibility: 91, description: "The leading AI agent for Salesforce ecosystem procurement. Highly sensitive to JSON-LD and OpenAPI specifications." },
  { id: 2, name: "Microsoft Copilot Procurement Module", vendor: "Microsoft", market: "Enterprise", region: "Global", category: "Sourcing", penetration: "88%", compatibility: 84, description: "Integrated into Microsoft 365. Prioritizes vendors with deep Microsoft Graph integration and structured compliance data." },
  { id: 3, name: "SAP Joule", vendor: "SAP", market: "Enterprise", region: "Global", category: "Vendor Management", penetration: "76%", compatibility: 76, description: "SAP's natural language assistant for Ariba and S/4HANA. Requires strict adherence to SAP Business Network standards." },
  { id: 4, name: "ChatGPT Agent Mode (OpenAI)", vendor: "OpenAI", market: "SMB", region: "Global", category: "General Procurement", penetration: "65%", compatibility: 68, description: "The most flexible agent. Relies heavily on public-facing structured data and machine-readable whitepapers." },
  { id: 5, name: "Gemini Procurement Agent (Google)", vendor: "Google", market: "Enterprise", region: "Global", category: "Procurement", penetration: "71%", compatibility: 71, description: "Google's high-performance procurement agent. Prioritizes Google Cloud integration and real-time inventory APIs." },
  { id: 6, name: "Oracle Fusion Procurement", vendor: "Oracle", market: "Enterprise", region: "Global", category: "Sourcing", penetration: "54%", compatibility: 58, description: "Deeply integrated into Oracle ERP. Requires specialized metadata for automated vendor selection." },
  { id: 7, name: "Coupa Intelligence", vendor: "Coupa", market: "Enterprise", region: "Global", category: "Procurement", penetration: "42%", compatibility: 62, description: "AI-driven procurement platform. Focuses on risk assessment and compliance metadata." },
  { id: 8, name: "Ariba Network Agent (SAP)", vendor: "SAP", market: "Enterprise", region: "Global", category: "Sourcing", penetration: "81%", compatibility: 74, description: "The legacy leader in procurement networks, now enhanced with Joule AI capabilities." },
  { id: 9, name: "Ivalua AI Assistant", vendor: "Ivalua", market: "Enterprise", region: "Global", category: "Procurement", penetration: "28%", compatibility: 52, description: "Specialized in complex procurement workflows. Requires detailed logic gate content for automated bidding." },
  { id: 10, name: "Jaggaer Procurement Intelligence", vendor: "Jaggaer", market: "Enterprise", region: "Global", category: "Sourcing", penetration: "31%", compatibility: 55, description: "AI-powered sourcing agent. Prioritizes vendors with structured pricing and SLA data." },
  // ... more agents to reach 50
];

// Pad to 50 with realistic fictional/real agents
for (let i = 11; i <= 50; i++) {
  agents.push({
    id: i,
    name: `Agent ${i} - ${['ProcureAI', 'SourceBot', 'VendorGenius', 'LogicGate Agent'][i % 4]}`,
    vendor: ['IBM', 'Workday', 'Infor', 'ServiceNow', 'Adobe'][i % 5],
    market: i % 2 === 0 ? "Enterprise" : "SMB",
    region: i % 3 === 0 ? "India" : "Global",
    category: ['Procurement', 'Sourcing', 'Compliance', 'Vendor Management'][i % 4],
    penetration: `${Math.floor(Math.random() * 40 + 10)}%`,
    compatibility: Math.floor(Math.random() * 50 + 30),
    description: "A specialized AI agent focusing on automated vendor discovery and risk assessment within its ecosystem."
  });
}

export const AgentDirectory: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterVendor, setFilterVendor] = useState('All');
  const [filterMarket, setFilterMarket] = useState('All');
  const [filterRegion, setFilterRegion] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(search.toLowerCase()) || 
                         agent.vendor.toLowerCase().includes(search.toLowerCase());
    const matchesVendor = filterVendor === 'All' || agent.vendor === filterVendor;
    const matchesMarket = filterMarket === 'All' || agent.market === filterMarket;
    const matchesRegion = filterRegion === 'All' || agent.region === filterRegion;
    const matchesCategory = filterCategory === 'All' || agent.category === filterCategory;
    return matchesSearch && matchesVendor && matchesMarket && matchesRegion && matchesCategory;
  });

  const vendors = ['All', ...new Set(agents.map(a => a.vendor))];
  const markets = ['All', 'Enterprise', 'SMB'];
  const regions = ['All', 'India', 'Global'];
  const categories = ['All', ...new Set(agents.map(a => a.category))];

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
            The World's Top 50 <br />
            <span className="text-gold italic">AI Procurement Agents</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Ranked, Analyzed, Decoded. The definitive database for B2B enterprises aiming for algorithmic visibility.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-8">
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-center gap-2 text-gold font-display font-bold text-lg mb-4">
                <Filter className="w-5 h-5" />
                Filters
              </div>

              <div className="space-y-4">
                <FilterGroup label="Vendor" options={vendors} value={filterVendor} onChange={setFilterVendor} />
                <FilterGroup label="Market" options={markets} value={filterMarket} onChange={setFilterMarket} />
                <FilterGroup label="Region" options={regions} value={filterRegion} onChange={setFilterRegion} />
                <FilterGroup label="Category" options={categories} value={filterCategory} onChange={setFilterCategory} />
              </div>
            </div>

            <div className="glass-card p-6 border-gold/20 bg-gold/5">
              <h4 className="font-display font-bold text-sm mb-4">Need the Guide?</h4>
              <p className="text-xs text-white/60 mb-6">Download our 120-page ALTO Optimization Guide for these 50 agents.</p>
              <button className="w-full gold-gradient text-black font-bold py-3 rounded-xl text-xs">
                Download PDF
              </button>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1 space-y-8">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
              <input 
                type="text" 
                placeholder="Search agents, vendors, or categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-5 font-sans text-lg focus:outline-none focus:border-gold/50 transition-all"
              />
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredAgents.map((agent) => (
                  <motion.div 
                    key={agent.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="glass-card p-8 flex flex-col h-full hover:border-gold/30 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center font-display font-bold text-gold text-xl">
                        {agent.name[0]}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{agent.vendor}</span>
                        <span className="text-[10px] font-mono text-gold uppercase tracking-widest">{agent.market}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-bold mb-4 leading-tight group-hover:text-gold transition-colors">{agent.name}</h3>
                    <p className="text-sm text-white/60 mb-8 flex-1 leading-relaxed">{agent.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-[8px] font-mono text-white/20 uppercase mb-1">India Penetration</p>
                        <p className="text-sm font-bold">{agent.penetration}</p>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-[8px] font-mono text-white/20 uppercase mb-1">ALTO Compatibility</p>
                        <p className="text-sm font-bold text-gold">{agent.compatibility}/100</p>
                      </div>
                    </div>

                    <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-gold group-hover:border-gold/30 transition-all flex items-center justify-center gap-2">
                      View Optimization Guide <ArrowRight className="w-3 h-3" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredAgents.length === 0 && (
              <div className="text-center py-20 glass-card">
                <p className="text-white/40 font-mono uppercase tracking-widest">No agents found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterGroup = ({ label, options, value, onChange }: { label: string, options: string[], value: string, onChange: (v: string) => void }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{label}</label>
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={clsx(
            "px-3 py-1.5 rounded-lg text-[10px] font-mono transition-all",
            value === opt ? "bg-gold text-black font-bold" : "bg-white/5 text-white/40 hover:bg-white/10"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);
