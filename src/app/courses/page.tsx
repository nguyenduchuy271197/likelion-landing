import { CourseCard } from "@/components/common/home/Courses";
import SectionHeading from "@/components/common/home/SectionHeading";
import { getCourses } from "@/services/courseService";

export default async function Courses() {
  const courses = await getCourses();
  return (
    <section>
      <div className="container">
        <div className="py-6 md:py-20">
          <SectionHeading
            title="Khóa học dẫn bạn đến thành công"
            subtitle="Người mới bắt đầu? Chưa có kinh nghiệm? Khoá học lập trình của LIKELION hỗ trợ bạn mọi lúc trên con đường học tập của mình. "
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
