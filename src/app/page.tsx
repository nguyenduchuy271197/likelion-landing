import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/common/home/Banner"));
const TechStack = dynamic(() => import("@/components/common/home/TechStack"));
const Achievement = dynamic(
  () => import("@/components/common/home/Achievement")
);
const FAQ = dynamic(() => import("@/components/common/home/FAQ"));
const Teachers = dynamic(() => import("@/components/common/home/Teachers"));
const Reviews = dynamic(() => import("@/components/common/home/Reviews"));

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <TechStack />
      <Achievement />
      <FAQ />
      <Teachers />
      <Reviews />
    </div>
  );
}
