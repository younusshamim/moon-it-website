"use client";
import Image from "next/image";
import FadeUpScroll from "@/components/animations/FadeUpScroll";
import SpringyScroll from "@/components/animations/SpringyScroll";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerAnimation";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import affiliatedList from "@/data/affiliated-list";

const AffilietedBy = () => {
  return (
    <div className="pt-10 pb-14">
      <Container className="py-10 lg:p-10 flex flex-col lg:flex-row items-center lg:gap-10 bg-card xl:rounded-card shadow-lg shadow-gray-200 dark:shadow-gray-900 lg:border border-muted ">
        <div className="w-full lg:mt-0 lg:w-1/4 lg:pl-10 flex flex-col items-center lg:items-start">
          <SpringyScroll delay={1}>
            <Image
              className="w-20 h-auto mb-3"
              sizes="100vw"
              width={0}
              height={0}
              src={"/icons/001-stamp.png"}
              alt={"BD_Government_Sea"}
            />
          </SpringyScroll>

          <h2 className="text-4xl text-foreground-dark font-extrabold mb-[6px]">
            অনুমোদন সমূহ
          </h2>
          <p className="font-semibold mb-10">মুন আইটির সরকারি অনুমোদন সমূহ</p>
        </div>

        <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:pr-10 ">
          {affiliatedList.map((item, index) => (
            <div
              key={item.title + index}
              className="flex items-start gap-2 lg:gap-4 z-40 bg-background p-5 rounded-card hover:scale-[1.02] transition-all duration-500 "
            >
              <Image
                className="w-16 h-auto"
                sizes="100vw"
                width={0}
                height={0}
                src={item.icon}
                alt={item.title}
              />

              <div className="space-y-1">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="font-bold lg:w-2/4 text-sm lg:text-base text-primary cursor-pointer">
                    <GradientText>{item.title}</GradientText>
                  </h2>
                </a>

                <p className="text-gray-700">{item.description}</p>
                <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                  <p className="text-secondary">[{item.affiliatedNo}]</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AffilietedBy;
