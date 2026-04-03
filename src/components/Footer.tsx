import Link from "next/link";
import { Mail, Globe, Link as LinkIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-foreground text-background">
                <span className="font-logo font-bold text-sm tracking-tight pt-0.5">BNS</span>
              </div>
              <span className="font-sans font-bold text-lg tracking-tight">
                Breaking News
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
              A premium, minimalist destination for the latest technology news. 
              Built with modern frontend tools focused on readability and simplicity.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors" aria-label="Website">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors" aria-label="Links">
                <LinkIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors" aria-label="Contact">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Discover</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground hover:underline underline-offset-4 transition-all">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/?q=technology" className="hover:text-foreground hover:underline underline-offset-4 transition-all">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/?q=startups" className="hover:text-foreground hover:underline underline-offset-4 transition-all">
                  Startups
                </Link>
              </li>
              <li>
                <Link href="/bookmarks" className="hover:text-foreground hover:underline underline-offset-4 transition-all">
                  Bookmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground hover:underline underline-offset-4 transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground hover:underline underline-offset-4 transition-all">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground hover:underline underline-offset-4 transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground hover:underline underline-offset-4 transition-all">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 mt-12 border-t border-border/50 text-sm text-muted-foreground">
          <p>© {currentYear} Breaking News System. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Powered by CNN Indonesia API & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
