"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { copy, experience, projects, technologies, type Locale } from "./data";

const techById = new Map(technologies.map((tech) => [tech.id, tech]));

export default function PortfolioPage({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [selectedTech, setSelectedTech] = useState<string>("all");
  const [selectedSource, setSelectedSource] = useState<string>("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(["top"]));
  const t = copy[locale];
  const navItems = ["profile", "experience", "projects", "stack", "contact"].map((id, index) => ({
    id,
    label: t.nav[index],
  }));

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function revealClass(id: string, extra = "") {
    return `${extra} reveal ${visibleSections.has(id) ? "is-visible" : ""}`.trim();
  }

  function changeLocale(nextLocale: Locale) {
    window.localStorage.setItem("locale", nextLocale);
    const hash = window.location.hash;
    router.push(`/${nextLocale}${hash}`);
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

  return (
    <main className="site-shell">
      <div className="scanline" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Braian Sosa">
          <span className="prompt">{t.brandPath}</span>
          <span>Braian Sosa</span>
        </a>
        <nav className="nav" aria-label="Primary">
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
        <p className="section-copy">{t.profile}</p>
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
            onClick={() => {
              setSelectedTech("all");
              setSelectedSource("all");
              setFeaturedOnly(false);
            }}
          >
            <RotateCcw size={16} />
            {t.reset}
          </button>
        </div>

        <div className="filters" aria-label="Project filters">
          <button className={selectedTech === "all" ? "chip active" : "chip"} onClick={() => setSelectedTech("all")}>
            {t.filtersAll}
          </button>
          {usedTechIds.map((id) => {
            const tech = techById.get(id);
            if (!tech) return null;
            const Icon = tech.icon;
            return (
              <button
                key={id}
                className={selectedTech === id ? "chip active" : "chip"}
                onClick={() => setSelectedTech(id)}
              >
                <Icon style={{ color: tech.color }} />
                {tech.label}
              </button>
            );
          })}
        </div>

        <div className="filters secondary" aria-label="Source filters">
          <button className={selectedSource === "all" ? "chip active" : "chip"} onClick={() => setSelectedSource("all")}>
            {t.sourceAll}
          </button>
          {sourceOptions.map((source) => (
            <button
              key={source}
              className={selectedSource === source ? "chip active" : "chip"}
              onClick={() => setSelectedSource(source)}
            >
              {source}
            </button>
          ))}
          <button className={featuredOnly ? "chip active" : "chip"} onClick={() => setFeaturedOnly((value) => !value)}>
            {t.featuredOnly}
          </button>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <article
              className={`${project.featured ? "project-card featured" : "project-card"} stagger-${(index % 4) + 1}`}
              key={project.id}
            >
              <div className="card-top">
                <span className={project.visibility === "public" ? "badge public" : "badge"}>{project.type}</span>
                <span className="source">{project.source}</span>
              </div>
              <h3>{project.title[locale]}</h3>
              {project.media?.length ? (
                <div className={`project-media media-count-${Math.min(project.media.length, 4)}`} aria-label={project.title[locale]}>
                  {project.media.slice(0, 4).map((item, mediaIndex) => (
                    <img
                      key={item.src}
                      src={item.src}
                      alt={item.alt[locale]}
                      className={mediaIndex === 0 ? "primary-media" : ""}
                      loading="lazy"
                    />
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
              <div className="tech-row">
                {project.technologies.slice(0, 7).map((id) => {
                  const tech = techById.get(id);
                  if (!tech) return null;
                  const Icon = tech.icon;
                  return (
                    <span className="tech-pill" key={id}>
                      <Icon style={{ color: tech.color }} />
                      {tech.label}
                    </span>
                  );
                })}
                {project.technologies.length > 7 ? <span className="tech-pill">+{project.technologies.length - 7}</span> : null}
              </div>
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
        <div className="stack-grid">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div className={`stack-item stagger-${(index % 4) + 1}`} key={tech.id}>
                <div className="stack-card-top">
                  <span className="source">{tech.category}</span>
                </div>
                <div className="stack-card-main">
                  <Icon style={{ color: tech.color }} />
                  <span>{tech.label}</span>
                </div>
              </div>
            );
          })}
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
    </main>
  );
}
