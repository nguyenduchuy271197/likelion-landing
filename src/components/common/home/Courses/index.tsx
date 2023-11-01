import SectionHeading from "../SectionHeading";
import CoursesAnimated from "./CoursesAnimated";
import CourseCard from "./CourseCard";
import data from "@/data/data.json";

export default function Courses() {
  const courses = data["courses"];

  return (
    <section id="courses" className="scroll-mt-4">
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="space-y-8 sm:space-y-16">
          <SectionHeading
            title="Khóa học của chúng tôi"
            subtitle="Người mới bắt đầu? Chưa có kinh nghiệm? Khoá học lập trình của LIKELION hỗ trợ bạn mọi lúc trên con đường học tập của mình. "
          />

          <CoursesAnimated>
            <div className="grid gap-8 md:grid-cols-2">
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
