"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex-1 flex justify-center px-6">
          <Suspense fallback={<div className="w-full max-w-sm h-9 bg-muted/50 rounded-full animate-pulse" />}>
            <SearchBar />
          </Suspense>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/bookmarks"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Bookmark className="h-5 w-5" />
            <span className="hidden sm:inline">Bookmarks</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
