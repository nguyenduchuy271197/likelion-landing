import SectionBanner from "@/components/SectionBanner";
import FAQContainer from "@/components/common/faq/FAQContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  openGraph: {
    title: "FAQs",
    images: [
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692262084/og/og_faq_ijektd.png",
    ],
  },
};

export default function FAQ() {
  return (
    <div>
      <SectionBanner
        title="FAQs"
        description="Các câu hỏi thường gặp liên quan tới khoá học"
        src={{
          sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543368/banners/faq-mb.png",
          lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543369/banners/faq.png",
        }}
      />
      <FAQContainer />
    </div>
  );
}
