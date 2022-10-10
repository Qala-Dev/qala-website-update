import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
export default function SectionTitle({ children, className }: Props) {
  return (
    <h2
      className={`font-extrabold text-xl md:text-[2.5rem] text-nav-blue dark:text-h1-grey ${className}`}
    >
      {children}
    </h2>
  );
}
