import type { LocalizedText } from "./data";

export type ProjectDetails = {
  context: LocalizedText;
  status: LocalizedText;
  period?: string;
  activities: LocalizedText[];
  workflow: LocalizedText;
  sections?: { title: LocalizedText; body: LocalizedText }[];
};

const text = (es: string, en: string): LocalizedText => ({ es, en });

export const projectDetails: Record<string, ProjectDetails> = {
  "kiln-control": {
    status: text("Sistema industrial", "Industrial system"),
    context: text(
      "Supervisión y operación de cámaras de secado de madera. El alcance conecta dispositivos industriales, servicios de datos e interfaces para el operador.",
      "Monitoring and operation of wood drying chambers. The scope connects industrial devices, data services and operator interfaces.",
    ),
    activities: [
      text("Lectura y escritura de variables del PLC Siemens mediante Snap7.", "Reading and writing Siemens PLC variables with Snap7."),
      text("Adquisición de sensores y distribución de estados con Redis y Socket.IO.", "Sensor acquisition and state distribution with Redis and Socket.IO."),
      text("Interfaces de procesos, recetas, históricos, alarmas y eventos.", "Interfaces for processes, recipes, historical data, alarms and events."),
      text("Simulación de equipos para desarrollar sin PLC físico y configuración de servicios con Docker.", "Equipment simulation for development without a physical PLC and service configuration with Docker."),
    ],
    workflow: text("PLC → adquisición de datos → estado en Redis → Socket.IO → panel web. Las acciones del operador vuelven al servicio de control.", "PLC → data acquisition → Redis state → Socket.IO → web dashboard. Operator actions return to the control service."),
  },
  "gottert-platform": {
    status: text("Ecosistema de aplicaciones empresariales", "Enterprise application ecosystem"),
    context: text("Aplicaciones para equipos comerciales, posventa, producción y proyectos. Suministros y RRHH cuentan con casos propios dentro del portfolio.", "Applications for sales, after-sales, production and project teams. Supplies and HR have their own cases in this portfolio."),
    activities: [
      text("Desarrollo de interfaces, APIs y modelos de datos con reglas y estados de negocio.", "Development of interfaces, APIs and data models with business rules and states."),
      text("Autenticación Entra ID/MSAL e integración documental con Graph y SharePoint.", "Entra ID/MSAL authentication and document integrations with Graph and SharePoint."),
      text("Importación de Excel y generación de PDF, confirmaciones y documentación comercial.", "Excel imports and generation of PDFs, confirmations and commercial documents."),
      text("Integración de órdenes y PIR mediante API keys y scopes, caché Redis y pruebas de endpoints e interfaz.", "Order and PIR integration through API keys and scopes, Redis caching and endpoint and interface tests."),
    ],
    workflow: text("Datos comerciales y operativos → validación por dominio → documentos e integraciones → seguimiento por cada área.", "Commercial and operational data → domain validation → documents and integrations → tracking by each team."),
    sections: [
      { title: text("CRM y comercial", "CRM & sales"), body: text("Leads, clientes, ofertas y órdenes. Evolución de interfaces y trabajo de migración de Firestore a PostgreSQL, con autorización en servidor.", "Leads, customers, quotes and orders. Interface evolution and migration work from Firestore to PostgreSQL, with server-side authorization.") },
      { title: text("Producción y materiales", "Production & materials"), body: text("Importaciones y sincronización de archivos de SharePoint, listas de materiales, planificación y seguimiento de primera y segunda transformación.", "SharePoint file imports and synchronization, material lists, planning and tracking of first and second transformation stages.") },
      { title: text("Posventa y asistencia técnica", "After-sales & technical assistance"), body: text("Cotizaciones, confirmaciones, entregas, casos e informes técnicos. AT-APP incorpora mejora de redacción asistida por IA.", "Quotes, confirmations, deliveries, cases and technical reports. AT-APP includes AI-assisted writing improvements.") },
      { title: text("Proyectos e integración operativa", "Projects & operational integration"), body: text("Seguimiento de proyectos, tareas y registros. Automatización complementaria de descarga de backups SUMMA desde Nextcloud y restauración en SQL Server.", "Project, task and record tracking. Supporting automation for downloading SUMMA backups from Nextcloud and restoring them to SQL Server.") },
    ],
  },
  "talent-portal": {
    status: text("Portal empresarial y servicios de integración", "Enterprise portal & integration services"),
    context: text("Portal para administrar información del personal, asistencia, novedades y certificados, conectado a una API NestJS y un servicio Python para dispositivos.", "A portal for employee information, attendance, HR updates and certificates, connected to a NestJS API and a Python device service."),
    activities: [
      text("Modelado de legajos, turnos, fichadas, novedades y documentación del personal.", "Modeling of employee records, shifts, clock events, HR updates and staff documents."),
      text("Sincronización de relojes ZKTeco, deduplicación y reglas de entrada y salida.", "ZKTeco clock synchronization, deduplication and clock-in/clock-out rules."),
      text("Coordinación con colas pg-boss, tareas programadas y actualizaciones por SSE.", "Coordination through pg-boss queues, scheduled tasks and SSE updates."),
      text("Formularios por pasos, validación de fechas, certificados y notificaciones con SharePoint y correo.", "Multi-step forms, date validation, certificates and notifications with SharePoint and email."),
    ],
    workflow: text("Reloj → servicio Python → PostgreSQL/API → portal de asistencia. Formularios y trabajos en segundo plano completan el circuito de novedades y documentos.", "Clock → Python service → PostgreSQL/API → attendance portal. Forms and background jobs complete the HR update and document workflow."),
    sections: [
      { title: text("Flota y planificación", "Fleet & planning"), body: text("Calendarios, mapas y recomendaciones con un LLM a partir de datos del vehículo y sus reservas, para apoyar la planificación y el seguimiento del mantenimiento.", "Calendars, maps and LLM recommendations based on vehicle data and reservations to support planning and maintenance tracking.") },
    ],
  },
  "supply-system": {
    status: text("Sistema de gestión interno", "Internal management system"),
    context: text("Circuito de pedidos de materiales para solicitantes, aprobadores y equipos de compras, almacén y logística.", "Material request workflow for requesters, approvers and purchasing, warehouse and logistics teams."),
    activities: [
      text("Modelado de pedidos, estados, autorizaciones y responsables por etapa.", "Modeling requests, states, approvals and stage-specific responsibilities."),
      text("API modular NestJS con DTOs, validación y permisos por operación en servidor.", "Modular NestJS API with DTOs, validation and server-side operation permissions."),
      text("Tablas operativas, filtros, notificaciones y actualización de novedades mediante SSE.", "Operational tables, filters, notifications and SSE updates."),
      text("Integración con servicios Gottert, migraciones y controles de calidad de datos.", "Gottert service integrations, migrations and data quality checks."),
    ],
    workflow: text("Solicitud → autorización → compras → almacén → logística, con estados y permisos para las operaciones de cada etapa.", "Request → approval → purchasing → warehouse → logistics, with states and permissions for each stage’s operations."),
  },
  "bligraf-suite": {
    status: text("Suite comercial y operativa", "Sales & operations suite"),
    context: text("Aplicaciones para el seguimiento comercial y la consolidación de producción de Bligraf Chile, con asistentes conectados a información del negocio.", "Applications for sales tracking and production consolidation at Bligraf Chile, with assistants connected to business information."),
    activities: [
      text("CRM de cuentas, contactos, leads, oportunidades y actividades, con importación y migración de datos.", "CRM for accounts, contacts, leads, opportunities and activities, with data imports and migrations."),
      text("Asistente con herramientas de consulta de catálogo, contexto del relevamiento y respuestas estructuradas con JSON Schema.", "Assistant with catalog query tools, discovery context and JSON Schema structured responses."),
      text("Chatbot con ingesta documental, embeddings, recuperación híbrida, streaming y captura de leads; transcripción y síntesis de voz.", "Chatbot with document ingestion, embeddings, hybrid retrieval, streaming and lead capture; speech transcription and synthesis."),
      text("Procesamiento de Excel, consolidación y reglas de liquidación, Azure Functions y exportación de Excel/PDF.", "Excel processing, consolidation and settlement rules, Azure Functions and Excel/PDF exports."),
      text("Pruebas de interfaz con Playwright y workflows separados para producción y staging.", "Interface tests with Playwright and separate production and staging workflows."),
    ],
    workflow: text("Consulta → recuperación de conocimiento o herramientas del CRM → respuesta contextual → seguimiento comercial. En liquidación: archivo → reglas por período → consolidado → exportación.", "Query → knowledge retrieval or CRM tools → contextual response → sales follow-up. For settlement: file → period rules → consolidation → export."),
    sections: [
      { title: text("CRM y asistente comercial", "CRM & sales assistant"), body: text("Firestore para el CRM, asistentes con contexto del borrador e historial, resúmenes de relevamiento y audio.", "Firestore for the CRM, assistants with draft and conversation context, discovery summaries and audio.") },
      { title: text("Chatbot con RAG", "RAG chatbot"), body: text("Fragmentación de documentos y búsqueda semántica y léxica sobre un almacén local de conocimiento y vectores, conectada a generación con OpenAI.", "Document chunking and semantic and lexical search over a local knowledge and vector store, connected to OpenAI generation.") },
      { title: text("Liquidación y cobro", "Settlement & billing"), body: text("PostgreSQL/Drizzle, importaciones en Azure Functions y Storage, reglas de cálculo y exportación de ajustes e ítems facturados y pendientes.", "PostgreSQL/Drizzle, imports in Azure Functions and Storage, calculation rules and export of adjustments and billed and pending items.") },
    ],
  },
  sigrh: {
    status: text("Proyecto académico en equipo · módulos en evolución", "Academic team project · evolving modules"),
    context: text("Sistema de recursos humanos desarrollado en contexto académico con separación frontend/backend y módulos de reclutamiento, personal, asistencia, licencias y nómina.", "An HR system developed in an academic setting, with separate frontend and backend and modules for recruitment, employee records, attendance, leave and payroll."),
    activities: [
      text("Extracción de texto de CVs en PDF y normalización de habilidades y requisitos.", "Text extraction from PDF CVs and normalization of skills and requirements."),
      text("Matching con spaCy, coincidencia de frases y similitud semántica, combinado con reglas de la oferta.", "Matching with spaCy, phrase matching and semantic similarity, combined with job-specific rules."),
      text("Carga de modelos de face-api.js para detección, landmarks y extracción de descriptores en el navegador.", "Loading face-api.js models for detection, landmarks and descriptor extraction in the browser."),
      text("Comparación de descriptores con NumPy, persistencia y registro de asistencia desde una API autenticada.", "Descriptor comparison with NumPy, persistence and attendance recording through an authenticated API."),
    ],
    workflow: text("CV → texto normalizado → coincidencias de habilidades → evaluación por requisitos. Cámara → descriptor facial → comparación en backend → registro de asistencia.", "CV → normalized text → skill matches → requirements evaluation. Camera → facial descriptor → backend comparison → attendance record."),
    sections: [
      { title: text("ML aplicado", "Applied ML"), body: text("Integración e inferencia con modelos preentrenados de NLP y visión por computadora, combinando vectores, umbrales y reglas de negocio.", "Integration and inference with pretrained NLP and computer vision models, combining vectors, thresholds and business rules.") },
    ],
  },
  "codeact-agent": {
    status: text("Prototipo experimental", "Experimental prototype"),
    context: text("Exploración de agentes que utilizan código como mecanismo de acción dentro de un workspace, con un LLM local servido por Ollama.", "An exploration of agents using code as their action mechanism inside a workspace, with a local LLM served by Ollama."),
    activities: [
      text("Interfaz CLI y web para recibir tareas y consultar trazas de ejecución.", "CLI and web interfaces for receiving tasks and viewing execution traces."),
      text("Interpretación de respuestas JSON y validación de scripts PowerShell antes de ejecutarlos.", "JSON response parsing and validation of PowerShell scripts before execution."),
      text("Captura de stdout, stderr y código de salida como contexto para el siguiente paso.", "Capturing stdout, stderr and exit codes as context for the next step."),
      text("Límites de pasos y timeout, modo de lectura predeterminado y pruebas de parser, políticas y ejecución.", "Step and timeout limits, a default read mode and tests for parsing, policies and execution."),
    ],
    workflow: text("Instrucción → modelo local → script validado → ejecución → resultado → siguiente acción, hasta completar la tarea o alcanzar el límite.", "Instruction → local model → validated script → execution → result → next action, until completion or the step limit."),
  },
  "assist-automation": {
    status: text("Caso de experiencia profesional", "Professional experience case"),
    period: "02/2020 – 08/2023",
    context: text("Herramientas internas de asistencia vehicular para sustituir carga repetitiva y conectar información de proveedores con procesos administrativos.", "Internal vehicle assistance tools to replace repetitive data entry and connect vendor information with administrative workflows."),
    activities: [
      text("Relevamiento de necesidades con usuarios internos y adaptación de aplicaciones al proceso operativo.", "Gathering requirements with internal users and adapting applications to operational workflows."),
      text("Integración de software de proveedores y automatización de la carga de servicios.", "Vendor software integration and automated service entry."),
      text("Cálculos de distancias, procesamiento de datos y reportes con Python y Google Apps Script.", "Distance calculations, data processing and reports with Python and Google Apps Script."),
      text("Pruebas con Selenium y pytest, implementación, mantenimiento y soporte a usuarios.", "Selenium and pytest validation, implementation, maintenance and user support."),
    ],
    workflow: text("Datos de servicios y proveedores → procesamiento y validaciones → carga y reportes para la operación interna.", "Service and vendor data → processing and validation → entry and reports for internal operations."),
  },
  "assist-benefits": {
    status: text("Adaptación de plataforma al dominio de beneficios", "Platform adaptation to the benefits domain"),
    context: text("Desarrollo sobre una base NextCRM, adaptada a socios, administración y comercios. Este caso tiene un alcance independiente de las automatizaciones del período 2020–2023.", "Development on a NextCRM base adapted for members, administrators and merchants. This case has a separate scope from the 2020–2023 automation work."),
    activities: [
      text("Portales por rol y modelado de planes, períodos, beneficios, comercios y sucursales.", "Role-specific portals and modeling of plans, periods, benefits, merchants and branches."),
      text("Reglas de elegibilidad por vigencia y límites individuales y globales.", "Eligibility rules based on validity and individual and global limits."),
      text("Emisión de cupones y validación de canjes con QR, estados y operaciones transaccionales.", "Coupon issuance and QR redemption validation with states and transactional operations."),
      text("Autenticación, permisos en servidor y pruebas de reglas, navegación y flujos de integración.", "Authentication, server-side permissions and tests for rules, navigation and integration flows."),
    ],
    workflow: text("Plan vigente → beneficio elegible → cupón → validación del comercio y sucursal → canje confirmado y actualización de límites.", "Valid plan → eligible benefit → coupon → merchant and branch validation → confirmed redemption and limit updates."),
  },
  "assist-website": {
    status: text("Sitio comercial e integración de pagos", "Commercial website & payment integration"),
    context: text("Una familia de sitios de asistencia vehicular: la base de presentación de planes y su evolución con suscripciones, pagos y un catálogo administrable.", "A family of vehicle assistance websites: a plans presentation base and its evolution with subscriptions, payments and an editable catalog."),
    activities: [
      text("Frontend React, formularios validados y páginas de planes con SEO.", "React frontend, validated forms and plan pages with SEO."),
      text("Registro de suscriptores en Google Sheets mediante Google Apps Script.", "Subscriber registration in Google Sheets through Google Apps Script."),
      text("Creación de preferencias de Mercado Pago y procesamiento de notificaciones de pago por webhook.", "Mercado Pago checkout preference creation and payment webhook processing."),
      text("Catálogo administrable con PHP, sesiones, validación y protección CSRF; configuración de publicación.", "Editable PHP catalog with sessions, validation and CSRF protection; publishing configuration."),
    ],
    workflow: text("Selección de plan → formulario → registro → checkout → webhook → actualización del estado del suscriptor.", "Plan selection → form → registration → checkout → webhook → subscriber status update."),
  },
};
