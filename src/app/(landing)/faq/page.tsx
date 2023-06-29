import SectionBanner from "@/components/SectionBanner";
import FAQContainer from "@/components/common/faq/FAQContainer";

export default function FAQ() {
  return (
    <div>
      <SectionBanner
        title="FAQs"
        description="Các câu hỏi thường gặp liên quan tới khoá học"
        bgSrc="/img/banners/faq.png"
      />
      <FAQContainer />
    </div>
  );
}
