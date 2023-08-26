import {
  WorkspacesParallax,
  workspaceOptions,
} from "../common/home/Workspaces";
import CourseSectionHeading from "./CourseSectionHeading";

export default function CourseWorkspaces() {
  return (
    <div>
      <CourseSectionHeading>
        Học viên LIKELION làm việc ở đâu?
      </CourseSectionHeading>
      <div className="py-8">
        <WorkspacesParallax options={workspaceOptions} velocity={2} />
      </div>
    </div>
  );
}
