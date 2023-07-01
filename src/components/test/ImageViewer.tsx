import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import Image from "next/image";

export default function ImageViewer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent className="h-[95%] min-w-[70%] overflow-scroll">
        <Image
          src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1688188472/courses/bootcamp-lap-trinh-web-fullstack/projects/travel.png"
          width={1000}
          height={3000}
          alt=""
          className="object-contain w-full"
        />
      </DialogContent>
    </Dialog>
  );
}
