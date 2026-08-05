import type { NpmPackageName } from "../config/npm-packages";

export interface NpmRegistryRepository {
  type?: unknown;
  url?: unknown;
}

export interface NpmRegistryVersion {
  description?: unknown;
  homepage?: unknown;
  keywords?: unknown;
  license?: unknown;
  repository?: NpmRegistryRepository | string | null;
}

export interface NpmRegistryMetadata extends NpmRegistryVersion {
  name?: unknown;
  "dist-tags"?: {
    latest?: unknown;
  };
  time?: {
    modified?: unknown;
  };
  versions?: Record<string, NpmRegistryVersion | undefined>;
}

export interface NpmPackage {
  name: NpmPackageName;
  npmUrl: string;
  description?: string;
  version?: string;
  updatedAt?: string;
  license?: string;
  keywords: string[];
  repositoryUrl?: string;
  homepageUrl?: string;
}

export interface NpmPackagesResult {
  packages: NpmPackage[];
  status: "success" | "partial" | "error";
}
