"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";
import { navRoutes } from "~/lib/constants";

export default function LeftNavAside() {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "bg-left-bg group z-10 hidden w-14 flex-col border-r border-border transition-all duration-300 lg:flex",
      )}
    >
      <div className={cn("flex h-full flex-col gap-4 px-2 md:py-5")}>
        <div
          className={cn(
            "flex min-h-14 flex-col-reverse items-center gap-4 pb-8 lg:min-h-[60px]",
          )}
        >
          <Link href="/" className="flex items-center gap-2 font-semibold">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/smlogo.png" alt="ReachInbox" className="size-4" />
          </Link>
        </div>
        <div className="flex-1">
          <nav className="flex h-full flex-col items-center gap-2 text-sm font-medium">
            {navRoutes.map((route) => (
              <Link
                href={`${route.route}`}
                className={cn(
                  "relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-black/10 dark:hover:bg-white/10",
                )}
                key={route.route}
              >
                <route.icon
                  className={cn("text-left-icon size-6", {
                    "text-left-icon-active": pathname === route.route,
                  })}
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
