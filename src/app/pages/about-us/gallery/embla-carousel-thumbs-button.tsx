"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryImgType } from "@/types/gallery";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  item: GalleryImgType;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick, item } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : "",
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <Image
          className={cn(
            "w-full h-full object-cover rounded-card shadow-lg cursor-pointer border border-muted",
            { "border-primary-lighter border-2": selected },
          )}
          src={item.image}
          height={0}
          width={0}
          sizes="100vw"
          alt="Moon IT Training Institute"
        />
      </button>
    </div>
  );
};
