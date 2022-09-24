import { ReactNode } from "react";
import Nav from "~/components/navigation";
import Footer from "~/components/footer";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
