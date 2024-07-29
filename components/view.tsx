// components/tag-toggle.tsx
"use client";

import { useState } from "react";
import { Eye, EyeOff, AlignLeft, GalleryVertical } from "lucide-react";

interface TagToggleProps {
  onToggle: () => void;
  showTags: boolean;
}

export function TagToggle({ onToggle, showTags }: TagToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="group h-8 w-8 items-center justify-center rounded-md border text-muted-foreground hover:bg-accent hover:text-accent-foreground flex"
    >
      <span className="sr-only">Toggle tags visibility</span>
      {showTags ? (
        <GalleryVertical className="h-5 w-5 duration-300 group-hover:rotate-[360deg]" />
      ) : (
        <AlignLeft className="h-5 w-5 duration-300 group-hover:rotate-180" />
      )}
    </button>
  );
}
