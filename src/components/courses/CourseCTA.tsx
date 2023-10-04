import CourseCTAForm from "./CourseCTAForm";

interface CourseCTAProps {
  id: string;
  name: string;
}

export default function CourseCTA({ name, id }: CourseCTAProps) {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-8 px-8 py-12 sm:py-16 sm:px-12 rounded-3xl bg-gradient-to-r from-orange-400 to-orange-500 text-muted md:flex-row">
          <div className="flex-1">
            <div className="space-y-2 md:max-w-sm">
              <h3 className="text-3xl font-bold sm:text-4xl">
                Tư vấn 1-1 với giảng viên về khoá học{" "}
                <span className="capitalize">{name}</span>?
              </h3>
              <p className="text-lg">
                Điền đầy đủ thông tin để chúng mình tư vấn, định hướng cho bạn
                nhé!
              </p>
            </div>
          </div>
          <div className="flex-1">
            <CourseCTAForm id={id} />
          </div>
        </div>
      </div>
    </section>
  );
}
