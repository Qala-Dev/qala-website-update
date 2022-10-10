import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
export default function H1({ children, className }: Props) {
  return (
    <h1
      className={`font-extrabold text-[5rem] text-center text-nav-blue dark:text-h1-grey ${className}`}
    >
      {children}
    </h1>
  );
}
