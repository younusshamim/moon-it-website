import Image from "next/image";
import React from "react";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";

const BTEBCertified = () => {
  return (
    <div>
      <Container className="py-20 flex gap-20 items-center">
        <div className="w-1/2">
          <Image
            className="w-full h-[380px] object-cover object-center rounded-card shadow-lg shadow-slate-400"
            sizes="100vw"
            width={0}
            height={0}
            src="/illustration/certification.jpeg"
            alt="Moon IT Seminar"
          />
        </div>

        <div className="w-1/2">
          <h2 className="text-4xl text-foreground-dark font-extrabold mb-4 leading-snug">
            ফেনীর অন্যতম BTEB সার্টিফাইড আইটি ট্রেনিং ইনস্টিটিউট।
          </h2>

          <p className=" text-justify">
            সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স
            বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা
            বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে
            উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার
            সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি
            সহজেই উপযুক্ত কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত এক্সপার্ট
            কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে
            পারেন। সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত
            কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন।
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BTEBCertified;
