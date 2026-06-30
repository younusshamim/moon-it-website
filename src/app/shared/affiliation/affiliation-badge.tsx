import { FaShieldHalved } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const AffiliationBadge = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-xl border border-primary/20 bg-primary/5 px-3.5 py-2.5",
        className,
      )}
    >
      <FaShieldHalved className="shrink-0 text-lg text-primary" />
      <p className="text-xs font-semibold leading-snug text-foreground">
        এই কোর্সের সার্টিফিকেট <span className="text-primary">সরকার স্বীকৃত</span> ও
        জাতীয়ভাবে গ্রহণযোগ্য
      </p>
    </div>
  );
};

export default AffiliationBadge;
