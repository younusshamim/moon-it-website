import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import FadeUpScroll from "@/components/animations/FadeUpScroll";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import { heroImages } from "@/data/focused-images";
import type { HomeHero } from "@/types/home-hero";
import CourseMedia from "../../course-details/course-media/course-media";
import LineShapes from "./line-shapes";

// Fallback copy so the hero renders correctly before the Sanity singleton is set.
const FALLBACK: HomeHero = {
  badge: "ফেনীর সেরা ট্রেনিং ইনস্টিটিউটে",
  titleBefore: "নিজেকে গড়ে তুলুন",
  titleHighlight: "ইন্ডাস্ট্রি এক্সপার্ট",
  titleAfter: "‍হিসেবে।",
  description:
    "মুন আইটি বৃহত্তর ফেনী/নোয়াখালীতে সর্বোচ্চ আসন ও ডিপার্টমেন্ট সমৃদ্ধ ট্রেনিং ইনস্টিটিউট। অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’ প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়।",
  thumbnail: heroImages[0],
};

type PropsTypes = {
  data?: HomeHero | null;
};

const HeroSection = ({ data }: PropsTypes) => {
  const hero = data ?? FALLBACK;

  return (
    <div className="relative">
      <LineShapes />

      <Container className="py-9 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-28">
        <div className="w-full flex flex-col gap-4 lg:gap-7 z-40 items-center lg:items-start text-center lg:text-start">
          <h3 className="font-bold text-[17px] shadow-md dark:bg-background2 rounded-btn w-fit px-3 pt-2 pb-1">
            <BsStars className="inline text-xl text-primary mr-1" />
            {hero.badge}
          </h3>

          <h2 className="text-foreground-dark font-extrabold text-[40px] lg:text-[52px] leading-snug">
            {hero.titleBefore}{" "}
            <GradientText>{hero.titleHighlight}</GradientText> {hero.titleAfter}
          </h2>

          <h1 className="lg:text-justify lg:text-lg">{hero.description}</h1>

          <div className="flex gap-2 lg:gap-4 z-40 w-full lg:w-fit px-5 lg:px-0">
            <Link href="free-seminar" className="w-1/2 lg:w-fit">
              <PrimaryButton
                size="lg"
                iconRight={<MdOutlineComputer />}
                className="w-full lg:w-fit"
              >
                ফ্রি সেমিনার
              </PrimaryButton>
            </Link>

            <Link href="courses" className="w-1/2 lg:w-fit">
              <PrimaryButton
                iconRight={<MdOutlineComputer className="text-primary" />}
                variant="outline"
                size="lg"
                className="w-full lg:w-fit"
              >
                সব কোর্স
              </PrimaryButton>
            </Link>
          </div>
        </div>

        <FadeUpScroll className="w-full z-40" transition={{ duration: 0.3 }}>
          <CourseMedia
            thumbnail={hero.thumbnail}
            name="Moon IT"
            youtubeUrl={hero.youtubeUrl}
            className="shadow-xl"
          />
        </FadeUpScroll>
      </Container>
    </div>
  );
};

export default HeroSection;
