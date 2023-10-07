import { getBlogsByTag } from "@/services/blogService";
import EventList from "./EventList";
import SectionHeading from "../SectionHeading";

export default function Events() {
  const events = getBlogsByTag("events");
  return (
    <section>
      <div className="container">
        <div className="space-y-8 sm:space-y-16">
          <SectionHeading title="Những sự kiện nổi bật" />
          <EventList events={events} />
        </div>
      </div>
    </section>
  );
}
