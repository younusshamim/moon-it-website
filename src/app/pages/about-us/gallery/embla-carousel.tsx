"use client";

import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryImgType } from "@/types/gallery";
import { Thumb } from "./embla-carousel-thumbs-button";

type PropType = {
  filteredImages: GalleryImgType[];
  lgScreen: boolean;
};
const OPTIONS: EmblaOptionsType = {};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { filteredImages, lgScreen } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(OPTIONS);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    axis: lgScreen ? "y" : "x",
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect, lgScreen]);

  return (
    <div className="embla flex flex-col-reverse lg:flex-row min-w-full gap-5">
      <div className="embla-thumbs">
        <div
          className="embla-thumbs__viewport w-full lg:w-40"
          ref={emblaThumbsRef}
        >
          {/*embla-thumbs__container  */}
          <div className="flex flex-row lg:flex-col gap-2.5 h-fit lg:h-[550px] lg:-ml-[12px]">
            {filteredImages.map((item, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {filteredImages.map((item, index) => (
            <div className="embla__slide " key={index}>
              <div className="embla__slide__number lg:min-h-[550px]">
                <Image
                  className="w-full h-full object-cover rounded-card shadow-lg cursor-pointer"
                  key={item.image + index}
                  src={item.image}
                  height={0}
                  width={0}
                  sizes="100vw"
                  alt="Moon IT Training Institute"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
