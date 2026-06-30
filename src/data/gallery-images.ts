import type { GalleryImgType } from "@/types/gallery";
import {
  aboutImages,
  chairmanImage,
  heroImages,
  seminarImage,
} from "./focused-images";

const heroImagesList = heroImages.map((item) => {
  return {
    image: item,
    category: "students-institute",
  };
});
const aboutImagesList = aboutImages.map((item) => {
  return {
    image: item,
    category: "students-institute",
  };
});
const seminarImageObj = {
  image: seminarImage,
  category: "students-institute",
};
const chairmanImageObj = {
  image: chairmanImage,
  category: "students-institute",
};

const galleryImageList: GalleryImgType[] = [
  // students-institute
  {
    image: "/images/students-institute/image (2).jpeg",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (3).jpeg",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (4).jpeg",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (5).jpeg",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (8).jpg",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (1).jpeg",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (1).jpg",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (1).png",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (16).jpg",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (3).png",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (5).png",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (6).jpg",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (6).png",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (7).jpg",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (7).png",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (8).png",
    category: "students-institute",
  },
  {
    image: "/images/students-institute/image (14).jpg",
    category: "students-institute",
  },

  // program
  { image: "/images/program/program (1).jpg", category: "program" },
  { image: "/images/program/program (1).png", category: "program" },
  { image: "/images/program/program (2).jpg", category: "program" },
  { image: "/images/program/program (2).png", category: "program" },
  { image: "/images/program/program (3).png", category: "program" },
  { image: "/images/program/program (4).png", category: "program" },
  { image: "/images/program/program (5).png", category: "program" },

  // fairwell
  { image: "/images/fairwell/fairwell (1).jpg", category: "fairwell" },
  { image: "/images/fairwell/fairwell (1).png", category: "fairwell" },
  { image: "/images/fairwell/fairwell (2).jpg", category: "fairwell" },
  { image: "/images/fairwell/fairwell (3).jpg", category: "fairwell" },
  { image: "/images/fairwell/fairwell (4).jpg", category: "fairwell" },

  // tour
  { image: "/images/tour/tour (1).JPG", category: "tour" },
  { image: "/images/tour/tour (1).png", category: "tour" },
  { image: "/images/tour/tour (2).JPG", category: "tour" },
  { image: "/images/tour/tour (3).JPG", category: "tour" },

  // social-works
  { image: "/images/social-works/scocial.jpeg", category: "social-works" },
];

const galleryImages = [
  ...heroImagesList,
  ...galleryImageList,
  ...aboutImagesList,
  chairmanImageObj,
  seminarImageObj,
];

export default galleryImages;
