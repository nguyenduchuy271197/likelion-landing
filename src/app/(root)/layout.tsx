import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import React, { ReactNode } from "react";

export default function RootLayout({
  children,
  dialog,
}: {
  children: ReactNode;
  dialog: ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen antialiased pt-body-top">
      <Navbar />
      <main className="grow">
        {children}
        {dialog}
      </main>
      <Footer />
    </div>
  );
}
