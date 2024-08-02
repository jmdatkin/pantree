"use client";

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { CameraIcon, Package2Icon, SettingsIcon } from "lucide-react";
import AuthProvider from "./_context/auth-context";
import { Toaster } from "@/components/ui/sonner";

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
          "antialiased w-screen h-screen overflow-hidden",
          fontHeading.variable,
          fontBody.variable,
          fontBody.className
        )}
      >
        <AuthProvider>{children}</AuthProvider>
        <ProgressBar
          height="4px"
          color="#3F3F46"
          options={{ showSpinner: false }}
          shallowRouting
        ></ProgressBar>
        <Toaster />
      </body>
    </html>
  );
}
