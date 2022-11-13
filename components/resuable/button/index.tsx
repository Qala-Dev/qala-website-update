import Link from "next/link";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
  href?: string;
  newTab?: boolean;
}

export default function Button({ children, href, newTab }: props) {
  const className =
    "py-[0.875rem] lg:py-[1.125rem] bg-nav-blue rounded w-full text-lg text-nav-white dark:bg-nav-white dark:text-nav-blue";
  return (
    <>
      {href ? (
        <a href={href}>
          <button className={className}>{children}</button>
        </a>
      ) : (
        <button className={className}>{children}</button>
      )}
    </>
  );
}
