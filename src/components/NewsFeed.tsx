"use client";

import { useSearchParams } from "next/navigation";
import { Article } from "@/lib/types";
import ArticleCard from "./ArticleCard";
import React from "react";
import { SearchX } from "lucide-react";

interface NewsFeedProps {
  articles: Article[];
}

export default function NewsFeed({ articles }: NewsFeedProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  
  // Pagination State
  const ITEMS_PER_PAGE = 10;
  const [visibleCount, setVisibleCount] = React.useState(ITEMS_PER_PAGE);

  // Reset pagination when search query changes
  React.useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [query]);

  const filteredArticles = React.useMemo(() => {
    if (!query) return articles;
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.contentSnippet.toLowerCase().includes(query)
    );
  }, [articles, query]);

  if (filteredArticles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in">
        <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <SearchX className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No results found</h3>
        <p className="text-muted-foreground max-w-sm">
          We couldn&apos;t find any articles matching &quot;{query}&quot;. Try adjusting your search terms.
        </p>
      </div>
    );
  }

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredArticles.length));
  };

  // Make the very first article prominent if no search query is active
  return (
    <div className="space-y-4">
      {displayedArticles.map((article, index) => (
        <ArticleCard 
          key={article.link} 
          article={article} 
          prominent={index === 0 && !query} 
        />
      ))}

      {hasMore && (
        <div className="pt-8 pb-4 flex justify-center">
          <button
            onClick={loadMore}
            className="px-6 py-3 rounded-full border border-border bg-transparent hover:bg-muted font-medium transition-colors text-foreground shadow-sm"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
}
