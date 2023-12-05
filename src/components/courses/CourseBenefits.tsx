import CourseSectionHeading from "./CourseSectionHeading";
import ClientReactSVG from "../ClientReactSVG";

interface Benefit {
  title: string;
  description: string;
  src: string;
}

interface CourseBenefitProps extends Benefit {}

function CourseBenefit({ title, description, src }: CourseBenefitProps) {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-start">
        <div className="flex items-center justify-center p-4 text-orange-500 bg-orange-100 rounded-full">
          <ClientReactSVG src={src} width={24} height={24} />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold sm:text-2xl">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}

export default function CourseBenefits({ benefits }: { benefits: Benefit[] }) {
  return (
    <section id="benefits">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1">
            <div className="text-left lg:max-w-xs">
              <div className="space-y-2">
                <CourseSectionHeading>Lợi ích khoá học</CourseSectionHeading>
                <p className="text-lg text-foreground/70">
                  Tận hưởng các giá trị đặc biệt mà LIKELION mang lại
                </p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-12 flex-[2]">
            {benefits.map((benefit) => (
              <CourseBenefit key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
