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
import Footer from "@/components/layouts/footer/Footer";
import Providers from "@/context/Providers";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/Toaster";
import Script from "next/script";
import Image from "next/image";
import siteConfig from "@/config/siteConfig";
import { Metadata } from "next";
import PhoneCall from "@/components/PhoneCall";
import { getCourses } from "@/services/courseService";
import TrialPopup from "@/components/popups/TrialPopup";

// Load body font
const bodyFont = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.brand}`,
    default: siteConfig.defaultTitle,
  },
  description: siteConfig.description,
  keywords: [siteConfig.brand],
  applicationName: siteConfig.title,
  authors: [{ name: siteConfig.brand, url: siteConfig.url }],
  colorScheme: "light",
  creator: siteConfig.brand,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "education",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692261866/og/opengraph-image_i6r5fy.png",
    ],
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
  dialog,
}: {
  children: ReactNode;
  dialog: ReactNode;
}) {
  const courses = await getCourses();

  return (
    <html
      lang="en"
      className={cn(
        "bg-white antialiased light scroll-smooth",
        bodyFont.className
      )}
    >
      <body suppressHydrationWarning={true} className="overflow-x-hidden">
        <Providers>
          <div className="flex flex-col min-h-screen antialiased pt-body-top">
            <Navbar courses={courses} />
            <main className="grow">
              {children}
              {dialog}
              <Analytics />
            </main>
            <Footer />
          </div>
          <Toaster />
          <PhoneCall />
          <TrialPopup />
        </Providers>

        {/* <!-- Meta Pixel Code --> */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '629989147826585');
  fbq('track', 'PageView');`,
          }}
        ></Script>
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=629989147826585&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>

        {/* <!-- Google Tag Manager --> */}
        <Script
          id="google-tab-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5LGJRFRB');`,
          }}
        ></Script>
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LGJRFRB"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        {/* <!-- Messenger Chat Plugin Code --> */}
        <div id="fb-root"></div>

        {/* <!-- Your Chat Plugin code --> */}
        <div id="fb-customer-chat" className="fb-customerchat"></div>

        <Script
          id="chatbox"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "110804096994409");
            chatbox.setAttribute("attribution", "biz_inbox");
          `,
          }}
        ></Script>

        {/* <!-- Your SDK code --> */}
        <Script
          id="facebook-sdk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v17.0'
              });
            };
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `,
          }}
        ></Script>
      </body>
    </html>
  );
}
