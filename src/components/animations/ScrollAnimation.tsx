"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: ReactNode;
  animate?: HTMLMotionProps<"div">["whileInView"];
}

const ScrollAnimation = ({
  children,
  viewport = { once: true },
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.5 },
  ...props
}: ScrollAnimationProps) => {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
