import {
  WorkspacesParallax,
  workspaceOptions,
} from "../common/home/Workspaces";

export default function CourseWorkspaces() {
  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-medium">
        Học viên LIKELION làm việc ở đâu?
      </h2>
      <WorkspacesParallax options={workspaceOptions} velocity={2} />
    </div>
  );
}
