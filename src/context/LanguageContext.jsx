import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const uiTranslations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      statusBadge: "Available for opportunities",
      headlinePrefix: "Building digital experiences that",
      headlineHighlight: "actually work.",
      subheadline: "I'm Taing SiveMinh, a Full-Stack Developer focused on building modern web applications, scalable backends, and useful digital products.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      systemStatus: "system.status",
      online: "Online",
      buildLabel: "BUILD:",
      liveMetrics: "React + Spring Boot + Telegram Webhooks",
    },
    about: {
      badge: "Profile & Ethos",
      title: "About Me",
      subtitlePrefix: "Passionate about turning ideas into",
      subtitleHighlight: "scalable real-world software.",
      tags: {
        cleanArch: "⚡ Clean Architecture",
        prodStability: "🛡️ Production Stability",
        mobileUx: "📱 Mobile First UX",
      },
    },
    services: {
      badge: "Core Capabilities",
      title: "What I Do",
      subtitle: "From zero to production — building high-performance systems and delightful web apps.",
    },
    skills: {
      badge: "Technical Repertoire",
      title: "Skills & Technologies",
      subtitle: "A comprehensive overview of the tools, frameworks, and languages I use to bring ideas to life.",
      allTech: "All Technologies",
      techCount: "Techs",
    },
    projects: {
      badge: "Showcase & Case Studies",
      title: "Featured Projects",
      subtitle: "Production SaaS platforms, enterprise client solutions, and experimental web systems.",
      detailsBtn: "Details",
      caseStudyBtn: "Case Study",
      liveDemoBtn: "Live Demo",
      customCollabTitle: "Looking for a custom web architecture or full-stack solution?",
      customCollabSub: "I can build robust web apps from concept to deployment with clean code and modern standards.",
      letsDiscuss: "Let's Discuss",
      allCat: "All Projects",
      saasCat: "SaaS & Platform",
      fullstackCat: "Full Stack",
      frontendCat: "Frontend & Web",
    },
    modal: {
      overview: "Project Overview",
      problem: "The Problem",
      solution: "The Solution",
      features: "Key Features & Architecture",
      techStack: "Technology Stack Breakdown",
      challenge: "Engineering Challenge",
      results: "Key Outcomes & Results",
      visitLive: "Visit Live Website",
      githubRepo: "GitHub Repository",
      escTip: "Press ESC or click outside to dismiss",
      closeBtn: "Close Case Study",
    },
    journey: {
      badge: "Timeline & Milestones",
      title: "My Journey",
      subtitle: "A progression of consistent learning, engineering craft, and shipping impactful software.",
      presentStage: "Present Stage",
      current: "Current",
    },
    contact: {
      badge: "Get In Touch",
      title: "Have an idea? Let's build it.",
      subtitle: "Whether you want to build a website, SaaS product, or custom web application, feel free to reach out.",
      startConvo: "Start a Conversation",
      emailMe: "Email Me",
      formTitle: "Send a Direct Message",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "e.g. john@example.com",
      messageLabel: "Project or Message",
      messagePlaceholder: "Tell me about your project, timeline, or what you'd like to collaborate on...",
      sendBtn: "Send Message",
      sendingBtn: "Sending message...",
      successTitle: "Message Received!",
      successDesc: "Thank you for reaching out. I've received your details and will get back to you promptly.",
      sendAnother: "Send Another Note",
      responseTime: "Typically responds within 12 - 24 hours.",
      errors: {
        name: "Please enter your name",
        emailReq: "Please enter your email",
        emailInvalid: "Please enter a valid email address",
        message: "Please enter a message",
      },
      copied: "copied to clipboard!",
      msgSentToast: "Message sent successfully! Taing will respond soon.",
    },
    footer: {
      slogan: "Building useful things with code. Focused on full-stack web applications, SaaS platforms, and clean UI engineering.",
      navigation: "Navigation",
      connect: "Connect",
      backToTop: "Back to top",
      copyright: "© 2026 Taing SiveMinh. All rights reserved.",
      designedBy: "Designed & Engineered by",
    }
  },
  kh: {
    nav: {
      home: "ទំព័រដើម",
      about: "អំពីខ្ញុំ",
      services: "សេវាកម្ម",
      skills: "ជំនាញ",
      projects: "គម្រោង",
      experience: "បទពិសោធន៍",
      contact: "ទំនាក់ទំនង",
      letsTalk: "ជជែកគ្នា",
    },
    hero: {
      statusBadge: "ត្រៀមខ្លួនសម្រាប់ឱកាសការងារថ្មីៗ",
      headlinePrefix: "បង្កើតបទពិសោធន៍ឌីជីថលដែល",
      headlineHighlight: "ដំណើរការជាក់ស្តែង & មានប្រសិទ្ធភាព។",
      subheadline: "ខ្ញុំបាទឈ្មោះ តាំង ស៊ីវម៉ិញ (Taing SiveMinh) ជា Full-Stack Developer ដែលផ្តោតលើការបង្កើតគេហទំព័រទំនើប ប្រព័ន្ធ Backend រឹងមាំ និងផលិតផលឌីជីថលដែលមានប្រយោជន៍។",
      viewWork: "មើលស្នាដៃខ្ញុំ",
      contactMe: "ទាក់ទងមកខ្ញុំ",
      systemStatus: "ស្ថានភាពប្រព័ន្ធ",
      online: "កំពុងដំណើរការ",
      buildLabel: "គម្រោងបច្ចុប្បន្ន:",
      liveMetrics: "React + Spring Boot + Telegram Webhooks",
    },
    about: {
      badge: "ប្រវត្តិរូប & គោលជំហរ",
      title: "អំពីខ្ញុំ",
      subtitlePrefix: "ប្តេជ្ញាចិត្តប្រែក្លាយគំនិតច្នៃប្រឌិតទៅជា",
      subtitleHighlight: "កម្មវិធីកុំព្យូទ័រពិតប្រាកដ និងមានគុណភាពខ្ពស់។",
      tags: {
        cleanArch: "⚡ កូដស្អាត មានរចនាសម្ព័ន្ធ",
        prodStability: "🛡️ ស្ថេរភាពខ្ពស់ក្នុងការប្រើប្រាស់",
        mobileUx: "📱 រចនាឡើងល្អឥតខ្ចោះលើទូរស័ព្ទ",
      },
    },
    services: {
      badge: "សមត្ថភាពស្នូល",
      title: "អ្វីដែលខ្ញុំធ្វើ",
      subtitle: "ចាប់ពីគំនិតដំបូងរហូតដល់ការដាក់ឱ្យប្រើប្រាស់ជាក់ស្តែង — បង្កើតប្រព័ន្ធល្បឿនលឿន និងទាក់ទាញ។",
    },
    skills: {
      badge: "ជំនាញបច្ចេកវិទ្យា",
      title: "ជំនាញ & បច្ចេកវិទ្យា",
      subtitle: "បណ្តុំឧបករណ៍ Frameworks និងភាសាសរសេរកូដដែលខ្ញុំប្រើប្រាស់ដើម្បីបង្កើតស្នាដៃឌីជីថល។",
      allTech: "បច្ចេកវិទ្យាទាំងអស់",
      techCount: "បច្ចេកវិទ្យា",
    },
    projects: {
      badge: "ស្នាដៃ & ករណីសិក្សា",
      title: "គម្រោងលេចធ្លោ",
      subtitle: "ប្រព័ន្ធ SaaS ដំណើរការជាក់ស្តែង គេហទំព័រសម្រាប់អាជីវកម្ម និងការពិសោធន៍បច្ចេកវិទ្យាទំនើប។",
      detailsBtn: "ព័ត៌មានលម្អិត",
      caseStudyBtn: "ករណីសិក្សា",
      liveDemoBtn: "មើលគេហទំព័រផ្ទាល់",
      customCollabTitle: "ត្រូវការបង្កើតគេហទំព័រ ឬប្រព័ន្ធ Full-Stack ផ្ទាល់ខ្លួនមែនទេ?",
      customCollabSub: "ខ្ញុំអាចជួយរៀបចំប្រព័ន្ធពីដើមរហូតដល់ដាក់ឱ្យដំណើរការ ដោយប្រើប្រាស់កូដស្អាត និងស្តង់ដារទំនើប។",
      letsDiscuss: "ជជែកពិភាក្សា",
      allCat: "គម្រោងទាំងអស់",
      saasCat: "ប្រព័ន្ធ SaaS & Platform",
      fullstackCat: "Full Stack",
      frontendCat: "Frontend & Web",
    },
    modal: {
      overview: "ទិដ្ឋភាពទូទៅនៃគម្រោង",
      problem: "បញ្ហាដែលជួបប្រទះ",
      solution: "ដំណោះស្រាយដែលបានបង្កើត",
      features: "មុខងារសំខាន់ៗ & រចនាសម្ព័ន្ធ",
      techStack: "ការបែងចែកបច្ចេកវិទ្យាដែលបានប្រើ",
      challenge: "បញ្ហាប្រឈមផ្នែកបច្ចេកទេស",
      results: "លទ្ធផល និងសមិទ្ធផលទទួលបាន",
      visitLive: "ចូលទៅកាន់គេហទំព័រផ្ទាល់",
      githubRepo: "កូដប្រភព GitHub",
      escTip: "ចុច ESC ឬចុចខាងក្រៅដើម្បីបិទ",
      closeBtn: "បិទផ្ទាំងករណីសិក្សា",
    },
    journey: {
      badge: "ដំណើរវិវត្តន៍ & សមិទ្ធផល",
      title: "ដំណើរនៃការអភិវឌ្ឍ",
      subtitle: "ដំណើរនៃការរៀនសូត្រឥតឈប់ឈរ ការកសាងជំនាញវិស្វកម្មកូដ និងការបញ្ចេញផលិតផលជាក់ស្តែង។",
      presentStage: "ដំណាក់កាលបច្ចុប្បន្ន",
      current: "បច្ចុប្បន្ន",
    },
    contact: {
      badge: "ទំនាក់ទំនង",
      title: "មានគំនិតចង់បង្កើតមែនទេ? ចូរចាប់ផ្តើមជាមួយគ្នា។",
      subtitle: "មិនថាអ្នកចង់បង្កើតគេហទំព័រ ប្រព័ន្ធ SaaS ឬកម្មវិធី Web Application ផ្ទាល់ខ្លួនទេ សូមទាក់ទងមកខ្ញុំដោយសេរី។",
      startConvo: "ចាប់ផ្តើមជជែកតាម Telegram",
      emailMe: "ផ្ញើអ៊ីមែលមកខ្ញុំ",
      formTitle: "ផ្ញើសារមកកាន់ខ្ញុំដោយផ្ទាល់",
      nameLabel: "ឈ្មោះរបស់អ្នក",
      namePlaceholder: "ឧទាហរណ៍៖ សុខ ចាន់",
      emailLabel: "អាសយដ្ឋានអ៊ីមែល",
      emailPlaceholder: "ឧទាហរណ៍៖ sokchan@example.com",
      messageLabel: "គម្រោង ឬសាររបស់អ្នក",
      messagePlaceholder: "សូមប្រាប់អំពីគម្រោងរបស់អ្នក រយៈពេល ឬអ្វីដែលអ្នកចង់សហការ...",
      sendBtn: "ផ្ញើសារឥឡូវនេះ",
      sendingBtn: "កំពុងផ្ញើសារ...",
      successTitle: "ទទួលបានសាររបស់អ្នកហើយ!",
      successDesc: "សូមអរគុណសម្រាប់ការទាក់ទងមកកាន់ខ្ញុំ។ ខ្ញុំបានទទួលព័ត៌មានរបស់អ្នកហើយ នឹងឆ្លើយតបទៅវិញយ៉ាងឆាប់រហ័ស។",
      sendAnother: "ផ្ញើសារថ្មីមួយទៀត",
      responseTime: "ជាធម្មតាឆ្លើយតបក្នុងចន្លោះ ១២ - ២៤ ម៉ោង។",
      errors: {
        name: "សូមបញ្ចូលឈ្មោះរបស់អ្នក",
        emailReq: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែល",
        emailInvalid: "សូមបញ្ចូលអ៊ីមែលឱ្យបានត្រឹមត្រូវ",
        message: "សូមបញ្ចូលសាររបស់អ្នក",
      },
      copied: "បានចម្លងទៅ Clipboard រួចរាល់!",
      msgSentToast: "សារត្រូវបានផ្ញើដោយជោគជ័យ! ស៊ីវម៉ិញ នឹងឆ្លើយតបមកវិញក្នុងពេលឆាប់ៗ។",
    },
    footer: {
      slogan: "បង្កើតអ្វីដែលមានប្រយោជន៍តាមរយៈកូដ។ ផ្តោតលើកម្មវិធី Full-Stack Web, ប្រព័ន្ធ SaaS និងការរចនា UI ទំនើប។",
      navigation: "ម៉ឺនុយរហ័ស",
      connect: "បណ្តាញសង្គម",
      backToTop: "ត្រឡប់ទៅខាងលើ",
      copyright: "© ២០២៦ តាំង ស៊ីវម៉ិញ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
      designedBy: "រចនា & អភិវឌ្ឍដោយ",
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('tsmdev_lang') || 'en';
  });

  const toggleLanguage = (newLang) => {
    const selected = newLang || (lang === 'en' ? 'kh' : 'en');
    setLang(selected);
    localStorage.setItem('tsmdev_lang', selected);
  };

  const t = uiTranslations[lang] || uiTranslations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang: toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
