import { useEffect, useState } from "react";

const homeSections = [
  "inicio",
  "projetos",
  "npm",
  "especialidades",
  "trajetoria",
  "github",
  "contato",
] as const;

export type HomeSection = (typeof homeSections)[number];

export function useActiveSection(enabled: boolean, fallback: HomeSection) {
  const [active, setActive] = useState<HomeSection>(fallback);

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === "undefined") return;

    const fromHash = window.location.hash.slice(1) as HomeSection;
    if (homeSections.includes(fromHash)) {
      queueMicrotask(() => setActive(fromHash));
    }

    const sections = homeSections
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as HomeSection);
      },
      { rootMargin: "-28% 0px -62%", threshold: [0, 0.1, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}
