"use client";

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu, MessageSquareWarning, Share2 } from "lucide-react";
import Link from 'next/link';
import { siteConfig } from "@/config/site";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function ModeToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-10 px-0">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href={siteConfig.author} className="flex items-center space-x-2">
            <Share2 className="h-5 w-5" />
            <span>Share</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={siteConfig.report} className="flex items-center space-x-2">
            <MessageSquareWarning className="h-5 w-5" />
            <span>Report</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
