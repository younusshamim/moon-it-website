import type { Metadata } from "next";
import PageHeader from "@/app/pages/free-seminar/page-header/page-header";
import SeminarContent from "@/app/pages/free-seminar/seminar-content/seminar-content";
import SeminarImageWrap from "@/app/pages/free-seminar/seminar-image-wrap/seminar-image-wrap";
import Container from "@/components/container";
import LineShapes from "@/components/shapes/line-shapes";

export const metadata: Metadata = {
  title: "ফ্রি সেমিনার",
  description:
    "সেমিনারে অংশ নিয়ে ইন্ডাস্ট্রি এক্সপার্টদের থেকে কোর্স কারিকুলাম, মডিউল ও ক্যারিয়ার সম্পর্কে জানার সুযোগ পাবেন। এক্সপার্ট কাউন্সেলরের সাথে কথা বলে সহজেই উপযুক্ত কোর্স বেছে নিতে এবং সব প্রশ্নের উত্তর পেতে পারবেন।",
};

const FreeSeminar = () => {
  return (
    <>
      <PageHeader />

      <Container className="py-10 flex flex-col lg:flex-row gap-10 items-center relative">
        <LineShapes />
        <SeminarContent />
        <SeminarImageWrap />
      </Container>
    </>
  );
};

export default FreeSeminar;
