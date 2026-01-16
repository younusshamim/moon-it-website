import { Carousel } from "@/components/carousel";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import { CarouselItem } from "@/components/ui/carousel";
import { aboutImages } from "@/data/focused-images";
import Image from "next/image";
import LineShapes from "../../../components/shapes/line-shapes";

const AboutUs = () => {
  return (
    <div className="relative">
      <LineShapes lightClassName="left-[500px]" />

      <Container className="pt-5 lg:pt-20 pb-10 flex flex-col-reverse lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2 z-40 flex flex-col gap-2">
          <p className="font-bold text-xl">প্রতিষ্ঠান সম্পর্কে কিছু কথা</p>

          <h2 className="text-4xl text-foreground-dark font-extrabold mb-4">
            <GradientText>
              সাফল্যের <span className="font-sans">২১</span> বছরে
            </GradientText>{" "}
            আইটি এক্সপার্ট তৈরির জগতে ফেনীর বিশ্বস্ত প্রতিষ্ঠান
          </h2>

          <h2 className="text-justify mb-3 text-[17px]">
            বর্তমানে বিশ্বায়নের যুগে স্মার্ট সিটিজেন হতে গেলে শুধুমাত্র একাডেমিক
            শিক্ষায় সীমাবদ্ধ থাকা যাবে না। স্মার্ট সিটিজেন হওয়ার জন্য এই দুটি
            দক্ষতার প্রয়োজন ১) আইটি তথা প্রযুক্তিগত দক্ষতা ২) মাতৃভাষার পাশাপশি
            অন্য আরও একটি ভাষায় দক্ষতা অর্জন। মুন আইটি আজ প্রযুক্তিগত দক্ষতা এবং
            ভাষা শিক্ষার ক্ষেত্রে একটি মাইলফলক স্পর্শ করতে যাচ্ছে। বর্তমান
            বিশ্বে আইটি এবং ভাষাগত দক্ষতা অর্জন না করলে উন্নয়নের মূলধারায়
            অংশগ্রহণ করা কঠিন। তাই, আমরা আমাদের শিক্ষার্থীদেরকে আইটি এবং ভাষাগত
            দক্ষতা অর্জনে উৎসাহিত করছি, যাতে বর্তমান বিশ্বের চ্যালেঞ্জ মোকাবিলা
            করে সফল হতে পারে।
          </h2>

          <h2 className="text-justify text-[17px]">
            প্রযুক্তির আলো ছড়িয়ে দেওয়ার লক্ষ্যে তথা দক্ষ জনশক্তি তৈরীতে ফেনীতে
            আমরাই প্রথম গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষামন্ত্রনালয়,
            কারিগরি শিক্ষা বোর্ড-BTEB ও বাংলাদেশ সরকারের জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) কর্তৃক
            অনুমোদিত প্রতিষ্ঠান। মুন আইটি ২০০৫ সাল থেকে নানান বিষয়ে স্কিল
            ডেভেলপমেন্টের মাধ্যমে দক্ষ জনশক্তি তৈরিতে কাজ করে যাচ্ছে। বিগত প্রায়
            দুই দশকে আমরা অসংখ্য বেকার যুবক-যুবতির কর্মক্ষমের পাশাপাশি তৈরী
            করেছি অনেক উদ্যোক্তা ও ফ্রিল্যান্সার। আলহামদুলিল্লাহ বর্তমানে আমাদের
            অসংখ্য প্রশিক্ষনার্থী দক্ষ হয়ে দেশ-বিদেশে লোকাল ও আন্তর্জাতিক
            মার্কেটে কাজ করে নিজেকে প্রমাণ করার সুযোগ পাচ্ছে। আমরা আপনাদের দোয়া
            ও সহযোগিতা কামনা করি।
          </h2>
        </div>

        <div className="w-full lg:w-1/2 z-40">
          {/*
            <Image
              className="w-full h-[380px] object-cover object-bottom shadow-lg shadow-slate-400 dark:shadow-slate-700 rounded-card hover:scale-[1.02] transition-all duration-500"
              sizes="100vw"
              width={0}
              height={0}
              src="/photo/technical-school.jpg"
              alt="Moon IT Seminar"
            />
          */}

          <Carousel imgOverlaySlider={true}>
            {aboutImages.map((item, index) => (
              <CarouselItem key={index}>
                <Image
                  className="w-full h-[380px] lg:h-[400px] object-cover rounded-card"
                  sizes="100vw"
                  width={0}
                  height={0}
                  src={item}
                  alt={"Moon IT"}
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
