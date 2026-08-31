import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MessageSquare, 
  ArrowRight,
  CheckCircle2,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import GlowCard from '../components/GlowCard';

export default function Contact({ onShowToast }) {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key, label) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onShowToast(`${label} ${t.contact.copied}`);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.contact.errors.name;
    if (!formData.email.trim()) {
      newErrors.email = t.contact.errors.emailReq;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.contact.errors.emailInvalid;
    }
    if (!formData.message.trim()) newErrors.message = t.contact.errors.message;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981']
        });
      } catch (err) {}

      onShowToast(t.contact.msgSentToast);
      setFormData({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto" />
        </div>

        {/* Dual Column Layout: Info Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Shortcuts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={personalInfo.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.startConvo}</span>
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{t.contact.emailMe}</span>
              </a>
            </div>

            {/* Contact Channels Card List */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Email</span>
                    <span className="text-sm font-medium text-white select-all">
                      {personalInfo.contact.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.contact.email, 'email', 'Email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                  title="Copy email"
                >
                  {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Telegram Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between group hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Telegram</span>
                    <span className="text-sm font-medium text-white select-all">
                      {personalInfo.contact.telegram}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.contact.telegram, 'telegram', 'Telegram')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                  title="Copy telegram"
                >
                  {copiedKey === 'telegram' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between group hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">GitHub</span>
                    <span className="text-sm font-medium text-white select-all">
                      {personalInfo.contact.github}
                    </span>
                  </div>
                </div>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">LinkedIn</span>
                    <span className="text-sm font-medium text-white select-all">
                      {personalInfo.contact.linkedin}
                    </span>
                  </div>
                </div>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Status Note */}
            <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 text-xs text-slate-300 flex items-center gap-3">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.contact.responseTime}</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlowCard glowColor="blue" className="p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] transition-colors"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t.contact.formTitle}
                  </h3>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono font-medium text-slate-300">
                      {t.contact.nameLabel} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-input text-white text-sm placeholder-slate-500 outline-none transition-all ${
                        errors.name ? 'border-rose-500/50 focus:border-rose-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono font-medium text-slate-300">
                      {t.contact.emailLabel} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-input text-white text-sm placeholder-slate-500 outline-none transition-all ${
                        errors.email ? 'border-rose-500/50 focus:border-rose-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 font-mono">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-medium text-slate-300">
                      {t.contact.messageLabel} <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-input text-white text-sm placeholder-slate-500 outline-none transition-all resize-none ${
                        errors.message ? 'border-rose-500/50 focus:border-rose-500' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-600/25 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t.contact.sendingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.sendBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlowCard>
          </div>

        </div>

      </div>
    </section>
  );
}
