import type { Metadata } from "next";
import Gallery from "@/app/pages/about-us/gallery/gallery";
import PageHeading from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Photo Gallery",
};

const PhotoGallery = () => {
  return (
    <>
      <PageHeading label="ফটো গ্যালারী" />
      <Gallery />
    </>
  );
};

export default PhotoGallery;
