export default function CourseHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-xl mx-auto mb-12 text-center lg:text-left lg:max-w-none">
      <div>
        <h1 className="mb-4 text-2xl font-bold capitalize sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
