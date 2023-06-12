import "highlight.js/styles/atom-one-dark.css";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import "@/styles/swiper.css";
import Navbar from "@/components/layouts/navbar/Navbar";
import { Roboto } from "next/font/google";
import siteConfig from "@/config/siteConfig";
import Footer from "@/components/layouts/footer/Footer";
import Providers from "@/context/Providers";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

// Load body font
const bodyFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

// Add metadata
export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
  dialog,
}: {
  children: ReactNode;
  dialog: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <div className="flex flex-col min-h-full pt-body-top">
          <Providers>
            <Navbar />
            <main className="grow">
              {children}
              {dialog}
              <Analytics />
            </main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
