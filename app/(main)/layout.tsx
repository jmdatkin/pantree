"use client";

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { CameraIcon, Package2Icon, SettingsIcon } from "lucide-react";
import { LuPackageOpen } from "react-icons/lu";
import { FaCamera } from "react-icons/fa";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export type NavbarLink = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const links: NavbarLink[] = [
  {
    name: "Stock",
    href: "/stock",
    icon: <LuPackageOpen className="h-7 w-7"></LuPackageOpen>,
  },
  {
    name: "Capture",
    href: "/capture",
    icon: <FaCamera className="h-7 w-7"></FaCamera>,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <SettingsIcon className="h-7 w-7"></SettingsIcon>,
  },
];

export default function Layout({ children }) {
  return (
    <div className="w-full h-dvh flex flex-col-reverse md:flex-row">
      <aside className="block md:hidden z-[900] bottom-0">
        <MobileNavbar links={links} />
      </aside>
      <aside className="hidden md:block z-[900]">
        <Navbar links={links} />
      </aside>
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
