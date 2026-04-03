import Link from "next/link";
import { ArrowLeft, Target, Eye, Zap, BookOpen, Heart, Code, User, ExternalLink } from "lucide-react";

export const metadata = {
  title: "About Us | BNS",
  description: "Learn more about BNS and the developer behind the project.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[720px] mx-auto w-full pt-4 pb-20 animate-in fade-in duration-500">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors group font-medium"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to home
      </Link>

      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-serif font-black tracking-tight leading-[1.1] mb-8 text-foreground">
          About BNS
        </h1>
        <p className="text-xl sm:text-2xl leading-relaxed text-muted-foreground font-medium">
          <strong>Breaking News System (BNS)</strong> is a modern, fast, and reliable Indonesian news platform built for those who value clarity and efficiency.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-20 grid sm:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4 text-foreground">
            <Target className="h-6 w-6" />
            <h2 className="text-2xl font-serif font-bold">Our Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To simplify news consumption by cutting through the noise and delivering high-quality, curated information in an accessible and distraction-free environment.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4 text-foreground">
            <Eye className="h-6 w-6" />
            <h2 className="text-2xl font-serif font-bold">Our Vision</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To set a new standard for digital publishing in Indonesia, proving that news platforms can be powerful, beautiful, and deeply respectful of the reader&apos;s time.
          </p>
        </div>
      </section>

      {/* Highlights / What We Do */}
      <section className="mb-24">
        <h2 className="text-3xl font-serif font-bold mb-8 text-foreground border-b border-border pb-4">
          What We Do
        </h2>
        <div className="space-y-10">
          <div className="flex gap-4">
            <div className="mt-1 bg-foreground/10 text-foreground p-3 rounded-full shrink-0 h-fit">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Clean Reading Experience</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We prioritize typography, comfortable spacing, and minimalist design. No intrusive pop-ups, no overwhelming ads—just the news, formatted beautifully.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 bg-foreground/10 text-foreground p-3 rounded-full shrink-0 h-fit">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Fast & Curated News</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                By integrating seamlessly with authoritative REST APIs like CNN Indonesia, BNS streams real-time technology updates straight to your screen the moment they happen.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 bg-foreground/10 text-foreground p-3 rounded-full shrink-0 h-fit">
              <Heart className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-foreground">User-Focused Design</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                From native dark mode support to a private device-level bookmarking system, every feature was meticulously engineered to put the user first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Developer */}
      <section className="bg-muted/40 border border-border p-8 sm:p-12 rounded-3xl">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-2xl shrink-0 overflow-hidden bg-muted relative group border border-border shadow-sm">
            <img 
              src="profile.png" 
              alt="Brinarya Nino Sudhipurwa" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
              About the Developer
            </h2>
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-[length:200%_auto] animate-shine mb-4 pb-1">
              Brinarya Nino Sudhipurwa
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-8">
              <p>
                BNS is a technical portfolio project created to demonstrate advanced capabilities in modern frontend architecture. 
                As a web development and information systems student, my passion revolves around building modern, user-friendly digital products that solve real problems.
              </p>
              <p>
                This platform serves as a culmination of my skills in <strong>Next.js App Router</strong>, seamless <strong>API Integration</strong>, reactive state management, and functional <strong>UI/UX Design</strong>.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/brinaryanino" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
              >
                <Code className="h-4 w-4" /> GitHub Profile
              </a>
              <a 
                href="https://linkedin.com/in/brnryanino" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background border border-border text-foreground px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
