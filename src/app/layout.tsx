import "@/styles/globals.css";
import "highlight.js/styles/atom-one-dark.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import "react-modal-video/scss/modal-video.scss";
import "@/styles/swiper.css";
import Navbar from "@/components/layouts/navbar/Navbar";
import { Roboto } from "next/font/google";
import siteConfig from "@/config/siteConfig";
import Footer from "@/components/layouts/footer/Footer";
import Providers from "@/context/Providers";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/Toaster";

// Load body font
const bodyFont = Roboto({
  subsets: ["vietnamese"],
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
    <html
      lang="en"
      className={cn(
        "bg-white antialiased light scroll-smooth",
        bodyFont.className
      )}
    >
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className="flex flex-col min-h-screen antialiased pt-body-top">
            <Navbar />
            <main className="grow">
              {children}
              {dialog}
              <Analytics />
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
