import Image from "next/image";
import RegistrationForm from "./_components/RegistrationForm";

export default function Page() {
  return (
    <div className="relative min-h-screen sm:bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1700555210/forms/notion-webinar/BG_D_zcd2g4.png')] bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1700555210/forms/notion-webinar/BG_M_vqd6wj.png')] bg-cover bg-center pb-80 lg:pb-0">
      <Image
        src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1700555210/forms/notion-webinar/Key_Element_q3iitc.png"
        alt=""
        height={800}
        width={800}
        className="absolute left-0 object-contain bottom-0 lg:top-[10%]"
      />
      <div className="container">
        <div className="flex justify-end py-[10vh]">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
