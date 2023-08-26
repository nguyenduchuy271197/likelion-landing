import CourseCTA from "@/components/courses/CourseCTA";
import CourseContent from "@/components/courses/CourseContent";
import CourseFeaturesMobile from "@/components/courses/CourseFeaturesMobile";
import CourseHeading from "@/components/courses/CourseHeading";
import CourseInfoCard from "@/components/courses/CourseInfoCard";
import CourseInfoMobile from "@/components/courses/CourseInfoMobile";
import CourseObjectives from "@/components/courses/CourseObjectives";
import CoursePartnership from "@/components/courses/CoursePartnership";
import CourseProjects from "@/components/courses/CourseProjects";
import CourseRequirements from "@/components/courses/CourseRequirements";
import CourseReviews from "@/components/courses/CourseReviews";
import { courses } from "@/components/layouts/navbar/Navbar";
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

export async function generateMetadata(
  {
    params,
  }: {
    params: { courseSlug: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title, subtitle, thumbnail_og } = await getCourseBySlug(
    params.courseSlug
  );

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
  } = await getCourseBySlug(courseSlug);

  return (
    <div className="pb-12">
      {/* Title */}
      <CourseHeading
        title={title}
        subtitle={subtitle}
        tags={tags}
        highlights={highlights}
      />

      {/* Course Navigation */}
      <CourseNavigation />

      <div className="mt-12 lg:mt-0">
        <div className="container">
          <div className="space-y-12">
            <div className="grid lg:grid-cols-[1fr_350px] gap-16 max-w-screen-md mx-auto lg:max-w-none mb-12 space-y-12">
              {/* Content */}
              <div className="space-y-12 overflow-hidden">
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

                {courseSlug === "khoa-hoc-lap-trinh-web-fullstack" && (
                  <>
                    {/* Showcase */}
                    <CourseProjects />
                  </>
                )}

                {/* CourseCalen */}
                {calendar && (
                  <CourseOpeningSchedules
                    calendars={calendar}
                    slug={courseSlug}
                  />
                )}

                <CoursePaymentMethods
                  payment_methods={payment_methods}
                  slug={courseSlug}
                />
                <CoursePromotion promotions={promotions} />
              </div>

              {/* Info Card */}
              <CourseInfoCard
                id={id}
                title={title}
                price={price}
                discountedPrice={discountedPrice}
                features={features}
                slug={courseSlug}
                thumbnail={thumbnail}
                youtubeId={youtubeId}
              />
            </div>

            {/* Workspaces */}
            <CourseWorkspaces />

            {courseSlug === "khoa-hoc-lap-trinh-web-fullstack" && (
              <>
                {/* Reviews */}
                <CourseReviews />
              </>
            )}

            {/* Feedback */}
            <CourseFeedback />

            {/* CTA */}
            <CourseCTA name={abbr} slug={courseSlug} />
          </div>
        </div>
      </div>
    </div>
  );
}
