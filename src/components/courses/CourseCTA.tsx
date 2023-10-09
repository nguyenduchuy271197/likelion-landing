import CTA from "../common/home/CTA";
import CourseCTAForm from "./CourseCTAForm";

interface CourseCTAProps {
  id: string;
  name: string;
  slug: string;
}

export default function CourseCTA({ name, slug, id }: CourseCTAProps) {
  return (
    <CTA
      title={`Tư vấn 1-1 với giảng viên về khoá học ${name}`}
      description="Điền đầy đủ thông tin để chúng mình tư vấn, định hướng cho bạn
      nhé!"
      id={id}
      slug={slug}
    />
  );
}
