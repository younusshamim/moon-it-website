import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputClassName?: string;
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, inputClassName, label, error, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1", className)}>
        <label className="text-sm">{label}</label>

        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-muted bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-card",
            inputClassName,
          )}
          ref={ref}
          {...props}
        />

        {error && <p className="text-[13px] ml-1 text-red-500">{error}</p>}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
