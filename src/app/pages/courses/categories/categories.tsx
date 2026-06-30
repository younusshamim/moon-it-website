import Image from "next/image";
import Container from "@/components/container";
import {categoryList} from "@/data/categories";
import scrollToSection from "@/lib/utils/scrollToSection";

type PropsType = {
  courseRef: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
};

const Categories = ({ courseRef }: PropsType) => {
  return (
    <Container className="py-10">
      <h1 className="text-lg justify-center mb-10 lg:mb-5">
        প্রতিটি কোর্সের সিলেবাস ব্যাসিক টু এডভান্সড লেভেল পর্যন্ত এমনভাবে সাজানো হয়েছে, যাতে
        আপনি কোর্স শেষে প্রতিটি টপিকে কাজ করার আত্মবিশ্বাস পান।
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 overflow-y-auto">
        {categoryList.map((category, index) => (
          <div
            key={category.label + index}
            className="bg-background2 dark:bg-card shadow-sm p-5 lg:p-8 rounded-card text-center flex items-center justify-center cursor-pointer"
            onClick={() =>
              scrollToSection({ ref: courseRef, id: category.name })
            }
          >
            <div className="hover:scale-105 duration-500">
              <Image
                src={category.icon}
                height={0}
                width={0}
                sizes="100vw"
                className="w-[50px] h-auto object-contain mx-auto mb-2"
                alt={category.label}
              />
              <p className="text-lg font-semibold">{category.label}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
