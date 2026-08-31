export const projectCategories = [
  { id: "all", label: { en: "All Projects", kh: "គម្រោងទាំងអស់" } },
  { id: "saas", label: { en: "SaaS & Platform", kh: "ប្រព័ន្ធ SaaS" } },
  { id: "fullstack", label: { en: "Full Stack", kh: "Full Stack" } },
  { id: "frontend", label: { en: "Frontend & Web", kh: "Frontend & Web" } }
];

export const projectsData = [
  {
    id: "goshope",
    title: "GoShope",
    category: "saas",
    badge: {
      en: "Flagship SaaS Platform",
      kh: "ប្រព័ន្ធ SaaS ឈានមុខ",
    },
    shortDescription: {
      en: "A full-stack SaaS platform that empowers merchants and businesses to launch automated online storefronts with instant Telegram notifications and ABA PayWay checkout integration.",
      kh: "ប្រព័ន្ធ SaaS បង្កើតហាងអនឡាញស្វ័យប្រវត្តិ ភ្ជាប់ការជូនដំណឹងតាម Telegram ភ្លាមៗ និងប្រព័ន្ធទូទាត់ប្រាក់ ABA PayWay។",
    },
    tech: ["React", "JavaScript", "Spring Boot", "MySQL", "Telegram Bot API", "ABA PayWay", "Tailwind CSS"],
    liveUrl: "https://goshope.site",
    githubUrl: "https://github.com/tsmdev/goshope-platform",
    featured: true,
    accentColor: "blue",
    stats: {
      merchants: "100+ Orders Processed",
      speed: "< 300ms API Latency",
      reliability: "99.9% Uptime"
    },
    overview: {
      en: "GoShope was engineered to bridge the gap between complex e-commerce systems and instant messaging commerce in Southeast Asia. It enables shop owners to configure an interactive storefront in minutes, process payments securely through ABA PayWay, and receive real-time order alerts directly inside their Telegram channels.",
      kh: "GoShope ត្រូវបានបង្កើតឡើងដើម្បីសម្រួលដល់ការលក់ទំនិញតាមអនឡាញ ដោយអនុញ្ញាតឱ្យម្ចាស់អាជីវកម្មបង្កើតហាងឌីជីថលបានយ៉ាងរហ័ស ទទួលការទូទាត់តាម ABA PayWay និងទទួលបានការជូនដំណឹងពីការកុម្ម៉ង់ចូល Telegram Bot ផ្ទាល់ភ្លាមៗ។",
    },
    problem: {
      en: "Small business owners often struggle with cumbersome checkout flows and delayed notifications, losing high-intent customers who prefer instant payment confirmation and direct messaging.",
      kh: "អាជីវកម្មខ្នាតតូច និងមធ្យមតែងជួបការលំបាកក្នុងការគ្រប់គ្រងការបញ្ជាទិញយឺតយ៉ាវ និងបាត់បង់អតិថិជនដោយសារប្រព័ន្ធស្មុគស្មាញ។",
    },
    solution: {
      en: "A lightweight, mobile-first SaaS web application with automated Telegram bot dispatchers, streamlined customer checkout, and automated ABA PayWay QR payment verification.",
      kh: "គេហទំព័រ SaaS ល្បឿនលឿន ងាយស្រួលបញ្ជាទិញលើទូរស័ព្ទដៃ ផ្ទៀងផ្ទាត់ QR Code ស្វ័យប្រវត្តិ និងបញ្ជូនទិន្នន័យទៅកាន់ Telegram ភ្លាមៗ។",
    },
    keyFeatures: {
      en: [
        "Real-time instant Telegram order dispatching with automated customer details & cart summary",
        "ABA PayWay QR integration for seamless local cashless payments",
        "Dynamic merchant product management dashboard with inventory and status tracking",
        "Optimized mobile shopping cart UX built for high conversion on social traffic",
        "Lightweight responsive frontend with fast server-side response times"
      ],
      kh: [
        "ប្រព័ន្ធជូនដំណឹងការបញ្ជាទិញភ្លាមៗតាម Telegram Bot ជាមួយព័ត៌មានលម្អិតនៃទំនិញ",
        "ការទូទាត់ប្រាក់ងាយស្រួលតាមរយៈ ABA PayWay QR Code",
        "ផ្ទាំងគ្រប់គ្រងទំនិញ និងស្តុកសម្រាប់ម្ចាស់ហាង (Merchant Dashboard)",
        "រចនាបទកន្ត្រកទំនិញទំនើប រហ័ស និងងាយស្រួលប្រើលើទូរស័ព្ទដៃ",
        "Frontend ល្បឿនលឿន និង Backend មានប្រសិទ្ធភាពឆ្លើយតបខ្ពស់"
      ]
    },
    techStackDetails: {
      frontend: "React 18, Tailwind CSS, Lucide Icons, Responsive Mobile First Design",
      backend: "Java Spring Boot REST API, Hibernate / Spring Data JPA",
      database: "MySQL with indexed queries & connection pooling",
      integrations: "Telegram Bot API Webhooks, ABA PayWay Checkout Gateway",
      hosting: "Vercel (Frontend) + Railway (Backend)"
    },
    challenges: {
      en: "Handling real-time webhook verifications reliably while ensuring zero missed customer orders during high traffic bursts.",
      kh: "ការគ្រប់គ្រង Webhook ទូទាត់ប្រាក់ និងបញ្ជូនសារ Telegram ក្នុងពេលដំណាលគ្នាក្នុងល្បឿនខ្ពស់ និងសុវត្ថិភាព 100%។",
    },
    results: {
      en: "Built and deployed a fully functional, production-ready SaaS product with lightning fast checkout and frictionless merchant alerts.",
      kh: "បានដាក់ឱ្យដំណើរការប្រព័ន្ធ SaaS ពេញលេញមួយដែលមានល្បឿនលឿន និងជួយសម្រួលដល់ដំណើរការលក់របស់អាជីវកម្មយ៉ាងមានប្រសិទ្ធភាព។",
    }
  },
  {
    id: "tsm-solutions",
    title: "TSM Solutions",
    category: "frontend",
    badge: {
      en: "Digital Services Agency",
      kh: "វេទិកាសេវាកម្មឌីជីថល",
    },
    shortDescription: {
      en: "A modern digital solutions platform built to showcase cutting-edge web design, software consulting services, and tech agency capabilities.",
      kh: "វេទិកាបង្ហាញសេវាកម្មឌីជីថលទំនើប ការរចនាគេហទំព័រកម្រិតខ្ពស់ និងការប្រឹក្សាយោបល់ផ្នែកបច្ចេកវិទ្យា។",
    },
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel", "Framer Motion"],
    liveUrl: "https://www.tsmsolutions.site",
    githubUrl: "https://github.com/tsmdev/tsm-solutions",
    featured: true,
    accentColor: "purple",
    stats: {
      performance: "100/100 Lighthouse",
      design: "Custom Micro-interactions",
      status: "Live in Production"
    },
    overview: {
      en: "TSM Solutions serves as the professional digital presence for software and web services, demonstrating clean typography, responsive layout techniques, and high-impact visual design.",
      kh: "TSM Solutions បម្រើជាគេហទំព័រផ្លូវការសម្រាប់បង្ហាញសមត្ថភាពសេវាកម្មបច្ចេកវិទ្យា ដោយរួមបញ្ចូលការរចនាបែបទំនើប និងល្បឿនផ្ទុកលឿនបំផុត។",
    },
    problem: {
      en: "Agencies need an authoritative digital showcase that immediately communicates technological competency, speed, and modern aesthetics to potential enterprise clients.",
      kh: "តម្រូវការគេហទំព័រដែលឆ្លុះបញ្ចាំងពីវិជ្ជាជីវៈខ្ពស់ ទំនើប និងទាក់ទាញចិត្តអតិថិជនសហគ្រាសភ្លាមៗនៅពេលចូលមើល។",
    },
    solution: {
      en: "Developed a sleek, dark-themed responsive website featuring interactive service showcases, case studies, and streamlined contact pipelines.",
      kh: "អភិវឌ្ឍគេហទំព័រ Dark Theme បែប Futuristic ជាមួយចលនាគំនូរជីវចលរលូន និងទម្រង់ទំនាក់ទំនងងាយស្រួល។",
    },
    keyFeatures: {
      en: [
        "High-end modern glassmorphic interface with fluid responsiveness",
        "Interactive service catalog with animated visual cards",
        "Direct consultation booking and client intake workflows",
        "SEO-optimized semantic architecture with lightning-fast load times"
      ],
      kh: [
        "រចនាបទ Glassmorphic បែបទំនើប និងដំណើរការស្រួលលើគ្រប់អេក្រង់",
        "កាតសេវាកម្មអន្តរកម្មជាមួយចលនា Animation ទាក់ទាញ",
        "ទម្រង់ពិគ្រោះយោបល់ និងទំនាក់ទំនងរហ័ស",
        "រៀបចំរចនាសម្ព័ន្ធ SEO ត្រឹមត្រូវ និងល្បឿនផ្ទុកលឿន 100/100"
      ]
    },
    techStackDetails: {
      frontend: "React, Modern ES6+, Tailwind CSS",
      animations: "Framer Motion layout transitions",
      hosting: "Vercel Edge Network with global CDN caching"
    },
    challenges: {
      en: "Achieving top-tier visual polish and subtle particle animations without compromising 60 FPS scroll performance.",
      kh: "រក្សាភាពរលូននៃការ Scroll កម្រិត 60 FPS ទោះបីជាមានចលនា Graphic និងពន្លឺ Glow ច្រើនក៏ដោយ។",
    },
    results: {
      en: "Launched a high-converting portfolio and service hub with 100% responsive reliability across mobile and ultra-wide screens.",
      kh: "បញ្ចេញគេហទំព័រប្រកបដោយភាពទាក់ទាញខ្ពស់ និងដំណើរការល្អឥតខ្ចោះលើគ្រប់ទំហំអេក្រង់។",
    }
  },
  {
    id: "ygh-agric",
    title: "YGH AGRIC",
    category: "frontend",
    badge: {
      en: "AgriTech Showcase",
      kh: "កាតាឡុកកសិកម្មទំនើប",
    },
    shortDescription: {
      en: "A modern agricultural platform designed to present agro-industrial products, sustainable farming services, and regional business operations online.",
      kh: "គេហទំព័របង្ហាញផលិតផលកសិកម្មទំនើប សេវាកម្មកសិឧស្សាហកម្ម និងព័ត៌មានផ្គត់ផ្គង់តាមអនឡាញ។",
    },
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    liveUrl: "https://ygh-agric.vercel.app",
    githubUrl: "https://github.com/tsmdev/ygh-agric",
    featured: true,
    accentColor: "emerald",
    stats: {
      seo: "Optimized Catalog",
      responsiveness: "Mobile-First",
      assetLoad: "Optimized Imagery"
    },
    overview: {
      en: "YGH AGRIC brings traditional agricultural commerce into the modern web era with an accessible, content-rich digital product catalog.",
      kh: "YGH AGRIC ជួយលើកកម្ពស់វិស័យពាណិជ្ជកម្មកសិកម្មតាមរយៈកាតាឡុកឌីជីថលដែលងាយស្រួលស្វែងរក និងទាក់ទាញ។",
    },
    problem: {
      en: "Agricultural suppliers frequently lack accessible online platforms where regional partners and buyers can inspect technical specifications and product lines.",
      kh: "អ្នកផ្គត់ផ្គង់កសិកម្មខ្វះគេហទំព័រដែលដៃគូអាជីវកម្ម និងអតិថិជនអាចពិនិត្យមើលលក្ខណៈបច្ចេកទេស និងមុខទំនិញបានច្បាស់លាស់។",
    },
    solution: {
      en: "Designed a clean, content-first web portal with organized product categories, supplier contact channels, and crisp imagery.",
      kh: "រចនាគេហទំព័រដែលផ្តល់អាទិភាពលើខ្លឹមសារច្បាស់លាស់ បែងចែកប្រភេទផលិតផលងាយស្រួលមើល និងមានបណ្តាញទាក់ទងលឿន។",
    },
    keyFeatures: {
      en: [
        "Organized agricultural product hierarchy with clear spec breakdowns",
        "Mobile-friendly navigation crafted for rural and desktop networks alike",
        "Fast-loading optimized assets with zero render-blocking dependencies",
        "Integrated inquiry forms for wholesale distribution"
      ],
      kh: [
        "ការរៀបចំកាតាឡុកផលិតផលកសិកម្មតាមលំដាប់លំដោយច្បាស់លាស់",
        "ដំណើរការរលូនទោះបីជាស្ថិតនៅលើបណ្តាញអ៊ីនធឺណិតល្បឿនមធ្យមក៏ដោយ",
        "រូបភាព និងទិន្នន័យត្រូវបាន Optimize ឱ្យផ្ទុកលឿន",
        "ទម្រង់សាកសួរតម្លៃ និងការទិញដុំងាយស្រួល"
      ]
    },
    techStackDetails: {
      core: "Semantic HTML5, Modular CSS3 Grid & Flexbox, Vanilla JavaScript",
      deployment: "Vercel with automatic CI/CD deployment hooks"
    },
    challenges: {
      en: "Structuring large volumes of agricultural technical data into digestible, intuitive UI components.",
      kh: "ការរៀបចំប្លង់ទិន្នន័យបច្ចេកទេសកសិកម្មដ៏ច្រើនឱ្យក្លាយជា Interface ងាយយល់ និងងាយស្រួលមើល។",
    },
    results: {
      en: "Delivered a clean, lightweight, highly responsive digital catalog adopted by stakeholders for client presentations.",
      kh: "ទទួលបានគេហទំព័រកាតាឡុកដ៏ស្រស់ស្អាត ស្រាល និងប្រើប្រាស់ជាផ្លូវការក្នុងការធ្វើបទបង្ហាញទៅកាន់អតិថិជន។",
    }
  },
  {
    id: "minh-web-fun",
    title: "Minh Web Fun",
    category: "fullstack",
    badge: {
      en: "Interactive Lab & Experiments",
      kh: "មន្ទីរពិសោធន៍កូដច្នៃប្រឌិត",
    },
    shortDescription: {
      en: "A personal creative web laboratory showcasing experimental UI components, interactive web mechanics, and novel frontend algorithms.",
      kh: "កន្លែងពិសោធន៍គំនិត UI ច្នៃប្រឌិតថ្មីៗ ក្បួន Animation និងមុខងារ Web អន្តរកម្ម។",
    },
    tech: ["React", "JavaScript", "CSS Animations", "Vercel"],
    liveUrl: "https://minhwebfun.vercel.app",
    githubUrl: "https://github.com/tsmdev/minh-web-fun",
    featured: false,
    accentColor: "cyan",
    stats: {
      demos: "Interactive Modules",
      creative: "100% Custom Animations",
      testing: "Frontend Sandbox"
    },
    overview: {
      en: "A playground where new web design ideas, canvas experiments, and interactive user experiences are tested, iterated on, and open-sourced.",
      kh: "កន្លែងពិសោធន៍ និងអភិវឌ្ឍគំនិតច្នៃប្រឌិតថ្មីៗមុនពេលយកទៅអនុវត្តលើគម្រោងពិតប្រាកដ។",
    },
    problem: {
      en: "Learning complex UI engineering patterns requires a low-stakes sandbox to rapidly prototype novel interaction models.",
      kh: "ការរៀនបច្ចេកទេស UI ស្មុគស្មាញត្រូវការកន្លែងសាកល្បងដោយសេរី និងឆាប់រហ័ស។",
    },
    solution: {
      en: "Created an interactive web lab featuring interactive mini-apps, game loops, CSS art, and state management experiments.",
      kh: "បង្កើត Web Lab ផ្ទាល់ខ្លួនដែលមាន Mini-apps, Canvas animations និងការពិសោធន៍ State Management។",
    },
    keyFeatures: {
      en: [
        "Collection of interactive UI widgets and micro-interactions",
        "Creative experiments in JavaScript animation and state triggers",
        "Live sandbox for testing performance of new CSS paradigms",
        "Clean modular code structure for reusable component extraction"
      ],
      kh: [
        "បណ្តុំ UI Widgets អន្តរកម្ម និង Micro-interactions",
        "ការពិសោធន៍ចលនា JavaScript Animation",
        "ការធ្វើតេស្តល្បឿនដំណើរការនៃ CSS ទំនើបៗ",
        "រចនាសម្ព័ន្ធកូដដាច់ដោយឡែក ងាយស្រួលទាញយកទៅប្រើឡើងវិញ"
      ]
    },
    techStackDetails: {
      frontend: "React, Modern JavaScript, Custom CSS Animations",
      deployment: "Vercel Edge"
    },
    challenges: {
      en: "Building custom interactive state animations without relying on heavy external runtime libraries.",
      kh: "ការបង្កើតចលនា Animation ដោយមិនពឹងផ្អែកលើ Library ធ្ងន់ៗ ដើម្បីរក្សាល្បឿនលឿន។",
    },
    results: {
      en: "Serves as an active testing ground for UI concepts that eventually graduate into flagship client and SaaS applications.",
      kh: "ក្លាយជាមូលដ្ឋានគ្រឹះក្នុងការបង្កើត UI ស្អាតៗសម្រាប់គម្រោងធំៗដូចជា GoShope និង TSM Solutions។",
    }
  }
];
