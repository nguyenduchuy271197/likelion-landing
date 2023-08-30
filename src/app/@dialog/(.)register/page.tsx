import { RegisterDialog } from "@/components/common/register/RegisterDialog";
import { getCourses } from "@/services/courseService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký tư vấn",
};

export default async function Register({
  searchParams,
}: {
  searchParams: { course: string };
}) {
  const { course } = searchParams;
  const courses = await getCourses();

  return <RegisterDialog initialCourse={course} courses={courses} />;
}
