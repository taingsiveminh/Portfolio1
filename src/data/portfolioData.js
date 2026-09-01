export const personalInfo = {
  name: "Taing SiveMinh",
  nameKh: "តាំង ស៊ីវម៉ិញ",
  alias: "TSMDev",
  role: {
    en: "Full-Stack Developer & CS Student",
    kh: "អ្នកអភិវឌ្ឍន៍ Full-Stack & និស្សិត IT",
  },
  location: {
    city: "Phnom Penh",
    country: "Cambodia",
    cityKh: "រាជធានីភ្នំពេញ",
    countryKh: "កម្ពុជា",
    timezone: "Asia/Phnom_Penh",
    gmt: "GMT+7"
  },
  availability: {
    status: "Available for internships & freelance",
    statusKh: "បើកទទួលការងារ កម្មសិក្សា & Freelance",
    badge: "Available for Hire",
    badgeKh: "បើកទទួលគម្រោងថ្មីៗ"
  },
  headline: {
    en: "Crafting reliable full-stack web applications & practical SaaS products.",
    kh: "បង្កើតកម្មវិធី Web Full-Stack ដែលរឹងមាំ និងផលិតផល SaaS ដែលមានប្រសិទ្ធភាពខ្ពស់។",
  },
  subheadline: {
    en: "I'm Taing SiveMinh, a 20-year-old Computer Science student and software builder from Phnom Penh. I specialize in React, Java Spring Boot, MySQL, and cloud deployments.",
    kh: "ខ្ញុំបាទឈ្មោះ តាំង ស៊ីវម៉ិញ អាយុ ២០ ឆ្នាំ ជានិស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រនៅរាជធានីភ្នំពេញ។ ខ្ញុំជំនាញលើ React, Java Spring Boot, MySQL និងការ Deploy លើ Cloud។",
  },
  currentFocus: {
    project: "GoShope SaaS",
    description: {
      en: "Automated e-commerce storefronts with ABA PayWay checkout & instant Telegram dispatchers.",
      kh: "ប្រព័ន្ធលក់ទំនិញស្វ័យប្រវត្តិ ភ្ជាប់ការទូទាត់ ABA PayWay និងការបញ្ជូនសារ Telegram។",
    },
    stack: ["Spring Boot", "React", "MySQL", "Telegram API", "ABA PayWay"],
    status: "In Active Production"
  },
  bio: {
    en: [
      "I started coding in 2023 driven by a curiosity to understand how software powers everyday services. Over the last 3 years, I've transitioned from crafting responsive frontends to designing full-stack architectures with Java Spring Boot, relational databases, and payment APIs.",
      "I believe great software isn't just about flashy visuals — it's about predictable latency, rock-solid reliability, clean database schemas, and solving real user friction."
    ],
    kh: [
      "ខ្ញុំបានចាប់ផ្តើមរៀនសរសេរកូដនៅឆ្នាំ ២០២៣ ដោយសារការចង់ដឹងពីរបៀបដែលប្រព័ន្ធកុំព្យូទ័រដំណើរការ។ ក្នុងរយៈពេល ៣ ឆ្នាំនេះ ខ្ញុំបានអភិវឌ្ឍពីការរចនា Frontend រហូតដល់ការរៀបចំប្រព័ន្ធ Full-Stack ជាមួយ Spring Boot, Database និង Payment Gateways។",
      "ខ្ញុំជឿជាក់ថាកម្មវិធីល្អមិនមែនគ្រាន់តែមើលទៅស្អាតនោះទេ ប៉ុន្តែត្រូវមានល្បឿនលឿន មានសុវត្ថិភាព ស្ថេរភាពខ្ពស់ និងដោះស្រាយបញ្ហាជាក់ស្តែងរបស់អ្នកប្រើប្រាស់។"
    ]
  },
  stats: [
    {
      value: "20",
      label: { en: "Years Old", kh: "អាយុ ២០ ឆ្នាំ" },
      detail: { en: "Born 2006 • Based in Phnom Penh", kh: "កើតឆ្នាំ ២០០៦ • នៅភ្នំពេញ" }
    },
    {
      value: "10+",
      label: { en: "Shipped Projects", kh: "គម្រោងបានបញ្ចប់ ១០+" },
      detail: { en: "Production SaaS, Client Portals & Web Apps", kh: "ប្រព័ន្ធ SaaS, គេហទំព័រអាជីវកម្ម & Web Apps" }
    },
    {
      value: "3+",
      label: { en: "Years Engineering", kh: "បទពិសោធន៍រៀន & បង្កើត ៣+ ឆ្នាំ" },
      detail: { en: "Continuous learning & daily commits", kh: "រៀនសូត្រឥតឈប់ឈរ និងអនុវត្តជាក់ស្តែង" }
    },
    {
      value: "99.9%",
      label: { en: "Uptime Focus", kh: "គោលដៅស្ថេរភាព 99.9%" },
      detail: { en: "Resilient APIs & Cloud Architectures", kh: "ប្រព័ន្ធ API រឹងមាំ និង Cloud Deployment" }
    }
  ],
  socials: {
    github: "https://github.com/taingsiveminh",
    linkedin: "https://linkedin.com/in/taingsiveminh",
    telegram: "https://t.me/tsmdev",
    facebook: "https://facebook.com/taingsiveminh"
  },
  contact: {
    email: "contact@tsmdev.me",
    telegram: "@tsmdev",
    github: "github.com/taingsiveminh",
    linkedin: "linkedin.com/in/taingsiveminh",
    location: "Phnom Penh, Cambodia",
  }
};

