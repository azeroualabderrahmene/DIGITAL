import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-background to-background">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ZED Digital
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/library" className="transition-colors hover:text-foreground">
              Library
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="/categories" className="transition-colors hover:text-foreground">
              Categories
            </Link>
            <Link href="/faq" className="transition-colors hover:text-foreground">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-primary/30 active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32">
          {/* Accent Glow Background */}
          <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-1/3 left-1/3 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-6">
                Premium Digital Assets Platform
              </span>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Elevate Your Business With{" "}
                <span className="bg-gradient-to-r from-primary via-violet-400 to-accent bg-clip-text text-transparent">
                  ZED Digital
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                Access a curated library of high-quality digital assets: Ebooks, Templates, Courses, Graphics, and Prompt Packs with PLR, MRR, and Resell licenses.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/library"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-primary/30 active:scale-95"
                >
                  Browse Library
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background/50 backdrop-blur-sm px-6 text-base font-medium text-foreground transition-all hover:bg-muted active:scale-95"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="py-20 border-t border-border/40 bg-card/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Designed for Entrepreneurs & Creators
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to launch and scale your online business.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  ⚡
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Unrestricted Resell Licenses</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sell products as your own and keep 100% of the profits with PLR, MRR, and Resell license terms.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                  💎
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Premium Quality Catalog</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Curated ebooks, prompt packs, courses, and high-fidelity templates, built by design and marketing pros.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
                  🤝
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Affiliate Program</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Join our affiliate partner community and earn recurring commissions on referrals and membership conversions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 sm:px-6 lg:px-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ZED Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
