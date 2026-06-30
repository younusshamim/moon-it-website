import type { ReactNode } from "react";

type PropsTypes = {
  children: ReactNode;
};

const Layout = ({ children }: PropsTypes) => {
  return (
    <>
      <p>Dashboard Top</p>
      {children}
      <p>Dashboard Bottom</p>
    </>
  );
};

export default Layout;
