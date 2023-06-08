import siteConfig from "@/config/siteConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Liên hệ | ${siteConfig.brand}`,
};

export default function Contact() {
  return <div>Contact</div>;
}
