import React from "react";
import "./styles.css";

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ width = "100%", height = "100%", borderRadius = "4px" }) => {
  return <div className="skeleton" style={{ width, height, borderRadius }}></div>;
};

export default Skeleton;
