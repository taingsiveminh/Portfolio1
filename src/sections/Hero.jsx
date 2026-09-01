import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  Facebook, 
  Terminal, 
  Command, 
  Sparkles, 
  Code2, 
  Layers, 
  Check, 
  Copy,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { personalInfo, codeSnippets } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import LiveClock from '../components/LiveClock';
import GlowCard from '../components/GlowCard';

export default function Hero({ onOpenCommandPalette, onShowToast }) {
  const { lang, t } = useLanguage();
  const [activeCodeTab, setActiveCodeTab] = useState('goshope');
  const [copiedCode, setCopiedCode] = useState(false);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleCopySnippet = () => {
    const snippet = codeSnippets[activeCodeTab]?.code || '';
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    onShowToast?.('Code snippet copied to clipboard!');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        
        {/* Main 2-Column Bento Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Authentic Human Developer Voice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status & Role Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-slate-300">
                  {personalInfo.availability[lang === 'kh' ? 'statusKh' : 'status']}
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono">
                <span>{personalInfo.role[lang] || personalInfo.role.en}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {personalInfo.headline[lang] || personalInfo.headline.en}
            </h1>

            {/* Human Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              {personalInfo.subheadline[lang] || personalInfo.subheadline.en}
            </p>

            {/* CTAs + Quick Command Menu Trigger */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-blue-400/30"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{t.hero.contactMe}</span>
              </button>

              {/* Command Palette Trigger */}
              <button
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl text-xs font-mono text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-colors"
                title="Open Command Palette"
              >
                <Command className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">⌘K Palette</span>
              </button>
            </div>

            {/* Social handles bar with labels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-blue-500/30 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl text-slate-400 hover:text-blue-400 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-blue-500/30 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Profile"
                className="p-2.5 rounded-xl text-slate-400 hover:text-cyan-400 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2.5 rounded-xl text-slate-400 hover:text-blue-400 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-blue-500/30 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <span className="text-xs font-mono text-slate-500 ml-2 hidden sm:inline">
                @tsmdev
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code Inspector & Live Clock Bento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Live Clock & Location */}
            <LiveClock />

            {/* Interactive Real Code Terminal Bento Card */}
            <GlowCard glowColor="blue" className="p-0 overflow-hidden shadow-2xl">
              {/* Terminal Titlebar with tabs */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#090b14] border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                {/* Switchable code tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveCodeTab('goshope')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                      activeCodeTab === 'goshope'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Spring Boot API
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('reactHook')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                      activeCodeTab === 'reactHook'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    React Hook
                  </button>
                </div>

                <button
                  onClick={handleCopySnippet}
                  className="p-1 rounded text-slate-400 hover:text-white bg-white/[0.04] transition-colors"
                  title="Copy snippet"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Code display */}
              <div className="p-4 bg-[#090b14]/95 overflow-x-auto text-[11px] font-mono leading-relaxed text-slate-300">
                <div className="text-slate-500 mb-1">
                  // {codeSnippets[activeCodeTab]?.title} — Production Architecture
                </div>
                <pre className="text-slate-200">
                  <code>{codeSnippets[activeCodeTab]?.code}</code>
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-[#090b14] border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  GoShope Production Backend
                </span>
                <span>Sub-300ms SLA</span>
              </div>
            </GlowCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
