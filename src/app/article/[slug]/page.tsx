import { ApiResponse, Article } from "@/lib/types";
import Sidebar from "@/components/Sidebar";
import BookmarkButton from "@/components/BookmarkButton";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { generateSlug } from "@/components/ArticleCard";
import { notFound } from "next/navigation";

// Refetch the feed to find the requested article
async function getArticle(slug: string, urlParam: string | null): Promise<Article | null> {
  const res = await fetch("https://berita-indo-api-next.vercel.app/api/cnn-news/teknologi", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null;
  }

  const json: ApiResponse = await res.json();
  
  // Try to find by checking the slug generated from the link
  // If urlParam is provided via search params, it makes finding it more exact
  return json.data.find((a) => {
    if (urlParam && a.link === urlParam) return true;
    return generateSlug(a.link) === slug;
  }) || null;
}

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ url?: string }>;
}) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  const urlParam = searchParams.url || null;

  const article = await getArticle(slug, urlParam);

  if (!article) {
    notFound();
  }

  const formattedDate = article.isoDate 
    ? format(parseISO(article.isoDate), "MMMM d, yyyy") 
    : "Unknown date";

  return (
    <div className="flex flex-col lg:flex-row gap-12 w-full mt-4 lg:mt-8">
      {/* Main Reading Column */}
      <article className="flex-1 w-full max-w-[680px] mx-auto lg:mx-0">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to home
        </Link>

        {/* Article Header */}
        <header className="mb-10 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm font-medium mb-6">
            <span className="text-foreground bg-foreground/10 px-3 py-1 rounded-full uppercase tracking-wider text-xs">
              Teknologi
            </span>
            <span className="text-muted-foreground px-2">—</span>
            <span className="text-muted-foreground">{formattedDate}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-serif font-black tracking-tight leading-[1.1] mb-6">
            {article.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-border mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl font-serif font-bold text-muted-foreground">
                CNN
              </div>
              <div>
                <p className="font-bold text-foreground capitalize text-base">CNN Indonesia</p>
                <p className="text-sm text-muted-foreground">@cnnindonesia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BookmarkButton article={article} />
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.image?.large && (
          <div className="mb-12 rounded-2xl overflow-hidden bg-muted aspect-video relative">
            <img 
              src={article.image.large} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Body Content (Simulated for this API) */}
        <div className="article-content max-w-[680px] mx-auto">
          <p className="text-xl leading-relaxed text-muted-foreground font-medium mb-8">
            {article.contentSnippet}
          </p>
          
          <p>
            Dunia teknologi terus berkembang dengan kecepatan yang belum pernah terjadi sebelumnya. Inovasi-inovasi baru bermunculan setiap harinya, mengubah cara kita bekerja, berkomunikasi, dan menjalani kehidupan sehari-hari secara fundamental. Artikel ini, yang dilansir dari CNN Indonesia, menyoroti tren utama dan pergeseran yang berpotensi memiliki dampak jangka panjang.
          </p>

          <h2>A New Era of Digital Transformation</h2>

          <p>
            Seiring dengan maraknya digitalisasi di berbagai sektor, permintaan akan solusi yang tangkas, aman, dan efisien meningkat. Perusahaan mengalokasikan sumber daya besar-besaran untuk infrastruktur komputasi awan dan keamanan siber, mengantisipasi celah keamanan di tengah meningkatnya arus pertukaran data secara global. Hal ini memaksa para pengembang peranti lunak dan arsitek sistem bekerja lebih keras dalam merumuskan arsitektur yang tahan banting.
          </p>
          
          <p>
            Selain itu, kita melihat adopsi teknologi cerdas dan komputasi edge mulai menjadi keniscayaan. Hal tersebut tidak hanya berdampak pada sektor konsumen, tetapi juga manufaktur, logistik, dan kesehatan.
          </p>

          <blockquote className="border-l-4 border-foreground pl-6 my-8 italic text-2xl text-foreground font-serif">
            "We are on the cusp of an era where digital tools are no longer just utilities, but active participants in problem-solving."
          </blockquote>

          <p>
            Hambatan terbesar dalam beberapa dekade terakhir—seperti laten yang tinggi dan keterbatasan pemrosesan—kini perlahan mulai teratasi. Untuk membaca laporan ini lebih lanjut, Anda dapat merujuk ke sumber aslinya melalui tautan di bawah ini.
          </p>

          <div className="mt-12 bg-muted p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-xl mb-2">Read Detailed Coverage</h3>
              <p className="text-muted-foreground text-sm">
                View the original publication and breaking details on CNN Indonesia.
              </p>
            </div>
            <a 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
            >
              Original Article <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      {/* Right Sidebar */}
      <div className="w-full lg:w-[320px] shrink-0 mt-12 lg:mt-0">
        <Sidebar />
      </div>
    </div>
  );
}
