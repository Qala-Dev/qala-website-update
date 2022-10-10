import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export default function Button({ children }: props) {
  return (
    <button className="py-[0.875rem] lg:py-[1.125rem] bg-nav-blue rounded w-full text-lg text-nav-white dark:bg-nav-white dark:text-nav-blue">
      {children}
    </button>
  );
}
