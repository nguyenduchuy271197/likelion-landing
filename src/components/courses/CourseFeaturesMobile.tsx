import CourseFeatureItem from "./CourseFeatureItem";

export default function CourseFeaturesMobile({
  features,
}: {
  features: string[];
}) {
  return (
    <div className="max-w-xl mx-auto lg:hidden">
      <h2 className="mb-6 text-2xl font-medium">Khoá học bao gồm</h2>
      <ul className="grid gap-3 mt-4 sm:gap-4">
        {features?.map((feature) => (
          <CourseFeatureItem key={feature} name={feature} />
        ))}
      </ul>
    </div>
  );
}
