"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Moon, Sun, MessageSquareWarning, ThumbsUp , Menu } from "lucide-react";
import Link from 'next/link';
import { siteConfig } from "@/config/site"
import { Icons } from "./icons";


export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-10 px-0">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
        <Link href={siteConfig.report} className="mr-2 flex items-center space-x-2">
          <MessageSquareWarning/>
          <span className=""> Report </span>
        </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
