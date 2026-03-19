/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/canvas/ParticleCanvas';
import { CustomCursor } from './components/ui/CustomCursor';
import { Hero } from './components/sections/Hero';
import { CrisisComparison } from './components/sections/CrisisComparison';
import { AltoFramework } from './components/sections/AltoFramework';
import { StatsCounter } from './components/sections/StatsCounter';
import { PricingPreview } from './components/sections/PricingPreview';
import { AuditCTA } from './components/sections/AuditCTA';
import { VisionaryCouncil } from './components/sections/VisionaryCouncil';
import { FinancialTeaser } from './components/sections/FinancialTeaser';
import { AuditPage } from './components/sections/AuditPage';
import { CaseStudies } from './components/sections/CaseStudies';
import { ClientDashboard } from './components/dashboard/ClientDashboard';
import { ServicesPage } from './components/sections/ServicesPage';
import { AgentDirectory } from './components/sections/AgentDirectory';
import { PricingPage } from './components/sections/PricingPage';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [view, setView] = useState<'marketing' | 'dashboard' | 'audit' | 'services' | 'agents' | 'pricing'>('marketing');

  // Handle hash change for simple routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#dashboard') {
        setView('dashboard');
      } else if (hash.startsWith('#audit')) {
        setView('audit');
      } else if (hash === '#services') {
        setView('services');
      } else if (hash === '#agents') {
        setView('agents');
      } else if (hash === '#pricing') {
        setView('pricing');
      } else {
        setView('marketing');
      }
      // Scroll to top on view change
      window.scrollTo(0, 0);
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <ClientDashboard />;
      case 'audit':
        return (
          <div className="relative min-h-screen selection:bg-gold selection:text-black">
            <CustomCursor />
            <ParticleCanvas />
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-bg-dark/50">
              <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center font-display font-bold text-black">
                    S
                  </div>
                  <span className="font-display font-bold text-xl tracking-tighter">
                    THE SILENT <span className="text-gold">LOBBY</span>
                  </span>
                </a>
                <a href="#" className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-gold transition-colors">
                  ← Back to Home
                </a>
              </div>
            </nav>
            <AuditPage />
            <Footer />
          </div>
        );
      case 'services':
        return (
          <div className="relative min-h-screen selection:bg-gold selection:text-black">
            <CustomCursor />
            <ParticleCanvas />
            <Navbar />
            <ServicesPage />
            <Footer />
          </div>
        );
      case 'agents':
        return (
          <div className="relative min-h-screen selection:bg-gold selection:text-black">
            <CustomCursor />
            <ParticleCanvas />
            <Navbar />
            <AgentDirectory />
            <Footer />
          </div>
        );
      case 'pricing':
        return (
          <div className="relative min-h-screen selection:bg-gold selection:text-black">
            <CustomCursor />
            <ParticleCanvas />
            <Navbar />
            <PricingPage />
            <Footer />
          </div>
        );
      default:
        return (
          <div className="relative min-h-screen selection:bg-gold selection:text-black">
            <CustomCursor />
            <ParticleCanvas />
            <Navbar />
            <main>
              <Hero />
              <CrisisComparison />
              <AltoFramework />
              <StatsCounter />
              <CaseStudies />
              <PricingPreview />
              <AuditCTA />
              <VisionaryCouncil />
              <FinancialTeaser />
              
              {/* Final CTA Section */}
              <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 -skew-y-6 origin-right" />
                <div className="container mx-auto px-6 text-center relative z-10">
                  <h2 className="font-display text-4xl md:text-6xl font-bold mb-12">
                    The Future of SEO is <br />
                    <span className="text-gold italic">Algorithmic.</span>
                  </h2>
                  <div className="flex flex-wrap justify-center gap-6">
                    <button className="gold-gradient text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition-all">
                      Book Enterprise Consultation
                    </button>
                    <button className="px-10 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-all">
                      Read the Whitepaper
                    </button>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        );
    }
  };

  return renderView();
}

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-bg-dark/50">
    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center font-display font-bold text-black">
          S
        </div>
        <span className="font-display font-bold text-xl tracking-tighter">
          THE SILENT <span className="text-gold">LOBBY</span>
        </span>
      </a>
      
      <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/60">
        <a href="#services" className="hover:text-gold transition-colors">Services</a>
        <a href="#agents" className="hover:text-gold transition-colors">Agent Directory</a>
        <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
        <a href="#audit" className="hover:text-gold transition-colors">ALTO Report</a>
        <a href="#dashboard" className="px-5 py-2 border border-gold/30 rounded-full text-gold hover:bg-gold/5 transition-colors">
          Client Login
        </a>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-black/20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gold/20 border border-gold/30 rounded flex items-center justify-center font-display font-bold text-gold text-xs">
          S
        </div>
        <span className="font-display font-bold text-sm tracking-tighter">
          THE SILENT LOBBY
        </span>
      </div>
      
      <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
        © 2024 THE SILENT LOBBY PVT LTD · BENGALURU · LONDON · NEW YORK
      </div>
      
      <div className="flex gap-6 text-white/40">
        <a href="#" className="hover:text-gold transition-colors text-xs">Privacy</a>
        <a href="#" className="hover:text-gold transition-colors text-xs">Terms</a>
        <a href="#" className="hover:text-gold transition-colors text-xs">LinkedIn</a>
      </div>
    </div>
  </footer>
);
