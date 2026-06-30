import type { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const NumSpan = ({ children }: PropsType) => {
  return <span className="font-sans tracking-tighter">{children}</span>;
};

export default NumSpan;
