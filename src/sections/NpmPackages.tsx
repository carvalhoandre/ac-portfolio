import { Icon } from "../components/Icon";
import { SectionHeading } from "../components/SectionHeading";
import { content, type Locale } from "../content/portfolio";
import { useNpmPackages } from "../hooks/useNpmPackages";
import type { NpmPackage } from "../types/npm";

interface NpmPackagesProps {
  locale: Locale;
}

interface NpmPackageCardProps {
  copy: (typeof content)[Locale]["npmSection"];
  loading: boolean;
  locale: Locale;
  packageData: NpmPackage;
}

const formatUpdatedAt = (value: string | undefined, locale: Locale) => {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

function NpmPackageCard({
  copy,
  loading,
  locale,
  packageData,
}: NpmPackageCardProps) {
  const updatedAt = formatUpdatedAt(packageData.updatedAt, locale);

  return (
    <article className="npm-card" aria-busy={loading || undefined}>
      <div className="npm-card-heading">
        <Icon name="code" />
        <h3>{packageData.name}</h3>
      </div>

      {loading ? (
        <div className="npm-card-skeleton" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      ) : (
        packageData.description && <p>{packageData.description}</p>
      )}

      {!loading && (
        <dl className="npm-meta">
          {packageData.version && (
            <div>
              <dt>{copy.version}</dt>
              <dd>v{packageData.version}</dd>
            </div>
          )}
          {updatedAt && (
            <div>
              <dt>{copy.updated}</dt>
              <dd>
                <time dateTime={packageData.updatedAt}>{updatedAt}</time>
              </dd>
            </div>
          )}
          {packageData.license && (
            <div>
              <dt>{copy.license}</dt>
              <dd>{packageData.license}</dd>
            </div>
          )}
        </dl>
      )}

      {!loading && packageData.keywords.length > 0 && (
        <ul className="npm-keywords" aria-label={copy.keywords}>
          {packageData.keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      )}

      <div className="npm-actions">
        <a
          className="text-link"
          href={packageData.npmUrl}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={`${copy.viewNpm}: ${packageData.name}`}
        >
          {copy.viewNpm} <Icon name="arrow-up-right" />
        </a>
        {!loading && packageData.repositoryUrl && (
          <a
            className="text-link text-link-muted"
            href={packageData.repositoryUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {copy.repository} <Icon name="arrow-up-right" />
          </a>
        )}
        {!loading && packageData.homepageUrl && (
          <a
            className="text-link text-link-muted"
            href={packageData.homepageUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {copy.homepage} <Icon name="arrow-up-right" />
          </a>
        )}
      </div>
    </article>
  );
}

export function NpmPackages({ locale }: NpmPackagesProps) {
  const copy = content[locale].npmSection;
  const { packages, status } = useNpmPackages();
  const loading = status === "loading";
  const statusMessage =
    status === "error"
      ? copy.error
      : status === "partial"
        ? copy.partial
        : status === "success"
          ? copy.loaded
          : copy.loading;

  return (
    <section
      className="section section-npm"
      data-reveal
      id="npm"
      aria-labelledby="npm-section-title"
    >
      <div className="container">
        <SectionHeading
          description={copy.description}
          eyebrow={copy.eyebrow}
          id="npm-section-title"
          title={copy.title}
        />
        <p
          className={status === "error" ? "npm-notice" : "visually-hidden"}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
        <div className="npm-grid">
          {packages.map((packageData) => (
            <NpmPackageCard
              copy={copy}
              key={packageData.name}
              loading={loading}
              locale={locale}
              packageData={packageData}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