export const codeSnippets = {
  goshope: {
    title: "OrderWebhookController.java",
    language: "java",
    code: `@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderWebhookController {

    private final OrderService orderService;
    private final TelegramNotificationService telegramService;
    private final AbaPaywayService paywayService;

    @PostMapping("/checkout")
    public ResponseEntity<OrderResponse> processOrder(
            @Valid @RequestBody CheckoutRequest request) {
        
        // 1. Verify ABA PayWay payment hash signature
        paywayService.verifyTransaction(request.getTransactionId());

        // 2. Persist order entity & decrement inventory
        Order order = orderService.createOrder(request);

        // 3. Dispatch asynchronous Telegram bot alert
        telegramService.notifyMerchantAsync(order);

        return ResponseEntity.ok(OrderResponse.from(order));
    }
}`
  },
  reactHook: {
    title: "useCartDispatcher.js",
    language: "javascript",
    code: `import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  merchantId: null,
  
  addItem: (product) => set((state) => {
    const existing = state.items.find(i => i.id === product.id);
    if (existing) {
      return {
        items: state.items.map(i => 
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      };
    }
    return { items: [...state.items, { ...product, qty: 1 }] };
  }),

  generateTelegramSummary: () => {
    const { items } = get();
    const total = items.reduce((acc, i) => acc + (i.price * i.qty), 0);
    return items.map(i => \`• \${i.name} x\${i.qty} — $\${i.price * i.qty}\`).join('\\n') 
      + \`\\n\\n💵 Total: $\${total.toFixed(2)}\`;
  }
}));`
  }
};

