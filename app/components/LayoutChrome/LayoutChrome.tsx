"use client";

import { usePathname } from "next/navigation";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import GlobalHoverFx from "../ui/GlobalHoverFx/GlobalHoverFx";

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
      <GlobalHoverFx />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutChrome;
