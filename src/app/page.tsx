import CTA from "@/components/common/home/CTA";
import Testimonials from "@/components/common/home/Testimonials";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/common/home/Banner"));
const Courses = dynamic(() => import("@/components/common/home/Courses"));
const TechStack = dynamic(() => import("@/components/common/home/TechStack"));
const FAQ = dynamic(() => import("@/components/common/home/FAQ"));
const Teachers = dynamic(() => import("@/components/common/home/Teachers"));

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Courses />
      <Teachers />
      <TechStack />
      <Testimonials />
      <CTA />
      <FAQ />
    </div>
  );
}
