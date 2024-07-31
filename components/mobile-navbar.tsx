"use client";

import { usePathname } from "next/navigation";
import IconButton from "./icon-button";
import { Package2Icon, CameraIcon, SettingsIcon } from "lucide-react";
import { NavbarLink } from "@/app/layout";

const MobileNavbar = (props: { links: NavbarLink[] }) => {
  const pathname = usePathname();

  return (
    <nav className="w-full h-20 border-t border-zinc-300 flex flex-row items-center justify-center gap-8">
      {props.links.map((link) => {
        return (
          <IconButton active={link.href.includes(pathname)} href={link.href}>
            {link.icon}
          </IconButton>
        );
      })}
    </nav>
  );
};

export default MobileNavbar;
