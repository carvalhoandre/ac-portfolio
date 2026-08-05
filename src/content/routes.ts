import {
  content,
  localePath,
  profile,
  projectPath,
  type Locale,
  type ProjectSlug,
} from "./portfolio";
import { matchRoutes, type RouteObject } from "react-router-dom";

export type AppRoute =
  | { type: "home" }
  | { type: "project"; slug: ProjectSlug }
  | { type: "notFound" };

export interface ResolvedRoute {
  locale: Locale;
  route: AppRoute;
}

export const projectSlugs: ProjectSlug[] = [
  "psi-giovanna",
  "ac-labs",
  "ac-dogs",
  "prumo-digital",
];

export const isProjectSlug = (slug: string | undefined): slug is ProjectSlug =>
  Boolean(slug && projectSlugs.includes(slug as ProjectSlug));

interface PortfolioRouteHandle {
  locale: Locale;
  type: AppRoute["type"];
}

const routeManifest = [
  {
    path: "/",
    handle: { locale: "pt-BR", type: "home" } satisfies PortfolioRouteHandle,
  },
  {
    path: "/pt-BR",
    handle: { locale: "pt-BR", type: "home" } satisfies PortfolioRouteHandle,
  },
  {
    path: "/pt-BR/projetos/:slug",
    handle: {
      locale: "pt-BR",
      type: "project",
    } satisfies PortfolioRouteHandle,
  },
  {
    path: "/pt-BR/*",
    handle: {
      locale: "pt-BR",
      type: "notFound",
    } satisfies PortfolioRouteHandle,
  },
  {
    path: "/en",
    handle: { locale: "en", type: "home" } satisfies PortfolioRouteHandle,
  },
  {
    path: "/en/projects/:slug",
    handle: { locale: "en", type: "project" } satisfies PortfolioRouteHandle,
  },
  {
    path: "/en/*",
    handle: {
      locale: "en",
      type: "notFound",
    } satisfies PortfolioRouteHandle,
  },
  {
    path: "*",
    handle: {
      locale: "pt-BR",
      type: "notFound",
    } satisfies PortfolioRouteHandle,
  },
] satisfies RouteObject[];

const notFoundRoute = (locale: Locale): ResolvedRoute => ({
  locale,
  route: { type: "notFound" },
});

export const matchPortfolioRoute = (pathname: string): ResolvedRoute => {
  const matches = matchRoutes(routeManifest, pathname);
  const match = matches?.[matches.length - 1];
  const handle = match?.route.handle as PortfolioRouteHandle | undefined;

  if (!match || !handle) return notFoundRoute("pt-BR");

  if (handle.type === "project") {
    return isProjectSlug(match.params.slug)
      ? {
          locale: handle.locale,
          route: { type: "project", slug: match.params.slug },
        }
      : notFoundRoute(handle.locale);
  }

  return {
    locale: handle.locale,
    route: { type: handle.type },
  };
};

export const staticPaths = [
  "/",
  "/pt-BR/",
  "/en/",
  ...projectSlugs.flatMap((slug) => [
    projectPath("pt-BR", slug),
    projectPath("en", slug),
  ]),
];

export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  alternatePt: string;
  alternateEn: string;
  image: string;
  imageAlt: string;
  type: "website" | "article";
  locale: "pt_BR" | "en_US";
  robots: string;
  jsonLd: Record<string, unknown>;
}

