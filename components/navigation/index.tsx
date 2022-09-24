import Image from "next/image";
import BigLogo from "../../public/big_logo.svg";
import BigDarkModeLogo from "../../public/big_dark_logo.svg";
import Link from "next/link";
import Toggler from "~/components/toggler";
import { useTheme } from "next-themes";

interface Links {
  title: string;
  url: string;
}

const LINKS: Links[] = [
  { title: "Apply", url: "apply" },
  { title: "Qala Fellows", url: "fellows" },
  { title: "Partner", url: "partner" },
  { title: "Hire", url: "hire" },
  { title: "Blog", url: "blog" },
  { title: "Shop", url: "shop" },
  { title: "About Us", url: "about" },
];
export default function Nav() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-between items-center px-[10.95rem] pt-10 pb-4 bg-light-bg/[.7] dark:bg-dark-bg/[.85]">
      <Link href={"/"} className="cursor-pointer">
        {theme === "light" ? (
          <Image src={BigLogo} alt="Qala Logo" />
        ) : (
          <Image src={BigDarkModeLogo} alt="Qala Logo" />
        )}
      </Link>
      <div className="flex items-center">
        <ul className="flex items-center">
          {LINKS.map((link, index) => (
            <li
              key={index}
              className="ml-6 text-base font-normal font-sans text-nav-blue dark:text-nav-white"
            >
              <Link href={`/${link.url}`}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Toggler />
      </div>
    </div>
  );
}
