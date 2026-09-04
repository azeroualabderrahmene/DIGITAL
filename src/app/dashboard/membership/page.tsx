import Link from "next/link";

export default function MembershipPage() {
  const paymentHistory = [
    {
      id: "PAY-9912",
      plan: "Pro Tier (1 Month)",
      amount: "4,500 DA",
      date: "2026-08-27",
      method: "BaridiMob Transfer",
      status: "APPROVED",
    },
    {
      id: "PAY-8821",
      plan: "Basic Tier (1 Month)",
      amount: "1,500 DA",
      date: "2026-07-27",
      method: "BaridiMob Transfer",
      status: "APPROVED",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold">Membership & Billing</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your subscription tier, view download quotas, and check BaridiMob payment receipt history.
        </p>
      </div>

      {/* Active Membership Overview */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-border/40">
          <div>
            <span className="text-xs uppercase font-semibold text-primary tracking-wider">Current Plan</span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground mt-1">Pro Tier Membership</h2>
            <p className="text-xs text-muted-foreground mt-1">Billed monthly via manual BaridiMob transfer · Active until Sept 27, 2026</p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/95"
          >
            Upgrade / Extend Subscription
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="p-4 bg-background/50 border border-border/60 rounded-xl">
            <span className="text-xs text-muted-foreground font-semibold uppercase">Daily Quota</span>
            <p className="font-bold text-lg text-foreground mt-1">Unlimited</p>
          </div>
          <div className="p-4 bg-background/50 border border-border/60 rounded-xl">
            <span className="text-xs text-muted-foreground font-semibold uppercase">License Access</span>
            <p className="font-bold text-lg text-foreground mt-1">PLR, MRR & Resell</p>
          </div>
          <div className="p-4 bg-background/50 border border-border/60 rounded-xl">
            <span className="text-xs text-muted-foreground font-semibold uppercase">Support Level</span>
            <p className="font-bold text-lg text-foreground mt-1">Priority Discord & Email</p>
          </div>
        </div>
      </div>

      {/* BaridiMob Receipts History */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
        <h3 className="font-heading text-lg font-bold mb-4">BaridiMob Payment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/40 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                <th className="py-3">Payment ID</th>
                <th className="py-3">Plan</th>
                <th className="py-3">Amount</th>
                <th className="py-3">Submitted</th>
                <th className="py-3">Method</th>
                <th className="py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {paymentHistory.map((item) => (
                <tr key={item.id} className="text-foreground hover:bg-muted/30">
                  <td className="py-3.5 font-mono text-xs">{item.id}</td>
                  <td className="py-3.5 font-medium">{item.plan}</td>
                  <td className="py-3.5 font-bold text-primary">{item.amount}</td>
                  <td className="py-3.5 text-muted-foreground">{item.date}</td>
                  <td className="py-3.5 text-muted-foreground">{item.method}</td>
                  <td className="py-3.5 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Approved
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
