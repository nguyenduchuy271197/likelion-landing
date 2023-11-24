import Image from "next/image";
import RegistrationForm from "./_components/RegistrationForm";
import { Metadata } from "next";
import Footer from "@/components/layouts/footer/Footer";

export const metadata: Metadata = {
  title: "Notion Webinar | LIKELION",
  description: "",
};

export default function Page() {
  return (
    <div>
      <div className="relative min-h-screen sm:bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1700796018/forms/notion-webinar/BG_D_s6zofb.png')] bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1700796019/forms/notion-webinar/BG_M_tnrqsm.png')] bg-cover bg-center pb-[450px] lg:pb-0">
        <Image
          src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1700796019/forms/notion-webinar/Key_Info_fupvlg.png"
          alt=""
          height={850}
          width={850}
          priority
          quality={100}
          className="absolute bottom-0 left-0 hidden object-contain lg:block"
        />
        <div className="container">
          <div className="flex items-center justify-end py-8 lg:min-h-screen">
            <RegistrationForm />
          </div>
          <Image
            src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1700796019/forms/notion-webinar/Key_Info_Mobile_iib8sr.png"
            alt=""
            height={600}
            width={600}
            priority
            quality={100}
            className="absolute bottom-0 left-0 object-contain lg:hidden"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
