import type { ReactNode } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface FadeUpScrollProps
  extends React.ComponentProps<typeof ScrollAnimation> {
  children: ReactNode;
}

const FadeUpScroll = ({ children, ...props }: FadeUpScrollProps) => {
  return (
    <ScrollAnimation
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
};

export default FadeUpScroll;