export const servicesData = [
  {
    id: "fullstack-dev",
    title: {
      en: "Full-Stack Web Engineering",
      kh: "វិស្វកម្ម Full-Stack Web",
    },
    tagline: {
      en: "End-to-End React + Spring Boot Architecture",
      kh: "រចនាសម្ព័ន្ធពេញលេញ React + Spring Boot",
    },
    description: {
      en: "Building comprehensive web applications with reactive React frontends and high-throughput Java Spring Boot APIs, connected to optimized relational databases.",
      kh: "អភិវឌ្ឍកម្មវិធី Web ពេញលេញជាមួយ Frontend React ល្បឿនលឿន និង Backend Spring Boot រឹងមាំ ភ្ជាប់ជាមួយ MySQL/PostgreSQL។",
    },
    metrics: "RESTful APIs • Spring Data JPA • JWT Auth",
    icon: "Layers",
    tags: ["React 18", "Java Spring Boot", "MySQL", "REST APIs", "Tailwind CSS"],
    accent: "blue"
  },
  {
    id: "saas-dev",
    title: {
      en: "SaaS Product Engineering",
      kh: "ការបង្កើតផលិតផល SaaS",
    },
    tagline: {
      en: "Payments, Webhooks & Automated Notifications",
      kh: "ប្រព័ន្ធទូទាត់, Webhooks & សារស្វ័យប្រវត្តិ",
    },
    description: {
      en: "Transforming software concepts into production SaaS products with payment gateway checkouts (ABA PayWay), Telegram bot dispatchers, and multi-tenant logic.",
      kh: "បង្កើតប្រព័ន្ធ SaaS ជាក់ស្តែងភ្ជាប់ការទូទាត់ប្រាក់ ABA PayWay, ការជូនដំណឹង Telegram Bot ស្វ័យប្រវត្តិ និងផ្ទាំងគ្រប់គ្រងទិន្នន័យ។",
    },
    metrics: "ABA PayWay • Telegram Bot API • Multi-tenant",
    icon: "Rocket",
    tags: ["SaaS Architecture", "ABA PayWay", "Telegram Bot API", "Redis", "Webhooks"],
    accent: "purple"
  },
  {
    id: "web-dev",
    title: {
      en: "High-Performance Frontend",
      kh: "Frontend ល្បឿនលឿន & រស់រវើក",
    },
    tagline: {
      en: "Pixel-Perfect, Accessible & Responsive UI",
      kh: "រចនាបទស្រស់ស្អាត គ្មានបញ្ហាលើគ្រប់អេក្រង់",
    },
    description: {
      en: "Crafting modern, fast, and accessible user interfaces with clean component architectures, smooth micro-interactions, and 100/100 Lighthouse performance scores.",
      kh: "បង្កើត Interface ទំនើប ស្រាល និងល្បឿនលឿន ដោយប្រើប្រាស់ Framer Motion, Tailwind CSS និង Component-driven Architecture។",
    },
    metrics: "60 FPS Animations • Mobile First • Sub-second load",
    icon: "Layout",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    accent: "emerald"
  },
  {
    id: "ai-solutions",
    title: {
      en: "AI & Smart API Integrations",
      kh: "ការភ្ជាប់ AI & Smart APIs",
    },
    tagline: {
      en: "Practical LLM Workflows & Automations",
      kh: "ប្រព័ន្ធស្វ័យប្រវត្តិកម្ម & AI ជាក់ស្តែង",
    },
    description: {
      en: "Integrating modern LLM endpoints (Gemini / OpenAI API) and webhook automation pipelines into web workflows to eliminate repetitive manual tasks.",
      kh: "ការភ្ជាប់ម៉ូឌែល AI និង APIs ទំនើបចូលទៅក្នុងគេហទំព័រ ដើម្បីជួយសម្រួលការងារ និងបង្កើតមុខងារឆ្លាតវៃ។",
    },
    metrics: "Gemini / OpenAI API • JSON Schema • Automated Pipelines",
    icon: "Sparkles",
    tags: ["Gemini API", "OpenAI", "Prompt Engineering", "Automation", "JSON APIs"],
    accent: "cyan"
  }
];

