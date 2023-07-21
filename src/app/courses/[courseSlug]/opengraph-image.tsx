import Image from "next/image";
import { ImageResponse } from "next/server";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: { courseSlug: string };
}) {
  if (params.courseSlug === "bootcamp-lap-trinh-web-fullstack")
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1689923829/thumbnail/Thumbnail_Bootcamp_zupniw.png"
            alt="Bootcamp lập trình web Fullstack"
            width={1200}
            height={630}
            className="object-cover w-full h-full"
          />
        </div>
      ),
      {
        ...size,
      }
    );
}
