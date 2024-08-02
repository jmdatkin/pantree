"use client";
import useUser from "@/app/_hooks/use-user";
import { redirect, useRouter } from "next/navigation";
import { PuffLoader } from "react-spinners";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const user = useUser();
  const router = useRouter();

  const localStorageUser = localStorage.getItem("pantree.user");

  if (!user && !localStorageUser) return router.push("/login");
  if (!user)
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <PuffLoader />
      </div>
    );
  return children;
}
