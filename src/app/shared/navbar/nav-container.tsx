"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import MobileMenu from "./mobile-menu";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Container from "@/components/container";
import PrimaryButton from "@/components/primary-button";
import navItems from "@/data/nav-items";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "./theme-switcher";

type PropsType = {
  logoWidth?: number;
  mobileNavClassNames?: string;
};

const NavContainer = ({ logoWidth, mobileNavClassNames }: PropsType) => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();

  const navbarToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleNavigate = (href: string) => {
    // e.preventDefault()
    setNavOpen(false);
    router.push(href);
  };

  return (
    <>
      <Container className="h-full flex items-center justify-between ">
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="Moon IT Logo"
            width={logoWidth}
            height="60"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-2 ">
          {navItems.map((item, index) => (
            <Link
              href={item.link}
              className={cn(
                "px-3 py-2 rounded-md cursor-pointer font-bold hover:bg-foreground-dark dark:hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out",
                {
                  "bg-foreground-dark text-white dark:bg-gray-800 ":
                    pathname === item.link,
                },
              )}
              key={item.name + index}
            >
              {item.name}
            </Link>
          ))}

          <ThemeSwitcher />

          <Link href="/free-seminar">
            <PrimaryButton className="px-4 h-[40px]">ফ্রি সেমিনার</PrimaryButton>
          </Link>
        </div>

        {/* ---- mobile menu ----  */}
        <div className="flex items-center gap-2 lg:hidden z-50">
          <ThemeSwitcher />
          {navOpen ? (
            <IoCloseSharp className="text-[26px]" onClick={navbarToggle} />
          ) : (
            <FiMenu className="text-[26px]" onClick={navbarToggle} />
          )}
        </div>
      </Container>

      {navOpen && (
        <Container
          className={cn("space-y-4 mt-5 py-5 pl-5", mobileNavClassNames)}
        >
          {navItems.map((item, index) => (
            <div
              key={item.name + index}
              onClick={() => handleNavigate(item.link)}
              className={cn("", {
                "text-primary-lighter": pathname === item.link,
              })}
            >
              <span className="font-semibold ">{item.name}</span>
            </div>
          ))}

          <div>
            <PrimaryButton
              size="sm"
              className="px-5"
              onClick={() => handleNavigate("/free-seminar")}
            >
              ফ্রি সেমিনার
            </PrimaryButton>
          </div>
        </Container>
      )}
    </>
  );
};

export default NavContainer;
