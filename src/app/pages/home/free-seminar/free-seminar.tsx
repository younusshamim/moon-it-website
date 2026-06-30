import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Container from "@/components/container";
import PrimaryButton from "@/components/primary-button";
import { seminarImage } from "@/data/focused-images";

const FreeSeminar = () => {
  return (
    <div className="bg-primary dark:bg-background2">
      <Container className="py-20 flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2">
          <Image
            className="w-full h-[350px] object-cover object-center rounded-card shadow-lg  hover:scale-[1.02] transition-all duration-500"
            sizes="100vw"
            width={0}
            height={0}
            src={seminarImage}
            alt="Moon IT Seminar"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-extrabold mb-3 text-slate-100">
            অংশ নিন ফ্রি সেমিনারে
          </h2>

          <p className="text-justify text-slate-200 text-[17px]">
            সেমিনারে অংশগ্রহনের মাধ্যমে কোর্স কারিকুলাম, কোর্স মডিউল ও ক্যারিয়ার নিয়ে
            বিস্তারিত জানার সুযোগ থাকবে ইন্ডাস্ট্রি এক্সপার্টদের থেকে। উপস্থিত এক্সপার্ট
            কাউন্সেলরের সাথে কথা বলে সহজেই উপযুক্ত কোর্স বেছে নিতে পারেন এবং নিজের অজানা
            সব প্রশ্নের উত্তর নিতে পারবেন সহজেই।
          </p>

          <Link href="/free-seminar">
            <PrimaryButton
              size="lg"
              className="mt-7 border-white text-white"
              iconRight={<FaArrowRight className="text-white" />}
            >
              জয়েন ফ্রি সেমিনার
            </PrimaryButton>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FreeSeminar;
