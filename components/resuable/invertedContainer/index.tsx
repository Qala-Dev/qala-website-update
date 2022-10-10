import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className: string;
}
export default function InvertedContainer({ children, className }: Props) {
  return (
    <motion.div
      className={`w-full overflow-hidden relative before:content-[''] before:z-10 before:absolute before:h-32 before:w-full before:left-0 before:-top-16 before:rounded-[50%] after:content-[''] after:absolute after:h-32 after:w-full after:left-0 after:-bottom-16 after:rounded-[50%] ${className}`}
    >
      {children}
    </motion.div>
  );
}
