import Image from "next/image";

export default function Img(props: any) {
  return (
    <Image
      {...props}
      loading="lazy"
      className="w-full mx-auto"
      width={1000}
      height={1000}
      alt=""
    />
  );
}
