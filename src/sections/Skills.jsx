import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Monitor, 
  Atom, 
  Palette, 
  FileCode, 
  Coffee, 
  Cpu, 
  Network, 
  Terminal, 
  Binary, 
  HardDrive, 
  Table, 
  Zap, 
  GitBranch, 
  Github, 
  Box, 
  Cloud, 
  Shield, 
  LayoutGrid,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/skillsData';
import { useLanguage } from '../context/LanguageContext';
import GlowCard from '../components/GlowCard';

const iconComponents = {
  Monitor,
  Server,
  Database,
  Wrench,
  Atom,
  Palette,
  FileCode,
  Code: Code2,
  Sparkles,
  LayoutGrid,
  Cpu,
  Coffee,
  Network,
  Terminal,
  Binary,
  HardDrive,
  Table,
  Zap,
  GitBranch,
  Github,
  Box,
  Cloud,
  Shield
};

export default function Skills() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: t.skills.allTech, icon: Sparkles },
    { id: 'frontend', label: 'Frontend', icon: Monitor },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  ];

  const filteredCategories = activeTab === 'all' 
    ? Object.entries(skillsData) 
    : Object.entries(skillsData).filter(([key]) => key === activeTab);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.skills.subtitle}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-blue-600/20 border-blue-500/40 text-white shadow-lg shadow-blue-500/10'
                    : 'bg-white/[0.03] border-white/[0.06] text-slate-400 hover:text-slate-200 hover:bg-white/[0.06]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Display */}
        <div className="space-y-10">
          {filteredCategories.map(([catKey, category]) => {
            const CatIcon = iconComponents[category.icon] || Code2;
            const glowColor = category.color || 'blue';

            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-blue-400">
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.title[lang] || category.title.en}
                      </h3>
                      <p className="text-xs text-slate-400 hidden sm:block">
                        {category.description[lang] || category.description.en}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]">
                    {category.skills.length} {t.skills.techCount}
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                  {category.skills.map((skill) => {
                    const SkillIcon = iconComponents[skill.icon] || Code2;

                    return (
                      <GlowCard
                        key={skill.name}
                        glowColor={glowColor}
                        className="p-4 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-200"
                      >
                        <div className="space-y-3">
                          <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                            <SkillIcon className="w-5 h-5" />
                          </div>

                          <div>
                            <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                              {skill.name}
                            </div>
                            <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                              {skill.tag}
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 mt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span className="text-emerald-400/90">{skill.level}</span>
                          <span>{skill.experience}</span>
                        </div>
                      </GlowCard>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
