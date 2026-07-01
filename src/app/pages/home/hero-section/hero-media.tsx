"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import Modal from "@/components/modal";
import { cn } from "@/lib/utils";
import { getYoutubeEmbedUrl } from "@/lib/utils/youtube";

type PropsTypes = {
  thumbnail: string;
  youtubeUrl?: string;
  name?: string;
  className?: string;
};

/**
 * Hero media is ALWAYS a video — the thumbnail is only its poster. Unlike the
 * shared `CourseMedia` (which may be image-only), this keeps a play overlay as
 * the default state and adds a decorative glow/frame for the hero.
 */
const HeroMedia = ({
  thumbnail,
  youtubeUrl,
  name = "Moon IT",
  className,
}: PropsTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const origin =
    typeof window !== "undefined" ? window.location.origin : undefined;
  const embedUrl = youtubeUrl ? getYoutubeEmbedUrl(youtubeUrl, origin) : null;

  return (
    <div className={cn("relative", className)}>
      {/* Decorative glow behind the frame */}
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-tr from-primary/30 via-primary-lighter/20 to-secondary/20 opacity-70 blur-2xl"
      />

      {/* Gradient border frame → real 16:9 video shape */}
      <div className="relative rounded-2xl bg-gradient-to-tr from-primary/50 via-primary-lighter/30 to-secondary/40 p-[2px] shadow-2xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-[15px] bg-background2">
          <Image
            className="object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
            fill
            src={thumbnail}
            alt={name}
            priority
          />

          {embedUrl && (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={`${name} ভিডিও দেখুন`}
              className="group absolute inset-0 block w-full"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-foreground-dark/50 via-foreground-dark/10 to-foreground-dark/25 transition-colors duration-300 group-hover:from-foreground-dark/60" />

              <span className="absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:h-20 lg:w-20">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-primary-lighter/40 motion-safe:animate-ping"
                />
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-primary-lighter to-primary text-primary-foreground shadow-lg ring-4 ring-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <FaPlay className="ml-1 text-2xl lg:text-[28px]" />
                </span>
              </span>

              <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-foreground-dark px-3 py-1.5 text-sm font-medium text-white dark:text-black backdrop-blur-md lg:bottom-4 lg:left-4 shadow-xl">
                <span className="h-2 w-2 rounded-full bg-primary-lighter motion-safe:animate-pulse" />
                ভিডিও দেখুন
              </span>
            </button>
          )}
        </div>
      </div>

      {embedUrl && (
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
      )}
    </div>
  );
};

export default HeroMedia;
