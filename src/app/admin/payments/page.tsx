import Link from "next/link";

export default function AdminPaymentsPage() {
  const allPayments = [
    { id: "PAY-9912", user: "Karim Brahimi", plan: "Pro Tier", date: "2026-08-27 14:02", amount: "4,500 DA", status: "PENDING" },
    { id: "PAY-9913", user: "Lydia Benmeddour", plan: "Basic Tier", date: "2026-08-27 13:40", amount: "1,500 DA", status: "PENDING" },
    { id: "PAY-9914", user: "Samir Ould", plan: "Lifetime Access", date: "2026-08-27 12:15", amount: "15,000 DA", status: "PENDING" },
    { id: "PAY-8810", user: "Yacine Belkacem", plan: "Pro Tier", date: "2026-08-26 09:10", amount: "4,500 DA", status: "APPROVED" },
    { id: "PAY-8809", user: "Farid Khelifi", plan: "Basic Tier", date: "2026-08-25 18:30", amount: "1,500 DA", status: "REJECTED" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold">BaridiMob Payment Submissions</h1>
          <p className="text-sm text-muted-foreground mt-1">Review, approve, or reject member transaction receipts.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/40 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                <th className="py-3">Payment ID</th>
                <th className="py-3">Member</th>
                <th className="py-3">Plan</th>
                <th className="py-3">Submitted</th>
                <th className="py-3">Amount</th>
                <th className="py-3">Status</th>
                <th className="py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {allPayments.map((item) => (
                <tr key={item.id} className="text-foreground hover:bg-muted/30">
                  <td className="py-3.5 font-mono text-xs">{item.id}</td>
                  <td className="py-3.5 font-medium">{item.user}</td>
                  <td className="py-3.5 text-muted-foreground">{item.plan}</td>
                  <td className="py-3.5 text-muted-foreground">{item.date}</td>
                  <td className="py-3.5 font-semibold text-primary">{item.amount}</td>
                  <td className="py-3.5">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                      item.status === "PENDING"
                        ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                        : item.status === "APPROVED"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border-red-500/30 bg-red-500/10 text-red-400"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <Link
                      href={`/admin/payments/${item.id}`}
                      className="inline-flex h-8 items-center justify-center rounded bg-primary px-3 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/95"
                    >
                      {item.status === "PENDING" ? "Review Receipt" : "View Details"}
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
