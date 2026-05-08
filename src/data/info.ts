import { myTechnologies } from "./my-technologies";
import { jobTechnologies } from "./job-technologies";
import { projectTechnologies } from "./project-technologies";
import { socialLinks } from "./social-links";

export type ExperienceItem = {
  role: string;
  company: string;
  modality: string;
  date: string;
  tasks: string[];
  stack: string[];
  link: string;
};

export type ProjectItem = {
  title: string;
  date: string;
  description: string;
  stack: string[];
  demoUrl: string;
  repoUrl: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  status: string;
  stats: string;
  date: string;
};

export type LanguageItem = {
  lang: string;
  level: string;
  note: string;
};

export type CertificateItem = {
  title: string;
  issuer: string;
  date: string;
  link: string;
};

export type InfoUiCopy = {
  sectionStack: string;
  sectionExperience: string;
  sectionProjects: string;
  sectionEducation: string;
  sectionCertificates: string;
  buttonGithub: string;
  buttonLinkedin: string;
  linkSourceCode: string;
  linkLiveDemo: string;
  linkCredential: string;
  labelEmail: string;
  labelProfile: string;
  labelLocation: string;
  altProfileImage: string;
};

export type InfoData = {
  personal: {
    name: string;
    title: string;
    location: string;
    phone: string;
    emails: string[];
    github: string;
    linkedin: string;
  };
  profile: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skills: typeof myTechnologies;
  languages: LanguageItem[];
  certificates: CertificateItem[];
  ui: InfoUiCopy;
};

