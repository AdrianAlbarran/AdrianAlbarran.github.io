export const siteConfig = {
  name: "Adrián Albarrán",
  title: "Junior Software Engineer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "a.albarran.alc@gmail.com",
    linkedin: "https://www.linkedin.com/in/adrian-albarran-alcalde/",
    github: "https://github.com/AdrianAlbarran",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "Brawlight Manor - Videogame - Unity 6",
      slug: "brawlight-manor",
      description:
        "Brawlight Manor is a videogame where I took the position of engine and lights programmer.",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["Unity", "URP_MOD", "C#"],
      image: "/BrawlightManor.png",
      extendedDescription: [
        "<strong>Primer elemento de la lista</strong>",
        "<em>Segundo elemento</em>", 
        "Tercer elemento"
      ],
      extendedImage: "/BrawlightManor.png",
    },
    {
      name: "Drowned In Taxes - Videogame - Unity 2022",
      slug: "drowned-in-taxes",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      extendedDescription: "Descripción extendida del proyecto Drowned In Taxes...",
    },
    {
      name: "Vulkan Rendering Engine (C++)",
      slug: "vulkan-rendering-engine",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      extendedDescription: "Motor de renderizado Vulkan desarrollado en C++ con soporte para técnicas avanzadas de iluminación y shaders personalizados.",
    },
    {
      name: "MIS Ray Tracer in Nori Engine",
      slug: "mis-ray-tracer",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      extendedDescription: "Implementación de un trazador de rayos con múltiples importancias (MIS) utilizando el motor Nori.",
    },
    {
      name: "Physics & Mathematical Simulations",
      slug: "physics-simulations",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      extendedDescription: "Simulaciones interactivas de física y matemáticas implementadas para visualizar conceptos científicos.",
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
