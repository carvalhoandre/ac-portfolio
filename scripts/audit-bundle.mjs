import { readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { gzipSync } from "node:zlib";
import { readFile } from "node:fs/promises";

const assetsDirectory = resolve(import.meta.dirname, "../dist/assets");
const files = await readdir(assetsDirectory);
const report = [];

for (const file of files.filter((name) => /\.(js|css)$/.test(name))) {
  const path = resolve(assetsDirectory, file);
  const info = await stat(path);
  const gzip = gzipSync(await readFile(path)).byteLength;
  report.push({ file, bytes: info.size, gzip });
}

report.sort((a, b) => b.gzip - a.gzip);
for (const item of report) {
  console.log(
    `${item.file.padEnd(34)} ${(item.bytes / 1024).toFixed(2).padStart(8)} kB  ${(item.gzip / 1024).toFixed(2).padStart(8)} kB gzip`,
  );
}

const totalGzip = report.reduce((total, item) => total + item.gzip, 0);
console.log(`Total JS/CSS gzip: ${(totalGzip / 1024).toFixed(2)} kB`);

if (totalGzip > 90 * 1024) {
  throw new Error("JS/CSS bundle exceeds the 90 kB gzip budget.");
}
