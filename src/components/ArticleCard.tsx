import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Article } from "@/lib/types";
import BookmarkButton from "./BookmarkButton";

// Helper function to create URL slug from link URL. Next API doesn't provide specific ID.
export const generateSlug = (link: string) => {
  const urlParts = link.replace(/\/$/, "").split("/");
  return urlParts[urlParts.length - 1] || "article";
};

export default function ArticleCard({ article, prominent = false }: { article: Article, prominent?: boolean }) {
  const formattedDate = article.isoDate 
    ? format(parseISO(article.isoDate), "MMM d, yyyy") 
    : "Unknown date";
    
  // Using the slug in the URL so we can dynamically fetch or display details.
  // Because the API array doesn't return full content, we will pass data as a generic or fetch.
  // Actually, we can encode the link in the query param so the detail page can use it, or just pass slug.
  const articleSlug = generateSlug(article.link);

  return (
    <article className="group flex flex-col justify-between py-6 border-b border-border hover:bg-muted/10 transition-colors -mx-4 px-4 sm:mx-0 sm:px-0 sm:hover:bg-transparent rounded-lg">
      <div className={`flex flex-col ${prominent ? "md:flex-col" : "md:flex-row"} gap-6`}>
        {/* Text Content */}
        <div className={`flex-1 flex flex-col justify-center order-2 ${prominent ? "order-2" : "md:order-1"}`}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 font-medium">
            <span className="text-foreground">CNN Indonesia</span>
            <span>·</span>
            <span>{formattedDate}</span>
          </div>

          <Link href={`/article/${articleSlug}?url=${encodeURIComponent(article.link)}`} className="block group-hover:opacity-80 transition-opacity">
            <h2 className={`font-serif font-bold text-foreground tracking-tight leading-tight mb-3 ${prominent ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
              {article.title}
            </h2>
            <p className={`text-muted-foreground leading-relaxed ${prominent ? 'text-lg line-clamp-3' : 'text-base line-clamp-2'}`}>
              {article.contentSnippet}
            </p>
          </Link>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="bg-muted px-3 py-1 rounded-full text-foreground font-medium text-xs">
                Teknologi
              </span>
              <span>5 min read</span>
            </div>
            <BookmarkButton article={article} />
          </div>
        </div>

        {/* Image */}
        {article.image?.large && (
          <Link 
            href={`/article/${articleSlug}?url=${encodeURIComponent(article.link)}`} 
            className={`block shrink-0 overflow-hidden bg-muted rounded-xl order-1 ${prominent ? 'w-full aspect-video order-1 mb-2' : 'w-full md:w-[280px] aspect-[4/3] md:order-2'}`}
          >
            <img
              src={article.image.large}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
        )}
      </div>
    </article>
  );
}
