import { getCourses } from "@/data/course-list";
import { getHomeHero } from "@/data/home-hero";
import AffilietedBy from "../pages/home/affilieted-by/affilieted-by";
import Courses from "../pages/home/courses/courses";
import FreeSeminar from "../pages/home/free-seminar/free-seminar";
import HeroImageWrapper from "../pages/home/hero-image-wrapper/hero-image-wrapper";
import HeroSection from "../pages/home/hero-section/hero-section";
import Services from "../pages/home/services/services";
import AboutUs from "../shared/about-us/about-us";
import Logos from "../shared/logos/logos";
import Navbar from "../shared/navbar/navbar";

export default async function Home() {
  const [courses, hero] = await Promise.all([getCourses(), getHomeHero()]);

  return (
    <>
      <HeroImageWrapper>
        <Navbar />
        <HeroSection data={hero} />
        {/* <ServiceOverview /> */}
        <AffilietedBy />
      </HeroImageWrapper>

      <Courses courses={courses} />
      <Services />
      <AboutUs />
      <Logos />
      <FreeSeminar />
    </>
  );
}
