"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Download, Github, Linkedin, Mail, RotateCcw, X, ZoomIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { copy, experience, projects, technologies, technologyCategories, type Locale, type Project } from "./data";
import { projectDetails } from "./project-details";

const techById = new Map(technologies.map((tech) => [tech.id, tech]));
const primaryFilters = new Set(["nextjs", "react", "typescript", "nodejs", "python", "nestjs", "fastapi", "postgresql", "azure", "openai", "ai", "automation", "testing", "industrial"]);

function TechPill({ id }: { id: string }) {
  const tech = techById.get(id);
  if (!tech) return null;
  const Icon = tech.icon;
  return (
    <span className="tech-pill">
      <Icon aria-hidden="true" style={{ color: tech.color }} />
      {tech.label}
    </span>
  );
}

function ProjectTechnologies({ ids, locale }: { ids: string[]; locale: Locale }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="tech-row">
      {(expanded ? ids : ids.slice(0, 7)).map((id) => <TechPill key={id} id={id} />)}
      {ids.length > 7 ? (
        <button
          type="button"
          className="tech-pill tech-toggle"
          aria-expanded={expanded}
          aria-label={expanded ? copy[locale].less : copy[locale].fullStack}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? copy[locale].less : `+${ids.length - 7}`}
        </button>
      ) : null}
    </div>
  );
}

function ProjectCase({ project, locale }: { project: Project; locale: Locale }) {
  const detail = projectDetails[project.id];
  const t = copy[locale];
  if (!detail) return null;

  return (
    <details className="case-details">
      <summary>{t.explore}<ChevronDown size={16} aria-hidden="true" /></summary>
      <div className="case-body">
        <p className="case-status"><span>{t.projectStatus}</span>{detail.status[locale]}</p>
        {detail.period ? <p className="case-status"><span>{t.period}</span>{detail.period}</p> : null}
        <h4>{t.context}</h4>
        <p>{detail.context[locale]}</p>
        <h4>{t.activities}</h4>
        <ul>
          {detail.activities.map((activity) => <li key={activity.es}>{activity[locale]}</li>)}
        </ul>
        <h4>{t.implementation}</h4>
        <p className="case-workflow">{detail.workflow[locale]}</p>
        {detail.sections?.map((section) => (
          <div className="case-module" key={section.title.es}>
            <h4>{section.title[locale]}</h4>
            <p>{section.body[locale]}</p>
          </div>
        ))}
        <h4>{t.fullStack}</h4>
        <div className="tech-row">
          {project.technologies.map((id) => <TechPill key={id} id={id} />)}
        </div>
      </div>
    </details>
  );
}

