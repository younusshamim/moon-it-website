"use client";

import { AlertOctagonIcon, RotateCcwIcon } from "lucide-react";
import { useEffect } from "react";
import { HindSiliguri } from "@/lib/fonts/fonts";
import "./globals.css";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className={`${HindSiliguri.className} font-medium bg-background`}>
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
          <div className="flex size-20 items-center justify-center rounded-full bg-destructive/10">
            <AlertOctagonIcon className="size-10 text-destructive" />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-foreground-dark sm:text-3xl">
            Application Error
          </h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Something went critically wrong. Please try again or refresh the
            page.
          </p>

          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex h-[45px] items-center justify-center gap-2 rounded-btn bg-gradient-to-r from-primary-lighter to-primary px-6 font-semibold text-primary-foreground shadow-lg active:scale-[0.97]"
          >
            <RotateCcwIcon className="size-4" />
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
