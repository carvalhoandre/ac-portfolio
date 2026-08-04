export const npmPackageNames = [
  "react-vite-clean-cli",
  "create-flask-api",
  "ac-totvs-ds",
  "create-base-vite",
] as const;

export type NpmPackageName = (typeof npmPackageNames)[number];
