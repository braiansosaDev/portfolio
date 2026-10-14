import {
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiGitlab,
  SiGo,
  SiJavascript,
  SiNestjs,
  SiNodedotjs,
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
export type LocalizedText = Record<Locale, string>;

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
  type: LocalizedText;
  source: "gottert" | "bligraf" | "personal" | "assist-north";
  visibility: "public" | "private";
  featured: boolean;
  description: Record<Locale, string>;
  problem: Record<Locale, string>;
  role: Record<Locale, string>;
  impact: Record<Locale, string>;
  technologies: string[];
  relatedRepos: string[];
  media?: { src: string; alt: Record<Locale, string> }[];
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
  { id: "nodejs", label: "Node.js", category: "backend", icon: SiNodedotjs, color: "#68a063" },
  { id: "firestore", label: "Firestore", category: "data", icon: Database, color: "#ffca28" },
  { id: "microsoft-365", label: "Microsoft Graph / SharePoint", category: "cloud", icon: Cloud, color: "#38bdf8" },
  { id: "entra", label: "Entra ID / MSAL", category: "cloud", icon: Cloud, color: "#60a5fa" },
  { id: "rag", label: "RAG / Embeddings", category: "ai", icon: BrainCircuit, color: "#c084fc" },
  { id: "spacy", label: "spaCy / NLP", category: "ai", icon: BrainCircuit, color: "#38bdf8" },
  { id: "face-api", label: "face-api.js", category: "ai", icon: BrainCircuit, color: "#a78bfa" },
  { id: "numpy", label: "NumPy", category: "data", icon: Database, color: "#4dabcf" },
  { id: "ollama", label: "Ollama", category: "ai", icon: Bot, color: "#f8fafc" },
  { id: "jest", label: "Jest / Supertest", category: "testing", icon: TestTube2, color: "#e879a5" },
  { id: "pytest", label: "pytest", category: "testing", icon: TestTube2, color: "#fbbf24" },
  { id: "playwright", label: "Playwright", category: "testing", icon: TestTube2, color: "#45ba4b" },
  { id: "prisma", label: "Prisma", category: "data", icon: Database, color: "#a5b4fc" },
  { id: "apps-script", label: "Google Apps Script", category: "tools", icon: Workflow, color: "#fbbc04" },
  { id: "mercadopago", label: "Mercado Pago", category: "tools", icon: Cable, color: "#38bdf8" },
  { id: "php", label: "PHP", category: "backend", icon: CircuitBoard, color: "#a5b4fc" },
  { id: "socketio", label: "Socket.IO", category: "realtime", icon: SiSocketdotio, color: "#f8fafc" },
  { id: "websockets", label: "WebSockets", category: "realtime", icon: RadioTower, color: "#34d399" },
  { id: "snap7", label: "Snap7", category: "industrial", icon: Cable, color: "#f59e0b" },
  { id: "plc", label: "Siemens PLCs", category: "industrial", icon: CircuitBoard, color: "#38f8a6" },
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
  { id: "agents", label: "Agents", category: "ai", icon: Bot, color: "#38f8a6" },
  { id: "git", label: "Git", category: "tools", icon: GitBranch, color: "#f97316" },
];

export const technologyCategories: Record<Technology["category"], LocalizedText> = {
  frontend: { es: "Frontend", en: "Frontend" },
  backend: { es: "Backend", en: "Backend" },
  data: { es: "Datos", en: "Data" },
  realtime: { es: "Tiempo real", en: "Real time" },
  cloud: { es: "Cloud y despliegue", en: "Cloud & deployment" },
  testing: { es: "Pruebas", en: "Testing" },
  ai: { es: "IA y modelos aplicados", en: "AI & applied models" },
  industrial: { es: "Integración industrial", en: "Industrial integration" },
  tools: { es: "Herramientas y automatización", en: "Tools & automation" },
};

