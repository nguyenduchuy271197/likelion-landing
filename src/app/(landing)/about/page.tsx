import SectionBanner from "@/components/SectionBanner";
import siteConfig from "@/config/siteConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Về chúng tôi | ${siteConfig.brand}`,
};

export default function About() {
  return (
    <div>
      <SectionBanner
        title="Về chúng tôi"
        description="Thông qua giáo dục lập trình, trao cho người có ý chí nguồn động lực và định hướng thay đổi chính mình."
        bgSrc="/img/banners/contact.png"
      />
    </div>
  );
}
