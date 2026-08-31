import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Layers, Rocket, Sparkles } from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import GlowCard from '../components/GlowCard';

const iconMap = {
  Layout: Layout,
  Layers: Layers,
  Rocket: Rocket,
  Sparkles: Sparkles,
};

export default function WhatIDo() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.icon] || Layout;
            const glow = idx === 0 ? 'blue' : idx === 1 ? 'purple' : idx === 2 ? 'emerald' : 'cyan';

            return (
              <GlowCard key={service.id} glowColor={glow} className="p-7 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.09] flex items-center justify-center text-white shadow-inner">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {service.title[lang] || service.title.en}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description[lang] || service.description.en}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
