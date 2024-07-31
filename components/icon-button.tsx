import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface IconButtonProps extends LinkProps {
  className?: string;
  active?: boolean;
  children: ReactNode;
}
const IconButton = (props: IconButtonProps) => {
  return (
    <Link
      href={props.href}
      className={cn(
        `relative rounded-lg flex h-16 w-16 items-center justify-center text-accent-foreground transition-colors hover:bg-zinc-100 active:bg-zinc-200 ${
          props.className
        } ${
          props.active
            ? "before:-bottom-1 before:md:bottom-0 before:md:-left-1 before:md:h-full before:md:w-1 before:absolute before:h-1 before:w-full before:bg-accent-foreground"
            : ""
        }`
      )}
    >
      {props.children}
    </Link>
  );
};

export default IconButton;
