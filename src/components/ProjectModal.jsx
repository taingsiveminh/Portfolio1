import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Sparkles, Cpu, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectModal({ project, isOpen, onClose }) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!project) return null;

  const currentFeatures = project.keyFeatures[lang] || project.keyFeatures.en || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0e17] border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden flex flex-col my-auto"
          >
            {/* Header / Banner */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border-b border-white/[0.08]">
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors border border-white/[0.08]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  {project.badge[lang] || project.badge.en}
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] text-slate-400 border border-white/[0.08] capitalize">
                  {project.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                {project.shortDescription[lang] || project.shortDescription.en}
              </p>

              {/* Quick links header */}
              <div className="flex flex-wrap items-center gap-3 mt-5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-all"
                >
                  <span>{t.modal.visitLive}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.modal.githubRepo}</span>
                </a>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-white/[0.06]">
              {/* Overview Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm tracking-wide uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>{t.modal.overview}</span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.overview[lang] || project.overview.en}
                </p>
              </div>

              {/* Problem vs Solution Grid */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-xl bg-rose-500/[0.04] border border-rose-500/20">
                  <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{t.modal.problem}</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.problem[lang] || project.problem.en}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t.modal.solution}</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.solution[lang] || project.solution.en}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm tracking-wide uppercase">
                  <Layers className="w-4 h-4" />
                  <span>{t.modal.features}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Details */}
              {project.techStackDetails && (
                <div className="pt-6 space-y-4">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm tracking-wide uppercase">
                    <Cpu className="w-4 h-4" />
                    <span>{t.modal.techStack}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {Object.entries(project.techStackDetails).map(([key, value]) => (
                      <div key={key} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-slate-400 uppercase tracking-wider font-mono font-medium block mb-1">
                          {key}
                        </span>
                        <span className="text-slate-200 font-sans font-medium">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Results */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-xs font-mono font-semibold text-amber-400 block mb-1.5">
                    {t.modal.challenge}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.challenges[lang] || project.challenges.en}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-xs font-mono font-semibold text-blue-400 block mb-1.5">
                    {t.modal.results}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.results[lang] || project.results.en}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 bg-[#090b14] border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                {t.modal.escTip}
              </span>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2 text-xs font-semibold rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white transition-colors ml-auto"
              >
                {t.modal.closeBtn}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
