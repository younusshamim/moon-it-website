import type * as React from "react";
import { cn } from "@/lib/utils";
import type { OptionType } from "@/types/option-type";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from "./ui/select";

type SelectProps = React.ComponentProps<typeof ShadcnSelect>;
interface PropsTypes extends React.SelectHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  options: OptionType[];
  className?: string;
  inputClassName?: string;
  error?: string;
}

const Select = ({
  label,
  placeholder = "",
  options,
  inputClassName,
  error,
  ...props
}: PropsTypes & SelectProps) => {
  return (
    <div className={cn("flex flex-col gap-1")}>
      <label className="text-sm">{label}</label>

      <ShadcnSelect {...props}>
        <SelectTrigger
          className={cn(
            "dark:bg-card border-muted px-2 xl:p-3",
            inputClassName,
            { "border-2 border-red-500": error },
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent className="border-muted dark:bg-gray-800 dark:text-white">
          <SelectGroup>
            {options.map((item, index) => (
              <SelectItem value={item.value} key={index}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </ShadcnSelect>

      {error && <p className="text-[13px] ml-1 text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
