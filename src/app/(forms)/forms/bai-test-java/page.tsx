import Image from "next/image";
import FrontendForm from "./_components/FrontendForm";

export default function FrontendFormPage() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1699332702/forms/thu-thach-java/Background_nres3c.png')] flex flex-col items-center justify-center py-20 gap-8">
      <div className="flex items-center gap-2 mx-auto lg:hidden">
        <Image
          src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1699332702/forms/thu-thach-java/Lion2_kv42il.png"
          alt=""
          width={200}
          height={400}
        />
        <Image
          src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1699332702/forms/thu-thach-java/Lion1_ryy9ib.png"
          alt=""
          width={200}
          height={400}
          className="hidden shadow-none"
        />
      </div>
      <FrontendForm />
    </div>
  );
}
