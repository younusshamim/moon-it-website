"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import Modal from "@/components/modal";
import { cn } from "@/lib/utils";
import { getYoutubeEmbedUrl } from "@/lib/utils/youtube";

type PropsTypes = {
  thumbnail: string;
  name: string;
  youtubeUrl?: string;
  className?: string;
};

const CourseMedia = ({
  thumbnail,
  name,
  youtubeUrl,
  className,
}: PropsTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const origin =
    typeof window !== "undefined" ? window.location.origin : undefined;
  const embedUrl = youtubeUrl ? getYoutubeEmbedUrl(youtubeUrl, origin) : null;

  const thumbnailImage = (
    <Image
      className="w-full h-[240px] lg:h-[390px] object-cover object-center rounded-card shadow-lg"
      sizes="100vw"
      width={0}
      height={0}
      src={thumbnail}
      alt={name}
    />
  );

  if (!embedUrl) {
    return <div className={cn("relative", className)}>{thumbnailImage}</div>;
  }

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`${name} ভিডিও দেখুন`}
        className="group relative block w-full overflow-hidden rounded-card"
      >
        {thumbnailImage}

        <span className="absolute inset-0 rounded-card bg-foreground-dark/30 transition-colors duration-300 group-hover:bg-foreground-dark/40" />

        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-primary-lighter to-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110 lg:h-20 lg:w-20">
          <FaPlay className="ml-1 text-xl lg:text-2xl" />
        </span>
      </button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="lg" className="p-2">
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          {isOpen && (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={embedUrl}
              title={name}
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CourseMedia;
