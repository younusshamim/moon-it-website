"use client";
import Image from "next/image";
import SpringyScroll from "@/components/animations/SpringyScroll";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerAnimation";
import Container from "@/components/container";
import affiliatedList from "@/data/affiliated-list";
import AffiliationCard from "./affiliation-card";

const AffiliationSection = () => {
  return (
    <div className="pt-10 pb-14">
      <Container className="flex flex-col items-center gap-10 bg-card py-10 shadow-lg shadow-gray-200 lg:flex-row lg:border lg:p-10 border-muted dark:shadow-gray-900 xl:rounded-card">
        {/* Header — leads with the government-recognized certificate */}
        <div className="flex w-full flex-col items-center lg:mt-0 lg:w-2/5 lg:items-start lg:pl-10">
          <SpringyScroll delay={1}>
            <Image
              className="mb-3 h-auto w-20"
              sizes="100vw"
              width={0}
              height={0}
              src={"/icons/001-stamp.png"}
              alt={"BD_Government_Sea"}
            />
          </SpringyScroll>

          <h2 className="mb-2 text-3xl font-extrabold leading-tight text-foreground-dark lg:text-4xl">
            
            <span className="inline-block bg-gradient-to-r from-[#0E8A57] via-[#006A4E] to-[#02402F] bg-clip-text text-transparent">
              বাংলাদেশ সরকার 
            </span>{" "}
           অনুমোদিত প্রতিষ্ঠান
          </h2>

          <p className="text-sm font-medium text-muted-foreground">
            মুন আইটি বাংলাদেশ সরকার অনুমোদিত এবং সরকার-নির্ধারিত নীতিমালা অনুযায়ী পরিচালিত
            একটি প্রশিক্ষণ প্রতিষ্ঠান।
          </p>
        </div>

        {/* Affiliation cards */}
        <StaggerContainer className="grid w-full grid-cols-1 gap-5 lg:w-3/5 lg:grid-cols-2 lg:pr-10">
          {affiliatedList.map((item) => (
            <StaggerItem key={item.title}>
              <AffiliationCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </div>
  );
};

export default AffiliationSection;
