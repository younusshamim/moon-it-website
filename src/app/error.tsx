"use client";

import { AlertTriangleIcon, HomeIcon, RotateCcwIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import PrimaryButton from "@/components/primary-button";

const ErrorPage = ({
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
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
      <div className="flex size-20 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangleIcon className="size-10 text-destructive" />
      </div>
      <h1 className="mt-6 text-2xl font-bold text-foreground-dark sm:text-3xl">
        Something Went Wrong
      </h1>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        An unexpected error occurred. Please try again, or head back to the
        homepage.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <PrimaryButton
          iconLeft={<RotateCcwIcon className="size-4" />}
          onClick={reset}
        >
          Try Again
        </PrimaryButton>
        <Link href="/">
          <PrimaryButton
            variant="outline"
            iconLeft={<HomeIcon className="size-4" />}
          >
            Go to Homepage
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
