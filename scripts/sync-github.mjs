import { readFile, stat, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const generatedPath = resolve(root, "src/content/github.generated.json");
const fallbackPath = resolve(root, "src/content/github-fallback.json");
const selectedRepositories = [
  "ac-portfolio",
  "courses-node-api",
  "dev-playbook",
];
const maxCacheAge = 24 * 60 * 60 * 1000;

const existing = await readFile(generatedPath, "utf8").catch(() => null);
const cacheStat = await stat(generatedPath).catch(() => null);
const cacheIsFresh = cacheStat && Date.now() - cacheStat.mtimeMs < maxCacheAge;

if (cacheIsFresh && process.env.GITHUB_REFRESH !== "1") {
  console.log("GitHub highlights: using the cached build data.");
  process.exit(0);
}

try {
  const response = await fetch(
    "https://api.github.com/users/carvalhoandre/repos?per_page=100&sort=updated",
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "ac-portfolio-build",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      signal: AbortSignal.timeout(4_000),
    },
  );

  if (!response.ok) throw new Error(`GitHub response ${response.status}`);
  const repositories = (await response.json())
    .filter(
      (repository) =>
        selectedRepositories.includes(repository.name) &&
        !repository.fork &&
        !repository.archived &&
        repository.description,
    )
    .sort(
      (a, b) =>
        selectedRepositories.indexOf(a.name) -
        selectedRepositories.indexOf(b.name),
    )
    .map((repository) => ({
      name: repository.name,
      description: repository.description,
      language: repository.language ?? "Code",
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      updatedAt: repository.updated_at,
      url: repository.html_url,
    }));

  if (repositories.length !== selectedRepositories.length) {
    throw new Error("The curated GitHub repository selection is incomplete");
  }

  await writeFile(
    generatedPath,
    `${JSON.stringify(
      {
        refreshedAt: new Date().toISOString(),
        source: "github-rest",
        repositories,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  console.log("GitHub highlights: refreshed from the public REST API.");
} catch (error) {
  if (!existing) {
    await writeFile(
      generatedPath,
      await readFile(fallbackPath, "utf8"),
      "utf8",
    );
  }
  console.warn(
    `GitHub highlights: API unavailable, using local fallback (${error.message}).`,
  );
}
