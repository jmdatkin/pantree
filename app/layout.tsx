"use client";

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { CameraIcon, Package2Icon, SettingsIcon } from "lucide-react";

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
    icon: <Package2Icon className="h-7 w-7"></Package2Icon>,
  },
  {
    name: "Capture",
    href: "/capture",
    icon: <CameraIcon className="h-7 w-7"></CameraIcon>,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <SettingsIcon className="h-7 w-7"></SettingsIcon>,
  },
];

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased w-screen h-screen",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <div className="w-full h-full flex flex-col-reverse md:flex-row">
          <aside className="block md:hidden">
            <MobileNavbar links={links} />
          </aside>
          <aside className="hidden md:block">
            <Navbar links={links} />
          </aside>
          <main className="w-full h-full">{children}</main>
        </div>
        <ProgressBar
          height="4px"
          color="#3F3F46"
          options={{ showSpinner: false }}
          shallowRouting
        ></ProgressBar>
      </body>
    </html>
  );
}
