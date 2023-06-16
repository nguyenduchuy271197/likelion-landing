import ContactBanner from "@/components/common/contact/ContactBanner";
import ContactForm from "@/components/common/contact/ContactForm";
import ContactInfo from "@/components/common/contact/ContactInfo";
import ContactMap from "@/components/common/contact/ContactMap";
import ContactSocial from "@/components/common/contact/ContactSocial";
import siteConfig from "@/config/siteConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Liên hệ | ${siteConfig.brand}`,
};

export default function Contact() {
  return (
    <div>
      <ContactBanner />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <ContactSocial />
    </div>
  );
}
