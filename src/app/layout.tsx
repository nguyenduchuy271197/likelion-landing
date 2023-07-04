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
import Script from "next/script";
import Image from "next/image";

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

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-78E7JPEN6M"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-78E7JPEN6M');`,
          }}
        ></Script>

        {/* <!-- Messenger Chat Plugin Code --> */}
        <div id="fb-root"></div>

        {/* <!-- Your Chat Plugin code --> */}
        <div id="fb-customer-chat" className="fb-customerchat"></div>

        <Script
          id="chatbox"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "110804096994409");
          chatbox.setAttribute("attribution", "biz_inbox");`,
          }}
        ></Script>

        {/* <!-- Your SDK code --> */}
        <Script
          id="facebook-sdk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v17.0'
            });
          };
    
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));`,
          }}
        ></Script>
      </body>
    </html>
  );
}
