import Link from "next/link";
import { MOCK_CATEGORIES } from "@/lib/products";

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ZED Digital
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/library" className="hover:text-foreground transition-colors">Library</Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
          </nav>
        </div>
      </header>

      {/* Categories Hero */}
      <main className="flex-1 py-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-4">
            Curated Catalog Collections
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            Explore Asset Categories
          </h1>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            Browse our organized library of PLR, MRR, and Resell assets tailored for creators, digital agency owners, and marketers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/library?category=${cat.slug}`}
              className="group relative flex flex-col justify-between bg-card border border-border/80 rounded-2xl p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div>
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold">
                <span className="text-muted-foreground">{cat.count} Available Assets</span>
                <span className="text-primary group-hover:translate-x-1 transition-transform">
                  Browse Category →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-background">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ZED Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
