import { testimonials } from "../common/home/Testimonials";
import TestimonialRow from "../common/home/Testimonials/TestimonialRow";

export default function CourseFeedback() {
  return (
    <section className="feedbacks">
      <div className="container">
        <div className="py-20">
          <h2 className="mb-20 text-4xl font-bold text-center text-primary">
            Học viên nói về LIKELION
          </h2>
          <TestimonialRow testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
