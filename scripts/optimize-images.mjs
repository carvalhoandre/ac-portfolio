import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const projectRoot = resolve(import.meta.dirname, "..");
const outputRoot = resolve(projectRoot, "public");

const ensureParent = async (path) => mkdir(dirname(path), { recursive: true });

const renderResponsivePhoto = async ({ input, base, width, height }) => {
  const outputDirectory = resolve(outputRoot, "images/profile");
  await mkdir(outputDirectory, { recursive: true });

  for (const size of width) {
    const targetHeight = Math.round((size / width.at(-1)) * height);
    const pipeline = sharp(input).rotate().resize(size, targetHeight, {
      fit: "cover",
      position: "centre",
      withoutEnlargement: false,
    });

    await pipeline
      .clone()
      .avif({ quality: 57, effort: 6 })
      .toFile(resolve(outputDirectory, `${base}-${size}.avif`));
    await pipeline
      .clone()
      .webp({ quality: 78, effort: 6 })
      .toFile(resolve(outputDirectory, `${base}-${size}.webp`));
    await pipeline
      .clone()
      .jpeg({ quality: 80, progressive: true, mozjpeg: true })
      .toFile(resolve(outputDirectory, `${base}-${size}.jpg`));
  }
};

const profileInput = resolve(projectRoot, "src/assets/photos/perfil.webp");
const aboutInput = resolve(projectRoot, "src/assets/photos/about.webp");

for (const staleVariant of ["andre-hero-960.avif", "andre-hero-960.webp"]) {
  await rm(resolve(outputRoot, "images/profile", staleVariant), {
    force: true,
  });
}

await renderResponsivePhoto({
  input: profileInput,
  base: "andre-hero",
  width: [300, 480, 720],
  height: 900,
});

await renderResponsivePhoto({
  input: aboutInput,
  base: "andre-about",
  width: [480, 720],
  height: 720,
});

const projectAssets = [
  ["src/assets/portfolio/psi.svg", "public/images/projects/psi-giovanna.svg"],
  ["src/assets/portfolio/labs.svg", "public/images/projects/ac-labs.svg"],
  ["src/assets/portfolio/dogs.svg", "public/images/projects/ac-dogs.svg"],
  [
    "src/assets/cv/CVAndreCarvalho.pdf",
    "public/documents/andre-leite-carvalho-curriculo.pdf",
  ],
  [
    "src/assets/cv/CVAndreCarvalhoENG.pdf",
    "public/documents/andre-leite-carvalho-resume.pdf",
  ],
];

for (const [source, destination] of projectAssets) {
  const absoluteDestination = resolve(projectRoot, destination);
  await ensureParent(absoluteDestination);
  await cp(resolve(projectRoot, source), absoluteDestination);
}

const placeholder = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="900" viewBox="0 0 720 900" role="img" aria-label="Imagem indisponível">
  <rect width="720" height="900" fill="#e9e4dc"/>
  <circle cx="360" cy="405" r="92" fill="#c7c0b5"/>
  <path d="M180 760c16-142 96-220 180-220s164 78 180 220" fill="#c7c0b5"/>
</svg>`;
await writeFile(
  resolve(outputRoot, "images/profile/andre-placeholder.svg"),
  placeholder,
  "utf8",
);

const photo = await sharp(profileInput)
  .rotate()
  .resize(540, 630, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.86, saturation: 0.82 })
  .toBuffer();
const overlay =
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="660" height="630" fill="#171715"/>
  <path d="M660 0h40L610 630h-40z" fill="#171715"/>
  <text x="72" y="88" fill="#d98466" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="4">FRONTEND SPECIALIST</text>
  <text x="72" y="218" fill="#f7f3ec" font-family="Georgia, 'Times New Roman', serif" font-size="72">André Leite</text>
  <text x="72" y="302" fill="#f7f3ec" font-family="Georgia, 'Times New Roman', serif" font-size="72">Carvalho</text>
  <text x="72" y="392" fill="#bdb7ad" font-family="Arial, Helvetica, sans-serif" font-size="28">Frontend Architecture · Design Systems</text>
  <text x="72" y="434" fill="#bdb7ad" font-family="Arial, Helvetica, sans-serif" font-size="28">Software Architecture</text>
  <text x="72" y="548" fill="#f7f3ec" font-family="Arial, Helvetica, sans-serif" font-size="20">andreleitecarvalho.space</text>
</svg>`);
const socialDirectory = resolve(outputRoot, "images/social");
await mkdir(socialDirectory, { recursive: true });
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#171715" },
})
  .composite([
    { input: photo, left: 660, top: 0 },
    { input: overlay, left: 0, top: 0 },
  ])
  .jpeg({ quality: 84, progressive: true, mozjpeg: true })
  .toFile(resolve(socialDirectory, "andre-leite-carvalho-og.jpg"));

const metadata = await sharp(profileInput).metadata();
console.log(
  `Optimized profile source ${metadata.width}x${metadata.height}; generated responsive AVIF/WebP variants and a 1200x630 social image.`,
);
