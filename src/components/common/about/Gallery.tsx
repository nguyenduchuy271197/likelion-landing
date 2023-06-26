"use client";

import { useState } from "react";
import SectionHeading from "../home/SectionHeading";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const images = [
  {
    original: "/img/about/gallery/bootcamp2_0001_DSC07070.jpg",
    thumbnail: "/img/about/gallery/bootcamp2_0001_DSC07070.jpg",
  },
  {
    original: "/img/about/gallery/bootcamp2_0002_DSC07072.jpg",
    thumbnail: "/img/about/gallery/bootcamp2_0002_DSC07072.jpg",
  },
  {
    original: "/img/about/gallery/bootcamp2_0009_DSC07127.jpg",
    thumbnail: "/img/about/gallery/bootcamp2_0009_DSC07127.jpg",
  },
  {
    original: "/img/about/gallery/LLV04753.png",
    thumbnail: "/img/about/gallery/LLV04753.png",
  },
  {
    original: "/img/about/gallery/LLV04968.png",
    thumbnail: "/img/about/gallery/LLV04968.png",
  },
  {
    original: "/img/about/gallery/LLV04981.png",
    thumbnail: "/img/about/gallery/LLV04981.png",
  },
  {
    original: "/img/about/gallery/LLV05113.png",
    thumbnail: "/img/about/gallery/LLV05113.png",
  },
  {
    original: "/img/about/gallery/LLV06057.png",
    thumbnail: "/img/about/gallery/LLV06057.png",
  },
  {
    original: "/img/about/gallery/LLV06256.png",
    thumbnail: "/img/about/gallery/LLV06256.png",
  },
  {
    original: "/img/about/gallery/LLV09305.jpg",
    thumbnail: "/img/about/gallery/LLV09305.jpg",
  },
  {
    original: "/img/about/gallery/LLV09662.png",
    thumbnail: "/img/about/gallery/LLV09662.png",
  },
];

export default function Gallery() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });

  function openLightboxOnSource(sourceIndex: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex,
    });
  }

  return (
    <section>
      <div className="container">
        <div className="py-20">
          <SectionHeading title="Môi trường học" />
          <div className="relative grid md:grid-cols-[1fr_300px] gap-1 auto-rows-[300px]">
            <div
              onClick={() => openLightboxOnSource(0)}
              className="relative overflow-hidden md:row-span-2"
            >
              <Image
                src={images[0].original}
                alt=""
                fill
                className="object-cover transition duration-300 cursor-pointer hover:opacity-90 hover:scale-105"
              />
            </div>
            <div
              onClick={() => openLightboxOnSource(1)}
              className="relative overflow-hidden"
            >
              <Image
                src={images[1].original}
                alt=""
                fill
                className="object-cover transition duration-300 cursor-pointer hover:opacity-90 hover:scale-105"
              />
            </div>
            <div
              onClick={() => openLightboxOnSource(2)}
              className="relative overflow-hidden"
            >
              <Image
                src={images[2].original}
                alt=""
                fill
                className="object-cover transition duration-300 cursor-pointer hover:opacity-90 hover:scale-105"
              />
            </div>

            <Button
              className="absolute bottom-4 right-4"
              variant="secondary"
              size="lg"
              onClick={() => openLightboxOnSource(0)}
            >
              Xem thêm
            </Button>
          </div>

          <FsLightbox
            toggler={lightboxController.toggler}
            sourceIndex={lightboxController.sourceIndex}
            thumbs={images.map((image) => image.thumbnail)}
            sources={images.map((image) => image.original)}
          />
        </div>
      </div>
    </section>
  );
}
