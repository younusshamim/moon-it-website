"use client";
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdAccessTime, MdEmail } from "react-icons/md";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerAnimation";
import Container from "@/components/container";
import LineShapes from "@/components/shapes/line-shapes";

const Address = () => {
  return (
    <Container className="pt-10 pb-20">
      <h2 className="font-semibold justify-center text-center xl:text-left mb-5 xl:mb-0">
        যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে পারেন। তাছাড়া হটলাইন
        নম্বরে কল করে জেনে নিতে পারেন ট্রেইনিং সংক্রান্ত যেকোনো তথ্য। এছাড়াও উল্লেখিত
        মেইলে কিংবা ফেসবুক ম্যাসেঞ্জারেও নক দিতে পারেন।
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 relative">
        <LineShapes />

        <div className="w-full md:w-3/5 z-40">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <StaggerItem className="hover:scale-105 duration-500 bg-red-50 dark:bg-card p-5 rounded-card flex flex-col justify-center shadow-sm">
              <p className="font-bold text-lg">ঠিকানা-</p>
              <div className="flex gap-3 items-center mb-3">
                <IoLocationSharp className="text-2xl" />
                <h2 className="w-full">
                  শরিফা প্লাজা ৩য় তলা (জনতা ব্যাংকের উপরে), রেল গেইট, ফেনী সদর, ফেনী।
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem className="hover:scale-105 duration-500 bg-amber-50 dark:bg-card p-5 rounded-card flex flex-col justify-center shadow-sm">
              <p className="font-bold text-lg">অফিস ভিজিটের সময়-</p>
              <div className="flex gap-3 items-center mb-3">
                <MdAccessTime className="text-2xl" />
                <p>
                  শনিবার - বৃহস্পতিবার <br /> সকাল ৯ টা থেকে রাত ৮ টা
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="hover:scale-105 duration-500 bg-purple-50 dark:bg-card p-5 rounded-card flex flex-col justify-center shadow-sm">
              <p className="font-bold text-lg">ফোন নাম্বার-</p>
              <div className="flex gap-3 items-center mb-3">
                <IoIosCall className="text-2xl" />
                <div>
                  <h2>01785-882381</h2>
                  <h2>01820-008479</h2>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem className="hover:scale-105 duration-500 bg-green-50 dark:bg-card p-5 rounded-card flex flex-col justify-center shadow-sm">
              <p className="font-bold text-lg">ই-মেইল-</p>
              <div className="flex gap-3 items-center mb-3">
                <MdEmail className="text-2xl" />
                <p>moon69032@gmail.com</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <div className="w-full md:w-2/5 z-40">
          <Image
            className="w-full h-auto  hover:scale-[1.02] transition-all duration-500"
            sizes="100vw"
            src="/illustration/location (2).png"
            width={0}
            height={0}
            alt="Address illustration"
          />
        </div>
      </div>
    </Container>
  );
};

export default Address;
