import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md ${className}`}>
      <button
        onClick={() => setLang('en')}
        className={`relative px-2.5 py-1 text-xs font-mono font-medium rounded-lg transition-colors ${
          lang === 'en' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
        }`}
        aria-label="Switch to English"
      >
        {lang === 'en' && (
          <motion.div
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-blue-600 rounded-lg shadow-sm -z-10"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span>EN</span>
      </button>

      <button
        onClick={() => setLang('kh')}
        className={`relative px-2.5 py-1 text-xs font-sans font-medium rounded-lg transition-colors ${
          lang === 'kh' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
        }`}
        aria-label="Switch to Khmer"
      >
        {lang === 'kh' && (
          <motion.div
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-blue-600 rounded-lg shadow-sm -z-10"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span>ខ្មែរ</span>
      </button>
    </div>
  );
}
