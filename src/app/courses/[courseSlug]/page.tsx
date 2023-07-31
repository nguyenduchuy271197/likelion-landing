import CourseCTA from "@/components/courses/CourseCTA";
import CourseCalendar from "@/components/courses/CourseCalendar";
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

export async function generateMetadata(
  {
    params,
  }: {
    params: { courseSlug: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title, subtitle, thumbnail } = await getCourseBySlug(
    params.courseSlug
  );

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${title}`,
    description: subtitle,
    openGraph: {
      images: [
        "https://res.cloudinary.com/dbscqlwl7/image/upload/v1689923829/thumbnail/Thumbnail_Bootcamp_zupniw.png",
        ...previousImages,
      ],
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
  } = await getCourseBySlug(courseSlug);

  return (
    <div className="pt-12">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_350px] gap-16 max-w-screen-md mx-auto lg:max-w-none mb-12">
          {/* Content */}
          <div>
            {/* Title */}
            <CourseHeading title={title} subtitle={subtitle} />

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

            {["thanh-thao-lap-trinh-web-front-end"].includes(courseSlug) && (
              <CourseCalendar />
            )}

            {/* What you'll learn */}
            <CourseObjectives objectives={objectives} />

            {/* Requirements */}
            <CourseRequirements requirements={requirements} />

            {/* Course content */}
            <CourseContent modules={modules} />

            {courseSlug === "bootcamp-lap-trinh-web-fullstack" && (
              <>
                {/* Showcase */}
                <CourseProjects />

                {/* Reviews */}
                <CourseReviews />

                {/* CourseCalen */}
                <CourseOpeningSchedules />

                {/* Partnership */}
                <CoursePartnership />
              </>
            )}
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
        {/* CTA */}
        <CourseCTA name={abbr} slug={courseSlug} />
      </div>
    </div>
  );
}
