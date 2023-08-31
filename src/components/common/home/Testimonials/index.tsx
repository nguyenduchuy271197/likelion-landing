import SectionHeading from "../SectionHeading";
import TestimonialRow from "./TestimonialRow";
import TestimonialsAnimated from "./TestimonialsAnimated";

export interface TestimonialType {
  saying: string;
  name: string;
  course: string;
  avatar: string;
}

export const testimonials: TestimonialType[] = [
  {
    saying:
      "Mình thấy lộ trình học rất phù hợp cho những người bắt đầu từ con số 0, những người chuyển ngành. Giảng viên dạy rất bài bản giống như mình đang đi học đại học vậy.",
    name: "Bảo Sơn",
    course: "Khóa Full-stack Web Developer Bootcamp 4",
    avatar:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688545953/home/testimonials/bs_gr8xhp.png",
  },
  {
    saying:
      "Giáo án rõ ràng và được liên kết với nhau rất logic. Mình thấy tụi mình nhanh lên tay nghề hơn và tư duy phản xạ cũng nhanh hơn qua từng project.",
    name: "Hoàng Lưu",
    course: "Khóa Full-stack Web Developer Bootcamp 4",
    avatar:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688545954/home/testimonials/hl_d2wo5y.png",
  },
  {
    saying:
      "Chương trình học và các đơn vị kiến thức được cấu trúc rất chuyên nghiệp. Bản thân em được trau dồi và phát triển rất nhiều kiến thức chuyên môn.",
    name: "Hoàng Anh",
    course: "Khóa Full-stack Web Developer Bootcamp 4",
    avatar:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688545953/home/testimonials/ha_wc4lol.png",
  },
  {
    saying:
      "Thầy dạy rất dễ hiểu. Bây giờ mình đã có thể tự làm ra một trang web cho mình rồi. Tuy trang web chưa có gì quá phức tạp nhưng mình cảm thấy rất tự hào.",
    name: "Thảo Trang",
    course: "Khóa Full-stack Web Developer Bootcamp 4",
    avatar:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688545955/home/testimonials/tt_oiwasu.png",
  },
  {
    saying:
      "Các thầy trong khoá thật sự dạy rất nhiệt tình luôn ấy ạ. Mọi người lúc đầu vào đa phần chưa có một chút kiến thức gì về lập trình nên hỏi cũng nhiều lắm.",
    name: "Hoàng Long",
    course: "Khóa Full-stack Web Developer Bootcamp 3",
    avatar:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688545955/home/testimonials/lo_fesodj.png",
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="container px-4">
        <div className="py-10 md:py-20">
          <SectionHeading title="Học viên nói về LIKELION" />

          <TestimonialsAnimated>
            <TestimonialRow testimonials={testimonials} />
          </TestimonialsAnimated>
        </div>
      </div>
    </section>
  );
}
