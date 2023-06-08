import siteConfig from "@/config/siteConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Về chúng tôi | ${siteConfig.brand}`,
};

export default function About() {
  return <div>About</div>;
}