export const infoES: InfoData = {
  personal: {
    name: "Rodrigo Martín Quevedo",
    title: "Desarrollador Full Stack | Estudiante de Ingeniería en Software",
    location: "Ciudad de Córdoba, Córdoba, Argentina",
    phone: "+54 9 351 3197050",
    emails: [socialLinks.email],
    github: socialLinks.github,
    linkedin: socialLinks.linkedin
  },
  profile:
    "Desarrollador con alta capacidad de aprendizaje y adaptabilidad, enfocado en el trabajo colaborativo y la mejora continua. Poseo una sólida base técnica en el ecosistema JavaScript/TypeScript (MERN Stack) y .NET Core. Actualmente estoy cursando la carrera de Ingeniería en Software en la Universidad Siglo 21.",
  experience: [
    {
      role: "Desarrollador Full Stack (Pasantía)",
      company: "TalentHub",
      modality: "Remoto",
      date: "Agosto 2025 – Noviembre 2025",
      tasks: [
        "Desarrollo de sitios y aplicaciones web utilizando React, Next.js, Node.js y TypeScript.",
        "Migración de secciones de Landing Pages desde diseños en Gamma hacia componentes funcionales en React.",
        "Desarrollo de catálogo de productos con filtros dinámicos para una pyme de maquinaria, con integración de contacto vía WhatsApp.",
        "Desarrollo de scripts de automatización para actualización del stock de productos.",
        "Desarrollo de dashboards, paneles y formularios para aplicación de gestión de ventas y logística."
      ],
      stack: jobTechnologies.talentHub,
      link: "#"
    },
    {
      role: "Desarrollador Frontend (Freelance)",
      company: "Startup (EE. UU.)",
      modality: "Remoto",
      date: "Abril 2025",
      tasks: [
        "Migración del sitio web desde archivos estáticos (HTML/CSS) a una arquitectura moderna en React.",
        "Implementación de interfaces precisas siguiendo diseños en Figma.",
        "Colaboración técnica y comunicación fluida en inglés."
      ],
      stack: jobTechnologies.freelance,
      link: "#"
    }
  ],
  projects: [
    {
      title: "Gest - Gestor de Inventario",
      date: "Ago 2024 – Ene 2025",
      description:
        "Aplicación Full Stack para la gestión integral de compras, ventas y stock. Diseño y construcción total de la arquitectura del software desde cero.",
      stack: projectTechnologies.gest,
      demoUrl: "https://gest-rodrigo-quevedo.onrender.com/",
      repoUrl: "https://github.com/rodrigo-quevedo/Gest"
    }
  ],
  education: [
    {
      degree: "Ingeniería en Software",
      institution: "Universidad Siglo 21",
      status: "En curso (89% - 42 materias aprobadas)",
      stats: "Promedio general: 9.65",
      date: "Finalización estimada: 2027"
    },
    {
      degree: "Analista en Software (Título Intermedio)",
      institution: "Universidad Siglo 21",
      status: "Egreso",
      stats: "Promedio general: 9.65",
      date: "2025"
    }
  ],
  skills: myTechnologies,
  languages: [
    {
      lang: "Inglés",
      level: "Lecto-comprensión y conversación fluida",
      note: "(Experiencia trabajando con clientes de EE. UU.)"
    }
  ],
  certificates: [
    {
      title: "Bootcamp Fullstack Web (SQL, .NET, React)",
      issuer: "Extrados",
      date: "Septiembre 2024 – Junio 2025",
      link: "https://drive.google.com/file/d/1ibhJHEKL-3maKAx0b5wL6WBfvZstwdkE/view?usp=sharing"
    },
    {
      title: "Master Git & GitHub 2024",
      issuer: "Udemy",
      date: "Abril 2024 – Mayo 2024",
      link: "https://www.udemy.com/certificate/UC-c27936d4-c63f-4bba-9fd6-3455d5eb724b/"
    },
    {
      title: "The Full Stack Web Development Bootcamp 2024 - MERN STACK",
      issuer: "Udemy",
      date: "Diciembre 2023 – Abril 2024",
      link: "https://www.udemy.com/certificate/UC-bf2e4c6d-c715-4194-8a56-3b04f030502b/"
    },
    {
      title: "React JS - Complete Guide for Frontend Web Development",
      issuer: "Udemy",
      date: "Septiembre 2023 – Noviembre 2023",
      link: "https://www.udemy.com/certificate/UC-e818f6bb-735b-49b3-a858-9058270d25a9/"
    },
    {
      title: "Armado y reparación de PC",
      issuer: "Integral Capacitando - UTN",
      date: "Agosto 2021 – Diciembre 2021",
      link: "https://drive.google.com/file/d/1yYzsd-cYcc6KUEHefgZquEtYZtxgg88k/view?usp=sharing"
    }
  ],
  ui: {
    sectionStack: "Stack Tecnológico.",
    sectionExperience: "Experiencia Laboral.",
    sectionProjects: "Proyectos Personales.",
    sectionEducation: "Formación Académica.",
    sectionCertificates: "Certificaciones.",
    buttonGithub: "GitHub",
    buttonLinkedin: "LinkedIn",
    linkSourceCode: "Código Fuente ↗",
    linkLiveDemo: "Demo Online ↗",
    linkCredential: "Ver credencial ↗",
    labelEmail: "Correo",
    labelProfile: "Perfil",
    labelLocation: "Ubicación",
    altProfileImage: "Foto de perfil de"
  }
};