export const projects: Project[] = [
  {
    id: "kiln-control",
    title: {
      es: "Monitoreo y Control de Secaderos Industriales",
      en: "Industrial Kiln Monitoring & Control",
    },
    type: { es: "Proyecto profesional · código privado", en: "Professional project · private code" },
    source: "gottert",
    visibility: "private",
    featured: true,
    description: {
      es: "Sistema de monitoreo y control en tiempo real para cámaras de secado de madera, integrando aplicaciones web con PLCs Siemens y servicios de adquisición de datos.",
      en: "Real-time monitoring and control system for wood drying kilns, integrating web applications with Siemens PLCs and data acquisition services.",
    },
    problem: {
      es: "Centralizar lectura, visualización y control operativo de variables industriales críticas.",
      en: "Centralize reading, visualization and operational control of critical industrial variables.",
    },
    role: {
      es: "Desarrollo full stack de la supervisión y el control, integrando PLC Siemens, adquisición de datos e interfaces en tiempo real.",
      en: "Full stack development of monitoring and control, integrating Siemens PLCs, data acquisition and real-time interfaces.",
    },
    impact: {
      es: "Consulta del estado de las cámaras, visualización de históricos y operación de procesos desde una interfaz web.",
      en: "Chamber status, historical data and process operation through a web interface.",
    },
    technologies: ["fastapi", "python", "snap7", "plc", "socketio", "websockets", "redis", "docker", "nextjs", "react", "industrial"],
    relatedRepos: ["controlador-server-secaderos", "controlador-web-secaderos"],
    media: [
      {
        src: "/swa-app-captura.png",
        alt: {
          es: "Panel de monitoreo de secadero industrial con estado de cámara, proceso y sensores.",
          en: "Industrial kiln monitoring panel with chamber status, process data and sensors.",
        },
      },
    ],
  },
  {
    id: "gottert-platform",
    title: {
      es: "Plataforma Operativa Gottert",
      en: "Gottert Operations Platform",
    },
    type: { es: "Proyecto profesional · código privado", en: "Professional project · private code" },
    source: "gottert",
    visibility: "private",
    featured: true,
    description: {
      es: "Ecosistema de CRM, gestión comercial, posventa, producción y proyectos, conectado mediante APIs e integración documental con Microsoft 365.",
      en: "An ecosystem for CRM, sales operations, after-sales, production and projects, connected through APIs and Microsoft 365 document integrations.",
    },
    problem: {
      es: "Reemplazar procesos dispersos o manuales por herramientas centralizadas y trazables.",
      en: "Replace scattered or manual workflows with centralized, traceable tools.",
    },
    role: {
      es: "Desarrollo y evolución de aplicaciones, modelos de datos y APIs, con autenticación corporativa, integración documental y despliegue en Azure.",
      en: "Development and evolution of applications, data models and APIs, with corporate authentication, document integrations and Azure deployment.",
    },
    impact: {
      es: "Seguimiento de clientes, órdenes y materiales, con documentación y datos operativos conectados entre aplicaciones.",
      en: "Tracking of customers, orders and materials, with documents and operational data connected across applications.",
    },
    technologies: ["nextjs", "react", "typescript", "nodejs", "nestjs", "postgresql", "firestore", "redis", "azure", "microsoft-365", "entra", "openai", "docker", "jest", "playwright", "testing", "github-actions"],
    relatedRepos: ["COMERCIAL-G-APP", "crm-gottert-v2", "e-commerce-at", "produccion-apps-v4", "Proyectos-Apps-Gottert", "gottert-api", "AT-APP", "summa-integration"],
    media: [
      {
        src: "/crm-app-captura.png",
        alt: {
          es: "Dashboard inicial del CRM interno con panel operativo, accesos y actividad reciente.",
          en: "Internal CRM home dashboard with operational panel, shortcuts and recent activity.",
        },
      },
      {
        src: "/comex-app-captura.png",
        alt: {
          es: "Dashboard COMEX con control operativo de importaciones, trazabilidad y vencimientos.",
          en: "COMEX dashboard with import operations control, traceability and deadlines.",
        },
      },
      {
        src: "/postventa-app-captura.png",
        alt: {
          es: "Administrador de postventa con confirmaciones, filtros y exportación de datos.",
          en: "After-sales admin view with confirmations, filters and data export.",
        },
      },
      {
        src: "/at-app-captura.png",
        alt: {
          es: "Portal de asistencia técnica con informes diarios, gestión y nuevos casos técnicos.",
          en: "Technical assistance portal with daily reports, management and new technical cases.",
        },
      },
    ],
  },
  {
    id: "talent-portal",
    title: {
      es: "Portal de Talento Humano",
      en: "Talent / HR Portal",
    },
    type: { es: "Proyecto profesional · código privado", en: "Professional project · private code" },
    source: "gottert",
    visibility: "private",
    featured: true,
    description: {
      es: "Portal de RRHH para asistencia, legajos, turnos, novedades y certificados, integrado con relojes ZKTeco y servicios de procesamiento en segundo plano.",
      en: "HR portal for attendance, employee records, shifts, updates and certificates, integrated with ZKTeco clocks and background processing services.",
    },
    problem: {
      es: "Unificar información y flujos de RRHH con autenticación, formularios, jobs, mailer y servicios internos.",
      en: "Unify HR information and workflows with authentication, forms, jobs, mailer and internal services.",
    },
    role: {
      es: "Desarrollo del portal y la API de RRHH, integración de relojes mediante Python y coordinación de formularios, documentos y trabajos en segundo plano.",
      en: "Development of the HR portal and API, clock integration with Python, and coordination of forms, documents and background jobs.",
    },
    impact: {
      es: "Consulta centralizada de asistencia y novedades, con registros de dispositivos vinculados al portal y gestión de documentación del personal.",
      en: "Centralized attendance and HR updates, linking device records to the portal and managing employee documents.",
    },
    technologies: ["nextjs", "react", "nodejs", "nestjs", "postgresql", "azure", "python", "automation", "microsoft-365", "entra", "openai", "jest", "pytest", "testing", "github-actions"],
    relatedRepos: ["portal-th-api", "portal-th-app", "portal-th-forms", "portal-th-clock-service"],
    media: [
      {
        src: "/portalth-app-captura.png",
        alt: {
          es: "Panel histórico de asistencia del portal de talento humano con indicadores, motivos de ausencia y tendencias.",
          en: "Attendance history dashboard from the talent portal with indicators, absence reasons and trends.",
        },
      },
    ],
  },
  {
    id: "supply-system",
    title: {
      es: "Sistema de Gestión de Suministros",
      en: "Supply Management System",
    },
    type: { es: "Proyecto profesional · código privado", en: "Professional project · private code" },
    source: "gottert",
    visibility: "private",
    featured: false,
    description: {
      es: "Gestión de pedidos de materiales y sus etapas de autorización, compras, almacén y logística, con API dedicada y permisos por operación.",
      en: "Material requests across approval, purchasing, warehouse and logistics stages, with a dedicated API and operation-level permissions.",
    },
    problem: {
      es: "Organizar solicitudes, seguimiento y administración de suministros dentro de una herramienta trazable.",
      en: "Organize requests, tracking and supply administration inside a traceable tool.",
    },
    role: {
      es: "Desarrollo full stack del circuito de pedidos, con API NestJS, validación en servidor y vistas para cada etapa operativa.",
      en: "Full stack development of the request workflow, with a NestJS API, server-side validation and views for each operational stage.",
    },
    impact: {
      es: "Seguimiento del estado, las autorizaciones y los responsables de cada pedido desde un mismo sistema.",
      en: "Tracking of each request’s status, approvals and responsible users in one system.",
    },
    technologies: ["nextjs", "react", "nestjs", "postgresql", "azure", "typescript", "nodejs", "jest", "testing", "github-actions"],
    relatedRepos: ["suministros-api", "suministros-app"],
    media: [
      {
        src: "/suministros-app-captura.png",
        alt: {
          es: "Formulario de solicitud de suministros con carga de datos, aprobadores e items.",
          en: "Supply request form with data entry, approvers and line items.",
        },
      },
    ],
  },
  {
    id: "bligraf-suite",
    title: {
      es: "Suite Operativa Bligraf",
      en: "Bligraf Operational Suite",
    },
    type: { es: "Proyecto profesional · código privado", en: "Professional project · private code" },
    source: "bligraf",
    visibility: "private",
    featured: true,
    description: {
      es: "Suite de aplicaciones para CRM, facturación/cobro, liquidación de producción, consolidación operativa y asistencia mediante chatbot externo.",
      en: "Application suite for CRM, billing, collections, production settlement, operational consolidation and external chatbot assistance.",
    },
    problem: {
      es: "Integrar procesos administrativos y productivos que requieren carga, consolidación, análisis y seguimiento operativo.",
      en: "Integrate administrative and production workflows that require input, consolidation, analysis and operational tracking.",
    },
    role: {
      es: "Desarrollo de CRM y liquidación, automatización del procesamiento de archivos e integración de asistentes de IA con información comercial.",
      en: "CRM and production settlement development, file-processing automation and integration of AI assistants with sales information.",
    },
    impact: {
      es: "Gestión de oportunidades con asistencia contextual, consultas sobre conocimiento comercial y consolidación de producción para liquidación y cobro.",
      en: "Opportunity management with contextual assistance, knowledge-based sales queries and production consolidation for settlement and billing.",
    },
    technologies: ["nextjs", "react", "postgresql", "azure", "openai", "typescript", "firestore", "rag", "playwright", "testing", "github-actions"],
    relatedRepos: ["crm-bligraf", "cobro-produccion-bligraf-chile", "liquidacion-produccion-bligraf", "chatbot-externo-bligraf"],
  },
  {
    id: "sigrh",
    title: {
      es: "SIGRH+",
      en: "SIGRH+",
    },
    type: { es: "Repositorio público", en: "Public repository" },
    source: "personal",
    visibility: "public",
    featured: true,
    description: {
      es: "Sistema de RRHH con reclutamiento, personal, asistencia y nómina, que integra matching de CVs mediante NLP y asistencia con reconocimiento facial.",
      en: "HR system for recruitment, employee records, attendance and payroll, integrating NLP-based CV matching and facial recognition for attendance.",
    },
    problem: {
      es: "Centralizar reclutamiento, personal, asistencia, nómina, licencias y control de acceso por roles.",
      en: "Centralize recruitment, staff, attendance, payroll, leaves and role-based access control.",
    },
    role: {
      es: "Desarrollo full stack e integración de modelos preentrenados de NLP y visión por computadora en reclutamiento y asistencia.",
      en: "Full stack development and integration of pretrained NLP and computer vision models into recruitment and attendance workflows.",
    },
    impact: {
      es: "Comparación de habilidades entre postulaciones y requisitos, y registro de asistencia mediante descriptores faciales.",
      en: "Skill matching between applications and job requirements, and attendance recording using facial descriptors.",
    },
    technologies: ["python", "javascript", "fastapi", "react", "postgresql", "ai", "nextjs", "spacy", "face-api", "numpy", "docker"],
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
    type: { es: "Repositorio público", en: "Public repository" },
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
      es: "Desarrollo experimental de un agente en Go con Ollama, ejecución de PowerShell y realimentación de resultados.",
      en: "Experimental development of a Go agent with Ollama, PowerShell execution and a result-feedback loop.",
    },
    impact: {
      es: "Prototipo ejecutable que transforma instrucciones en acciones locales y utiliza sus resultados para continuar la tarea.",
      en: "An executable prototype that turns instructions into local actions and uses their results to continue the task.",
    },
    technologies: ["go", "agents", "ai", "automation", "ollama", "testing"],
    relatedRepos: ["codeact-workspace-agent"],
    links: [{ label: "GitHub", href: "https://github.com/braiansosaDev/codeact-workspace-agent" }],
  },
  {
    id: "assist-automation",
    title: {
      es: "Automatizaciones Assist North",
      en: "Assist North Automation",
    },
    type: { es: "Caso profesional · código privado", en: "Professional case study · private code" },
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
      es: "Desarrollo de aplicaciones y automatizaciones, relevamiento de necesidades, integración de proveedores y acompañamiento a usuarios.",
      en: "Application and automation development, requirements gathering, vendor integration and user support.",
    },
    impact: {
      es: "Carga de servicios, cálculos y reportes automatizados para acompañar la operación de asistencia vehicular.",
      en: "Automated service entry, calculations and reports supporting vehicle assistance operations.",
    },
    technologies: ["python", "automation", "selenium", "testing", "pytest", "apps-script"],
    relatedRepos: [],
  },
  {
    id: "assist-benefits",
    title: { es: "Portal de Beneficios Assist North", en: "Assist North Benefits Portal" },
    type: { es: "Proyecto profesional · código privado", en: "Professional project · private code" },
    source: "assist-north",
    visibility: "private",
    featured: false,
    description: {
      es: "Portal para socios, comercios y administración, con planes, beneficios, cupones QR y reglas de canje por vigencia y límites de uso.",
      en: "A portal for members, merchants and administrators, with plans, benefits, QR coupons and redemption rules based on validity and usage limits.",
    },
    problem: {
      es: "Coordinar beneficios y canjes entre socios y comercios, respetando planes, sucursales, cupos y períodos.",
      en: "Coordinate member benefits and merchant redemptions while respecting plans, branches, quotas and periods.",
    },
    role: {
      es: "Adaptación de una base NextCRM al dominio de beneficios, con portales por rol, reglas de elegibilidad y operaciones transaccionales.",
      en: "Adaptation of a NextCRM base to the benefits domain, with role-specific portals, eligibility rules and transactional operations.",
    },
    impact: {
      es: "Emisión y validación de cupones con trazabilidad del canje y control de vigencias y límites individuales y globales.",
      en: "Coupon issuance and validation with redemption traceability and individual, global and validity limits.",
    },
    technologies: ["nextjs", "react", "typescript", "postgresql", "prisma", "jest", "playwright", "testing"],
    relatedRepos: ["assist-north-benefits", "nextcrm"],
  },
  {
    id: "assist-website",
    title: { es: "Sitio Comercial y Suscripciones Assist North", en: "Assist North Website & Subscriptions" },
    type: { es: "Proyecto profesional · código privado", en: "Professional project · private code" },
    source: "assist-north",
    visibility: "private",
    featured: false,
    description: {
      es: "Sitio de planes de asistencia vehicular con registro, catálogo administrable y flujo de suscripción y pagos integrado con Mercado Pago.",
      en: "Vehicle assistance plans website with registration, an editable catalog and a subscription and payment flow integrated with Mercado Pago.",
    },
    problem: {
      es: "Conectar la presentación de planes con el alta de socios, los pagos y la actualización del catálogo comercial.",
      en: "Connect plan information with member registration, payments and commercial catalog updates.",
    },
    role: {
      es: "Desarrollo e integración de frontend, formularios, backend de suscripciones y catálogo administrable.",
      en: "Development and integration of the frontend, forms, subscription backend and editable catalog.",
    },
    impact: {
      es: "Registro de suscriptores, creación de pagos y actualización de estados mediante webhooks, con administración del catálogo.",
      en: "Subscriber registration, payment creation and status updates via webhooks, with catalog administration.",
    },
    technologies: ["react", "typescript", "apps-script", "mercadopago", "php", "docker"],
    relatedRepos: ["web-assistnorth", "as-caba-24-asistencia"],
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
    locationLabel: "ubicación",
    focusLabel: "foco",
    focusValue: "Backoffice / Tiempo real / Automatización e IA",
    availability: "Disponibilidad full time",
    intro:
      "Construyo sistemas full stack, backoffices, portales internos e integraciones para automatizar operaciones y volver trazables procesos complejos.",
    viewProjects: "Ver proyectos",
    profileTitle: "Perfil",
    profile:
      "Desarrollador Full Stack con más de seis años de experiencia en aplicaciones empresariales e integraciones. Desarrollo backoffices, portales y sistemas industriales con React/Next.js, Node.js/NestJS y Python/FastAPI. Trabajo con datos, autenticación corporativa, automatización y despliegues en Azure, e integro IA generativa y modelos preentrenados de NLP y visión por computadora en procesos de negocio.",
    experienceTitle: "Experiencia",
    projectsTitle: "Proyectos",
    filtersAll: "Todos",
    reset: "reiniciar",
    sourceAll: "origen:*",
    featuredOnly: "Destacados",
    stackTitle: "Stack técnico",
    contactTitle: "Contacto",
    problem: "Problema",
    roleLabel: "Rol",
    impact: "Impacto",
    repos: "Repos relacionados",
    privateCode: "Código privado",
    open: "Abrir",
    explore: "Explorar caso",
    context: "Contexto y alcance",
    activities: "Actividades",
    implementation: "Cómo funciona",
    fullStack: "Stack del proyecto",
    less: "Ver menos",
    projectStatus: "Contexto del proyecto",
    period: "Período",
    noResults: "No hay proyectos con esta combinación de filtros.",
    projectCount: "proyectos encontrados",
    projectCountSingular: "proyecto encontrado",
    moreFilters: "Más tecnologías",
    projectFilters: "Filtros de proyectos",
    sourceFilters: "Filtros por origen",
    enlarge: "Ampliar captura",
    close: "Cerrar captura",
    education: "Formación",
    educationText: "UNGS · Tecnicatura Universitaria en Informática: 100% de materias aprobadas. Licenciatura en Sistemas en curso, 60% del plan aprobado. Formación Full Stack en Iters. Inglés B1.",
    downloadCv: "Descargar CV (PDF, español)",
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
    focusValue: "Backoffice / Realtime / Automation & AI",
    availability: "Full-time availability",
    intro:
      "I build full stack systems, backoffices, internal portals and integrations that automate operations and make complex processes traceable.",
    viewProjects: "View projects",
    profileTitle: "Profile",
    profile:
      "Full Stack Developer with over six years of experience in enterprise applications and integrations. I build backoffices, portals and industrial systems with React/Next.js, Node.js/NestJS and Python/FastAPI. My work covers data, corporate authentication, automation and Azure deployment, integrating generative AI and pretrained NLP and computer vision models into business workflows.",
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
    explore: "Explore case",
    context: "Context & scope",
    activities: "Activities",
    implementation: "How it works",
    fullStack: "Project stack",
    less: "Show less",
    projectStatus: "Project context",
    period: "Period",
    noResults: "No projects match this combination of filters.",
    projectCount: "projects found",
    projectCountSingular: "project found",
    moreFilters: "More technologies",
    projectFilters: "Project filters",
    sourceFilters: "Source filters",
    enlarge: "Enlarge screenshot",
    close: "Close screenshot",
    education: "Education",
    educationText: "UNGS · University program in Informatics: all coursework passed. Licenciatura en Sistemas in progress, 60% of curriculum completed. Full Stack training at Iters. English B1.",
    downloadCv: "Download CV (PDF, Spanish)",
  },
};

