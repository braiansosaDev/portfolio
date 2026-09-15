import {
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiGitlab,
  SiGo,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSelenium,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import {
  Bot,
  BrainCircuit,
  Cable,
  CircuitBoard,
  Cloud,
  Database,
  Factory,
  GitBranch,
  RadioTower,
  TestTube2,
  Workflow,
} from "lucide-react";
import type { IconType } from "react-icons";

export type Locale = "es" | "en";

export type Technology = {
  id: string;
  label: string;
  category:
    | "frontend"
    | "backend"
    | "testing"
    | "data"
    | "realtime"
    | "cloud"
    | "tools"
    | "industrial"
    | "ai";
  icon: IconType;
  color: string;
};

export type Project = {
  id: string;
  title: Record<Locale, string>;
  type: string;
  source: "gottert" | "bligraf" | "personal" | "assist-north";
  visibility: "public" | "private";
  featured: boolean;
  description: Record<Locale, string>;
  problem: Record<Locale, string>;
  role: Record<Locale, string>;
  impact: Record<Locale, string>;
  technologies: string[];
  relatedRepos: string[];
  links?: { label: string; href: string }[];
};

export const technologies: Technology[] = [
  { id: "nextjs", label: "Next.js", category: "frontend", icon: SiNextdotjs, color: "#f8fafc" },
  { id: "react", label: "React", category: "frontend", icon: SiReact, color: "#61dafb" },
  { id: "typescript", label: "TypeScript", category: "frontend", icon: SiTypescript, color: "#3178c6" },
  { id: "javascript", label: "JavaScript", category: "frontend", icon: SiJavascript, color: "#f7df1e" },
  { id: "python", label: "Python", category: "backend", icon: SiPython, color: "#3776ab" },
  { id: "fastapi", label: "FastAPI", category: "backend", icon: SiFastapi, color: "#009688" },
  { id: "nestjs", label: "NestJS", category: "backend", icon: SiNestjs, color: "#e0234e" },
  { id: "go", label: "Go", category: "backend", icon: SiGo, color: "#00add8" },
  { id: "postgresql", label: "PostgreSQL", category: "data", icon: SiPostgresql, color: "#4169e1" },
  { id: "redis", label: "Redis", category: "data", icon: SiRedis, color: "#dc382d" },
  { id: "influxdb", label: "InfluxDB", category: "data", icon: Database, color: "#22d3ee" },
  { id: "socketio", label: "Socket.IO", category: "realtime", icon: SiSocketdotio, color: "#f8fafc" },
  { id: "websockets", label: "WebSockets", category: "realtime", icon: RadioTower, color: "#34d399" },
  { id: "snap7", label: "Snap7", category: "industrial", icon: Cable, color: "#f59e0b" },
  { id: "plc", label: "Siemens PLCs", category: "industrial", icon: CircuitBoard, color: "#14b8a6" },
  { id: "docker", label: "Docker", category: "cloud", icon: SiDocker, color: "#2496ed" },
  { id: "azure", label: "Azure", category: "cloud", icon: Cloud, color: "#0078d4" },
  { id: "github-actions", label: "GitHub Actions", category: "cloud", icon: SiGithubactions, color: "#60a5fa" },
  { id: "gitlab", label: "GitLab", category: "tools", icon: SiGitlab, color: "#fc6d26" },
  { id: "testing", label: "Testing", category: "testing", icon: TestTube2, color: "#a78bfa" },
  { id: "selenium", label: "Selenium", category: "testing", icon: SiSelenium, color: "#43b02a" },
  { id: "openai", label: "OpenAI", category: "ai", icon: SiOpenai, color: "#f8fafc" },
  { id: "ai", label: "AI/ML", category: "ai", icon: BrainCircuit, color: "#c084fc" },
  { id: "automation", label: "Automation", category: "tools", icon: Workflow, color: "#fb7185" },
  { id: "industrial", label: "Industrial", category: "industrial", icon: Factory, color: "#f97316" },
  { id: "agents", label: "Agents", category: "ai", icon: Bot, color: "#2dd4bf" },
  { id: "git", label: "Git", category: "tools", icon: GitBranch, color: "#f97316" },
];

export const projects: Project[] = [
  {
    id: "kiln-control",
    title: {
      es: "Monitoreo y Control de Secaderos Industriales",
      en: "Industrial Kiln Monitoring & Control",
    },
    type: "Professional project - code not public",
    source: "gottert",
    visibility: "private",
    featured: true,
    description: {
      es: "Sistema de monitoreo y control en tiempo real para camaras de secado de madera, integrando aplicaciones web con PLCs Siemens y servicios de adquisicion de datos.",
      en: "Real-time monitoring and control system for wood drying kilns, integrating web applications with Siemens PLCs and data acquisition services.",
    },
    problem: {
      es: "Centralizar lectura, visualizacion y control operativo de variables industriales criticas.",
      en: "Centralize reading, visualization and operational control of critical industrial variables.",
    },
    role: {
      es: "Full Stack Developer, backend industrial, integraciones realtime.",
      en: "Full Stack Developer, industrial backend, realtime integrations.",
    },
    impact: {
      es: "Datos operativos en tiempo real y arquitectura preparada para visualizacion, control y trazabilidad.",
      en: "Real-time operational data and an architecture prepared for visualization, control and traceability.",
    },
    technologies: ["fastapi", "python", "snap7", "plc", "socketio", "websockets", "redis", "influxdb", "docker", "nextjs", "react"],
    relatedRepos: ["controlador-server-secaderos", "controlador-web-secaderos"],
  },
  {
    id: "gottert-platform",
    title: {
      es: "Plataforma Operativa Gottert",
      en: "Gottert Operations Platform",
    },
    type: "Professional project - code not public",
    source: "gottert",
    visibility: "private",
    featured: true,
    description: {
      es: "Ecosistema de aplicaciones internas para digitalizar procesos comerciales, operativos, productivos, de proyectos, suministros y e-commerce.",
      en: "Internal application ecosystem for digitizing commercial, operational, production, project, supply and e-commerce workflows.",
    },
    problem: {
      es: "Reemplazar procesos dispersos o manuales por herramientas centralizadas y trazables.",
      en: "Replace scattered or manual workflows with centralized, traceable tools.",
    },
    role: {
      es: "Full Stack Developer, frontend/backend, modelado de datos, integraciones y despliegue.",
      en: "Full Stack Developer, frontend/backend, data modeling, integrations and deployment.",
    },
    impact: {
      es: "Mayor centralizacion operativa, mejor visibilidad de procesos y bases reutilizables para nuevos modulos.",
      en: "Better operational centralization, improved process visibility and reusable foundations for new modules.",
    },
    technologies: ["nextjs", "react", "typescript", "nestjs", "postgresql", "redis", "azure", "openai", "docker"],
    relatedRepos: ["COMERCIAL-G-APP", "crm-gottert-v2", "e-commerce-at", "produccion-apps-v4", "Proyectos-Apps-Gottert", "gottert-api"],
  },
  {
    id: "talent-portal",
    title: {
      es: "Portal de Talento Humano",
      en: "Talent / HR Portal",
    },
    type: "Professional project - code not public",
    source: "gottert",
    visibility: "private",
    featured: true,
    description: {
      es: "Portal de talento humano con frontend, API, formularios y servicios auxiliares para centralizar procesos de RRHH, asistencia y gestion interna.",
      en: "Human talent portal with frontend, API, forms and auxiliary services to centralize HR, attendance and internal management workflows.",
    },
    problem: {
      es: "Unificar informacion y flujos de RRHH con autenticacion, formularios, jobs, mailer y servicios internos.",
      en: "Unify HR information and workflows with authentication, forms, jobs, mailer and internal services.",
    },
    role: {
      es: "Full Stack Developer, arquitectura modular, API, frontend y servicios de soporte.",
      en: "Full Stack Developer, modular architecture, API, frontend and supporting services.",
    },
    impact: {
      es: "Procesos de RRHH mas ordenados, datos centralizados y base tecnica extensible.",
      en: "More organized HR processes, centralized data and an extensible technical base.",
    },
    technologies: ["nextjs", "react", "nestjs", "postgresql", "azure", "python", "automation"],
    relatedRepos: ["portal-th-api", "portal-th-app", "portal-th-forms", "portal-th-clock-service"],
  },
  {
    id: "supply-system",
    title: {
      es: "Sistema de Gestion de Suministros",
      en: "Supply Management System",
    },
    type: "Professional project - code not public",
    source: "gottert",
    visibility: "private",
    featured: false,
    description: {
      es: "Sistema interno para gestion de suministros con frontend operativo, API dedicada, autenticacion, tablas avanzadas e integraciones.",
      en: "Internal supply management system with operational frontend, dedicated API, authentication, advanced tables and integrations.",
    },
    problem: {
      es: "Organizar solicitudes, seguimiento y administracion de suministros dentro de una herramienta trazable.",
      en: "Organize requests, tracking and supply administration inside a traceable tool.",
    },
    role: {
      es: "Full Stack Developer, API, frontend y experiencia operativa.",
      en: "Full Stack Developer, API, frontend and operational experience.",
    },
    impact: {
      es: "Mejor seguimiento de informacion y reduccion de controles dispersos.",
      en: "Better information tracking and fewer scattered controls.",
    },
    technologies: ["nextjs", "react", "nestjs", "postgresql", "azure", "typescript"],
    relatedRepos: ["suministros-api", "suministros-app"],
  },
  {
    id: "bligraf-suite",
    title: {
      es: "Suite Operativa Bligraf",
      en: "Bligraf Operational Suite",
    },
    type: "Professional project - code not public",
    source: "bligraf",
    visibility: "private",
    featured: true,
    description: {
      es: "Suite de aplicaciones para CRM, facturacion/cobro, liquidacion de produccion, consolidacion operativa y asistencia mediante chatbot externo.",
      en: "Application suite for CRM, billing, collections, production settlement, operational consolidation and external chatbot assistance.",
    },
    problem: {
      es: "Integrar procesos administrativos y productivos que requieren carga, consolidacion, analisis y seguimiento operativo.",
      en: "Integrate administrative and production workflows that require input, consolidation, analysis and operational tracking.",
    },
    role: {
      es: "Full Stack Developer, frontend operativo, automatizacion, integraciones e IA aplicada.",
      en: "Full Stack Developer, operational frontend, automation, integrations and applied AI.",
    },
    impact: {
      es: "Flujos mas centralizados y herramientas especificas para operaciones de Bligraf Chile.",
      en: "More centralized workflows and purpose-built tools for Bligraf Chile operations.",
    },
    technologies: ["nextjs", "react", "postgresql", "azure", "openai", "typescript"],
    relatedRepos: ["crm-bligraf", "cobro-produccion-bligraf-chile", "liquidacion-produccion-bligraf", "chatbot-externo-bligraf"],
  },
  {
    id: "sigrh",
    title: {
      es: "SIGRH+",
      en: "SIGRH+",
    },
    type: "Public repo",
    source: "personal",
    visibility: "public",
    featured: true,
    description: {
      es: "Sistema integral de gestion de recursos humanos con IA, backend de negocio y frontend para portal publico y backoffice interno.",
      en: "AI-powered human resources management system with business backend and frontend for a public portal and internal backoffice.",
    },
    problem: {
      es: "Centralizar reclutamiento, personal, asistencia, nomina, licencias y control de acceso por roles.",
      en: "Centralize recruitment, staff, attendance, payroll, leaves and role-based access control.",
    },
    role: {
      es: "Full Stack Developer.",
      en: "Full Stack Developer.",
    },
    impact: {
      es: "Producto completo con separacion frontend/backend y modulos de apoyo basados en IA.",
      en: "Complete product with frontend/backend separation and AI-supported modules.",
    },
    technologies: ["python", "javascript", "fastapi", "react", "postgresql", "ai"],
    relatedRepos: ["backend-sigrh-g4", "frontend-sigrh-g4"],
    links: [
      { label: "Backend", href: "https://github.com/braiansosaDev/backend-sigrh-g4" },
      { label: "Frontend", href: "https://github.com/braiansosaDev/frontend-sigrh-g4" },
    ],
  },
  {
    id: "codeact-agent",
    title: {
      es: "Agente de Workspace CodeAct",
      en: "CodeAct Workspace Agent",
    },
    type: "Public repo",
    source: "personal",
    visibility: "public",
    featured: false,
    description: {
      es: "Proyecto standalone en Go que explora la idea de Code as Action Agent usando un modelo LLM local con Ollama.",
      en: "Standalone Go project exploring the Code as Action Agent idea with a local Ollama LLM model.",
    },
    problem: {
      es: "Experimentar con agentes capaces de ejecutar acciones locales a partir de instrucciones y razonamiento asistido por LLM.",
      en: "Experiment with agents able to execute local actions from instructions and LLM-assisted reasoning.",
    },
    role: {
      es: "Developer / experimentacion tecnica.",
      en: "Developer / technical exploration.",
    },
    impact: {
      es: "Demuestra interes practico en agentes, automatizacion local y modelos ejecutados fuera de servicios cloud.",
      en: "Shows practical interest in agents, local automation and models running outside cloud services.",
    },
    technologies: ["go", "agents", "ai", "automation"],
    relatedRepos: ["codeact-workspace-agent"],
    links: [{ label: "GitHub", href: "https://github.com/braiansosaDev/codeact-workspace-agent" }],
  },
  {
    id: "assist-automation",
    title: {
      es: "Automatizaciones Assist North",
      en: "Assist North Automation",
    },
    type: "Professional case study - code not public",
    source: "assist-north",
    visibility: "private",
    featured: false,
    description: {
      es: "Automatizaciones y aplicaciones internas para optimizar procesos administrativos y operativos en asistencia vehicular.",
      en: "Internal automations and applications to optimize administrative and operational processes in vehicle assistance operations.",
    },
    problem: {
      es: "Reducir controles manuales, carga repetitiva, errores operativos y tiempos administrativos.",
      en: "Reduce manual controls, repetitive input, operational errors and administrative time.",
    },
    role: {
      es: "Software Engineer, automatizacion, soporte e implementacion con usuarios internos.",
      en: "Software Engineer, automation, support and implementation with internal users.",
    },
    impact: {
      es: "Procesos mas rapidos, reportes automatizados y mejor continuidad operativa.",
      en: "Faster processes, automated reports and better operational continuity.",
    },
    technologies: ["python", "automation", "selenium", "testing"],
    relatedRepos: [],
  },
];

export const copy = {
  es: {
    brandPath: "~/portafolio",
    nav: ["perfil", "experiencia", "proyectos", "stack", "contacto"],
    language: "Idioma",
    eyebrow: "> quiensoy",
    commands: {
      profile: "cat perfil.md",
      experience: "historial --trabajo",
      projects: "proyectos --filtrar",
      stack: "stack --agrupado",
      contact: "contacto --abrir",
    },
    role: "Software Engineer - Full Stack Developer",
    location: "Buenos Aires, Argentina",
    statusLabel: "estado",
    locationLabel: "ubicacion",
    focusLabel: "foco",
    focusValue: "Backoffice / Tiempo real / Automatizacion",
    availability: "Disponibilidad full time",
    intro:
      "Construyo sistemas full stack, backoffices, portales internos e integraciones para automatizar operaciones y volver trazables procesos complejos.",
    viewProjects: "Ver proyectos",
    profileTitle: "Perfil",
    profile:
      "Desarrollador Full Stack con experiencia en diseno, arquitectura y desarrollo de sistemas escalables orientados a transformacion digital y automatizacion de operaciones. Foco en backoffice, portales internos, sistemas industriales, integraciones, modelado de datos, testing y despliegue cloud.",
    experienceTitle: "Experiencia",
    projectsTitle: "Proyectos",
    filtersAll: "Todos",
    reset: "reiniciar",
    sourceAll: "origen:*",
    featuredOnly: "Destacados",
    stackTitle: "Stack tecnico",
    contactTitle: "Contacto",
    problem: "Problema",
    roleLabel: "Rol",
    impact: "Impacto",
    repos: "Repos relacionados",
    privateCode: "Codigo privado",
    open: "Abrir",
  },
  en: {
    brandPath: "~/portfolio",
    nav: ["profile", "experience", "projects", "stack", "contact"],
    language: "Language",
    eyebrow: "> whoami",
    commands: {
      profile: "cat profile.md",
      experience: "history --work",
      projects: "projects --filter",
      stack: "stack --grouped",
      contact: "contact --open",
    },
    role: "Software Engineer - Full Stack Developer",
    location: "Buenos Aires, Argentina",
    statusLabel: "status",
    locationLabel: "location",
    focusLabel: "focus",
    focusValue: "Backoffice / Realtime / Automation",
    availability: "Full-time availability",
    intro:
      "I build full stack systems, backoffices, internal portals and integrations that automate operations and make complex processes traceable.",
    viewProjects: "View projects",
    profileTitle: "Profile",
    profile:
      "Full Stack Developer experienced in designing, architecting and building scalable systems for digital transformation and operations automation. Focused on back-office platforms, internal portals, industrial systems, integrations, data modeling, testing and cloud deployment.",
    experienceTitle: "Experience",
    projectsTitle: "Projects",
    filtersAll: "All",
    reset: "reset",
    sourceAll: "source:*",
    featuredOnly: "Featured",
    stackTitle: "Technical stack",
    contactTitle: "Contact",
    problem: "Problem",
    roleLabel: "Role",
    impact: "Impact",
    repos: "Related repos",
    privateCode: "Private code",
    open: "Open",
  },
};

export const experience = [
  {
    company: "GOTTERT",
    period: { es: "09/2023 - Presente", en: "09/2023 - Present" },
    title: "Software Engineer",
    points: {
      es: [
        "Sistemas para CRM, RRHH, MES/MRP, posventa, portales internos y procesos industriales.",
        "Soluciones end-to-end con Python, FastAPI, Node.js, NestJS, React, Next.js, PostgreSQL y Docker.",
        "Arquitecturas realtime con Snap7, WebSockets, Socket.IO, Redis e InfluxDB.",
      ],
      en: [
        "Systems for CRM, HR, MES/MRP, after-sales, internal portals and industrial workflows.",
        "End-to-end solutions with Python, FastAPI, Node.js, NestJS, React, Next.js, PostgreSQL and Docker.",
        "Realtime architectures with Snap7, WebSockets, Socket.IO, Redis and InfluxDB.",
      ],
    },
  },
  {
    company: "Assist North Asistencia Vehicular",
    period: { es: "02/2020 - 08/2023", en: "02/2020 - 08/2023" },
    title: "Software Engineer",
    points: {
      es: [
        "Aplicaciones internas para centralizar informacion y digitalizar procesos administrativos.",
        "Automatizaciones con Google Apps Script y Python para calculos, reportes y tareas recurrentes.",
        "Testing y validaciones con Selenium y PyTest, soporte IT y continuidad operativa.",
      ],
      en: [
        "Internal applications to centralize information and digitize administrative processes.",
        "Automations with Google Apps Script and Python for calculations, reports and recurring tasks.",
        "Testing and validations with Selenium and PyTest, IT support and operational continuity.",
      ],
    },
  },
];
