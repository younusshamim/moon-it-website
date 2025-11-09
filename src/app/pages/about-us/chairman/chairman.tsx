import ScrollAnimation from "@/components/animations/ScrollAnimation";
import SpringyScroll from "@/components/animations/SpringyScroll";
import Container from "@/components/container";
import { chairmanImage } from "@/data/focused-images";
import Image from "next/image";

const Chairman = () => {
  return (
    <Container className="pt-20 flex flex-col lg:flex-row gap-20 lg:gap-28 items-center justify-center">
      <div className="w-[calc(100%-50px)] lg:w-1/2 flex justify-start lg:justify-end relative">
        <ScrollAnimation
          className="z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1, rotate: -3 }}
          transition={{ duration: 0.2, delay: 1 }}
        >
          <Image
            className="w-full h-[350px] lg:h-[400px] object-cover object-center rounded-card border-white border-4 shadow-lg"
            sizes="100vw"
            width={0}
            height={0}
            src={chairmanImage}
            alt="Yousuf Shahin - Chairman of Moon IT"
          />
        </ScrollAnimation>

        <div className="w-[90%] lg:w-[80%] h-[350px] lg:h-[400px] bg-primary-lighter dark:bg-background rounded-card absolute top-7 -right-5 lg:top-10 lg:-right-10 z-0 border-white border-4 shadow-lg"></div>
      </div>

      <div className="w-full lg:w-1/2  text-white">
        <p className="text-justify mb-4">
          বর্তমানে বিশ্বায়নের যুগে স্মার্ট সিটিজেন হতে গেলে শুধুমাত্র একাডেমিক
          শিক্ষায় সীমাবদ্ধ থাকা যাবে না। স্মার্ট সিটিজেন হওয়ার জন্য এই দুটি
          দক্ষতার প্রয়োজন ১) আইটি তথা প্রযুক্তিগত দক্ষতা ২) মাতৃভাষার পাশাপাশি
          অন্য আরও একটি ভাষায় দক্ষতা অর্জন। মুন আইটি আজ প্রযুক্তিগত দক্ষতা এবং
          ভাষা শিক্ষার ক্ষেত্রে একটি মাইলফলক স্পর্শ করতে যাচ্ছে। বর্তমান বিশ্বে
          আইটি এবং ভাষাগত দক্ষতা অর্জন না করলে উন্নয়নের মূলধারায় অংশগ্রহণ করা
          কঠিন। তাই, আমরা আমাদের শিক্ষার্থীদেরকে আইটি এবং ভাষাগত দক্ষতা অর্জনে
          উৎসাহিত করছি, যাতে বর্তমান বিশ্বের চ্যালেঞ্জ মোকাবিলা করে সফল হতে
          পারে।
        </p>

        <p className=" text-justify mb-7">
          প্রযুক্তির আলো ছড়িয়ে দেওয়ার লক্ষ্যে তথা দক্ষ জনশক্তি তৈরীতে ফেনীতে
          আমরাই প্রথম গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষামন্ত্রনালয়, কারিগরি
          শিক্ষা বোর্ড-BTEB ও বাংলাদেশ সরকারের জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA) কর্তৃক অনুমোদিত
          প্রতিষ্ঠান। মুন আইটি ২০০৫ সাল থেকে নানান বিষয়ে স্কিল ডেভেলপমেন্টের
          মাধ্যমে দক্ষ জনশক্তি তৈরিতে কাজ করে যাচ্ছে। বিগত প্রায় দুই দশকে আমরা
          অসংখ্য্য বেকার যুবক-যুবতির কর্মক্ষমের পাশাপাশি তৈরী করেছি অনেক
          উদ্যোক্তা ও ফ্রিল্যান্সার। আলহামদুলিল্লাহ বর্তমানে আমাদের অসংখ্য্য
          প্রশিক্ষনার্থী দক্ষ হয়ে দেশ-বিদেশে লোকাল ও আন্তর্জাতিক মার্কেটে কাজ
          করে নিজেকে প্রমাণ করার সুযোগ পাচ্ছে। আমরা আপনাদের দোয়া ও সহযোগিতা
          কামনা করি।
        </p>

        <div className="flex flex-col items-center lg:items-start">
          <p className="text-lg font-bold">ইউছুপ শাহীন</p>
          <p className="mb-3">চেয়ারম্যান- মুন আইটি।</p>

          <Image
            className="w-24 h-auto"
            src="/logo/logoWhite.png"
            alt="Moon IT Logo"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </div>
    </Container>
  );
};

export default Chairman;
