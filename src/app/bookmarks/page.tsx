"use client";

import { useBookmarks } from "@/hooks/useBookmarks";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import { BookmarkX } from "lucide-react";
import Link from "next/link";

export default function BookmarksPage() {
  const { bookmarks, mounted } = useBookmarks();

  return (
    <div className="flex flex-col lg:flex-row gap-12 w-full mt-4 lg:mt-8">
      <div className="flex-1 w-full max-w-3xl">
        <h1 className="text-4xl font-serif font-bold mb-8 flex items-center gap-3">
          Your Bookmarks
        </h1>
        
        {!mounted ? (
          <div className="space-y-4">
            {[1, 2, 3].map((v) => (
              <div key={v} className="h-40 bg-muted/50 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : bookmarks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-muted/20 rounded-2xl border border-dashed border-border p-8">
            <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <BookmarkX className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No bookmarks yet</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              You haven&apos;t saved any articles yet. Bookmark articles you want to read later.
            </p>
            <Link 
              href="/"
              className="bg-foreground text-background px-6 py-2.5 rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              Explore Articles
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookmarks.map((article) => (
              <ArticleCard key={article.link} article={article} />
            ))}
          </div>
        )}
      </div>
      <div className="w-full lg:w-[320px] shrink-0">
        <Sidebar />
      </div>
    </div>
  );
}
