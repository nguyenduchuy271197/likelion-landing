import Image from "next/image";
import SectionHeading from "../home/SectionHeading";
import {
  Briefcase,
  GraduationCap,
  LucideIcon,
  Share2,
  Swords,
} from "lucide-react";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Share2,
    title: "Đồng hành & chia sẻ",
    description:
      "Nhằm đảm bảo chất lượng khoá học, số lượng học viên mỗi lớp sẽ được giới hạn. Điều này cho phép giảng viên và trợ giảng theo sát và hỗ trợ 1:1 từng học viên trong lớp. Kể cả trước, trong và sau khoá học, LIKELION đều sẵn sàng lắng nghe và hỗ trợ bất cứ khi nào các bạn cần. ",
  },
  {
    icon: Swords,
    title: "Chú trọng thực chiến",
    description:
      "Thực hành giúp nâng cao cả kỹ năng cứng và kỹ năng mềm. Học viên được cọ xát và tích luỹ kinh nghiệm thực tế bằng bài tập về nhà mỗi buổi học và dự án cuối khóa. Không có buổi học nào cùng LIKELION là nhàm chán bởi chúng tôi đề cao thực hành và sự tương tác. ",
  },
  {
    icon: Briefcase,
    title: "Hỗ trợ việc làm",
    description:
      "LIKELION kết nối và hỗ trợ đến khi bạn tìm được việc làm. Những đặc quyền cho học viên LIKELION bao gồm: workshop hướng dẫn chuẩn bị hồ sơ xin việc, chỉnh sửa CV và portfolio, seminar chia sẻ kinh nghiệm thực tế từ lập trình viên của doanh nghiệp lớn và kết nối việc làm đến các công ty IT trong mạng lưới. ",
  },
  {
    icon: GraduationCap,
    title: "Giảng viên chuyên môn cao",
    description:
      "Khoá học được giảng dạy bởi các giảng viên nhiều năm kinh nghiệm và các khách mời từ doanh nghiệp, tập đoàn lớn trong ngành. LIKELION mong muốn học viên được tiếp cận một cách gần nhất với nhu cầu của nhà tuyển dụng, xu hướng nổi bật trong ngành và môi trường làm việc thực tế. ",
  },
];

function ReasonCard({ icon: Icon, title, description }: Reason) {
  return (
    <div className="max-w-md">
      <div className="flex items-center gap-6 mb-4">
        <Icon size={72} stroke="#FE6F00" strokeWidth={1} />
        <h4 className="text-2xl font-medium">{title}</h4>
      </div>
      <div>
        <p className="text-lg leading-normal text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Reasons() {
  return (
    <section>
      <div className="container">
        <div className="py-20">
          <SectionHeading title="Tại sao chọn LIKELION?" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-16">
            {reasons.map((reason) => (
              <ReasonCard key={reason.title} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
