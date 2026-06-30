import Image from "next/image";
import { FaArrowUpRightFromSquare, FaCircleCheck } from "react-icons/fa6";
import GradientText from "@/components/gradient-text";
import type { AffiliatedType } from "@/types/affiliated";

const AffiliationCard = ({ item }: { item: AffiliatedType }) => {
  const verifyHref = item.pdf ?? item.website;

  return (
    <div className="group relative flex items-start gap-4 rounded-card border border-muted bg-background p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-900">
      {/* Logo tile */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-card p-2">
        <Image
          className="h-auto w-full object-contain"
          sizes="100vw"
          width={0}
          height={0}
          src={item.icon}
          alt={item.title}
        />
      </div>

      <div className="space-y-1.5">
        <a href={item.website} target="_blank" rel="noopener noreferrer">
          <h3 className="text-sm font-bold text-primary lg:text-base">
            <GradientText>{item.title}</GradientText>
          </h3>
        </a>

        <p className="flex items-start gap-1.5 text-sm font-medium text-foreground">
          <FaCircleCheck className="mt-1 shrink-0 text-primary-lighter" />
          <span>{item.benefit ?? item.description}</span>
        </p>

        {verifyHref && (
          <a
            href={verifyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            title={item.affiliatedNo}
          >
            <span>অনুমোদন যাচাই করুন</span>
            <FaArrowUpRightFromSquare className="text-[10px]" />
          </a>
        )}
      </div>
    </div>
  );
};

export default AffiliationCard;
