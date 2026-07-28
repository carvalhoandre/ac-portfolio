import type { SVGProps } from "react";

type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "close"
  | "download"
  | "github"
  | "globe"
  | "grid"
  | "home"
  | "code"
  | "linkedin"
  | "mail"
  | "menu"
  | "moon"
  | "sun"
  | "whatsapp";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

const paths: Record<IconName, React.ReactNode> = {
  "arrow-right": <path d="m5 12h14m-6-6 6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M7 7h10v10" />,
  check: <path d="m5 12 4 4L19 6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  download: (
    <>
      <path d="M12 3v12m0 0 5-5m-5 5-5-5" />
      <path d="M5 21h14" />
    </>
  ),
  github: (
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a13.4 13.4 0 0 0-8 0C6 2 5 2 5 2a6.4 6.4 0 0 0 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4m0-4c-4.5 2-5-2-7-2" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  code: <path d="m9 18-6-6 6-6m6 0 6 6-6 6" />,
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </>
  ),
  whatsapp: (
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.2 9.2 0 0 1-4.3-1L3 20l1.2-4.4A8.5 8.5 0 1 1 21 11.5Zm-12.7-4c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3 4.9 4.1 2.4.9 2.9.7 3.4.6.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.7-.4l-2-.9c-.3-.1-.6-.2-.8.2l-1 1.2c-.2.2-.4.3-.7.1a7.4 7.4 0 0 1-2.2-1.3 8 8 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.7l.5-.6.3-.6c.1-.2 0-.5 0-.7l-.9-2c-.2-.5-.5-.5-.8-.5Z" />
  ),
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
