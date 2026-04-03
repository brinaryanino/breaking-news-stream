import Link from "next/link";
import { Newspaper } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-sm bg-foreground text-background overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <div className="flex items-center justify-center space-x-0.5 z-10">
          <span className="font-logo font-bold text-lg tracking-tight">BNS</span>
        </div>
      </div>
      <span className="font-sans font-bold text-xl tracking-tight hidden sm:block">
        Breaking News System
      </span>
    </Link>
  );
}
