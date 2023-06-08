import { RegisterForm } from "@/components/common/register/RegisterForm";
import RegisterFormBox from "@/components/common/register/RegisterFormBox";
import Image from "next/image";

export default function Register() {
  return (
    <div>
      <div className="container">
        <div className="py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Illustration */}
            <div className="relative hidden md:block">
              <Image
                src="/img/illustrations/register/1.svg"
                alt="Đăng ký tư vấn"
                fill
                className="w-full h-full"
              />
            </div>

            {/* Form Box */}
            <RegisterFormBox />
          </div>
        </div>
      </div>
    </div>
  );
}
