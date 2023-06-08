const requirements = [
  "React knowledge is a must (but you absolutely DON'T have to be an expert",
  "JavaScript knowledge is a must, next-gen JavaScript knowledge (i.e. ES6+) is recommended",
  "NO Android/ Java or iOS (Swift, ObjectiveC) development experience is required",
];

export default function CourseRequirements() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-medium tracking-tight scroll-m-20">
        Yêu cầu cho khoá học
      </h2>
      <ul className="flex flex-col gap-4 ml-4 text-sm">
        {requirements.map((requirement) => (
          <li className="list-disc" key={requirement}>
            {requirement}
          </li>
        ))}
      </ul>
    </div>
  );
}
