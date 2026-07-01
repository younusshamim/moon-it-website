"use client";

import { motion } from "framer-motion";
import { CompassIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import { cn } from "@/lib/utils";

const NotFoundContent = ({ className }: { className?: string }) => {
  return (
    <div className={cn("text-center px-4", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-[6rem] font-extrabold leading-none sm:text-[8rem]">
          <GradientText>404</GradientText>
        </p>
        <h1 className="mt-4 text-2xl font-bold text-foreground-dark sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/">
            <PrimaryButton iconLeft={<HomeIcon className="size-4" />}>
              Go to Homepage
            </PrimaryButton>
          </Link>
          <Link href="/courses">
            <PrimaryButton
              variant="outline"
              iconLeft={<CompassIcon className="size-4" />}
            >
              Browse Courses
            </PrimaryButton>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundContent;
