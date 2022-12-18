import { ReactNode } from "react";
import { motion } from "framer-motion";

interface props {
  children: ReactNode;
  href?: string;
  newTab?: boolean;
}

export default function Button({ children, href, newTab }: props) {
  const className =
    "py-[0.875rem] lg:py-[1.125rem] bg-nav-blue rounded w-full text-lg text-nav-white dark:bg-nav-white dark:text-nav-blue hover:dark:text-nav-white";
  return (
    <>
      {href ? (
        <a href={href}>
          <motion.button
            whileHover={{ backgroundColor: "#4665C0" }}
            className={className}
          >
            {children}
          </motion.button>
        </a>
      ) : (
        <motion.button
          whileHover={{ backgroundColor: "#4665C0" }}
          className={className}
        >
          {children}
        </motion.button>
      )}
    </>
  );
}
