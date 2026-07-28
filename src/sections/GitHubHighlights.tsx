import { Icon } from "../components/Icon";
import { SectionHeading } from "../components/SectionHeading";
import githubData from "../content/github.generated.json";
import { content, profile, type Locale } from "../content/portfolio";

interface GitHubHighlightsProps {
  locale: Locale;
}

export function GitHubHighlights({ locale }: GitHubHighlightsProps) {
  const copy = content[locale].githubSection;

  return (
    <section
      className="section section-github"
      data-reveal
      id="github"
      aria-labelledby="github-title"
    >
      <div className="container">
        <div className="github-heading">
          <SectionHeading
            description={copy.description}
            eyebrow={copy.eyebrow}
            id="github-title"
            title={copy.title}
          />
          <a
            className="button button-secondary"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            <Icon name="github" /> {copy.profile}
          </a>
        </div>
        <div className="github-grid">
          {githubData.repositories.map((repository) => (
            <article className="github-card" key={repository.name}>
              <div className="github-card-top">
                <Icon name="github" />
                <span>{repository.language}</span>
              </div>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
              <div className="github-meta">
                {(repository.stars > 0 || repository.forks > 0) && (
                  <span>
                    ★ {repository.stars} {copy.stars} · {repository.forks}{" "}
                    {copy.forks}
                  </span>
                )}
                <time dateTime={repository.updatedAt}>
                  {copy.updated}{" "}
                  {new Intl.DateTimeFormat(locale, {
                    month: "short",
                    year: "numeric",
                  }).format(new Date(repository.updatedAt))}
                </time>
              </div>
              <a
                className="text-link"
                href={repository.url}
                rel="noreferrer"
                target="_blank"
              >
                {copy.repository} <Icon name="arrow-up-right" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
