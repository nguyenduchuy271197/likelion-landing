import { RegisterDialog } from "@/components/common/register/RegisterDialog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký tư vấn | LIKELION",
};

export default function Register({
  searchParams,
}: {
  searchParams: { course: string };
}) {
  const { course } = searchParams;

  return <RegisterDialog course={course} />;
}
