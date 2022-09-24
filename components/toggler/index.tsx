import Moon from "../../public/moon.svg";
import Image from "next/image";
import Sun from "../../public/sun.svg";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Toggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button
      className="cursor-pointer flex items-center justify-center ml-6"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Image src={Moon} alt="Moon" />
      ) : (
        <Image src={Sun} alt="Sun" />
      )}
    </button>
  );
}