export const getPageMetadata = ({
  locale,
  route,
}: ResolvedRoute): PageMetadata => {
  const copy = content[locale];
  const languagePrefix = locale === "pt-BR" ? "pt-BR" : "en";
  const localeCode = locale === "pt-BR" ? "pt_BR" : "en_US";
  const homeTitle =
    locale === "pt-BR"
      ? "André Leite Carvalho | Frontend Specialist e Arquitetura de Software"
      : "André Leite Carvalho | Frontend Specialist and Software Architecture";
  const homeDescription =
    locale === "pt-BR"
      ? "Portfólio de André Leite Carvalho, especialista em Frontend com experiência em React, Angular, React Native, TypeScript, Design Systems, integrações, testes, cloud e Arquitetura de Software."
      : "Portfolio of André Leite Carvalho, a Frontend Specialist experienced with React, Angular, React Native, TypeScript, Design Systems, integrations, testing, cloud, and Software Architecture.";

  if (route.type === "project") {
    const project = copy.projects.find((item) => item.slug === route.slug);
    if (!project)
      return getPageMetadata({ locale, route: { type: "notFound" } });

    const canonicalPath = projectPath(locale, project.slug);
    const ptPath = projectPath("pt-BR", project.slug);
    const enPath = projectPath("en", project.slug);
    return {
      title: `${project.title} — ${project.descriptor} | ${profile.name}`,
      description: project.summary,
      canonical: `${profile.website}${canonicalPath}`,
      alternatePt: `${profile.website}${ptPath}`,
      alternateEn: `${profile.website}${enPath}`,
      image: `${profile.website}/images/social/andre-leite-carvalho-og.jpg`,
      imageAlt: `${project.title} — ${project.descriptor}`,
      type: "article",
      locale: localeCode,
      robots: "index, follow, max-image-preview:large",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        headline: project.descriptor,
        description: project.summary,
        url: `${profile.website}${canonicalPath}`,
        inLanguage: locale,
        image: `${profile.website}${project.image}`,
        author: {
          "@type": "Person",
          name: profile.name,
          url: `${profile.website}/${languagePrefix}/`,
        },
      },
    };
  }

  if (route.type === "notFound") {
    return {
      title: `404 | ${profile.name}`,
      description: copy.notFound.description,
      canonical: `${profile.website}/404.html`,
      alternatePt: `${profile.website}/pt-BR/`,
      alternateEn: `${profile.website}/en/`,
      image: `${profile.website}/images/social/andre-leite-carvalho-og.jpg`,
      imageAlt: copy.hero.imageAlt,
      type: "website",
      locale: localeCode,
      robots: "noindex, follow",
      jsonLd: {},
    };
  }

  return {
    title: homeTitle,
    description: homeDescription,
    canonical: `${profile.website}${localePath(locale)}`,
    alternatePt: `${profile.website}/pt-BR/`,
    alternateEn: `${profile.website}/en/`,
    image: `${profile.website}/images/social/andre-leite-carvalho-og.jpg`,
    imageAlt: copy.hero.imageAlt,
    type: "website",
    locale: localeCode,
    robots: "index, follow, max-image-preview:large",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${profile.website}/#person`,
          name: profile.name,
          jobTitle: "Frontend Specialist",
          url: `${profile.website}${localePath(locale)}`,
          image: `${profile.website}/images/profile/andre-hero-720.webp`,
          sameAs: [profile.linkedin, profile.github],
          alumniOf: [
            {
              "@type": "CollegeOrUniversity",
              name: "Universidade Nove de Julho",
            },
            {
              "@type": "CollegeOrUniversity",
              name: "Pontifícia Universidade Católica do Paraná",
            },
          ],
          knowsAbout: [
            "Frontend Architecture",
            "React",
            "Angular",
            "React Native",
            "TypeScript",
            "Design Systems",
            "Software Architecture",
          ],
        },
        {
          "@type": "ProfilePage",
          "@id": `${profile.website}${localePath(locale)}#profile`,
          url: `${profile.website}${localePath(locale)}`,
          name: homeTitle,
          description: homeDescription,
          inLanguage: locale,
          mainEntity: { "@id": `${profile.website}/#person` },
          hasPart: {
            "@type": "ItemList",
            itemListElement: copy.projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${profile.website}${projectPath(locale, project.slug)}`,
              name: project.title,
            })),
          },
        },
        {
          "@type": "WebSite",
          "@id": `${profile.website}/#website`,
          url: profile.website,
          name: `${profile.name} — Portfolio`,
          inLanguage: ["pt-BR", "en"],
        },
      ],
    },
  };
};
