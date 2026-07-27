import { Icon } from "../components/Icon";
import {
  content,
  localePath,
  projectPath,
  type Locale,
  type ProjectSlug,
} from "../content/portfolio";

interface ProjectPageProps {
  locale: Locale;
  slug: ProjectSlug;
}

export function ProjectPage({ locale, slug }: ProjectPageProps) {
  const copy = content[locale];
  const project = copy.projects.find((item) => item.slug === slug);

  if (!project) return null;

  const index = copy.projects.findIndex((item) => item.slug === slug);
  const nextProject = copy.projects[(index + 1) % copy.projects.length];

  return (
    <main className="project-page" id="main-content">
      <article>
        <header className="project-hero">
          <div className="container">
            <a className="back-link" href={`${localePath(locale)}#projetos`}>
              <span aria-hidden="true">←</span> {copy.projectPage.back}
            </a>
            <div className="project-hero-grid">
              <div>
                <p className="eyebrow">{project.descriptor}</p>
                <h1>{project.title}</h1>
                <p className="project-lead">{project.summary}</p>
                <ul className="tag-list">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
              <div className="project-hero-media">
                <img
                  alt={`Interface do projeto ${project.title}`}
                  decoding="sync"
                  fetchPriority="high"
                  height="426"
                  src={project.image}
                  width="640"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container case-study-grid">
          <aside aria-label={copy.projectPage.overview}>
            <p className="eyebrow">{copy.projectPage.overview}</p>
            <dl>
              <div>
                <dt>{copy.projectPage.role}</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>{copy.projectPage.stack}</dt>
                <dd>{project.technologies.join(" · ")}</dd>
              </div>
            </dl>
            <div className="case-actions">
              {project.demo && (
                <a
                  className="button"
                  href={project.demo}
                  rel="noreferrer"
                  target="_blank"
                >
                  {copy.projectPage.demo} <Icon name="arrow-up-right" />
                </a>
              )}
              {project.article && (
                <a
                  className="button"
                  href={project.article}
                  rel="noreferrer"
                  target="_blank"
                >
                  {copy.projectPage.article} <Icon name="arrow-up-right" />
                </a>
              )}
            </div>
          </aside>
          <div className="case-study-content">
            <section aria-labelledby="context-title">
              <p className="eyebrow">01</p>
              <h2 id="context-title">{copy.projectPage.context}</h2>
              <p>{project.context}</p>
            </section>
            <section aria-labelledby="challenge-title">
              <p className="eyebrow">02</p>
              <h2 id="challenge-title">{copy.projectPage.challenge}</h2>
              <p>{project.challenge}</p>
            </section>
            <section aria-labelledby="responsibilities-title">
              <p className="eyebrow">03</p>
              <h2 id="responsibilities-title">
                {copy.projectPage.responsibilities}
              </h2>
              <ul className="check-list">
                {project.responsibilities.map((item) => (
                  <li key={item}>
                    <Icon name="check" /> {item}
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="decisions-title">
              <p className="eyebrow">04</p>
              <h2 id="decisions-title">{copy.projectPage.decisions}</h2>
              <ul className="check-list">
                {project.decisions.map((item) => (
                  <li key={item}>
                    <Icon name="check" /> {item}
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="outcome-title">
              <p className="eyebrow">05</p>
              <h2 id="outcome-title">{copy.projectPage.outcome}</h2>
              <p>{project.outcome}</p>
            </section>
          </div>
        </div>
      </article>

      <nav
        className="container next-project"
        aria-label={copy.projectPage.next}
      >
        <span>{copy.projectPage.next}</span>
        <a href={projectPath(locale, nextProject.slug)}>
          {nextProject.title} <Icon name="arrow-right" />
        </a>
      </nav>
    </main>
  );
}
