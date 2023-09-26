import { RegisterDialog } from "@/components/common/register/RegisterDialog";
import { Metadata } from "next";
import data from "@/data/data.json";

export const metadata: Metadata = {
  title: "Đăng ký tư vấn",
};

export default function Register({
  searchParams,
}: {
  searchParams: { course: string };
}) {
  const { course } = searchParams;

  return <RegisterDialog initialCourse={course} courses={data["courses"]} />;
}
