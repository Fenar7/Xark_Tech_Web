import type { Metadata } from "next";
import "./globals.scss";
import LayoutChrome from "./components/LayoutChrome/LayoutChrome";

export const metadata: Metadata = {
  title: "Xark Tech",
  description: "Xark Tech Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LayoutChrome>{children}</LayoutChrome>
      </body>
    </html>
  );
}
