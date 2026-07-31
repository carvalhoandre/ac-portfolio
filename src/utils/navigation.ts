import type { NavigateFunction } from "react-router-dom";

export function changeLocalePreservingViewport(
  href: string,
  navigate: NavigateFunction,
) {
  const viewport = { x: window.scrollX, y: window.scrollY };
  const previousOverflowAnchor = document.documentElement.style.overflowAnchor;
  document.documentElement.style.overflowAnchor = "none";
  const destination = new URL(href, window.location.href);

  if (window.location.hash && !destination.hash) {
    destination.hash = window.location.hash;
  }

  navigate(
    `${destination.pathname}${destination.search}${destination.hash}`,
    { state: { localeChange: true } },
  );

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ left: viewport.x, top: viewport.y, behavior: "instant" });
      requestAnimationFrame(() => {
        document.documentElement.style.overflowAnchor = previousOverflowAnchor;
      });
    });
  });
}
