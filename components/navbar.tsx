"use client";

import { NavbarLink } from "@/app/layout";
import IconButton from "./icon-button";
import { Package2Icon, CameraIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = (props: { links: NavbarLink[] }) => {
  const pathname = usePathname();
  return (
    <nav className="h-full w-20 border-r border-zinc-300 flex flex-col items-center py-8 gap-8">
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

export default Navbar;
