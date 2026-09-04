import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Alert */}
      <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-primary/5 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-heading text-lg font-bold">Welcome back, John!</h2>
          <p className="text-sm text-muted-foreground mt-1">Get ready to download premium resources to power up your business.</p>
        </div>
        <Link
          href="/library"
          className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/95 active:scale-95 self-start sm:self-auto"
        >
          Browse Catalog
        </Link>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Plan Status</span>
          <p className="font-heading text-2xl font-bold mt-2 text-foreground">Active Pro</p>
          <p className="text-xs text-muted-foreground mt-1">Expires Sept 27, 2026</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Downloads (Today)</span>
          <p className="font-heading text-2xl font-bold mt-2 text-foreground">4 / Unlimited</p>
          <p className="text-xs text-muted-foreground mt-1">Daily quota resets at midnight</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Saved Favorites</span>
          <p className="font-heading text-2xl font-bold mt-2 text-foreground">12 Items</p>
          <p className="text-xs text-muted-foreground mt-1">Quick access folder</p>
        </div>
      </div>

      {/* Catalog & Affiliate CTAs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CTA 1 */}
        <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-lg font-bold mb-2">Become an Affiliate</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Earn recurring commissions by promoting ZED Digital to your audience. Generate custom referral links, track clicks, conversions, and view payout logs directly from your dashboard.
            </p>
          </div>
          <Link
            href="/dashboard/affiliate"
            className="mt-6 inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted text-xs font-semibold transition-all active:scale-95"
          >
            Go to Affiliate Center →
          </Link>
        </div>
        {/* CTA 2 */}
        <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-lg font-bold mb-2">Need Custom Support?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Stuck with something or need custom licenses? Get in touch with our help desk. Pro members receive priority discord and email responses within 2 hours.
            </p>
          </div>
          <a
            href="mailto:support@zeddigital.com"
            className="mt-6 inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted text-xs font-semibold transition-all active:scale-95"
          >
            Contact Support Desk
          </a>
        </div>
      </div>
    </div>
  );
}
