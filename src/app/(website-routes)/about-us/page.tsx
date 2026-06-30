import type { Metadata } from "next";
import Mentors from "@/app/pages/about-us/mentors/mentors";
import AboutUsComp from "@/app/shared/about-us/about-us";
import Logos from "@/app/shared/logos/logos";
import PageHeading from "@/components/page-heading";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে",
};

const AboutUs = () => {
  return (
    <>
      <PageHeading label="আমাদের সম্পর্কে" />
      <AboutUsComp />
      <Logos />
      {/* <BTEBCertified /> */}
      <Mentors />
      {/* <Gallery /> */}
    </>
  );
};

export default AboutUs;
