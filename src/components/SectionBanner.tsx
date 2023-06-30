interface SectionBannerProps {
  title: string;
  description: string;
  bgSrc: string;
}

export default function SectionBanner({
  title,
  description,
  bgSrc,
}: SectionBannerProps) {
  return (
    <div
      className="bg-center bg-cover"
      style={{
        backgroundImage: `url(${bgSrc})`,
      }}
    >
      <div className="container">
        <div className="flex items-center h-[400px]">
          <div className="max-w-[260px] sm:max-w-xs lg:max-w-lg">
            <h1 className="mb-2 text-2xl font-bold sm:mb-6 sm:text-3xl scroll-m-20 lg:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