export const infoEN: InfoData = {
  personal: {
    name: "Rodrigo Martín Quevedo",
    title: "Full Stack Developer | Software Engineering Student",
    location: "Córdoba City, Córdoba, Argentina",
    phone: "+54 9 351 3197050",
    emails: [socialLinks.email],
    github: socialLinks.github,
    linkedin: socialLinks.linkedin
  },
  profile:
    "Developer with a strong learning ability and adaptability, focused on collaborative work and continuous improvement. I have a solid technical foundation in the JavaScript/TypeScript ecosystem (MERN Stack) and .NET Core. I am currently studying Software Engineering at Universidad Siglo 21.",
  experience: [
    {
      role: "Full Stack Developer (Internship)",
      company: "TalentHub",
      modality: "Remote",
      date: "August 2025 – November 2025",
      tasks: [
        "Developed websites and web applications using React, Next.js, Node.js, and TypeScript.",
        "Migrated landing page sections from Gamma designs to functional React components.",
        "Built a product catalog with dynamic filters for a machinery SME, including WhatsApp contact integration.",
        "Created automation scripts to keep product stock updated.",
        "Developed dashboards, panels, and forms for a sales and logistics management application."
      ],
      stack: jobTechnologies.talentHub,
      link: "#"
    },
    {
      role: "Frontend Developer (Freelance)",
      company: "Startup (USA)",
      modality: "Remote",
      date: "April 2025",
      tasks: [
        "Migrated the website from static HTML/CSS files to a modern React architecture.",
        "Implemented pixel-perfect interfaces following Figma designs.",
        "Maintained technical collaboration and fluent communication in English."
      ],
      stack: jobTechnologies.freelance,
      link: "#"
    }
  ],
  projects: [
    {
      title: "Gest - Inventory Manager",
      date: "Aug 2024 – Jan 2025",
      description:
        "Full Stack application for comprehensive purchase, sales, and stock management. Designed and built the entire software architecture from scratch.",
      stack: projectTechnologies.gest,
      demoUrl: "https://gest-rodrigo-quevedo.onrender.com/",
      repoUrl: "https://github.com/rodrigo-quevedo/Gest"
    }
  ],
  education: [
    {
      degree: "Software Engineering",
      institution: "Universidad Siglo 21",
      status: "In progress (89% - 42 approved subjects)",
      stats: "Average grade: 9.65",
      date: "Estimated completion: 2027"
    },
    {
      degree: "Software Analyst (Intermediate Degree)",
      institution: "Universidad Siglo 21",
      status: "Graduated",
      stats: "Average grade: 9.65",
      date: "2025"
    }
  ],
  skills: myTechnologies,
  languages: [
    {
      lang: "English",
      level: "Strong reading comprehension and fluent conversation",
      note: "(Experience working with US clients)"
    }
  ],
  certificates: [
    {
      title: "Bootcamp Fullstack Web (SQL, .NET, React)",
      issuer: "Extrados",
      date: "September 2024 – June 2025",
      link: "https://drive.google.com/file/d/1ibhJHEKL-3maKAx0b5wL6WBfvZstwdkE/view?usp=sharing"
    },
    {
      title: "Master Git & GitHub 2024",
      issuer: "Udemy",
      date: "April 2024 – May 2024",
      link: "https://www.udemy.com/certificate/UC-c27936d4-c63f-4bba-9fd6-3455d5eb724b/"
    },
    {
      title: "The Full Stack Web Development Bootcamp 2024 - MERN STACK",
      issuer: "Udemy",
      date: "December 2023 – April 2024",
      link: "https://www.udemy.com/certificate/UC-bf2e4c6d-c715-4194-8a56-3b04f030502b/"
    },
    {
      title: "React JS - Complete Guide for Frontend Web Development",
      issuer: "Udemy",
      date: "September 2023 – November 2023",
      link: "https://www.udemy.com/certificate/UC-e818f6bb-735b-49b3-a858-9058270d25a9/"
    },
    {
      title: "Armado y reparación de PC",
      issuer: "Integral Capacitando - UTN",
      date: "August 2021 – December 2021",
      link: "https://drive.google.com/file/d/1yYzsd-cYcc6KUEHefgZquEtYZtxgg88k/view?usp=sharing"
    }
  ],
  ui: {
    sectionStack: "Technology Stack.",
    sectionExperience: "Work Experience.",
    sectionProjects: "Personal Projects.",
    sectionEducation: "Education.",
    sectionCertificates: "Certifications.",
    buttonGithub: "GitHub",
    buttonLinkedin: "LinkedIn",
    linkSourceCode: "Source Code ↗",
    linkLiveDemo: "Live Demo ↗",
    linkCredential: "View credential ↗",
    labelEmail: "Email",
    labelProfile: "Profile",
    labelLocation: "Location",
    altProfileImage: "Profile photo of"
  }
};