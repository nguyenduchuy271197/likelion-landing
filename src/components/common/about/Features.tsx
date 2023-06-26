import { LucideProps } from "lucide-react";
import Image from "next/image";

interface Feature {
  src: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    src: "/img/about/features/target.svg",
    title: "Sứ mệnh",
    description:
      "Cung cấp đa dạng các khoá học lập trình giúp học viên khai phá tiềm năng bản thân và mở ra cơ hội nghề nghiệp mới.",
  },
  {
    src: "/img/about/features/vision.svg",
    title: "Tầm nhìn",
    description:
      "LIKELION sẽ giữ vững chất lượng đào tạo như những gì chúng tôi đã và đang thực hiện. Tạo ra môi trường giáo dục IT nơi mà bất cứ ai cũng có cơ hội thử thách và hiện thực hoá ý tưởng bản thân.",
  },
];

function FeatureCard({ src, title, description }: Feature) {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 sm:p-12 bg-gradient-to-tr from-[#ff7100]/25 from-[20%] via-[#ffe3cb]/25 to-[#ffe3cb]/25 p-8 items-start">
      <div className="relative h-24 aspect-[1/1]">
        <Image fill alt={title} src={src} />
      </div>
      <div className="">
        <h3 className="mb-2 text-3xl font-bold">{title}</h3>
        <p className="sm:text-lg">{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section>
      <div className="container">
        <div className="py-20">
          <div className="grid overflow-hidden md:grid-cols-2 rounded-2xl">
            {features.map((feature) => (
              <FeatureCard {...feature} key={feature.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
