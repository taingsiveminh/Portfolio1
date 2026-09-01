import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Command, 
  ExternalLink, 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Copy, 
  Globe, 
  Layers, 
  Code2, 
  User, 
  Briefcase, 
  Compass, 
  X,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { projectsData } from '../data/projectsData';

export default function CommandPalette({ isOpen, onClose, onShowToast }) {
  const { lang, setLang, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);

  // Global keydown for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
          // trigger open in parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopy = (text, key, label) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onShowToast(`${label} copied to clipboard!`);
    setTimeout(() => {
      setCopiedKey(null);
      onClose();
    }, 1200);
  };

  const navigateTo = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const commands = [
    // Navigation
    { id: 'nav-home', label: lang === 'kh' ? 'ទៅកាន់ទំព័រដើម' : 'Go to Home', group: 'Navigation', icon: User, action: () => navigateTo('home') },
    { id: 'nav-about', label: lang === 'kh' ? 'អំពីខ្ញុំ & ប្រវត្តិ' : 'About & Background', group: 'Navigation', icon: User, action: () => navigateTo('about') },
    { id: 'nav-services', label: lang === 'kh' ? 'សេវាកម្ម & សមត្ថភាព' : 'Services & Skills', group: 'Navigation', icon: Layers, action: () => navigateTo('services') },
    { id: 'nav-projects', label: lang === 'kh' ? 'មើលគម្រោងទាំងអស់' : 'Featured Projects', group: 'Navigation', icon: Briefcase, action: () => navigateTo('projects') },
    { id: 'nav-journey', label: lang === 'kh' ? 'ដំណើរវិវត្តន៍ (Timeline)' : 'Journey & Timeline', group: 'Navigation', icon: Compass, action: () => navigateTo('journey') },
    { id: 'nav-contact', label: lang === 'kh' ? 'ទំនាក់ទំនង' : 'Contact Me', group: 'Navigation', icon: Mail, action: () => navigateTo('contact') },

    // Projects Quick Launch
    ...projectsData.map(p => ({
      id: `proj-${p.id}`,
      label: `${p.title} (${p.category})`,
      sub: p.shortDescription[lang] || p.shortDescription.en,
      group: 'Projects',
      icon: ExternalLink,
      action: () => {
        window.open(p.liveUrl, '_blank');
        onClose();
      }
    })),

    // Actions & Contacts
    { id: 'act-email', label: `Copy Email (${personalInfo.contact.email})`, group: 'Quick Actions', icon: Mail, action: () => handleCopy(personalInfo.contact.email, 'email', 'Email') },
    { id: 'act-telegram', label: `Copy Telegram (${personalInfo.contact.telegram})`, group: 'Quick Actions', icon: Send, action: () => handleCopy(personalInfo.contact.telegram, 'telegram', 'Telegram') },
    { id: 'act-lang', label: lang === 'en' ? 'Switch to ភាសាខ្មែរ (Khmer)' : 'Switch to English', group: 'Language', icon: Globe, action: () => { setLang(lang === 'en' ? 'kh' : 'en'); onClose(); } },
  ];

  const filteredCommands = query.trim() === ''
    ? commands
    : commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()) || (c.sub && c.sub.toLowerCase().includes(query.toLowerCase())));

  const grouped = filteredCommands.reduce((acc, item) => {
    acc[item.group] = acc[item.group] || [];
    acc[item.group].push(item);
    return acc;
  }, {});

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', damping: 26, stiffness: 350 }}
            className="relative w-full max-w-xl bg-[#0d101a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden shadow-blue-500/10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-[#090b14]">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder={lang === 'kh' ? 'វាយពាក្យស្វែងរក ឬបញ្ជា...' : 'Type a command, project, or search...'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-white text-sm outline-none placeholder-slate-500"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:text-white bg-white/[0.04]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
              {Object.keys(grouped).length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-400 font-mono">
                  No matching results found.
                </div>
              ) : (
                Object.entries(grouped).map(([groupName, items]) => (
                  <div key={groupName} className="space-y-1">
                    <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-medium">
                      {groupName}
                    </div>
                    <div className="space-y-0.5">
                      {items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.id}
                            onClick={item.action}
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm text-slate-300 hover:text-white hover:bg-blue-600/15 hover:border-blue-500/30 border border-transparent transition-all group"
                          >
                            <div className="flex items-center gap-3 truncate">
                              <div className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="truncate">
                                <span className="font-medium">{item.label}</span>
                                {item.sub && (
                                  <span className="block text-[11px] text-slate-400 truncate">
                                    {item.sub}
                                  </span>
                                )}
                              </div>
                            </div>
                            <span className="text-[11px] text-slate-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                              Jump ↵
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer helper */}
            <div className="px-4 py-2.5 bg-[#090b14] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Navigation & Actions</span>
              <div className="flex items-center gap-2">
                <span>ESC to close</span>
                <span>•</span>
                <span>⌘K to trigger</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
