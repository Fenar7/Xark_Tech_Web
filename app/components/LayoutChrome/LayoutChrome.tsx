"use client";

import { usePathname } from "next/navigation";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutChromeProps = {
  children: React.ReactNode;
};

const LayoutChrome = ({ children }: LayoutChromeProps) => {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith("/studio");

  if (isStudioRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutChrome;
