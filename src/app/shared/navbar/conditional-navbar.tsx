"use client";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const ConditionalNavbar = () => {
  const pathname = usePathname();
  return pathname !== "/" && <Navbar />;
};

export default ConditionalNavbar;
