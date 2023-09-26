import SectionHeading from "../SectionHeading";
import CoursesAnimated from "./CoursesAnimated";
import CourseCard from "./CourseCard";
import data from "@/data/data.json";

export default function Courses() {
  const courses = data["courses"];

  return (
    <section id="courses" className="scroll-mt-4">
      <div className="container">
        <div className="py-6 md:py-20">
          <SectionHeading
            title="Khóa học dẫn bạn đến thành công"
            subtitle="Người mới bắt đầu? Chưa có kinh nghiệm? Khoá học lập trình của LIKELION hỗ trợ bạn mọi lúc trên con đường học tập của mình. "
          />

          <CoursesAnimated>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </CoursesAnimated>
        </div>
      </div>
    </section>
  );
}
