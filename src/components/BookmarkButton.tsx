"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { Article } from "@/lib/types";

export default function BookmarkButton({ article }: { article: Article }) {
  const { isBookmarked, addBookmark, removeBookmark, mounted } = useBookmarks();

  if (!mounted) {
    return (
      <button className="p-2 w-9 h-9 opacity-50" disabled aria-label="Loading bookmark status" />
    );
  }

  const bookmarked = isBookmarked(article.link);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    if (bookmarked) {
      removeBookmark(article.link);
    } else {
      addBookmark(article);
    }
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`p-2 rounded-full transition-colors flex items-center justify-center ${
        bookmarked
          ? "text-foreground bg-foreground/10 hover:bg-foreground/20"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      }`}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
      title={bookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      {bookmarked ? (
        <BookmarkCheck className="h-5 w-5 fill-current" />
      ) : (
        <Bookmark className="h-5 w-5" />
      )}
    </button>
  );
}
