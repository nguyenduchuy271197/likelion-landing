import Image from "next/image";
import { Badge } from "../ui/Badge";

const courseWorkshops: CourseWorkshopType[] = [
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1690789908/courses/bootcamp-lap-trinh-web-fullstack/workshops/Workshop_CV_pddxdw.png",
    title: "Workshop Nâng cấp CV",
    description:
      "Nâng cấp porfolio của bạn, hỗ trợ chụp ảnh profile và quay video giới thiệu bản thân, để bạn trở nên chuyên nghiệp và gây ấn tượng với nhà tuyển dụng.",
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1690789908/courses/bootcamp-lap-trinh-web-fullstack/workshops/Workshop_Interview_ez3ufi.png",
    title: "Workshop Tuyệt kỹ phỏng vấn",
    description:
      "Giúp các bạn học viên thành thạo các kỹ năng phỏng vấn, tạo điểm nhấn trong mắt nhà tuyển dụng, và gia tăng cơ hội nhận được offer.",
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1690789908/courses/bootcamp-lap-trinh-web-fullstack/workshops/Workshop_Thu%CC%9B%CC%A3c_chie%CC%82%CC%81n_wjtonm.png",
    title: "Workshop Thực chiến ngành IT",
    description:
      "Giúp học viên hiểu về tính chất ngành lập trình và nắm rõ các level của lập trình viên để từ đó xác định hướng phát triển sự nghiệp trong ngành IT",
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1690789908/courses/bootcamp-lap-trinh-web-fullstack/workshops/Workshop_ChatGPT_f4f8h3.png",
    title: "Workshop Làm chủ ChatGPT",
    description:
      "Sử dụng AI để ứng dụng vào công việc, giúp tiết kiệm thời gian tìm kiếm kết quả chính xác, và khám phá nhiều phương pháp code hiệu quả.",
  },
];

interface CourseWorkshopType {
  src: string;
  title: string;
  description: string;
}

function CourseWorkshopCard({ src, title, description }: CourseWorkshopType) {
  return (
    <div>
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
        <Image
          src={src}
          fill
          className="object-cover object-center"
          alt={title}
        />
      </div>
      <div className="py-2 space-y-1">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function CourseWorkshops() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-medium">Workshops</h2>
        <div className="flex items-center gap-1">
          <Badge className="bg-[#FF7100]">Mới</Badge>
          <Badge className="bg-[#FF7100]">Đặc biệt</Badge>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {courseWorkshops.map((courseWorkshop) => (
          <CourseWorkshopCard key={courseWorkshop.title} {...courseWorkshop} />
        ))}
      </div>
    </div>
  );
}
