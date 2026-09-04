import Link from "next/link";

export default function AdminDashboardPage() {
  const pendingReceipts = [
    { id: "PAY-9912", user: "Karim Brahimi", plan: "Pro Tier", date: "2026-08-27 14:02", amount: "4,500 DA" },
    { id: "PAY-9913", user: "Lydia Benmeddour", plan: "Basic Tier", date: "2026-08-27 13:40", amount: "1,500 DA" },
    { id: "PAY-9914", user: "Samir Ould", plan: "Lifetime Access", date: "2026-08-27 12:15", amount: "15,000 DA" },
  ];

  return (
    <div className="space-y-8">
      {/* Quick Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Total Sales</span>
          <p className="font-heading text-2xl font-bold mt-2 text-foreground">124,500 DA</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Active Members</span>
          <p className="font-heading text-2xl font-bold mt-2 text-foreground">342 Users</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Total Products</span>
          <p className="font-heading text-2xl font-bold mt-2 text-foreground">1,204 Items</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Pending Receipts</span>
          <p className="font-heading text-2xl font-bold mt-2 text-primary">3 Reviews</p>
        </div>
      </div>

      {/* Pending Payment Approvals List */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-heading text-lg font-bold">Pending BaridiMob Receipts</h2>
          <Link href="/admin/payments" className="text-xs font-semibold text-primary hover:underline">
            View all payments →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/40 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                <th className="py-3">Payment ID</th>
                <th className="py-3">Member</th>
                <th className="py-3">Plan</th>
                <th className="py-3">Submitted</th>
                <th className="py-3">Amount</th>
                <th className="py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {pendingReceipts.map((item) => (
                <tr key={item.id} className="text-foreground hover:bg-muted/30">
                  <td className="py-3.5 font-mono text-xs">{item.id}</td>
                  <td className="py-3.5 font-medium">{item.user}</td>
                  <td className="py-3.5 text-muted-foreground">{item.plan}</td>
                  <td className="py-3.5 text-muted-foreground">{item.date}</td>
                  <td className="py-3.5 font-semibold text-primary">{item.amount}</td>
                  <td className="py-3.5 text-right">
                    <Link
                      href={`/admin/payments/${item.id}`}
                      className="inline-flex h-8 items-center justify-center rounded bg-primary px-3 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/95 active:scale-95"
                    >
                      Review Receipt
                    </Link>
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