export const experience = [
  {
    company: "GOTTERT",
    period: { es: "09/2023 - Presente", en: "09/2023 - Present" },
    title: "Software Engineer / Full Stack Developer",
    points: {
      es: [
        "Desarrollo y evolución de interfaces, APIs y modelos de datos para CRM, RRHH, suministros, posventa y producción.",
        "Integración con Entra ID, Microsoft Graph y SharePoint; permisos, API keys y trabajos en segundo plano.",
        "Automatización de importaciones Excel/CSV, reglas de cálculo y generación de documentos PDF.",
        "Asistentes y chatbots con contexto de negocio, RAG, llamadas a herramientas y respuestas estructuradas.",
        "Integración industrial con PLC Siemens, Snap7, Redis y Socket.IO para supervisión y control en tiempo real.",
        "Pruebas unitarias, de integración y de interfaz; despliegue en Azure con Docker, GitHub Actions y monitoreo.",
      ],
      en: [
        "Development and evolution of interfaces, APIs and data models for CRM, HR, supplies, after-sales and production.",
        "Entra ID, Microsoft Graph and SharePoint integrations; permissions, API keys and background jobs.",
        "Automation of Excel/CSV imports, calculation rules and PDF document generation.",
        "Business-context assistants and chatbots with RAG, tool calling and structured responses.",
        "Industrial integration with Siemens PLCs, Snap7, Redis and Socket.IO for real-time monitoring and control.",
        "Unit, integration and interface testing; Azure deployment with Docker, GitHub Actions and monitoring.",
      ],
    },
  },
  {
    company: "Assist North Asistencia Vehicular",
    period: { es: "02/2020 - 08/2023", en: "02/2020 - 08/2023" },
    title: "Software Engineer / Full Stack Developer",
    points: {
      es: [
        "Desarrollo y mantenimiento de aplicaciones internas para digitalizar procesos administrativos y operativos.",
        "Integración con software de proveedores y automatización de la carga de servicios, cálculos de distancias y reportes con Python y Google Apps Script.",
        "Relevamiento con usuarios, implementación y soporte; pruebas y validaciones con Selenium y pytest.",
      ],
      en: [
        "Development and maintenance of internal applications to digitize administrative and operational processes.",
        "Vendor software integration and automation of service entry, distance calculations and reporting with Python and Google Apps Script.",
        "User requirements gathering, implementation and support; testing and validation with Selenium and pytest.",
      ],
    },
  },
];
