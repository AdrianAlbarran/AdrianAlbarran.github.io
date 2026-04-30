export const siteConfig = {
  name: "Adrián Albarrán",
  title: "Junior Software Engineer",
  description: "Portfolio website of Adrián Albarrán Alcalde ",
  accentColor: "#1d4ed8",
  social: {
    email: "a.albarran.alc@gmail.com",
    linkedin: "https://www.linkedin.com/in/adrian-albarran-alcalde/",
    github: "https://github.com/AdrianAlbarran",
  },
  aboutMe:
    "I am Adrián Albarrán, a game developer and researcher at Rey Juan Carlos University. I have developed multiple studies and projects about videogames and their utility in education, which has given me the opportunity to be featured on multiple nacional television and radio. Ever since graduating with honors with my bachelor's degree, my goal has been to build a career that allows me to make a real impact on the world.",
  skills: ["Unity", "C#", "C++", "Rendering"],
  projects: [
    {
      name: "Brawlight Manor - Videogame - Unity 6",
      slug: "brawlight-manor",
      description:
        "Brawlight Manor is a videogame where I took the position of engine and lights programmer.",
      link: "https://pusiriot.itch.io/brawlight-manor",
      skills: ["Unity", "URP_MOD", "C#"],
      image: "/BrawlightManor.png",
      extendedDescription: [
        "<strong><em>Engine modification:</em></strong> Modified Unity URP's <strong>distance attenuation function</strong> to enforce hard light boundaries" +
        "using an inverse polynomial function. Optimized performance by utilizing squared distances to avoid expensive square root calculations.",
        "<strong><em>Gameplay Architecture:</em></strong> Engineered a callback pattern for a competitive item-capture system, centralizing control" +
        "logic within the target object to manage multiple player actions simultaneously."
      ],
    },
    {
      name: "Drowned In Taxes - Videogame - Unity 2022",
      slug: "drowned-in-taxes",
      description:
        "Videogame where I tool the role of lead developer, mainly responsible for procedural generation of hexagonal maps and a custom pathfinding.",
      link: "https://gluglugames.itch.io/ahogado-en-impuestos",
      skills: ["Unity", "Game Programming", "Math", "C#"],
      image: "/DrownedInTaxes.png",
      extendedDescription: [
        "<strong><em>Procedural Generation:</em></strong> Implemented a procedural hexagonal map generator." + 
        "Addeda a custom coordinate system for efficient map generation and navigation, since hexagons don't follow simple grid patterns.",
        "<strong><em>Pathfinding & AI:</em></strong>  Implementation of modified A* algorithm to work with hexagons." + 
        "Cube coordinate system was used on a 2D grid to make pathfinding possible.",
      ],
      extendedImage: "/HexagonalCubeCoords.png",
    },
    {
      name: "Vulkan Rendering Engine (C++)",
      slug: "vulkan-rendering-engine",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      image: "/VulkanPBR.png",
      extendedDescription: "Motor de renderizado Vulkan desarrollado en C++ con soporte para técnicas avanzadas de iluminación y shaders personalizados.",
      extendedImage: "/VulkanShadows.png",
    },
    {
      name: "MIS Ray Tracer in Nori Engine",
      slug: "mis-ray-tracer",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      image: "NEE.png",
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
      company: "University Rey Juan Carlos",
      title: "Game Developer & Research",
      dateRange: "April 2025 - Present",
      bullets: [
        "Developed multiple serius games with 400 players. Made in Unity for Windows, Android and Web",
        "Optimized and designed games for researching Computational Thinking and extracting data efficiently",
        "Implemented asynchronous data transmission to a PHP backend",
        "Analyzed user data using Python and Pandas for academic research purposes"
      ],
    },
    {
      company: "Indra",
      title: "C++ Developer",
      dateRange: "September 2024 - April 2025",
      bullets: [
        "Programmed core systems for the Eurofighter and developed multiple internal tools for code architecute creation",
        "Resolved signal synchronization issues in a multi-CPU embedded architecture for the Eurofighter",
        "Developed a  C++ wrapper for unsupported data types in an internal Gedae code-generation tool to correct pipeline configuration errors",
      ],
    },
  ],
  education: [
    {
      school: "University Rey Juan Carlos",
      degree: "Master's Degree in Computer Graphics, Games and Virtual Reality",
      dateRange: "2024 - 2026",
      achievements: [
        "Obtained a recommendation letter from a teacher",
      ],
    },
    {
      school: "University Rey Juan Carlos",
      degree: "Bachelor's Degree on Video Game Design & Development",
      dateRange: "2020 - 2024",
      achievements: [
        "Archieved honorifics mentions in the last and largest project (full development of a videogame)",
        "Specialized in low level performance programming",
      ],
    },
  ],
};
