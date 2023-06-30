import Image from "next/image";
import SectionHeading from "../home/SectionHeading";

interface PhilosophyType {
  src: string;
  title: string;
  description: string;
}

const philosophies: PhilosophyType[] = [
  {
    src: "/img/about/philosophy/timing.svg",
    title: "Tối ưu hoá thời gian học",
    description:
      "Cùng một khoảng thời gian, LIKELION giúp bạn tiếp thu được nhiều kiến thức hơn nhờ sự chắt lọc và sắp xếp thông tin hợp lý. Với lộ trình tinh gọn được biên soạn khoa học, bạn không còn phải tự mình loay hoay tìm kiếm hay lan man với những điều không cần thiết.",
  },
  {
    src: "/img/about/philosophy/mining.svg",
    title: "Phát triển tư duy",
    description:
      "Ở LIKELION, bạn sẽ có đủ không gian và sự hỗ trợ cần thiết để phát triển bản thân. LIKELION tạo môi trường tích cực để kích thích sự sáng tạo và chủ động trong việc học lập trình. Từ đó, học viên có thể nghiên cứu sâu hơn và tự hoàn thiện ngay cả sau khi kết thúc khoá học.",
  },
  {
    src: "/img/about/philosophy/environment.svg",
    title: "Môi trường tích cực",
    description:
      "Việc học và thực hành máy móc là không đủ để phát triển trong ngành này. Hơn cả một khoá học, LIKELION trang bị tư duy lập trình - điều giúp bạn tự tin khi gặp bất kỳ thử thách mới nào. Thay vì chỉ dạy cách sử dụng công cụ, chúng tôi tập trung phát triển tư duy trong từng buổi học.",
  },
];

function PhilosophyCard({ src, title, description }: PhilosophyType) {
  return (
    <div className="relative h-full max-w-md px-6 py-8 overflow-hidden rounded-3xl group md:max-w-none bg-gradient-to-bl from-[#ffe3cb] to-white">
      <div>
        <div className="relative lg:aspect-[4/3] bg-[#FF8D3F] rounded-xl h-[200px] w-full">
          <div className="absolute bottom-0 w-[90%] h-[110%] left-1/2 -translate-x-1/2">
            <Image src={src} alt={title} fill />
          </div>
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
              <svg
                width={920}
                height={214}
                viewBox="0 0 920 214"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-[70%] mx-auto mt-4"
              >
                <g clipPath="url(#clip0_1_23)">
                  <path
                    d="M13 25V189H439"
                    stroke="white"
                    strokeWidth={5}
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M13.25 24.91C19.6897 24.91 24.91 19.6897 24.91 13.25C24.91 6.81039 19.6897 1.59003 13.25 1.59003C6.81039 1.59003 1.59003 6.81039 1.59003 13.25C1.59003 19.6897 6.81039 24.91 13.25 24.91Z"
                    stroke="white"
                    strokeWidth="3.18"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M460.29 24.91C466.73 24.91 471.95 19.6897 471.95 13.25C471.95 6.81039 466.73 1.59003 460.29 1.59003C453.85 1.59003 448.63 6.81039 448.63 13.25C448.63 19.6897 453.85 24.91 460.29 24.91Z"
                    stroke="white"
                    strokeWidth="3.18"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M905.89 24.91C912.33 24.91 917.55 19.6897 917.55 13.25C917.55 6.81039 912.33 1.59003 905.89 1.59003C899.45 1.59003 894.23 6.81039 894.23 13.25C894.23 19.6897 899.45 24.91 905.89 24.91Z"
                    stroke="white"
                    strokeWidth="3.18"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M906 25V189H482"
                    stroke="white"
                    strokeWidth={5}
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M460 167L460.33 24.91"
                    stroke="white"
                    strokeWidth={5}
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M460.29 210.75C472.236 210.75 481.92 201.066 481.92 189.12C481.92 177.174 472.236 167.49 460.29 167.49C448.344 167.49 438.66 177.174 438.66 189.12C438.66 201.066 448.344 210.75 460.29 210.75Z"
                    stroke="white"
                    strokeWidth={5}
                    strokeMiterlimit={10}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_23">
                    <rect width="919.14" height="213.25" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="absolute text-3xl font-bold text-white bottom-12 right-1/2">
                Học viên <br />
                là trung tâm
              </div>
              <div className="absolute bottom-0 left-[calc(50%-2rem)]">
                <Image
                  src="/img/about/philosophy/student.svg"
                  alt="Student"
                  width={250}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