export default function PortfolioPage({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [selectedTech, setSelectedTech] = useState<string>("all");
  const [selectedSource, setSelectedSource] = useState<string>("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(["top"]));
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);
  const imageDialog = useRef<HTMLDialogElement>(null);
  const t = copy[locale];
  const navItems = ["profile", "experience", "projects", "stack", "contact"].map((id, index) => ({
    id,
    label: t.nav[index],
  }));

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (!selectedImage) return;
    imageDialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selectedImage]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = (entry.target as HTMLElement).dataset.reveal;
          if (!id) return;
          setVisibleSections((current) => {
            const next = new Set(current);
            next.add(id);
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [locale]);

  function revealClass(id: string, extra = "") {
    return `${extra} reveal ${visibleSections.has(id) ? "is-visible" : ""}`.trim();
  }

  function changeLocale(nextLocale: Locale) {
    window.localStorage.setItem("locale", nextLocale);
    const hash = window.location.hash;
    router.push(`/${nextLocale}${hash}`);
  }

  function resetFilters() {
    setSelectedTech("all");
    setSelectedSource("all");
    setFeaturedOnly(false);
  }

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTech = selectedTech === "all" || project.technologies.includes(selectedTech);
      const matchesSource = selectedSource === "all" || project.source === selectedSource;
      const matchesFeatured = !featuredOnly || project.featured;
      return matchesTech && matchesSource && matchesFeatured;
    });
  }, [selectedTech, selectedSource, featuredOnly]);

  const usedTechIds = Array.from(new Set(projects.flatMap((project) => project.technologies)));
  const sourceOptions = Array.from(new Set(projects.map((project) => project.source)));
  function technologyFilter(id: string) {
    const tech = techById.get(id);
    if (!tech) return null;
    const Icon = tech.icon;
    return (
      <button
        key={id}
        type="button"
        className={selectedTech === id ? "chip active" : "chip"}
        aria-pressed={selectedTech === id}
        onClick={() => setSelectedTech(id)}
      >
        <Icon aria-hidden="true" style={{ color: tech.color }} />
        {tech.label}
      </button>
    );
  }

  return (
    <main className="site-shell">
      <div className="scanline" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Braian Sosa">
          <span className="prompt">{t.brandPath}</span>
          <span>Braian Sosa</span>
        </a>
        <nav className="nav" aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
          {navItems.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="language" aria-label={t.language}>
          <button className={locale === "es" ? "active" : ""} onClick={() => changeLocale("es")}>
            <span className="flag fi fis fi-ar" aria-hidden="true" />
            <span>ES</span>
          </button>
          <button className={locale === "en" ? "active" : ""} onClick={() => changeLocale("en")}>
            <span className="flag fi fis fi-us" aria-hidden="true" />
            <span>EN</span>
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal is-visible">
          <p className="terminal-line typing-line">{t.eyebrow}</p>
          <h1>Braian Sosa</h1>
          <p className="role">{t.role}</p>
          <p className="intro">{t.intro}</p>
          <div className="hero-actions">
            <a href="#projects" className="button primary">
              <ArrowUpRight size={18} />
              {t.viewProjects}
            </a>
            <a href="https://linkedin.com/in/braian-orlando-sosa" className="button icon-link" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href="https://github.com/braiansosaDev" className="button icon-link" target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
            <a href="mailto:braianorlandososa@gmail.com" className="button icon-link">
              <Mail size={18} />
              Email
            </a>
            <a href="/Braian_Orlando_Sosa_CV_ES.pdf" download className="button icon-link"><Download size={18} aria-hidden="true" />{t.downloadCv}</a>
          </div>
        </div>
        <aside className="status-panel reveal is-visible delay-1" aria-label="Profile summary">
          <div>
            <span className="muted">{t.statusLabel}</span>
            <strong>{t.availability}</strong>
          </div>
          <div>
            <span className="muted">{t.locationLabel}</span>
            <strong>{t.location}</strong>
          </div>
          <div>
            <span className="muted">{t.focusLabel}</span>
            <strong>{t.focusValue}</strong>
          </div>
          <div className="mini-stack">
            {["nextjs", "react", "python", "fastapi", "nestjs", "postgresql", "docker", "azure"].map((id) => {
              const tech = techById.get(id);
              if (!tech) return null;
              const Icon = tech.icon;
              return (
                <span key={id} title={tech.label}>
                  <Icon />
                </span>
              );
            })}
          </div>
        </aside>
      </section>

      <section className={revealClass("profile", "two-column section")} id="profile" data-reveal="profile">
        <div>
          <p className="terminal-line typing-line">{t.commands.profile}</p>
          <h2>{t.profileTitle}</h2>
        </div>
        <div className="section-copy"><p>{t.profile}</p><p className="education-copy"><strong>{t.education}</strong><br />{t.educationText}</p></div>
      </section>

      <section className={revealClass("experience", "section")} id="experience" data-reveal="experience">
        <div className="section-heading">
          <p className="terminal-line typing-line">{t.commands.experience}</p>
          <h2>{t.experienceTitle}</h2>
        </div>
        <div className="timeline">
          {experience.map((job, index) => (
            <article className={`timeline-item stagger-${index + 1}`} key={job.company}>
              <div>
                <span className="period">{job.period[locale]}</span>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
              </div>
              <ul>
                {job.points[locale].map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={revealClass("projects", "section")} id="projects" data-reveal="projects">
        <div className="section-heading split">
          <div>
            <p className="terminal-line typing-line">{t.commands.projects}</p>
            <h2>{t.projectsTitle}</h2>
          </div>
          <button
            className="button reset"
            onClick={resetFilters}
          >
            <RotateCcw size={16} />
            {t.reset}
          </button>
        </div>

        <div className="filters" aria-label={t.projectFilters}>
          <button className={selectedTech === "all" ? "chip active" : "chip"} aria-pressed={selectedTech === "all"} onClick={() => setSelectedTech("all")}>
            {t.filtersAll}
          </button>
          {usedTechIds.filter((id) => primaryFilters.has(id)).map(technologyFilter)}
        </div>
        <details className="filter-disclosure">
          <summary>{t.moreFilters}{selectedTech !== "all" && !primaryFilters.has(selectedTech) ? ` · ${techById.get(selectedTech)?.label}` : ""}<ChevronDown size={14} aria-hidden="true" /></summary>
          <div className="filters">{usedTechIds.filter((id) => !primaryFilters.has(id)).map(technologyFilter)}</div>
        </details>

        <div className="filters secondary" aria-label={t.sourceFilters}>
          <button className={selectedSource === "all" ? "chip active" : "chip"} aria-pressed={selectedSource === "all"} onClick={() => setSelectedSource("all")}>
            {t.sourceAll}
          </button>
          {sourceOptions.map((source) => (
            <button
              key={source}
              className={selectedSource === source ? "chip active" : "chip"}
              aria-pressed={selectedSource === source}
              onClick={() => setSelectedSource(source)}
            >
              {source}
            </button>
          ))}
          <button className={featuredOnly ? "chip active" : "chip"} aria-pressed={featuredOnly} onClick={() => setFeaturedOnly((value) => !value)}>
            {t.featuredOnly}
          </button>
        </div>
        <p className="results-count" role="status" aria-live="polite">
          {filteredProjects.length} {filteredProjects.length === 1 ? t.projectCountSingular : t.projectCount}
        </p>
        {filteredProjects.length === 0 ? (
          <div className="empty-state">
            <p>{t.noResults}</p>
            <button className="button" onClick={resetFilters}>
              <RotateCcw size={16} aria-hidden="true" />{t.reset}
            </button>
          </div>
        ) : null}

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <article
              className={`${project.featured ? "project-card featured" : "project-card"} stagger-${(index % 4) + 1}`}
              key={project.id}
            >
              <div className="card-top">
                <span className={project.visibility === "public" ? "badge public" : "badge"}>{project.type[locale]}</span>
                <span className="source">{project.source}</span>
              </div>
              <h3>{project.title[locale]}</h3>
              {project.media?.length ? (
                <div className={`project-media media-count-${Math.min(project.media.length, 4)}`} aria-label={project.title[locale]}>
                  {project.media.slice(0, 4).map((item, mediaIndex) => (
                    <button
                      type="button"
                      className={`media-button ${mediaIndex === 0 ? "primary-media" : ""}`}
                      key={item.src}
                      aria-label={`${t.enlarge}: ${item.alt[locale]}`}
                      onClick={() => setSelectedImage({ src: item.src, alt: item.alt[locale], title: project.title[locale] })}
                    >
                      <img src={item.src} alt={item.alt[locale]} loading="lazy" />
                      <span className="media-zoom"><ZoomIn size={14} aria-hidden="true" /></span>
                    </button>
                  ))}
                </div>
              ) : null}
              <p className="description">{project.description[locale]}</p>
              <div className="card-detail">
                <strong>{t.problem}</strong>
                <p>{project.problem[locale]}</p>
              </div>
              <div className="card-detail">
                <strong>{t.roleLabel}</strong>
                <p>{project.role[locale]}</p>
              </div>
              <div className="card-detail">
                <strong>{t.impact}</strong>
                <p>{project.impact[locale]}</p>
              </div>
              <ProjectCase project={project} locale={locale} />
              <ProjectTechnologies ids={project.technologies} locale={locale} />
              <div className="repos">
                <span>{project.visibility === "public" && project.relatedRepos.length ? t.repos : t.privateCode}</span>
                {project.visibility === "public"
                  ? project.relatedRepos.slice(0, 3).map((repo) => <code key={repo}>{repo}</code>)
                  : null}
              </div>
              {project.links?.length ? (
                <div className="links">
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className={revealClass("stack", "section")} id="stack" data-reveal="stack">
        <div className="section-heading">
          <p className="terminal-line typing-line">{t.commands.stack}</p>
          <h2>{t.stackTitle}</h2>
        </div>
        <div className="stack-groups">
          {Object.entries(technologyCategories).map(([category, label]) => (
            <details className="stack-group" key={category} open>
              <summary>{label[locale]}<ChevronDown size={16} aria-hidden="true" /></summary>
              <div className="stack-grid">
                {technologies.filter((tech) => tech.category === category).map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div className={`stack-item stagger-${(index % 4) + 1}`} key={tech.id}>
                      <div className="stack-card-main">
                        <Icon aria-hidden="true" style={{ color: tech.color }} />
                        <span>{tech.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          ))}
        </div>
      </section>

      <footer className={revealClass("contact", "section footer")} id="contact" data-reveal="contact">
        <div>
          <p className="terminal-line typing-line">{t.commands.contact}</p>
          <h2>{t.contactTitle}</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:braianorlandososa@gmail.com">
            <Mail size={18} />
            Email
          </a>
          <a href="https://linkedin.com/in/braian-orlando-sosa" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href="https://github.com/braiansosaDev" target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
        </div>
      </footer>
      <dialog ref={imageDialog} className="image-dialog" aria-labelledby="capture-title" onClose={() => setSelectedImage(null)} onClick={(event) => { if (event.target === event.currentTarget) imageDialog.current?.close(); }}>
        {selectedImage ? <div className="capture-content">
          <div className="capture-heading"><h2 id="capture-title">{selectedImage.title}</h2><button className="button" type="button" onClick={() => imageDialog.current?.close()} aria-label={t.close}><X size={20} aria-hidden="true" /></button></div>
          <figure><img src={selectedImage.src} alt={selectedImage.alt} /><figcaption>{selectedImage.alt}</figcaption></figure>
        </div> : null}
      </dialog>
    </main>
  );
}
