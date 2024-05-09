import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonProps } from "./skeleton.types";

export const SkeletonComponent: React.FC<SkeletonProps> = ({
  baseColor,
  borderRadius,
  height,
  highlightColor,
  width,
}) => {
  return (
    <Skeleton
      height={height}
      baseColor={baseColor}
      highlightColor={highlightColor}
      width={width}
      borderRadius={borderRadius}
      enableAnimation
      containerClassName="flex-1"
    />
  );
};
