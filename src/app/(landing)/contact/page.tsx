import SectionBanner from "@/components/SectionBanner";
import ContactForm from "@/components/common/contact/ContactForm";
import ContactInfo from "@/components/common/contact/ContactInfo";
import ContactMap from "@/components/common/contact/ContactMap";
import ContactSocial from "@/components/common/contact/ContactSocial";
import siteConfig from "@/config/siteConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Liên hệ`,
};

export default function Contact() {
  return (
    <div>
      <SectionBanner
        title="Liên hệ với LIKELION"
        description="Hãy liên hệ chúng tôi nếu bạn có bất cứ thắc mắc nào về khóa học."
        src={{
          sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543368/banners/contact-mb.png",
          lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688544016/banners/contact.png",
        }}
      />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <ContactSocial />
    </div>
  );
}
