import { testimonials } from "../common/home/Testimonials";
import TestimonialRow from "../common/home/Testimonials/TestimonialRow";
import CourseSectionHeading from "./CourseSectionHeading";

export default function CourseFeedback() {
  return (
    <section className="feedbacks">
      <div className="container">
        <div className="space-y-20">
          <CourseSectionHeading className="text-center">
            Học viên nói về LIKELION
          </CourseSectionHeading>
          <TestimonialRow testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
