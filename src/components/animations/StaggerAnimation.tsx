"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: ReactNode;
  delayChildren?: number;
  staggerDelay?: number;
  className?: string;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerContainer = ({
  children,
  delayChildren = 0.3,
  staggerDelay = 0.1,
  className,
}: StaggerContainerProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      key={Math.random()}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className }: StaggerItemProps) => {
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};