export const journeyTimeline = [
  {
    year: "2023",
    role: { en: "Self-Directed Learning & CS Foundations", kh: "ការចាប់ផ្តើម & គ្រឹះវិទ្យាសាស្ត្រកុំព្យូទ័រ" },
    title: { en: "First Lines of Code & Core Web Fundamentals", kh: "ការសរសេរកូដដំបូង & គ្រឹះគេហទំព័រ" },
    description: {
      en: "Began studying Computer Science seriously. Mastered HTML5 semantic markup, CSS3 styling paradigms, and JavaScript ES6+ fundamentals. Built algorithmic intuition and structured problem solving.",
      kh: "ចាប់ផ្តើមរៀនសរសេរកូដ និងវិទ្យាសាស្ត្រកុំព្យូទ័រ។ សិក្សាស្ទាត់ជំនាញគ្រឹះ HTML5, CSS3, JavaScript ES6+ និងការដោះស្រាយបញ្ហាតាមក្បួន Algorithm។",
    },
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "Data Structures", "Git / GitHub"],
    highlight: {
      en: "Built interactive web tools and committed to daily coding discipline.",
      kh: "បង្កើតកម្មវិធី Web ដំបូងៗ និងប្តេជ្ញាហាត់សរសេរកូដជារៀងរាល់ថ្ងៃ។",
    }
  },
  {
    year: "2024",
    role: { en: "Frontend Specialist & Full-Stack Entry", kh: "ជំនាញ Frontend & ការឈានចូល Full-Stack" },
    title: { en: "React Ecosystem & Client Web Deployments", kh: "React Ecosystem & ការដាក់ឱ្យដំណើរការគេហទំព័រ" },
    description: {
      en: "Immersed in modern React architecture, component state patterns, Tailwind CSS styling, and client web projects. Built responsive platforms such as YGH AGRIC and experimental labs like Minh Web Fun.",
      kh: "សិក្សា React, State Patterns, Tailwind CSS និងទទួលធ្វើគម្រោងគេហទំព័រជាក់ស្តែងដូចជា YGH AGRIC និងគេហទំព័រពិសោធន៍ Minh Web Fun។",
    },
    skills: ["React", "Tailwind CSS", "Bootstrap", "REST APIs", "Node.js", "SQL"],
    highlight: {
      en: "Delivered production client websites with responsive reliability.",
      kh: "សម្រេចការដាក់ឱ្យប្រើប្រាស់គេហទំព័រអាជីវកម្មជាក់ស្តែង។",
    }
  },
  {
    year: "2025",
    role: { en: "Backend Architect & SaaS Engineering", kh: "វិស្វកម្ម Backend & ប្រព័ន្ធ SaaS" },
    title: { en: "Enterprise Spring Boot, MySQL & Payment Gateways", kh: "Spring Boot, MySQL & ប្រព័ន្ធទូទាត់ប្រាក់" },
    description: {
      en: "Engineered robust backend systems using Java and Spring Boot. Integrated relational database schemas, connection pooling with MySQL, Redis caching, Docker containerization, and webhook workflows.",
      kh: "អភិវឌ្ឍប្រព័ន្ធ Backend ជាមួយ Java & Spring Boot។ រៀបចំ Database MySQL, Redis Cache, Docker និងការតភ្ជាប់ Webhook ទូទាត់ប្រាក់ ABA PayWay។",
    },
    skills: ["Spring Boot", "Java", "MySQL", "Redis", "Docker", "Telegram Bot API", "ABA PayWay"],
    highlight: {
      en: "Architected flagship platform GoShope with sub-300ms API responses and automated checkout.",
      kh: "រៀបចំប្រព័ន្ធ GoShope SaaS ដោយមានល្បឿន API លឿនជាង 300ms និងការជូនដំណឹងស្វ័យប្រវត្តិ។",
    }
  },
  {
    year: "2026",
    role: { en: "Full-Stack Engineer & Product Builder", kh: "Full-Stack Engineer & អ្នកបង្កើតផលិតផល" },
    title: { en: "Scaling Production Platforms & Seeking Opportunities", kh: "ការពង្រីកប្រព័ន្ធ & ការស្វែងរកឱកាសការងារ" },
    description: {
      en: "Focused on scaling digital solutions (TSM Solutions, GoShope), refining software architecture, and actively seeking full-time software engineering roles, internships, and high-impact collaborations.",
      kh: "ផ្តោតលើការពង្រីកប្រព័ន្ធផលិតផលឌីជីថល ពង្រឹងស្ថាបត្យកម្មកូដ និងត្រៀមខ្លួនសម្រាប់ឱកាសការងារ Software Engineer និងកិច្ចសហការថ្មីៗ។",
    },
    skills: ["System Design", "Full-Stack Engineering", "SaaS Operations", "Cloud Deployments"],
    highlight: {
      en: "Actively available for software developer roles, internships, and contract builds.",
      kh: "បើកទទួលការងារពេញម៉ោង កម្មសិក្សា និងគម្រោងអភិវឌ្ឍន៍កម្មវិធីកុំព្យូទ័រ។",
    }
  }
];
