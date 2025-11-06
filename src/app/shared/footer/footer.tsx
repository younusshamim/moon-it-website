import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoIosCall, IoLogoYoutube } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-card ">
      <Container className="pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-0 place-items-center">
          {/* social and logo  */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              className="w-36 h-auto object-contain mb-5"
              src="/logo/logo.png"
              alt="Moon IT Logo"
              width="0"
              height="0"
              sizes="100vw"
            />

            <p className="font-bold mb-2">কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
            <div className="flex gap-3 text-3xl">
              <a
                href="https://www.facebook.com/moon69032"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="cursor-pointer " />
              </a>

              <a
                href="https://www.youtube.com/@MoonITFeni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube className="cursor-pointer " />
              </a>

              {/* <FaInstagramSquare className="cursor-pointer " /> */}
              <FaLinkedin className="cursor-pointer " />
            </div>
          </div>

          {/* contact and address  */}
          <div>
            <h3 className="font-bold text-xl mb-2">যোগাযোগ-</h3>

            <div className="flex gap-3 items-center mb-3">
              <IoLocationSharp className="text-2xl" />
              <p>
               শরিফা প্লাজা ৩য় তলা (জনতা ব্যাংকের উপরে), রেল গেইট, ফেনী সদর, ফেনী।
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <IoIosCall className="text-2xl" />
              <p className="text-lg">01785-882381, 01820-008479</p>
            </div>
          </div>

          {/* quick links */}
          <div className="hidden lg:block">
            <h3 className="font-bold text-xl mb-2">কুইক লিংক-</h3>
            <div className="flex flex-col gap-1">
              <p className="cursor-pointer">
                <Link href="/free-seminar">জয়েন ফ্রি সেমিনার</Link>
              </p>
              <p className="cursor-pointer">
                <Link href="/courses">সব কোর্স</Link>
              </p>
              <p className="cursor-pointer">
                <Link href="/about-us">আমাদের সম্পর্কে</Link>
              </p>
              <p className="cursor-pointer">
                <Link href="/contact">যোগাযোগ</Link>
              </p>
            </div>
          </div>

          {/* popular courses  */}
          <div className="hidden lg:block">
            <h3 className="font-bold text-xl mb-2">জনপ্রিয় কোর্স সমূহ-</h3>
            <div className="flex flex-col gap-1">
              <p className="cursor-pointer">প্রফেশনাল গ্রাফিক ডিজাইন</p>
              <p className="cursor-pointer">ডিজিটাল মার্কেটিং</p>
              <p className="cursor-pointer">
                ফাইন আর্টস (<span className="font-sans">১</span> বছর মেয়াদী)
              </p>
              <p className="cursor-pointer">
                কম্পিউটার টেকনোলজি (<span className="font-sans">১</span> বছর
                মেয়াদী)
              </p>
            </div>
          </div>
        </div>

        <hr className="border border-muted my-10" />

        <p className="text-center">
          কপিরাইট ©{new Date().getFullYear()} মুন আইটি ট্রেইনিং ইনস্টিটিউট।
          সর্বস্বত্ব সংরক্ষিত।
        </p>
      </Container>
    </div>
  );
};

export default Footer;
