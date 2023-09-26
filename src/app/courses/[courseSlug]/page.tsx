import CourseCTA from "@/components/courses/CourseCTA";
import CourseContent from "@/components/courses/CourseContent";
import CourseFeaturesMobile from "@/components/courses/CourseFeaturesMobile";
import CourseHeading from "@/components/courses/CourseHeading";
import CourseInfoCard from "@/components/courses/CourseInfoCard";
import CourseInfoMobile from "@/components/courses/CourseInfoMobile";
import CourseObjectives from "@/components/courses/CourseObjectives";
import CoursePartnership from "@/components/courses/CoursePartnership";
import CourseRequirements from "@/components/courses/CourseRequirements";
import CourseReviews from "@/components/courses/CourseReviews";
import { getCourseBySlug } from "@/services/courseService";
import { Metadata, ResolvingMetadata } from "next";
import CourseOpeningSchedules from "@/components/courses/CourseOpeningSchedules";
import CourseWorkshops from "@/components/courses/CourseWorkshops";
import CourseWorkspaces from "@/components/courses/CourseWorkspaces";
import CourseFeedback from "@/components/courses/CourseFeedback";
import CourseLecturers from "@/components/courses/CourseLecturers";
import CoursePromotion from "@/components/courses/CoursePromotion";
import CoursePaymentMethods from "@/components/courses/CoursePaymentMethods";
import CourseBenefits from "@/components/courses/CourseBenefits";
import CourseNavigation from "@/components/courses/CourseNavigation";
import CourseContainer from "@/components/courses/CourseContainer";
import data from "@/data/data.json";
import { redirect } from "next/navigation";
import CourseShowcases from "@/components/courses/CourseShowcases";

export async function generateMetadata(
  {
    params,
  }: {
    params: { courseSlug: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const course = getCourseBySlug(params.courseSlug);

  if (!course) return {};

  const { title, subtitle, thumbnail_og } = course;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${title}`,
    description: subtitle,
    openGraph: {
      title: `${title}`,
      description: subtitle,
      images: [thumbnail_og, ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  const courses = data["courses"];

  return courses.map((course) => ({
    courseSlug: course.slug,
  }));
}

export default function CourseDetail({
  params,
}: {
  params: { courseSlug: string };
}) {
  const { courseSlug } = params;

  const course = getCourseBySlug(courseSlug);

  if (!course) return redirect("/");

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
    abbr,
    thumbnail,
    youtubeId,
    calendar,
    promotions,
    payment_methods,
    lecturers,
    tags,
    benefits,
    highlights,
    techs,
    showcases,
  } = course;

  return (
    <div className="relative pb-12">
      {/* Title */}
      <CourseHeading
        title={title}
        subtitle={subtitle}
        tags={tags}
        highlights={highlights}
        techs={techs}
        slug={courseSlug}
      />
      
      {/* Course Navigation */}
      <CourseNavigation />

      <div id="course-info-scroll">
        <div className="container">
          <CourseContainer>
            {/* Info Card */}
            <CourseInfoCard
              title={title}
              features={features}
              slug={courseSlug}
              thumbnail={thumbnail}
              youtubeId={youtubeId}
            />
          </CourseContainer>
        </div>

        <div className="container mt-12 space-y-12 lg:mt-0">
          <CourseContainer className="space-y-12 overflow-hidden">
            {/* Content */}
            <div className="space-y-10 lg:hidden">
              {/* Course Info */}
              <CourseInfoMobile
                discountedPrice={discountedPrice}
                price={price}
                slug={courseSlug}
                title={title}
                thumbnail={thumbnail}
                youtubeId={youtubeId}
              />

              <CourseFeaturesMobile features={features} />
            </div>

            {/* Benefits */}
            <CourseBenefits benefits={benefits} />

            {/* Partnership */}
            {courseSlug === "khoa-hoc-lap-trinh-web-fullstack" && (
              <CoursePartnership />
            )}

            {/* What you'll learn */}
            <CourseObjectives objectives={objectives} />

            {/* Requirements */}
            <CourseRequirements requirements={requirements} />

            {/* Course content */}
            <CourseContent modules={modules} />

            {courseSlug === "khoa-hoc-lap-trinh-web-fullstack" && (
              <CourseWorkshops />
            )}

            {/* Lecturers */}
            <CourseLecturers lecturers={lecturers} />

            {/* Showcase */}
            <CourseShowcases showcases={showcases} />

            {/* CourseCalen */}
            <CourseOpeningSchedules calendars={calendar} slug={courseSlug} />

            <CoursePaymentMethods
              payment_methods={payment_methods}
              slug={courseSlug}
            />
            <CoursePromotion promotions={promotions} />
          </CourseContainer>
        </div>
      </div>

      <div className="mt-12 space-y-12">
        {/* Workspaces */}
        <CourseWorkspaces />

        {/* Feedback */}
        <CourseFeedback />

        {courseSlug === "khoa-hoc-lap-trinh-web-fullstack" && (
          <>
            {/* Reviews */}
            <CourseReviews />
          </>
        )}

        {/* CTA */}
        <CourseCTA name={abbr} slug={courseSlug} />
      </div>
    </div>
  );
}
