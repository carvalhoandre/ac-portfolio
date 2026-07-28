export function changeLocalePreservingViewport(href: string) {
  const viewport = { x: window.scrollX, y: window.scrollY };
  const previousOverflowAnchor = document.documentElement.style.overflowAnchor;
  document.documentElement.style.overflowAnchor = "none";
  const destination = new URL(href, window.location.href);

  if (window.location.hash && !destination.hash) {
    destination.hash = window.location.hash;
  }

  window.history.pushState(
    { ...window.history.state, localeChange: true },
    "",
    `${destination.pathname}${destination.search}${destination.hash}`,
  );
  window.dispatchEvent(new PopStateEvent("popstate"));

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ left: viewport.x, top: viewport.y, behavior: "instant" });
      requestAnimationFrame(() => {
        document.documentElement.style.overflowAnchor = previousOverflowAnchor;
      });
    });
  });
}
