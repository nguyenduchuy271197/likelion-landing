import Image from "next/image";

export default function Img({
  alt = "",
  width = 1000,
  height = 1000,
  ...props
}: any) {
  return (
    <Image
      loading="lazy"
      className="w-full mx-auto"
      width={width}
      height={height}
      alt={alt}
      {...props}
    />
  );
}
