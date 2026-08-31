export const skillsData = {
  frontend: {
    title: {
      en: "Frontend Development",
      kh: "ការអភិវឌ្ឍ Frontend",
    },
    icon: "Monitor",
    color: "blue",
    description: {
      en: "Crafting fluid, high-performance interfaces with modern reactive paradigms.",
      kh: "បង្កើត Interface ស្រស់ស្អាត ល្បឿនលឿន និងមានចលនារស់រវើក។",
    },
    skills: [
      { name: "React", level: "Advanced", experience: "2+ yrs", icon: "Atom", tag: "Primary Framework" },
      { name: "JavaScript (ES6+)", level: "Advanced", experience: "3+ yrs", icon: "FileCode", tag: "Core Language" },
      { name: "Tailwind CSS", level: "Advanced", experience: "2+ yrs", icon: "Palette", tag: "Styling" },
      { name: "HTML5", level: "Expert", experience: "3+ yrs", icon: "Code", tag: "Markup" },
      { name: "CSS3", level: "Advanced", experience: "3+ yrs", icon: "Sparkles", tag: "Animations & Grid" },
      { name: "Bootstrap", level: "Proficient", experience: "2+ yrs", icon: "LayoutGrid", tag: "UI Library" },
    ]
  },
  backend: {
    title: {
      en: "Backend & Systems",
      kh: "ប្រព័ន្ធ Backend & APIs",
    },
    icon: "Server",
    color: "purple",
    description: {
      en: "Designing robust server-side logic, secure authentication, and resilient microservices.",
      kh: "រៀបចំប្រព័ន្ធម៉ាស៊ីនបម្រើ (Server) សុវត្ថិភាពខ្ពស់ និង RESTful APIs រឹងមាំ។",
    },
    skills: [
      { name: "Spring Boot", level: "Advanced", experience: "1.5+ yrs", icon: "Cpu", tag: "Java Framework" },
      { name: "Java", level: "Advanced", experience: "2+ yrs", icon: "Coffee", tag: "Enterprise Backend" },
      { name: "REST API", level: "Expert", experience: "2+ yrs", icon: "Network", tag: "Architecture" },
      { name: "C#", level: "Proficient", experience: "1+ yr", icon: "Terminal", tag: ".NET & Logic" },
      { name: "Python", level: "Proficient", experience: "2+ yrs", icon: "Binary", tag: "Automation & Scripting" },
    ]
  },
  database: {
    title: {
      en: "Database & Storage",
      kh: "ប្រព័ន្ធទិន្នន័យ Database",
    },
    icon: "Database",
    color: "emerald",
    description: {
      en: "Architecting schema design, indexing, transactional integrity, and in-memory caches.",
      kh: "រចនារចនាសម្ព័ន្ធទិន្នន័យ Indexing និង In-memory Cache ល្បឿនលឿន។",
    },
    skills: [
      { name: "MySQL", level: "Advanced", experience: "2+ yrs", icon: "Database", tag: "Relational DB" },
      { name: "PostgreSQL", level: "Proficient", experience: "1.5+ yrs", icon: "HardDrive", tag: "ACID Compliant" },
      { name: "SQL", level: "Advanced", experience: "2+ yrs", icon: "Table", tag: "Query Optimization" },
      { name: "Redis", level: "Proficient", experience: "1+ yr", icon: "Zap", tag: "Caching & Sessions" },
    ]
  },
  tools: {
    title: {
      en: "Tools, Cloud & DevOps",
      kh: "ឧបករណ៍ Cloud & DevOps",
    },
    icon: "Wrench",
    color: "cyan",
    description: {
      en: "Streamlining continuous deployment, containerization, and modern developer tooling.",
      kh: "ការគ្រប់គ្រងប្រព័ន្ធ Deployment, Containerization និង CI/CD។",
    },
    skills: [
      { name: "Git", level: "Advanced", experience: "3+ yrs", icon: "GitBranch", tag: "Version Control" },
      { name: "GitHub", level: "Advanced", experience: "3+ yrs", icon: "Github", tag: "CI/CD & Collaboration" },
      { name: "Docker", level: "Proficient", experience: "1+ yr", icon: "Box", tag: "Containers" },
      { name: "Vercel", level: "Expert", experience: "2+ yrs", icon: "Cloud", tag: "Edge Deployments" },
      { name: "Railway", level: "Advanced", experience: "1.5+ yrs", icon: "Server", tag: "Backend Cloud" },
      { name: "Cloudflare", level: "Proficient", experience: "1+ yr", icon: "Shield", tag: "DNS & Security" },
    ]
  }
};
