import RegisterFormBox from "@/components/common/register/RegisterFormBox";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Đăng ký tư vấn",
  openGraph: {
    title: "Đăng ký tư vấn",
    images: [
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692261940/og/og_register_agg6cu.png",
    ],
  },
};

export default function Register({
  searchParams,
}: {
  searchParams: { course: string };
}) {
  const { course = "fullstack-web-development-bootcamp" } = searchParams;
  return (
    <div>
      <div className="container">
        <div className="py-20">
          <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-2 place-items-center">
            {/* Illustration */}
            <div className="w-full">
              <div className="relative hidden lg:block aspect-[3/2] w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1688550261/contact/form_lnnhlj.png"
                  alt="Đăng ký tư vấn"
                  fill
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* Form Box */}
            <div className="w-full min-h-[70vh] flex items-center">
              <RegisterFormBox initialCourse={course} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
