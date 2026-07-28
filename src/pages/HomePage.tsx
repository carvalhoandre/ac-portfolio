import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Expertise } from "../sections/Expertise";
import { Experience } from "../sections/Experience";
import { Hero } from "../sections/Hero";
import { GitHubHighlights } from "../sections/GitHubHighlights";
import { Journey } from "../sections/Journey";
import { Lab } from "../sections/Lab";
import { Projects } from "../sections/Projects";
import type { Locale } from "../content/portfolio";

interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  return (
    <main id="main-content">
      <Hero locale={locale} />
      <Projects locale={locale} />
      <Expertise locale={locale} />
      <Experience locale={locale} />
      <About locale={locale} />
      <Journey locale={locale} />
      <GitHubHighlights locale={locale} />
      <Lab locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
