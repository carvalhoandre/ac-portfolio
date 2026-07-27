import { useState } from "react";

interface OptimizedImageProps {
  kind: "hero" | "about";
  alt: string;
  className?: string;
  priority?: boolean;
}

const imageConfig = {
  hero: {
    sizes: "(max-width: 767px) 88vw, (max-width: 1199px) 42vw, 520px",
    width: 720,
    height: 900,
    base: "andre-hero",
    widths: [300, 480, 720],
  },
  about: {
    sizes: "(max-width: 767px) 100vw, 42vw",
    width: 720,
    height: 720,
    base: "andre-about",
    widths: [480, 720],
  },
} as const;

export function OptimizedImage({
  kind,
  alt,
  className,
  priority = false,
}: OptimizedImageProps) {
  const [failed, setFailed] = useState(false);
  const config = imageConfig[kind];
  const directory = "/images/profile";
  const sourceSet = (format: "avif" | "webp") =>
    config.widths
      .map(
        (width) => `${directory}/${config.base}-${width}.${format} ${width}w`,
      )
      .join(", ");
  const fallback = failed
    ? "/images/profile/andre-placeholder.svg"
    : `${directory}/${config.base}-${config.width}.jpg`;

  return (
    <picture>
      {!failed && <source srcSet={sourceSet("avif")} type="image/avif" />}
      {!failed && <source srcSet={sourceSet("webp")} type="image/webp" />}
      <img
        alt={alt}
        className={className}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        height={config.height}
        loading={priority ? "eager" : "lazy"}
        onError={() => setFailed(true)}
        sizes={config.sizes}
        src={fallback}
        width={config.width}
      />
    </picture>
  );
}
