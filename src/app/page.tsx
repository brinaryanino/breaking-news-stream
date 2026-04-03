import { ApiResponse } from "@/lib/types";
import NewsFeed from "@/components/NewsFeed";
import Sidebar from "@/components/Sidebar";
import { PageLoader } from "@/components/Loader";
import { Suspense } from "react";

async function getArticles() {
  const res = await fetch("https://berita-indo-api-next.vercel.app/api/cnn-news/teknologi", {
    next: { revalidate: 60 }, // Revalidate every minute
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const json: ApiResponse = await res.json();
  return json.data;
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="flex flex-col lg:flex-row gap-12 w-full mt-4 lg:mt-8">
      <div className="flex-1 w-full max-w-3xl">
        <Suspense fallback={<PageLoader />}>
          <NewsFeed articles={articles} />
        </Suspense>
      </div>
      <div className="w-full lg:w-[320px] shrink-0">
        <Sidebar />
      </div>
    </div>
  );
}
