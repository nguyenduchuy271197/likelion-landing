import RegisterFormBox from "@/components/common/register/RegisterFormBox";
import Image from "next/image";

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
                  src="/img/contact/form.png"
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
