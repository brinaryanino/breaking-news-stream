import Link from "next/link";
import { TrendingUp, Hash } from "lucide-react";

export default function Sidebar() {
  const topics = [
    "Artificial Intelligence",
    "Cybersecurity",
    "Gadgets",
    "Startups",
    "Software Development",
    "Cloud Computing",
  ];

  const popularArticles = [
    { title: "The Future of AI: What to Expect in 2026", time: "2 hours ago" },
    { title: "Next.js 15 Released with Advanced Server Actions", time: "5 hours ago" },
    { title: "Top 10 Cybersecurity Threats This Month", time: "8 hours ago" },
  ];

  return (
    <aside className="space-y-10 sticky top-24">
      {/* Recommended Topics */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 items-center flex gap-2">
          <Hash className="h-4 w-4" /> Recommended Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Link
              key={topic}
              href={`/?q=${encodeURIComponent(topic)}`}
              className="px-4 py-2 rounded-full bg-muted/50 hover:bg-muted text-sm font-medium transition-colors border border-transparent hover:border-border"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>

      {/* Trending News */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 items-center flex gap-2">
          <TrendingUp className="h-4 w-4" /> Trending
        </h3>
        <div className="flex flex-col gap-6">
          {popularArticles.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="flex gap-4">
                <span className="text-3xl font-bold font-serif text-muted-foreground/30 group-hover:text-foreground/50 transition-colors">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-foreground group-hover:underline decoration-2 underline-offset-4 decoration-foreground/30 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-2">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer-like element */}
      <div className="pt-6 border-t border-border mt-8">
        <p className="text-sm text-muted-foreground">
          <strong>BNS</strong> &copy; {new Date().getFullYear()} <br />
          Built with Next.js, Tailwind CSS, & TypeScript.
        </p>
      </div>
    </aside>
  );
}
