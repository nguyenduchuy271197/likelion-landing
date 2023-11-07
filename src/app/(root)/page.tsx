import Blogs from "@/components/common/home/Blogs";
import BusinessPartners from "@/components/common/home/BusinessPartners";
import Events from "@/components/common/home/Events";
import CourseWorkspaces from "@/components/courses/CourseWorkspaces";
import siteConfig from "@/config/siteConfig";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/common/home/Banner"));
const Courses = dynamic(() => import("@/components/common/home/Courses"));
const TechStack = dynamic(() => import("@/components/common/home/TechStack"));
const FAQ = dynamic(() => import("@/components/common/home/FAQ"));
const Teachers = dynamic(() => import("@/components/common/home/Teachers"));
const CTA = dynamic(() => import("@/components/common/home/CTA"));
const Testimonials = dynamic(
  () => import("@/components/common/home/Testimonials")
);

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <h1 className="sr-only">{siteConfig.title}</h1>
      <div className="pb-20 space-y-16 sm:space-y-32">
        <Banner />
        <Courses />
        <Teachers />
        <TechStack />
        <Testimonials />
        <div>
          <CourseWorkspaces />
          <CTA
            title="Bạn muốn tìm khoá học cho mình?"
            description="Điền đầy đủ thông tin để chúng mình tư vấn, định hướng cho bạn
                nhé!"
          />
        </div>

        <BusinessPartners />
        <Events />
        <Blogs />
        <FAQ />
      </div>
    </>
  );
}
