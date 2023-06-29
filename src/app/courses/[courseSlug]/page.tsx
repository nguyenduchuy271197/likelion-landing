import CourseCalendar from "@/components/courses/CourseCalendar";
import { CourseContent } from "@/components/courses/CourseContent";
import CourseInfoCard from "@/components/courses/CourseInfoCard";
import CourseObjectives from "@/components/courses/CourseObjectives";
import CourseProjects from "@/components/courses/CourseProjects";
import CourseRequirements from "@/components/courses/CourseRequirements";
import CourseReviews from "@/components/courses/CourseReviews";
import { courses } from "@/components/layouts/navbar/Navbar";
import { getCourseBySlug } from "@/services/courseService";

export async function generateStaticParams() {
  return courses
    .filter((course) => course.published)
    .map((course) => ({
      courseSlug: course.slug,
    }));
}

export default async function CourseDetail({
  params,
}: {
  params: { courseSlug: string };
}) {
  const { courseSlug } = params;
  const {
    id,
    title,
    subtitle,
    objectives,
    features,
    price,
    discountedPrice,
    modules,
    requirements,
  } = await getCourseBySlug(courseSlug);

  return (
    <div className="mt-12">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_350px] gap-16 max-w-screen-md mx-auto lg:max-w-none">
          {/* Content */}
          <div>
            {/* Title */}
            <div className="mb-12">
              <h1 className="mb-4 text-3xl font-medium lg:text-4xl">{title}</h1>
              <p>{subtitle}</p>
            </div>

            <CourseCalendar />

            {/* What you'll learn */}
            <CourseObjectives objectives={objectives} />

            {/* Top companies */}

            {/* Requirements */}
            <CourseRequirements requirements={requirements} />

            {/* Course content */}
            <CourseContent modules={modules} />

            {/* Showcase */}
            <CourseProjects />

            {/* Reviews */}
            <CourseReviews />
          </div>

          {/* Info Card */}
          <CourseInfoCard
            id={id}
            price={price}
            discountedPrice={discountedPrice}
            features={features}
            slug={courseSlug}
          />
        </div>
      </div>
    </div>
  );
}
