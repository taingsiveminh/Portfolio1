import React from 'react';
import { ArrowUp, Github, Linkedin, Send, Facebook } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.experience, href: '#journey' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080d] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          
          {/* Brand & Slogan */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white font-bold text-sm shadow-md shadow-blue-500/20">
                <span>TSM</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {personalInfo.alias}
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.footer.slogan}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
              {t.footer.navigation}
            </span>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-slate-300">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to top */}
          <div className="space-y-3 flex flex-col items-center md:items-end">
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
              {t.footer.connect}
            </span>
            
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl text-slate-400 hover:text-blue-400 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-2.5 rounded-xl text-slate-400 hover:text-cyan-400 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl text-slate-400 hover:text-blue-400 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors pt-1"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.footer.copyright}</p>
          <p className="flex items-center gap-1">
            {t.footer.designedBy} <span className="text-slate-300 font-medium">TSMDev</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
