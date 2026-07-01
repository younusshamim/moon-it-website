import Image from "next/image";
import { Carousel } from "@/components/carousel";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import { CarouselItem } from "@/components/ui/carousel";
import { getAboutUs } from "@/data/about-us";
import { aboutImages } from "@/data/focused-images";
import type { AboutUs as AboutUsContent } from "@/types/about-us";
import LineShapes from "../../../components/shapes/line-shapes";

// Fallback copy so the section renders correctly before the Sanity singleton is set.
const FALLBACK: AboutUsContent = {
  badge: "প্রতিষ্ঠান সম্পর্কে কিছু কথা",
  titleHighlight: "সাফল্যের ২১ বছরে",
  titleAfter: "আইটি এক্সপার্ট তৈরির জগতে ফেনীর বিশ্বস্ত প্রতিষ্ঠান",
  paragraphs: [
    "বর্তমানে বিশ্বায়নের যুগে স্মার্ট সিটিজেন হতে গেলে শুধুমাত্র একাডেমিক শিক্ষায় সীমাবদ্ধ থাকা যাবে না। স্মার্ট সিটিজেন হওয়ার জন্য এই দুটি দক্ষতার প্রয়োজন ১) আইটি তথা প্রযুক্তিগত দক্ষতা ২) মাতৃভাষার পাশাপশি অন্য আরও একটি ভাষায় দক্ষতা অর্জন। মুন আইটি আজ প্রযুক্তিগত দক্ষতা এবং ভাষা শিক্ষার ক্ষেত্রে একটি মাইলফলক স্পর্শ করতে যাচ্ছে। বর্তমান বিশ্বে আইটি এবং ভাষাগত দক্ষতা অর্জন না করলে উন্নয়নের মূলধারায় অংশগ্রহণ করা কঠিন। তাই, আমরা আমাদের শিক্ষার্থীদেরকে আইটি এবং ভাষাগত দক্ষতা অর্জনে উৎসাহিত করছি, যাতে বর্তমান বিশ্বের চ্যালেঞ্জ মোকাবিলা করে সফল হতে পারে।",
    "প্রযুক্তির আলো ছড়িয়ে দেওয়ার লক্ষ্যে তথা দক্ষ জনশক্তি তৈরীতে ফেনীতে আমরাই প্রথম গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষামন্ত্রনালয়, কারিগরি শিক্ষা বোর্ড-BTEB ও বাংলাদেশ সরকারের জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) কর্তৃক অনুমোদিত প্রতিষ্ঠান। মুন আইটি ২০০৫ সাল থেকে নানান বিষয়ে স্কিল ডেভেলপমেন্টের মাধ্যমে দক্ষ জনশক্তি তৈরিতে কাজ করে যাচ্ছে। বিগত প্রায় দুই দশকে আমরা অসংখ্য বেকার যুবক-যুবতির কর্মক্ষমের পাশাপাশি তৈরী করেছি অনেক উদ্যোক্তা ও ফ্রিল্যান্সার। আলহামদুলিল্লাহ বর্তমানে আমাদের অসংখ্য প্রশিক্ষনার্থী দক্ষ হয়ে দেশ-বিদেশে লোকাল ও আন্তর্জাতিক মার্কেটে কাজ করে নিজেকে প্রমাণ করার সুযোগ পাচ্ছে। আমরা আপনাদের দোয়া ও সহযোগিতা কামনা করি।",
  ],
};

const AboutUs = async () => {
  const about = (await getAboutUs()) ?? FALLBACK;
  const images = about.images?.length ? about.images : aboutImages;

  return (
    <div className="relative section-padding-sm">
      <LineShapes lightClassName="left-[500px]" />

      <Container className="flex flex-col-reverse lg:flex-row gap-14 lg:gap-20 items-center">
        <div className="w-full lg:w-1/2 z-40 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <p className="font-bold text-primary">{about.badge}</p>
          </div>

          <h2 className="text-4xl text-foreground-dark font-extrabold leading-snug">
            {about.titleBefore ? `${about.titleBefore} ` : ""}
            <GradientText>{about.titleHighlight}</GradientText>{" "}
            {about.titleAfter}
          </h2>

          <div className="space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-justify text-[17px] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 z-40">
          <Carousel imgOverlaySlider={true}>
            {images.map((src) => (
              <CarouselItem key={src}>
                <Image
                  className="w-full h-[380px] lg:h-[400px] object-cover rounded-card"
                  sizes="100vw"
                  width={0}
                  height={0}
                  src={src}
                  alt="Moon IT"
                />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
