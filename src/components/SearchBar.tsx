"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = React.useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query)}`);
    } else {
      router.push(`/`);
    }
  };

  React.useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center max-w-sm w-full group"
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-foreground transition-colors">
        <Search className="h-4 w-4" />
      </div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
        className="block w-full pl-10 pr-3 py-2 border border-border rounded-full bg-muted/30 focus:bg-background text-sm focus:outline-none focus:ring-1 focus:ring-foreground focus:border-foreground placeholder:text-muted-foreground transition-all"
      />
    </form>
  );
}
