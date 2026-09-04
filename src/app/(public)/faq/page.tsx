import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      q: "How does payment via BaridiMob work?",
      a: "Select your desired membership tier on our Pricing page and proceed to Checkout. You will be provided with our official CCP/RIP account reference. Transfer the total amount via your BaridiMob app or post office, then upload your transaction receipt on the checkout page. Our admin team verifies payments within 1-2 hours."
    },
    {
      q: "What is the difference between PLR, MRR, and Resell licenses?",
      a: "PLR (Private Label Rights) allows you to rebrand, edit content, and put your name as author. MRR (Master Resell Rights) lets you sell the product AND allow your customers to sell it too. Resell Rights allow you to sell copies directly to customers and keep 100% of the profits."
    },
    {
      q: "What are the download limits per membership tier?",
      a: "Basic Tier includes 10 asset downloads per day. Pro Tier and Lifetime Access tiers provide unlimited downloads across all asset categories with priority support."
    },
    {
      q: "Can I upgrade my subscription plan later?",
      a: "Yes! You can upgrade from Basic to Pro or Lifetime Access anytime directly from your User Dashboard."
    },
    {
      q: "How does the Affiliate Program work?",
      a: "All active members can generate a unique referral link from their Dashboard > Affiliate tab. Earn 20% recurring commission on every user who signs up and purchases a membership using your link."
    },
  ];

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
            <Link href="/categories" className="hover:text-foreground transition-colors">Categories</Link>
          </nav>
        </div>
      </header>

      {/* Main FAQ Section */}
      <main className="flex-1 py-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-4">
            Help & Knowledge Base
          </span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg mt-4">
            Have questions about licenses, payments, or membership tiers? We've got answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                <span className="text-primary font-mono text-base">0{index + 1}.</span>
                {faq.q}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center bg-card border border-border/80 rounded-2xl p-8">
          <h3 className="font-heading text-xl font-bold mb-2">Still need help?</h3>
          <p className="text-muted-foreground text-sm mb-6">Our support team is available to assist you with payments, account access, and asset downloads.</p>
          <a
            href="mailto:support@zeddigital.com"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/95"
          >
            Contact Support Desk 💬
          </a>
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
