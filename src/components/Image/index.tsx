import React from "react";

import IComponent from "@/@types";
import { IImageProps } from "./types";

import "./styles.css";

const Image: IComponent<IImageProps> = ({
  testId = "image",
  src,
  alt,
  className,
}) => {
  const [showSkeleton, setShowSkeleton] = React.useState(true);

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setShowSkeleton(false);

    const target = event.currentTarget;
    target.style.opacity = "1";
  };

  return (
    <div className="image-wrapper" data-testid={testId}>
      {showSkeleton && <div className="image-skeleton"></div>}

      <img
        onLoad={handleLoad}
        className={`image-img ${className ?? ""}`}
        alt={alt}
        src={src}
        loading="lazy"
      />
    </div>
  );
};

export { Image };
