import type { ReactNode } from "react";
import Footer from "@/app/shared/footer/footer";
import TopBar from "@/app/shared/topbar/topbar";
import ConditionalNavbar from "../shared/navbar/conditional-navbar";

type PropsTypes = {
  children: ReactNode;
};

const Layout = ({ children }: PropsTypes) => {
  return (
    <div className="overflow-hidden">
      <TopBar />
      <ConditionalNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
