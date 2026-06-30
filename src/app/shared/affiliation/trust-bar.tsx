import Image from "next/image";
import affiliatedList from "@/data/affiliated-list";
import { cn } from "@/lib/utils";

const TrustBar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center gap-5", className)}>
      <p className="text-center text-sm font-semibold text-muted-foreground">
        বাংলাদেশ সরকার অনুমোদিত প্রতিষ্ঠান।
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
        {affiliatedList.map((item) => (
          <a
            key={item.title}
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            title={item.shortName ?? item.title}
          >
            <Image
              className="h-12 w-auto object-contain transition-transform duration-500 hover:scale-110 lg:h-14"
              sizes="100vw"
              width={0}
              height={0}
              src={item.icon}
              alt={item.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
