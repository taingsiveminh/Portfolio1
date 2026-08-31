import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from '../components/ProjectCard';

export default function Projects({ onOpenModal }) {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.projects.subtitle}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const labelText = typeof cat.label === 'object' ? (cat.label[lang] || cat.label.en) : cat.label;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'bg-white/[0.03] text-slate-400 border-white/[0.06] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {labelText}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={onOpenModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-slate-900/20 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              {t.projects.customCollabTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.projects.customCollabSub}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shrink-0 shadow-lg shadow-blue-600/20"
          >
            <span>{t.projects.letsDiscuss}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
