import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExploreEpic | Summer Camp",
  description: "Don't just sit in your home this summer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-50  w-full  backdrop-blur-md">
        <Navbar/>
        </div>
        <main className="relative overflow-hidden bg-gray-100">
        {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
