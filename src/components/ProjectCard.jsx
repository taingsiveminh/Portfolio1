import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import GlowCard from './GlowCard';
import { GoShopeMockup, TSMSolutionsMockup, YGHAgricMockup, MinhWebFunMockup } from './ProjectMockups';

const mockupsMap = {
  goshope: GoShopeMockup,
  'tsm-solutions': TSMSolutionsMockup,
  'ygh-agric': YGHAgricMockup,
  'minh-web-fun': MinhWebFunMockup,
};

export default function ProjectCard({ project, onOpenDetails }) {
  const { lang, t } = useLanguage();
  const MockupComponent = mockupsMap[project.id] || GoShopeMockup;

  const getBorderColor = (accent) => {
    switch (accent) {
      case 'purple': return 'border-purple-500/30 text-purple-300';
      case 'emerald': return 'border-emerald-500/30 text-emerald-300';
      case 'cyan': return 'border-cyan-500/30 text-cyan-300';
      case 'blue':
      default: return 'border-blue-500/30 text-blue-300';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="h-full flex"
    >
      <GlowCard glowColor={project.accentColor} className="flex flex-col h-full w-full">
        {/* Card Mockup Showcase Header */}
        <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#090b14]/90 border-b border-white/[0.07] group-hover:brightness-105 transition-all duration-300">
          <MockupComponent />
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <button
                onClick={() => onOpenDetails(project)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 group/btn transition-colors"
                title="View Case Study"
              >
                <span>{t.projects.detailsBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <p className="text-sm text-slate-300/90 leading-relaxed mb-4 line-clamp-3">
              {project.shortDescription[lang] || project.shortDescription.en}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2.5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl text-white bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-200"
            >
              <span>{t.projects.liveDemoBtn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub source for ${project.title}`}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.15] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenDetails(project)}
              className="px-3 py-2 text-xs font-medium rounded-xl text-slate-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-colors"
            >
              {t.projects.caseStudyBtn}
            </button>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
