import Image from "next/image";

interface SectionBannerProps {
  title: string;
  description: string;
  src: {
    sm: string;
    lg: string;
  };
}

export default function SectionBanner({
  title,
  description,
  src,
}: SectionBannerProps) {
  return (
    <div className="relative">
      <picture>
        <source srcSet={src.lg} media="(min-width: 768px)" />
        <Image
          src={src.sm}
          alt={title}
          fill
          priority
          className="absolute top-0 left-0 object-cover object-center w-full h-full"
        />
      </picture>
      <div className="relative">
        <div className="container">
          <div className="flex items-end md:items-center py-12 h-[50vh]">
            <div className="max-w-lg lg:max-w-xl">
              <h1 className="mb-2 text-2xl font-bold sm:mb-6 sm:text-3xl scroll-m-20 lg:text-5xl">
                {title}
              </h1>
              <p className="md:text-muted-foreground text-primary">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
