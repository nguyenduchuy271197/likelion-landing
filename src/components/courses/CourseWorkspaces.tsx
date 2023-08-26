import {
  WorkspacesParallax,
  workspaceOptions,
} from "../common/home/Workspaces";

export default function CourseWorkspaces() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-medium">
        Học viên LIKELION làm việc ở đâu?
      </h2>
      <div className="py-8">
        <WorkspacesParallax options={workspaceOptions} velocity={2} />
      </div>
    </div>
  );
}
