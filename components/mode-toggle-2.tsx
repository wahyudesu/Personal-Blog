"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="group h-8 w-8 items-center justify-center rounded-md border text-muted-foreground hover:bg-accent hover:text-accent-foreground flex"
    >
      <span className="sr-only">Toggle dark/light mode</span>
      {theme !== "dark" ? (
        <Moon className="h-5 w-5 duration-300 group-hover:rotate-[360deg]" />
      ) : (
        <Sun className="h-5 w-5 duration-300 group-hover:rotate-180" />
      )}
    </button>
  );
}
