"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-[60px] bg-slate-700 flex justify-between items-center px-[15px]">
        <button onClick={() => setExpanded(!expanded)}
        className="relative w-[20px] h-[20px]">
          <Image
            src="/burger-menu.svg"
            alt="burger-menu"
            width={20}
            height={20}
            className={classNames("transition-all absolute w-full h-full top-0",
            {
              "opacity-0": expanded,
              "opacity-100": !expanded
            })}
          />
          <Image
            src="/close-menu.svg"
            alt="close-menu"
            width={20}
            height={20}
            className={classNames("transition-all absolute w-full h-full top-0",
            {
              "opacity-100": expanded,
              "opacity-0": !expanded
            })}
          />
        </button>
        <Link href="/login" className="text-white">
          Log In
        </Link>
      </div>
      <div className="flex flex-1 relative">
        <div
          className={classNames(
            "absolute top-0 w-full transition-[max-height] sm:transition-[width] sm:static sm:h-auto overflow-hidden bg-slate-700 border-t border-t-slate-800 flex flex-col",
            {
              "max-h-full sm:w-[300px]": expanded,
              "max-h-0 sm:max-h-full sm:w-[50px]": !expanded,
            }
          )}
        >
          {[
            {
              title: "Overview",
              route: "/overview",
              icon: "/overview.svg",
              alt: "overview",
            },
            {
              title: "Settings",
              route: "/settings",
              icon: "/settings.svg",
              alt: "settings",
            },
          ].map(({ title, route, icon, alt }) => (
            <Link
              key={route}
              href={route}
              className={classNames(
                "text-white h-10 border-b border-b-slate-800 pl-[15px] flex items-center gap-x-3",
                {
                  "border-l-4 border-l-violet-500 pl-[11px]":
                    pathname === route,
                }
              )}
            >
              <Image src={icon} alt={alt} width={20} height={20} />
              <span
                className={classNames({
                  inline: expanded,
                  "sm:hidden": !expanded,
                })}
              >
                {title}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex-1 px-8 py-5">{children}</div>
      </div>
    </div>
  );
}
