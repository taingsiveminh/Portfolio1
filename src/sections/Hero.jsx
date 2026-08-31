import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Send, Facebook, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang, t } = useLanguage();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full text-center space-y-8">
        
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-inner"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-300">
            {personalInfo.statusBadge[lang] || personalInfo.statusBadge.en}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.14]">
            {t.hero.headlinePrefix}{' '}
            <span className="text-gradient-primary">{t.hero.headlineHighlight}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            {personalInfo.subheadline[lang] || personalInfo.subheadline.en}
          </p>
        </motion.div>

        {/* Call to Actions & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-blue-400/30"
          >
            <span>{t.hero.viewWork}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>{t.hero.contactMe}</span>
          </button>
        </motion.div>

        {/* Social Icons Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 pt-2"
        >
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
        </motion.div>

        {/* Developer-style Live Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-6 max-w-xl mx-auto"
        >
          <div className="p-4 sm:p-4.5 rounded-2xl bg-[#0e1220]/90 border border-white/[0.09] shadow-2xl backdrop-blur-xl text-left relative overflow-hidden group hover:border-blue-500/30 transition-all">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono text-slate-400">{t.hero.systemStatus}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.hero.online}</span>
              </div>
            </div>

            <div className="pt-3 space-y-1.5">
              <p className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs">{t.hero.buildLabel}</span>
                {personalInfo.currentStatus.title[lang] || personalInfo.currentStatus.title.en}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-slate-300">
                  {personalInfo.currentStatus.tag[lang] || personalInfo.currentStatus.tag.en}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-blue-400/90">{t.hero.liveMetrics}</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
