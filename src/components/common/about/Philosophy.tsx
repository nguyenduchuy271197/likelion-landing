import Image from "next/image";
import SectionHeading from "../home/SectionHeading";
import { LucideIcon } from "lucide-react";
import Icons from "@/components/Icons";

interface PhilosophyType {
  icon: LucideIcon;
  title: string;
  description: string;
}

const philosophies: PhilosophyType[] = [
  {
    icon: Icons.timing,
    title: "Tối ưu hoá thời gian học",
    description:
      "Cùng một khoảng thời gian, LIKELION giúp bạn tiếp thu được nhiều kiến thức hơn nhờ sự chắt lọc và sắp xếp thông tin hợp lý. Với lộ trình tinh gọn được biên soạn khoa học, bạn không còn phải tự mình loay hoay tìm kiếm hay lan man với những điều không cần thiết.",
  },
  {
    icon: Icons.mining,
    title: "Phát triển tư duy",
    description:
      "Ở LIKELION, bạn sẽ có đủ không gian và sự hỗ trợ cần thiết để phát triển bản thân. LIKELION tạo môi trường tích cực để kích thích sự sáng tạo và chủ động trong việc học lập trình. Từ đó, học viên có thể nghiên cứu sâu hơn và tự hoàn thiện ngay cả sau khi kết thúc khoá học.",
  },
  {
    icon: Icons.environment,
    title: "Môi trường tích cực",
    description:
      "Việc học và thực hành máy móc là không đủ để phát triển trong ngành này. Hơn cả một khoá học, LIKELION trang bị tư duy lập trình - điều giúp bạn tự tin khi gặp bất kỳ thử thách mới nào. Thay vì chỉ dạy cách sử dụng công cụ, chúng tôi tập trung phát triển tư duy trong từng buổi học.",
  },
];

function PhilosophyCard({ icon: Icon, title, description }: PhilosophyType) {
  return (
    <div className="relative h-full max-w-md px-6 py-8 overflow-hidden rounded-3xl group md:max-w-none bg-gradient-to-bl from-[#ffe3cb] to-white">
      <div>
        <div className="relative lg:aspect-[4/3] bg-[#FF8D3F] rounded-xl h-[200px] w-full">
          <Icon className="absolute bottom-0 w-[90%] h-[110%] left-1/2 -translate-x-1/2" />
        </div>
        <div className="mt-8">
          <h4 className="mb-2 text-xl font-medium lg:text-center">{title}</h4>
          <p className="flex items-center h-full text-muted-foreground lg:hidden">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 hidden w-full h-full p-8 text-white transition duration-300 bg-black opacity-0 lg:block group-hover:opacity-100">
        <p className="flex items-center h-full text-lg">{description}</p>
      </div>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section className="bg-[#FF8D3F] relative">
      <div className="container">
        <div className="pt-20 pb-20 lg:pb-0">
          <SectionHeading
            title="Triết lý giáo dục"
            subtitle="Luôn đặt chất lượng đào tạo, lộ trình và trải nghiệm của học viên lên làm ưu tiên hàng đầu, LIKELION xây dựng môi trường học tập năng động để bạn khai phá tiềm năng của mình."
            color="white"
          />

          <div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-stretch">
              {philosophies.map((philosophy) => (
                <PhilosophyCard {...philosophy} key={philosophy.title} />
              ))}
            </div>

            <div className="relative hidden pb-36 lg:block">
              <Icons.line className="max-w-[70%] mx-auto mt-4" />

              <div className="absolute text-3xl font-bold text-white bottom-12 right-1/2">
                Học viên <br />
                là trung tâm
              </div>

              <Icons.student className="w-64 absolute bottom-0 left-[calc(50%-2rem)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
