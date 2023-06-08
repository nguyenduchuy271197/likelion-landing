import useRegisterUser from "@/hooks/useRegisterUser";
import { RegisterForm } from "./RegisterForm";

export default function RegisterFormBox() {
  const { user, onRegisterUser } = useRegisterUser();

  return (
    <div>
      <h1 className="mb-12 text-3xl font-extrabold tracking-tight text-center scroll-m-20 lg:text-4xl">
        Đăng ký nhận tư vấn
      </h1>
      <RegisterForm onSubmitUser={onRegisterUser} />
    </div>
  );
}
