import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_PRODUCTS } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const product = MOCK_PRODUCTS.find((p) => p.slug === slug) || MOCK_PRODUCTS[0];

  const getLicenseDesc = (license: string) => {
    switch (license) {
      case "PLR":
        return "Private Label Rights: Modify, rebrand, claim authorship, and resell to end users as your own product.";
      case "MRR":
        return "Master Resell Rights: Sell this asset to clients and also grant them the rights to resell it further.";
      case "RESELL":
        return "Standard Resell Rights: Sell unlimited copies directly to your clients and keep 100% of the proceeds.";
      default:
        return "Commercial License: Use for personal or client commercial projects without resale of raw source files.";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ZED Digital
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/library" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Library
            </Link>
            <Link href="/pricing" className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/95">
              Upgrade Membership
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href="/library" className="hover:text-foreground">Library</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate max-w-xs">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Asset Detail Card */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs uppercase tracking-wider bg-secondary/80 text-secondary-foreground font-semibold px-3 py-1 rounded-md">
                  {product.category}
                </span>
                <span className="text-xs uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 font-semibold px-3 py-1 rounded-md">
                  License: {product.licenseType}
                </span>
                <span className={`text-xs px-3 py-1 rounded-md font-semibold border ${
                  product.accessLevel === "BASIC"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : product.accessLevel === "PRO"
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-accent/30 bg-accent/10 text-accent"
                }`}>
                  {product.accessLevel} Tier Required
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                {product.title}
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Stats Metadata Pill */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-background/60 border border-border/50 rounded-xl mb-8 text-xs text-muted-foreground">
                <div>
                  <span className="block text-foreground font-bold text-sm">{product.fileSize || "15 MB"}</span>
                  <span>File Size</span>
                </div>
                <div>
                  <span className="block text-foreground font-bold text-sm">{product.resourceType}</span>
                  <span>Resource Format</span>
                </div>
                <div>
                  <span className="block text-foreground font-bold text-sm">{product.downloadCount.toLocaleString()}</span>
                  <span>Downloads</span>
                </div>
                <div>
                  <span className="block text-foreground font-bold text-sm">{product.createdAt}</span>
                  <span>Date Added</span>
                </div>
              </div>

              {/* Download / Access Action Box */}
              <div className="p-6 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent border border-primary/20 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">Instant Asset Access</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Requires active {product.accessLevel} membership subscription.</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <a
                    href={`/api/access/${product.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/95 active:scale-95"
                  >
                    Download Resource ⚡
                  </a>
                </div>
              </div>
            </div>

            {/* License Breakdown Section */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h2 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                <span>⚖️</span> License Terms & Usage Guide
              </h2>
              <div className="p-4 bg-secondary/30 border border-border/60 rounded-xl text-sm leading-relaxed text-muted-foreground">
                <p className="font-semibold text-foreground mb-1">{product.licenseType} License Terms:</p>
                <p>{getLicenseDesc(product.licenseType)}</p>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Commercial use in client projects allowed.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Edit branding, fonts, colors, and layout completely.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Package into digital products or client deliverables.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Sidebar: Plan Upgrade / Related Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold mb-2">Need Unrestricted Downloads?</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Upgrade to Pro or Lifetime tier to download unlimited resources with full resell rights.
              </p>
              <div className="space-y-3">
                <Link
                  href="/pricing"
                  className="w-full flex h-10 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/95"
                >
                  View Membership Plans
                </Link>
                <Link
                  href="/dashboard/favorites"
                  className="w-full flex h-10 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted text-xs font-semibold transition-all"
                >
                  Save to Favorites 💖
                </Link>
              </div>
            </div>

            {/* Quick Support Card */}
            <div className="bg-card border border-border rounded-2xl p-6 text-xs text-muted-foreground space-y-3">
              <h4 className="font-bold text-foreground text-sm">Have Questions?</h4>
              <p>Contact our support desk for custom licensing requests or download assistance.</p>
              <a href="mailto:support@zeddigital.com" className="text-primary hover:underline font-medium block">
                support@zeddigital.com →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
