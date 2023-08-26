import CourseFeatureItem from "./CourseFeatureItem";
import CourseSectionHeading from "./CourseSectionHeading";

export default function CourseFeaturesMobile({
  features,
}: {
  features: string[];
}) {
  return (
    <div className="max-w-xl mx-auto lg:hidden">
      <CourseSectionHeading>Khoá học bao gồm</CourseSectionHeading>
      <ul className="grid gap-3 mt-4 sm:gap-4">
        {features?.map((feature) => (
          <CourseFeatureItem key={feature} name={feature} />
        ))}
      </ul>
    </div>
  );
}
