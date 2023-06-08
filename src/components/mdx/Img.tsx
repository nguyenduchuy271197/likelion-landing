import Image from "next/image";

export default function Img(props: any) {
  return (
    <div className="relative">
      <Image {...props} loading="lazy" className="z-auto mx-auto" fill alt="" />
    </div>
  );
}
