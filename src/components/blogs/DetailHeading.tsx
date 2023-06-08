import { formatDate } from "@/lib/date";
import { IBlog } from "@/types";
import Image from "next/image";

export default function DetailHeading({
  title = "Blog not found!",
  day = 0,
  imageUrl = "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  readingTime = "1 min",
  publishOn = Date.now(),
}: IBlog) {
  return (
    <header className="my-12">
      <div className="container">
        <div className="text-center">
          <div className="mb-6">
            <p className="mb-2 font-bold uppercase text-muted-foreground md:text-lg">
              Day {day}
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
            <p className="mt-6 text-sm text-muted-foreground">
              {publishOn ? formatDate(publishOn) : "Now"} - {readingTime}
            </p>
          </div>
          <div className="h-[300px] lg:h-[400px]">
            <Image
              src={imageUrl}
              alt={title}
              height={400}
              width={900}
              className="object-cover object-center w-full h-full rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
