import { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-white to-blue-100">
        {children}
      </body>
    </html>
  );
}
