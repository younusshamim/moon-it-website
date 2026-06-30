import { cn } from "@/lib/utils";
import type { OptionType } from "@/types/option-type";

type PropsType = {
  tabOptions: OptionType[];
  selected: string | number;
  setSelected: (item: string | number) => void;
  className?: string;
};

const Tabs = ({ tabOptions, selected, setSelected, className }: PropsType) => {
  return (
    <div
      className={cn(
        "flex gap-5 xl:gap-8 border-b-2 border-b-muted mb-7 overflow-x-auto",
        className,
      )}
    >
      {tabOptions.map((tab, index) => {
        return (
          <p
            key={index}
            className={cn(
              "text-foreground font-semibold cursor-pointer pb-2 px-2 min-w-fit",
              {
                "text-primary font-bold border-b-2 border-primary":
                  selected === tab.value,
              },
            )}
            onClick={() => setSelected(tab.value)}
          >
            {tab.label}
          </p>
        );
      })}
    </div>
  );
};

export default Tabs;
