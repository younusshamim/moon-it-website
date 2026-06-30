import { motion, useInView } from "framer-motion";
import React from "react";

interface ScrollRevealTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const ScrollRevealText = ({
  text,
  delay = 0,
  className = "",
}: ScrollRevealTextProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: delay + index * 0.03 }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default ScrollRevealText;
