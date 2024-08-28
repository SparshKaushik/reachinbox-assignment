"use client";

import { ChevronDownIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/Dropdown";
import { auth$ } from "~/lib/states/auth";
import { Switch } from "./ui/switch";

export default function Header() {
  return (
    <header className="flex h-12 items-center justify-between gap-4 border-b bg-[#1F1F1F] px-4 py-2 md:h-auto md:border-0 md:px-6">
      <div className="font-bold">Onebox</div>
      <div className="flex items-center gap-2">
        <Switch className="relative">
          <MoonIcon className="absolute left-0 size-4 translate-x-0.5 text-white" />
          <SunIcon className="absolute left-0 size-4 translate-x-5 text-[#E8C364]" />
        </Switch>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 p-2 font-semibold"
            >
              My Workspace
              <ChevronDownIcon className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-40" align="end">
            <DropdownMenuItem onClick={() => auth$.set(null)}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
