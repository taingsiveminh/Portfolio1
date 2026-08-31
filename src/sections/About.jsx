import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import GlowCard from '../components/GlowCard';

export default function About() {
  const { lang, t } = useLanguage();
  const currentBio = personalInfo.bio[lang] || personalInfo.bio.en;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto" />
        </div>

        {/* Top Grid: Bio Text & 3 Key Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {t.about.subtitlePrefix}{' '}
                <span className="text-gradient-primary">{t.about.subtitleHighlight}</span>
              </h3>
              
              {currentBio.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {t.about.tags.cleanArch}
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {t.about.tags.prodStability}
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {t.about.tags.mobileUx}
                </span>
              </div>
            </div>
          </div>

          {/* 3 Statistics Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <GlowCard
                key={idx}
                glowColor={idx === 0 ? 'blue' : idx === 1 ? 'purple' : 'cyan'}
                className="p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-200">
                      {stat.label[lang] || stat.label.en}
                    </div>
                    <div className="text-xs text-slate-400">
                      {stat.subtext[lang] || stat.subtext.en}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300">
                    <Sparkles className="w-5 h-5 opacity-75" />
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
