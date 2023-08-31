import { getBlogsByTag } from "@/services/blogService";
import EventList from "./EventList";
import SectionHeading from "../SectionHeading";

export default function Events() {
  const blogs = getBlogsByTag("events");
  return (
    <section>
      <div className="container px-4">
        <div className="py-10 md:py-20">
          <SectionHeading title="Sự kiện" className="mb-10" />
          <EventList blogs={blogs} />
        </div>
      </div>
    </section>
  );
}
