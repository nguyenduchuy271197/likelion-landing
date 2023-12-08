import { getBlogsByTag } from "@/services/blogService";
import Heading from "./Heading";
import EventList from "@/components/common/home/Events/EventList";

export default function Events() {
  const events = getBlogsByTag("events");
  return (
    <section>
      <div className="container">
        <div className="space-y-8 sm:space-y-16">
          <Heading>Những sự kiện nổi bật</Heading>
          <EventList events={events} />
        </div>
      </div>
    </section>
  );
}
