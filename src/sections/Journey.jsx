import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Award } from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import GlowCard from '../components/GlowCard';

export default function Journey() {
  const { lang, t } = useLanguage();

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.journey.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.journey.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.journey.subtitle}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/[0.1] ml-4 sm:ml-32 space-y-10">
          {journeyTimeline.map((item, index) => {
            const isLatest = index === journeyTimeline.length - 1;
            const glow = isLatest ? 'blue' : index === 2 ? 'purple' : 'emerald';

            return (
              <div key={item.year} className="relative pl-6 sm:pl-10 group">
                
                {/* Year tag for desktop */}
                <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right">
                  <span className={`text-base font-mono font-bold tracking-tight ${isLatest ? 'text-blue-400' : 'text-slate-400'}`}>
                    {item.year}
                  </span>
                  {isLatest && (
                    <span className="block text-[10px] text-emerald-400 font-mono">
                      {t.journey.current}
                    </span>
                  )}
                </div>

                {/* Node marker */}
                <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  isLatest
                    ? 'bg-blue-500 border-[#090b14] ring-4 ring-blue-500/30'
                    : 'bg-[#181d2e] border-blue-400'
                }`} />

                {/* Timeline Card */}
                <GlowCard glowColor={glow} className="p-6 sm:p-7">
                  <div className="space-y-3">
                    {/* Mobile year badge */}
                    <div className="flex sm:hidden items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {item.year}
                      </span>
                      {isLatest && (
                        <span className="text-[10px] text-emerald-400 font-mono">
                          {t.journey.presentStage}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.title[lang] || item.title.en}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description[lang] || item.description.en}
                    </p>

                    {/* Milestone Highlight */}
                    {item.highlight && (
                      <div className="p-3 rounded-xl bg-blue-500/[0.04] border border-blue-500/20 text-xs sm:text-sm text-blue-200 flex items-start gap-2">
                        <Award className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                        <span>{item.highlight[lang] || item.highlight.en}</span>
                      </div>
                    )}

                    {/* Key skills */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
