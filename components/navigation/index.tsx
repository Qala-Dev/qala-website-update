import Image from "next/image";
import BigLogo from "../../public/big_logo.svg";
import BigDarkModeLogo from "../../public/big_dark_logo.svg";
import Link from "next/link";
import Toggler from "~/components/toggler";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../resuable/button";

interface Links {
  title: string;
  url: string;
}

const LINKS: Links[] = [
  { title: "Apply", url: "apply" },
  { title: "Qala Fellows", url: "fellows" },
  { title: "Partner", url: "partner" },
  { title: "Hire", url: "hire" },
  { title: "Blog", url: "https://blog.qala.dev/" },
  { title: "Shop", url: "https://merch.printivo.com/store/qala" },
  { title: "About Us", url: "about" },
];
export default function Nav() {
  const { theme } = useTheme();
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  const openNav = () => {
    setIsActive(true);
    document.querySelector("body")?.classList.toggle("no-scroll");
  };

  const closeNav = () => {
    setIsActive(false);
    document.querySelector("body")?.classList.remove("no-scroll");
  };

  return (
    <div
      className={` bg-light-bg/[.7] dark:bg-dark-bg/[.85] top-0 backdrop-blur z-50 ${
        isActive ? "h-screen" : "h-auto sticky"
      }`}
    >
      <div className="flex justify-between items-center px-4 lg:px-[10.95rem] pt-10 pb-4">
        <Link href={"/"} className="cursor-pointer">
          {theme === "light" ? (
            <Image src={BigLogo} alt="Qala Logo" className=" cursor-pointer" />
          ) : (
            <Image
              src={BigDarkModeLogo}
              alt="Qala Logo"
              className="cursor-pointer"
            />
          )}
        </Link>
        <div className="items-center hidden lg:flex">
          <ul className="flex items-center">
            {LINKS.map((link, index) => (
              <li
                key={index}
                className={`${
                  router.pathname === `/${link.url}`
                    ? "font-semibold text-blue-main border-b-2 border-blue-main"
                    : "text-nav-blue dark:text-nav-white font-normal"
                } ml-6 text-base font-sans leading-[21.79px]`}
              >
                <Link href={`${link.url}`}>
                  <a>{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <Toggler />
        </div>
        <div className="flex justify-center items-center lg:hidden">
          {isActive ? (
            <div className="flex items-center">
              <Toggler />
              <img
                src="./cancel.svg"
                className="ml-7 dark:hidden"
                onClick={closeNav}
              />
              <img
                src="./cancel_dark.svg"
                className="ml-7 hidden dark:block"
                onClick={closeNav}
              />
            </div>
          ) : (
            <div>
              <img
                src="./hamburger.svg"
                onClick={openNav}
                className="dark:hidden"
              />
              <img
                src="./dark_hamburger.svg"
                onClick={openNav}
                className="hidden dark:block"
              />
            </div>
          )}
        </div>
      </div>
      {isActive && (
        <div className="flex flex-col items-center w-full h-full mt-16">
          <ul className="flex flex-col items-center w-full">
            {LINKS.map((link, index) => (
              <li
                className={`text-xl text-nav-blue dark:text-light-bg w-[10.2rem] text-center border-t border-grey-border dark:border-primary-9 py-4 ${
                  index === LINKS.length - 1 ? "border-b" : ""
                }`}
                onClick={closeNav}
                key={index}
              >
                <Link href={link.url} className="text-xl">
                  <a>{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center w-full mt-16">
            <div className="w-[10.25rem]">
              <Button>Join Qala</Button>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
