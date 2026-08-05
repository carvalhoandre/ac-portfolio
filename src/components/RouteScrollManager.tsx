import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface NavigationState {
  localeChange?: boolean;
  preserveViewport?: boolean;
}

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const hashTargetId = (hash: string) => {
  try {
    return decodeURIComponent(hash.slice(1));
  } catch {
    return hash.slice(1);
  }
};

export function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    const state = location.state as NavigationState | null;
    if (state?.localeChange && state.preserveViewport) return;

    if (!location.hash) {
      const previousOverflowAnchor =
        document.documentElement.style.overflowAnchor;
      const previousScrollBehavior =
        document.documentElement.style.scrollBehavior;
      document.documentElement.style.overflowAnchor = "none";
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ behavior: "auto", left: 0, top: 0 });
      let firstFrame = 0;
      let secondFrame = 0;
      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => {
          document.documentElement.style.overflowAnchor =
            previousOverflowAnchor;
          document.documentElement.style.scrollBehavior =
            previousScrollBehavior;
        });
      });

      return () => {
        window.cancelAnimationFrame(firstFrame);
        window.cancelAnimationFrame(secondFrame);
        document.documentElement.style.overflowAnchor = previousOverflowAnchor;
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      };
    }

    const targetId = hashTargetId(location.hash);
    let animationFrame = 0;
    let observer: MutationObserver | undefined;

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) return false;

      animationFrame = window.requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start",
        });
      });
      return true;
    };

    if (!scrollToTarget()) {
      observer = new MutationObserver(() => {
        if (scrollToTarget()) observer?.disconnect();
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [location.hash, location.key, location.pathname, location.state]);

  return null;
}
