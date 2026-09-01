import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import WhatIDo from './sections/WhatIDo';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toastState, setToastState] = useState({ visible: false, message: '', type: 'success' });
  const { lang } = useLanguage();

  // Scroll Spy for active section
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'skills', 'projects', 'journey', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const showToast = (message, type = 'success') => {
    setToastState({ visible: true, message, type });
    setTimeout(() => {
      setToastState((prev) => ({ ...prev, visible: false }));
    }, 3500);
  };

  return (
    <div className={`relative min-h-screen bg-[#08090d] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200 ${lang === 'kh' ? 'font-khmer' : 'font-sans'}`}>
      {/* Ambient background particles & grid */}
      <BackgroundGrid />

      {/* Glassmorphic Navbar with Command Palette search */}
      <Navbar
        activeSection={activeSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onShowToast={showToast}
        />
        <About />
        <WhatIDo />
        <Skills />
        <Projects onOpenModal={handleOpenModal} />
        <Journey />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Interactive Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onShowToast={showToast}
      />

      {/* Global Toast Feedback */}
      <Toast
        message={toastState.message}
        isVisible={toastState.visible}
        type={toastState.type}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
