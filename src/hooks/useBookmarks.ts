"use client";

import { useState, useEffect } from "react";
import { Article } from "@/lib/types";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Article[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedInfos = localStorage.getItem("bns_bookmarks");
    if (storedInfos) {
      try {
        setBookmarks(JSON.parse(storedInfos));
      } catch (e) {
        console.error("Failed to parse bookmarks", e);
      }
    }

    const handleStorageChange = () => {
      const updated = localStorage.getItem("bns_bookmarks");
      if (updated) {
        try {
          setBookmarks(JSON.parse(updated));
        } catch (e) {}
      }
    };

    window.addEventListener("bookmarks-updated", handleStorageChange);
    return () => window.removeEventListener("bookmarks-updated", handleStorageChange);
  }, []);

  const addBookmark = (article: Article) => {
    const updated = [...bookmarks, article];
    setBookmarks(updated);
    localStorage.setItem("bns_bookmarks", JSON.stringify(updated));
    window.dispatchEvent(new Event("bookmarks-updated"));
  };

  const removeBookmark = (link: string) => {
    const updated = bookmarks.filter((b) => b.link !== link);
    setBookmarks(updated);
    localStorage.setItem("bns_bookmarks", JSON.stringify(updated));
    window.dispatchEvent(new Event("bookmarks-updated"));
  };

  const isBookmarked = (link: string) => {
    return bookmarks.some((b) => b.link === link);
  };

  return { bookmarks, addBookmark, removeBookmark, isBookmarked, mounted };
}
