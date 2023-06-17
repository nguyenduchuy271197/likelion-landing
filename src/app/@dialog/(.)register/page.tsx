import { RegisterDialog } from "@/components/common/register/RegisterDialog";

export default function Register({
  searchParams,
}: {
  searchParams: { course: string };
}) {
  const { course } = searchParams;

  return <RegisterDialog course={course} />;
}
