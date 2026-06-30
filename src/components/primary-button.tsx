"use client";

import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PropsTypes = {
  children: ReactNode;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  size?: "sm" | "lg";
  variant?: "outline";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const PrimaryButton = ({
  children,
  className,
  iconLeft,
  iconRight,
  size,
  variant,
  ...rest
}: PropsTypes) => {
  return (
    <button
      className={cn(
        "enforced h-[45px] px-6 flex gap-2 items-center justify-center font-semibold shadow-lg rounded-btn text-primary-foreground  bg-gradient-to-r from-primary-lighter to-primary active:scale-[0.97]",
        className,
        {
          "h-[35px] text-sm": size === "sm",
          "h-[50px] px-6 lg:px-8 text-base xl:text-lg": size == "lg",
          "border border-primary-lighter bg-gradient-to-r from-primary to-primary-lighter text-transparent bg-clip-text":
            variant === "outline",
        },
      )}
      {...rest}
    >
      {iconLeft && <div>{iconLeft}</div>}
      <p>{children}</p>
      {iconRight && <div>{iconRight}</div>}
    </button>
  );
};

export default PrimaryButton;
