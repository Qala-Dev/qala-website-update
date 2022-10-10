import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
export default function P({ children, className }: Props) {
  return (
    <p
      className={`text-sm lg:text-lg text-nav-blue dark:text-primary-1 ${className}`}
    >
      {children}
    </p>
  );
}
