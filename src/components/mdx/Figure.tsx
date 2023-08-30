import Image from "next/image";

interface FigureProps {
  imageUrl: string;
  caption: string;
}

export default function Figure({ imageUrl, caption }: FigureProps) {
  return (
    <div className="figure">
      <Image
        loading="lazy"
        className="w-full mx-auto mb-0"
        src={imageUrl}
        width={1000}
        height={1000}
        alt={caption}
      />
      <p className="my-2 text-sm italic text-center text-muted-foreground">
        {caption}
      </p>
    </div>
  );
}
