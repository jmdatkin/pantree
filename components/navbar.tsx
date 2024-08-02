"use client";

import { NavbarLink } from "@/app/(main)/layout";
import IconButton from "./icon-button";
import { Package2Icon, CameraIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useUser from "@/app/_hooks/use-user";

const Navbar = (props: { links: NavbarLink[] }) => {
  const pathname = usePathname();
  const user = useUser();
  return (
    <div className="h-full w-20 bg-background border-r border-zinc-300 flex flex-col items-center justify-between py-8">
      <nav className="flex flex-col items-center gap-8">
        <div className="mb-8">
          {user && (
            <Avatar className="justify-self-end">
              <AvatarImage src={user.photoURL ?? ""} />
              <AvatarFallback>
                {(user.displayName ?? user.email ?? "")
                  .toUpperCase()
                  .substring(0, 2)}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
        {props.links.map((link, index) => {
          return (
            <IconButton
              key={index}
              active={link.href.includes(pathname)}
              href={link.href}
            >
              {link.icon}
            </IconButton>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
