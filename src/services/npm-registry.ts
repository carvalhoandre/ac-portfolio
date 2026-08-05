import { npmPackageNames, type NpmPackageName } from "../config/npm-packages";
import type {
  NpmPackage,
  NpmPackagesResult,
  NpmRegistryMetadata,
  NpmRegistryRepository,
  NpmRegistryVersion,
} from "../types/npm";

const registryBaseUrl = "https://registry.npmjs.org";
const npmWebsiteBaseUrl = "https://www.npmjs.com/package";
const requestTimeout = 5_000;

type RegistryErrorKind = "http" | "invalid" | "network";

class NpmRegistryError extends Error {
  constructor(
    readonly kind: RegistryErrorKind,
    message: string,
  ) {
    super(message);
    this.name = "NpmRegistryError";
  }
}

const asNonEmptyString = (value: unknown) =>
  typeof value === "string" && value.trim() ? value.trim() : undefined;

const packagePath = (name: string) =>
  name
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

export const npmPackageUrl = (name: NpmPackageName) =>
  `${npmWebsiteBaseUrl}/${packagePath(name)}`;

export const fallbackNpmPackage = (name: NpmPackageName): NpmPackage => ({
  name,
  npmUrl: npmPackageUrl(name),
  keywords: [],
});

const repositoryValue = (
  repository: NpmRegistryRepository | string | null | undefined,
) => (typeof repository === "string" ? repository : repository?.url);

export const normalizePublicUrl = (value: unknown) => {
  const source = asNonEmptyString(value);
  if (!source) return undefined;

  let candidate = source.replace(/^git\+/, "");
  candidate = candidate.replace(/^git:\/\//, "https://");

  const sshGitHub = candidate.match(/^git@github\.com:(.+)$/i);
  const sshUrlGitHub = candidate.match(/^ssh:\/\/git@github\.com\/(.+)$/i);
  if (sshGitHub?.[1] || sshUrlGitHub?.[1]) {
    candidate = `https://github.com/${sshGitHub?.[1] ?? sshUrlGitHub?.[1]}`;
  }

  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return undefined;
    }
    return url.toString().replace(/\.git$/, "");
  } catch {
    return undefined;
  }
};

const normalizeKeywords = (value: unknown) => {
  if (!Array.isArray(value)) return [];

  return value
    .filter((keyword): keyword is string => typeof keyword === "string")
    .map((keyword) => keyword.trim())
    .filter(Boolean)
    .slice(0, 3);
};

const isMetadata = (value: unknown): value is NpmRegistryMetadata =>
  Boolean(value && typeof value === "object" && !Array.isArray(value));

export const normalizeNpmMetadata = (
  requestedName: NpmPackageName,
  metadata: NpmRegistryMetadata,
): NpmPackage => {
  const latest = asNonEmptyString(metadata["dist-tags"]?.latest);
  const current: NpmRegistryVersion | undefined = latest
    ? metadata.versions?.[latest]
    : undefined;

  return {
    name: requestedName,
    npmUrl: npmPackageUrl(requestedName),
    description: asNonEmptyString(current?.description ?? metadata.description),
    version: latest,
    updatedAt: asNonEmptyString(metadata.time?.modified),
    license: asNonEmptyString(current?.license ?? metadata.license),
    keywords: normalizeKeywords(current?.keywords ?? metadata.keywords),
    repositoryUrl: normalizePublicUrl(
      repositoryValue(current?.repository ?? metadata.repository),
    ),
    homepageUrl: normalizePublicUrl(current?.homepage ?? metadata.homepage),
  };
};

export async function fetchNpmPackage(
  name: NpmPackageName,
  signal?: AbortSignal,
): Promise<NpmPackage> {
  const controller = new AbortController();
  const abortFromCaller = () => controller.abort();
  if (signal?.aborted) controller.abort();
  else signal?.addEventListener("abort", abortFromCaller, { once: true });
  const timeout = globalThis.setTimeout(
    () => controller.abort(),
    requestTimeout,
  );

  try {
    let response: Response;
    try {
      response = await fetch(`${registryBaseUrl}/${encodeURIComponent(name)}`, {
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
    } catch (error) {
      if (controller.signal.aborted) throw error;
      throw new NpmRegistryError("network", "Registry request failed");
    }

    if (!response.ok) {
      throw new NpmRegistryError(
        "http",
        `Registry response ${response.status}`,
      );
    }

    let metadata: unknown;
    try {
      metadata = await response.json();
    } catch {
      throw new NpmRegistryError("invalid", "Registry response is invalid");
    }
    if (!isMetadata(metadata)) {
      throw new NpmRegistryError("invalid", "Registry response is invalid");
    }

    return normalizeNpmMetadata(name, metadata);
  } finally {
    globalThis.clearTimeout(timeout);
    signal?.removeEventListener("abort", abortFromCaller);
  }
}

const reportDevelopmentFailure = (name: NpmPackageName, reason: unknown) => {
  if (!import.meta.env.DEV) return;

  const kind =
    reason instanceof NpmRegistryError
      ? reason.kind
      : reason instanceof DOMException && reason.name === "AbortError"
        ? "cancelled"
        : "network";
  console.warn(`[npm registry] ${name}: ${kind}`);
};

export async function loadNpmPackages(
  signal?: AbortSignal,
): Promise<NpmPackagesResult> {
  const settled = await Promise.allSettled(
    npmPackageNames.map((name) => fetchNpmPackage(name, signal)),
  );
  let successfulPackages = 0;

  const packages = settled.map((result, index) => {
    const name = npmPackageNames[index];
    if (result.status === "fulfilled") {
      successfulPackages += 1;
      return result.value;
    }

    reportDevelopmentFailure(name, result.reason);
    return fallbackNpmPackage(name);
  });

  return {
    packages,
    status:
      successfulPackages === npmPackageNames.length
        ? "success"
        : successfulPackages === 0
          ? "error"
          : "partial",
  };
}
