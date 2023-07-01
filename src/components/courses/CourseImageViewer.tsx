import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import Image from "next/image";
import { ReactNode } from "react";

export default function CourseImageViewer({
  title,
  imageUrl,
  children,
}: {
  title: string;
  imageUrl: string;
  children: ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-[95%] min-w-[70%] overflow-scroll">
        <Image
          src={imageUrl}
          width={1000}
          height={3000}
          alt={title}
          className="object-contain w-full"
        />
      </DialogContent>
    </Dialog>
  );
}
