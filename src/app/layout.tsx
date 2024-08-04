import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { SidebarMain } from "@/components/layout/SidebarMain";
import { SidebarSecond } from "@/components/layout/SidebarSecond";
import SidebarLayout from "@/components/layout/SidebarLayout";

const roboto = Roboto({ subsets: ["cyrillic"], weight: "400" });

export const metadata: Metadata = {
  title: "Apu Sutra Dhar | Home",
  description: "A passionate MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <SidebarLayout />
        {children}
      </body>
    </html>
  );
}
