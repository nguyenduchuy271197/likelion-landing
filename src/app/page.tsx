import Events from "@/components/common/home/Events";
import Workspaces from "@/components/common/home/Workspaces";
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
    <div className="flex flex-col">
      <Banner />
      <Courses />
      <Teachers />
      <TechStack />
      <Testimonials />
      <Workspaces />
      <CTA />
      <Events />
      <FAQ />
    </div>
  );
}
