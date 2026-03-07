import React, { useState } from "react";

import IComponent from "@/@types";
import { IImageProps } from "./types";

import "./styles.css";
import Skeleton from "../Skeleton";

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

const ImageWithLoader: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Skeleton width="100%" height="100%" borderRadius="8px" />}
      <img
        src={src}
        alt={alt}
        {...props}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};

export { Image, ImageWithLoader };
