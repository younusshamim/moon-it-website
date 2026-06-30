import Image from "next/image";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import BounceScroll from "@/components/animations/BounceScroll";
import FadeUpScroll from "@/components/animations/FadeUpScroll";
import SpringyScroll from "@/components/animations/SpringyScroll";
import WobbleScroll from "@/components/animations/WobbleScroll";
import { Carousel } from "@/components/carousel";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import { CarouselItem } from "@/components/ui/carousel";
import { heroImages } from "@/data/focused-images";
import LineShapes from "./line-shapes";

const HeroSection = () => {
  return (
    <div className="relative">
      <LineShapes />

      <Container className="py-9 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-28">
        <div className="w-full flex flex-col gap-4 lg:gap-7 z-40 items-center lg:items-start text-center lg:text-start">
          <h3 className="font-bold text-[17px] shadow-md dark:bg-background2 rounded-btn w-fit px-3 pt-2 pb-1">
            <BsStars className="inline text-xl text-primary mr-1" />
            ফেনীর সেরা ট্রেনিং ইনস্টিটিউটে
          </h3>

          <h2 className="text-foreground-dark font-extrabold text-[40px] lg:text-[52px] leading-snug">
            নিজেকে গড়ে তুলুন <GradientText>ইন্ডাস্ট্রি এক্সপার্ট</GradientText> {""}
            ‍হিসেবে।
          </h2>

          <h1 className="lg:text-justify lg:text-lg">
            মুন আইটি বৃহত্তর ফেনী/নোয়াখালীতে সর্বোচ্চ আসন ও ডিপার্টমেন্ট সমৃদ্ধ ট্রেনিং
            ইনস্টিটিউট। অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’ প্রস্তুত আপনার
            ক্যারিয়ার গড়ার অগ্রযাত্রায়।
          </h1>

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

          {/* <div className="flex items-center gap-2 lg:gap-4 z-40 ">
            <Image
              className="w-16 h-auto"
              sizes="100vw"
              width={0}
              height={0}
              src="/logo/BTEB-Logo.png"
              alt="Bangladesh Technical Education Board (BTEB)"
            />
            <h2 className="font-semibold w-full lg:w-2/4 text-left lg:text-justify text-sm lg:text-base">
              বাংলাদেশ কারিগরি শিক্ষা বোর্ড কর্তৃক অনুমোদিত আইটি ট্রেনিং
              ইনস্টিটিউট।
            </h2>
          </div> */}
        </div>

        <FadeUpScroll className="w-full z-40" transition={{ duration: 0.3 }}>
          <Carousel imgOverlaySlider={true}>
            {heroImages.map((item, index) => (
              <CarouselItem key={index}>
                <Image
                  className="w-full h-[380px] lg:h-[420px] object-cover rounded-card"
                  sizes="100vw"
                  width={0}
                  height={0}
                  src={item}
                  alt={"Moon IT"}
                />
              </CarouselItem>
            ))}
          </Carousel>
        </FadeUpScroll>
      </Container>
    </div>
  );
};

export default HeroSection;
