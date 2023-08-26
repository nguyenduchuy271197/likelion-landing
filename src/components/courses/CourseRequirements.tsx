import CourseSectionHeading from "./CourseSectionHeading";

export default function CourseRequirements({
  requirements,
}: {
  requirements: string[];
}) {
  if (!requirements) return null;

  return (
    <div>
      <CourseSectionHeading>Yêu cầu cho khoá học</CourseSectionHeading>
      <ul className="flex flex-col gap-4 ml-4">
        {requirements.map((requirement) => (
          <li className="list-disc" key={requirement}>
            {requirement}
          </li>
        ))}
      </ul>
    </div>
  );
}
