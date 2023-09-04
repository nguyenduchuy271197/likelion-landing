import { RegisterDialog } from "@/components/common/register/RegisterDialog";
import { getCourses } from "@/services/courseService";
import { Metadata } from "next";
import data from "@/data/data.json";
import { ICourse } from "@/types";

export const metadata: Metadata = {
  title: "Đăng ký tư vấn",
};

export default function Register({
  searchParams,
}: {
  searchParams: { course: string };
}) {
  const { course } = searchParams;

  return (
    <RegisterDialog
      initialCourse={course}
      courses={data["courses"] as ICourse[]}
    />
  );
}
