import React from 'react';
// Styles
import './Skeleton.scss';

type SkeletonTypes = {
  width?: number | 'auto';
  height?: number;
  className?: string;
  styles?: React.CSSProperties;
};

const Skeleton = ({
  width = 'auto',
  height,
  className,
  styles = {},
}: SkeletonTypes) => {
  return (
    <div
      className={`a-skeleton ${className}`}
      style={{ height: height ?? '', width: width ?? '100%', ...styles }}
    />
  );
};

export default Skeleton;
