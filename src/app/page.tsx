import Achievement from "@/components/common/home/Achievement";
import Banner from "@/components/common/home/Banner";
import FAQ from "@/components/common/home/FAQ";
import Reviews from "@/components/common/home/Reviews";
import Teachers from "@/components/common/home/Teachers";
import TechStack from "@/components/common/home/TechStack";

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
