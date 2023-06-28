export default function CourseRequirements({
  requirements,
}: {
  requirements: string[];
}) {
  if (!requirements) return null;

  return (
    <div>
      <h2 className="mb-6 text-2xl font-medium">Yêu cầu cho khoá học</h2>
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
