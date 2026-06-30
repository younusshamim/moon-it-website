import type { ReactNode } from "react";

type PropsTypes = {
  children: ReactNode;
};

const GradientText = ({ children }: PropsTypes) => {
  return (
    <span className="bg-gradient-to-r from-primary to-primary-lighter inline-block text-transparent bg-clip-text-new">
      {children}
    </span>
  );
};

export default GradientText;
