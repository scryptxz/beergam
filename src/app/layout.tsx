import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar-mobile";

export const metadata: Metadata = {
  title: "Beergam",
  icons: { icon: [{ url: "favicon.ico" }] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics />
      <html lang="en">
        <body className="min-h-screen bg-gradient-to-b from-white to-blue-100">
          <Navbar />
          <NavbarMobile />
          {children}
        </body>
      </html>
    </>
  );
}
