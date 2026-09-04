import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Basic Tier",
      slug: "basic",
      price: "1,500 DA",
      period: "per month",
      description: "Ideal for beginners looking to browse and download standard assets.",
      features: [
        "Access to Basic tier assets",
        "Download limit: 10 items/day",
        "Standard support",
        "Single-device access",
      ],
      cta: "Subscribe to Basic",
      popular: false,
    },
    {
      name: "Pro Tier",
      slug: "pro",
      price: "4,500 DA",
      period: "per month",
      description: "Perfect for active creators and digital marketers needing full library access.",
      features: [
        "Access to Basic & Pro tier assets",
        "Unlimited downloads",
        "Priority Discord support",
        "Multiple-device access",
        "Access to new releases",
      ],
      cta: "Subscribe to Pro",
      popular: true,
    },
    {
      name: "Lifetime Access",
      slug: "lifetime",
      price: "15,000 DA",
      period: "one-time payment",
      description: "The ultimate deal for power users and agencies. Pay once, download forever.",
      features: [
        "Unrestricted access to all assets",
        "Unlimited downloads forever",
        "Dedicated account manager",
        "1:1 setup consulting",
        "All future updates & releases included",
      ],
      cta: "Get Lifetime Access",
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-background to-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ZED Digital
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Pricing Section */}
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the perfect membership plan to fuel your digital marketing and development goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.slug}
                className={`relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-xl ${
                  plan.popular
                    ? "border-primary shadow-primary/5 -translate-y-2 md:-translate-y-3"
                    : "border-border hover:border-border/80"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-muted-foreground text-sm min-h-[40px]">{plan.description}</p>
                </div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1 text-sm text-muted-foreground">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/checkout/${plan.slug}`}
                  className={`inline-flex h-10 items-center justify-center rounded-md text-sm font-semibold transition-all active:scale-95 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/95"
                      : "border border-border bg-background hover:bg-muted text-foreground"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-background/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ZED Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
