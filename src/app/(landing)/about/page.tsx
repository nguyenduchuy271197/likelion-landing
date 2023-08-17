import SectionBanner from "@/components/SectionBanner";
import Features from "@/components/common/about/Features";
import Gallery from "@/components/common/about/Gallery";
import Intro from "@/components/common/about/Intro";
import Members from "@/components/common/about/Members";
import Philosophy from "@/components/common/about/Philosophy";
import Reasons from "@/components/common/about/Reasons";
import Values from "@/components/common/about/Values";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Về chúng tôi`,
  openGraph: {
    title: "Về chúng tôi",
    images: [
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692262060/og/og_about_b4civb.png",
    ],
  },
};

export default function About() {
  return (
    <div>
      <SectionBanner
        title="Về chúng tôi"
        description="Thông qua giáo dục lập trình, trao cho người có ý chí nguồn động lực và định hướng thay đổi chính mình."
        src={{
          sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543367/banners/about-mb.png",
          lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543367/banners/about.png",
        }}
      />
      <Intro />
      <Features />
      <Values />
      <Philosophy />
      <Members />
      <Reasons />
      <Gallery />
    </div>
  );
}
