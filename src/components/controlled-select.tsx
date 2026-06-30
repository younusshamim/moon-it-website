"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Controller } from "react-hook-form";
import type { OptionType } from "@/types/option-type";
import Select from "./select";
import type { Select as ShadcnSelect } from "./ui/select";

type SelectProps = React.ComponentProps<typeof ShadcnSelect>;

type PropsTypes = {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  options: OptionType[];
  className?: string;
  inputClassName?: string;
  error?: string;
  isSetParams?: boolean;
} & SelectProps;

const ControlledSelect = ({
  control,
  name,
  options,
  label,
  placeholder,
  error,
  isSetParams,
  className,
  inputClassName,
  ...props
}: PropsTypes) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleValueChange = (
    selected: any,
    onChange: (value: string) => void,
  ) => {
    onChange(!isNaN(Number(selected)) ? Number(selected) : selected);
    if (isSetParams) {
      const params = new URLSearchParams(searchParams);
      params.set(name, selected);
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  };

  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          return (
            <Select
              value={options.find((option) => option.value == value)?.value}
              onValueChange={(selected) =>
                handleValueChange(selected, onChange)
              }
              label={label}
              options={options}
              placeholder={placeholder}
              error={error}
              inputClassName={inputClassName}
              {...props}
            />
          );
        }}
      />
    </div>
  );
};

export default ControlledSelect;
