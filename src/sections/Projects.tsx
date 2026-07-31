import { Icon } from "../components/Icon";
import { SectionHeading } from "../components/SectionHeading";
import { Link } from "react-router-dom";
import {
  content,
  projectPath,
  type Locale,
  type Project,
} from "../content/portfolio";

interface ProjectsProps {
  locale: Locale;
}

interface ProjectCardProps {
  locale: Locale;
  project: Project;
  index: number;
}

function ProjectCard({ locale, project, index }: ProjectCardProps) {
  const copy = content[locale].projectsSection;

  return (
    <article className="project-card" data-reveal>
      <Link
        className="project-media"
        to={projectPath(locale, project.slug)}
        aria-label={`0${index + 1} — ${copy.caseStudy}: ${project.title}`}
      >
        <span className="project-index" aria-hidden="true">
          0{index + 1}
        </span>
        <img
          alt={project.imageAlt}
          decoding="async"
          height="426"
          loading="lazy"
          src={project.image}
          width="640"
        />
      </Link>
      <div className="project-body">
        <div>
          <p className="project-kicker">{project.descriptor}</p>
          <h3>{project.title}</h3>
        </div>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label="Technologies and practices">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          <Link className="text-link" to={projectPath(locale, project.slug)}>
            {copy.caseStudy} <Icon name="arrow-right" />
          </Link>
          {project.demo && (
            <a
              className="text-link text-link-muted"
              href={project.demo}
              rel="noreferrer"
              target="_blank"
            >
              {copy.demo} <Icon name="arrow-up-right" />
            </a>
          )}
          {project.article && (
            <a
              className="text-link text-link-muted"
              href={project.article}
              rel="noreferrer"
              target="_blank"
            >
              {copy.article} <Icon name="arrow-up-right" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects({ locale }: ProjectsProps) {
  const copy = content[locale];

  return (
    <section
      className="section section-projects"
      data-reveal
      id="projetos"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <SectionHeading
          description={copy.projectsSection.description}
          eyebrow={copy.projectsSection.eyebrow}
          id="projects-title"
          title={copy.projectsSection.title}
        />
        <div className="projects-list">
          {copy.projects.map((project, index) => (
            <ProjectCard
              index={index}
              key={project.slug}
              locale={locale}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
