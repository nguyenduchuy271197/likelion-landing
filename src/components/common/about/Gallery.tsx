"use client";

import { useState } from "react";
import SectionHeading from "../home/SectionHeading";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const images = [
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436630/gallery/LLV06256_kkpwo3.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436630/gallery/LLV06256_kkpwo3.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436631/gallery/LLV09662_oozkkt.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436631/gallery/LLV09662_oozkkt.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436630/gallery/LLV04968_quyfml.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436630/gallery/LLV04968_quyfml.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436630/gallery/LLV04981_qf3spb.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436630/gallery/LLV04981_qf3spb.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436630/gallery/LLV09305_glox6l.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436630/gallery/LLV09305_glox6l.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436629/gallery/bootcamp2_0002_DSC07072_bat3w5.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436629/gallery/bootcamp2_0002_DSC07072_bat3w5.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436629/gallery/LLV06057_lkzkrc.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436629/gallery/LLV06057_lkzkrc.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436628/gallery/bootcamp2_0009_DSC07127_e8dlpc.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436628/gallery/bootcamp2_0009_DSC07127_e8dlpc.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436628/gallery/LLV04753_n4m1lb.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436628/gallery/LLV04753_n4m1lb.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436628/gallery/LLV05113_pf4nic.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436628/gallery/LLV05113_pf4nic.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436628/gallery/bootcamp2_0001_DSC07070_f7hkvv.jpg",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688436628/gallery/bootcamp2_0001_DSC07070_f7hkvv.jpg",
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
