import Icons from "@/components/Icons";
import { LucideProps } from "lucide-react";

interface Feature {
  icon: (props: LucideProps) => JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Icons.target,
    title: "Sứ mệnh",
    description:
      "Cung cấp đa dạng các khoá học lập trình giúp học viên khai phá tiềm năng bản thân và mở ra cơ hội nghề nghiệp mới.",
  },
  {
    icon: Icons.vision,
    title: "Tầm nhìn",
    description:
      "LIKELION sẽ giữ vững chất lượng đào tạo như những gì chúng tôi đã và đang thực hiện. Tạo ra môi trường giáo dục IT nơi mà bất cứ ai cũng có cơ hội thử thách và hiện thực hoá ý tưởng bản thân.",
  },
];

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="flex flex-col gap-8 sm:gap-12  sm:p-12 bg-gradient-to-tr from-[#ff7100]/25 from-[20%] via-[#ffe3cb]/25 to-[#ffe3cb]/25 p-8 items-start">
      <Icon className="h-20 sm:h-24" />
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
        <div className="py-10 sm:py-20">
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
