const loadImg = ({
  src,
  width,
  quality,
}: {
  src?: string;
  width: number;
  quality: number;
}) => {
  if (!src) return '';

  return `${src}?w=${width}&q=${quality ?? 85}&?fm=webp`;
};

export default loadImg;
