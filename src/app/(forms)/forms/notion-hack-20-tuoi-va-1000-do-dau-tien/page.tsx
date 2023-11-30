import Image from "next/image";
import RegistrationForm from "./_components/RegistrationForm";
import { Metadata } from "next";
import Footer from "@/components/layouts/footer/Footer";
import { Mulish } from "next/font/google";
import Curriculum from "./_components/Curriculum";
import { cn } from "@/lib/utils";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Lecturers from "./_components/Lecturers";
import FixedButton from "./_components/FixedButton";
import ButtonWrapper from "./_components/ButtonWrapper";
const mulishFont = Mulish({
  subsets: ["vietnamese"],
  weight: ["400", "500", "800"],
});

export const metadata: Metadata = {
  title: "Notion Hack | LIKELION",
  description: "",
};

export default function Page() {
  return (
    <div className={cn(mulishFont.className)}>
      <ButtonWrapper>
        <Hero />
        <section
          id="form"
          className="relative min-h-screen sm:bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1700796018/forms/notion-webinar/BG_D_s6zofb.png')] bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1700796019/forms/notion-webinar/BG_M_tnrqsm.png')] bg-cover bg-center pb-[450px] lg:pb-0"
        >
          <Image
            src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701325554/forms/notion-webinar/Key_Mobile_fhkckh.png"
            alt=""
            height={850}
            width={850}
            className="absolute bottom-0 left-0 object-contain"
          />
          <div className="container">
            <div className="flex items-center justify-end py-8 lg:min-h-screen">
              <RegistrationForm />
            </div>
          </div>
        </section>
      </ButtonWrapper>

      <div className="pb-20 space-y-32">
        <Features />
        <Curriculum />
        <Lecturers />
      </div>
      <Footer />
      <FixedButton />
    </div>
  );
}
