import { testimonials } from "../common/home/Testimonials";
import TestimonialRow from "../common/home/Testimonials/TestimonialRow";
import CourseSectionHeading from "./CourseSectionHeading";

export default function CourseFeedback() {
  return (
    <section className="feedbacks">
      <CourseSectionHeading>Học viên nói về LIKELION</CourseSectionHeading>
      <TestimonialRow testimonials={testimonials} />
    </section>
  );
}
