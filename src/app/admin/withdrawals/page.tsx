"use client";

import { useState } from "react";

export default function AdminWithdrawalsPage() {
  const [withdrawals, setWithdrawals] = useState([
    { id: "W-1092", affiliate: "John Doe (ZED-JOHN-88)", amount: "5,000 DA", ccp: "007999990001234567 89", date: "2026-08-27 10:15", status: "PENDING" },
    { id: "W-1088", affiliate: "Sofiane K. (ZED-SOFI-22)", amount: "12,000 DA", ccp: "007999990009876543 21", date: "2026-08-20 16:30", status: "APPROVED" },
  ]);

  const handleStatusChange = (id: string, newStatus: "APPROVED" | "REJECTED") => {
    setWithdrawals(withdrawals.map((w) => (w.id === id ? { ...w, status: newStatus } : w)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold">Affiliate Cashout Requests</h1>
        <p className="text-sm text-muted-foreground mt-1">Review and process affiliate commission withdrawal requests.</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/40 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                <th className="py-3">Withdrawal ID</th>
                <th className="py-3">Affiliate Partner</th>
                <th className="py-3">Amount</th>
                <th className="py-3">CCP Target Account</th>
                <th className="py-3">Requested Date</th>
                <th className="py-3">Status</th>
                <th className="py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {withdrawals.map((w) => (
                <tr key={w.id} className="text-foreground hover:bg-muted/30">
                  <td className="py-3.5 font-mono text-xs">{w.id}</td>
                  <td className="py-3.5 font-medium">{w.affiliate}</td>
                  <td className="py-3.5 font-bold text-emerald-400">{w.amount}</td>
                  <td className="py-3.5 font-mono text-xs text-muted-foreground">{w.ccp}</td>
                  <td className="py-3.5 text-muted-foreground text-xs">{w.date}</td>
                  <td className="py-3.5">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                      w.status === "PENDING"
                        ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                        : w.status === "APPROVED"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border-red-500/30 bg-red-500/10 text-red-400"
                    }`}>
                      {w.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right space-x-2">
                    {w.status === "PENDING" ? (
                      <>
                        <button
                          onClick={() => handleStatusChange(w.id, "REJECTED")}
                          className="text-xs text-red-400 hover:underline"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleStatusChange(w.id, "APPROVED")}
                          className="inline-flex h-7 items-center justify-center rounded bg-emerald-500 px-3 text-xs font-bold text-black transition-all hover:bg-emerald-400"
                        >
                          Mark Paid ✓
                        </button>
                      </>
                    ) : (
                      <span className="text-xs text-muted-foreground">Processed</span>
                    )}
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
