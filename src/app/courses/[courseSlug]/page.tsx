import { CourseContent } from "@/components/courses/CourseContent";
import CourseInfoCard from "@/components/courses/CourseInfoCard";
import CourseObjectives from "@/components/courses/CourseObjectives";
import CourseRequirements from "@/components/courses/CourseRequirements";
import { getCourseBySlug } from "@/services/courseService";

export default async function CourseDetail({
  params,
}: {
  params: { courseSlug: string };
}) {
  const { courseSlug } = params;
  const data = await getCourseBySlug(courseSlug);

  const { title, subtitle } = data.data.attributes;
  const objectives = data.data.attributes.objectives.data;
  const modules = data.data.attributes.modules.data;

  return (
    <div className="mt-12">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_350px] gap-16 max-w-screen-md mx-auto lg:max-w-none">
          {/* Content */}
          <div>
            {/* Title */}
            <div className="mb-12">
              <h1 className="mb-4 text-2xl font-medium tracking-tight scroll-m-20 lg:text-3xl">
                {title}
              </h1>
              <p>{subtitle}</p>
            </div>

            {/* What you'll learn */}
            <CourseObjectives objectives={objectives} />

            {/* Top companies */}

            {/* Requirements */}
            <CourseRequirements />

            {/* Course content */}
            <CourseContent modules={modules} />
          </div>

          {/* Info Card */}
          <CourseInfoCard />
        </div>
      </div>
    </div>
  );
}
