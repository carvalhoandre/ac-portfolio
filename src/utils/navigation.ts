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

  const preserveViewport = !destination.hash;

  navigate(
    `${destination.pathname}${destination.search}${destination.hash}`,
    { state: { localeChange: true, preserveViewport } },
  );

  if (!preserveViewport) {
    document.documentElement.style.overflowAnchor = previousOverflowAnchor;
    return;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ left: viewport.x, top: viewport.y, behavior: "instant" });
      requestAnimationFrame(() => {
        document.documentElement.style.overflowAnchor = previousOverflowAnchor;
      });
    });
  });
}
