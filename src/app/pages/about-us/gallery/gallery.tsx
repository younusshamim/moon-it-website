"use client";

import { useState } from "react";
import Container from "@/components/container";
import Tabs from "@/components/tabs";
import imageCategories from "@/data/gallery-categories";
import galleryImages from "@/data/gallery-images";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useLgScreen } from "@/hooks/use-media-query";
import getOptions from "@/lib/utils/get-options";
import EmblaCarousel from "./embla-carousel";
import "./embla.css";

const Gallery = () => {
  const [selected, setSelected] = useState<string | number>(
    imageCategories[0].id,
  );
  const filteredImages = galleryImages.filter(
    (item) => item.category === selected,
  );
  const tabOptions = getOptions(imageCategories, "title", "id");
  const lgScreen = useLgScreen();
  const mounted = useIsMounted();

  return (
    <div>
      <Container className="pt-10 pb-20">
        {/* <h2 className="text-4xl text-foreground-dark font-extrabold  text-center mb-[6px]">
          ফটো গ্যালারী
        </h2>
        <h2 className="font-semibold mb-10 text-center">
          শিক্ষার্থী/শিক্ষক-দের কিছু সুন্দর মুহূর্ত দেখতে পাবেন আমাদের
          গ্যালারিতে।
        </h2> */}

        <Tabs
          tabOptions={tabOptions}
          selected={selected}
          setSelected={setSelected}
        />

        <EmblaCarousel filteredImages={filteredImages} lgScreen={lgScreen} />
      </Container>
    </div>
  );
};

export default Gallery;
