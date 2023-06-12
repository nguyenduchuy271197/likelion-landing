import Banner from "@/components/common/home/Banner";
// import Achievement from "@/components/common/home/Achievement";
// import FAQ from "@/components/common/home/FAQ";
// import Reviews from "@/components/common/home/Reviews";
// import Teachers from "@/components/common/home/Teachers";
// import TechStack from "@/components/common/home/TechStack";
import dynamic from "next/dynamic";

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
