"use client";

import { useState, use } from "react";
import Link from "next/link";

interface PaymentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function PaymentReviewPage({ params }: PaymentDetailPageProps) {
  const resolvedParams = use(params);
  const paymentId = resolvedParams.id;

  const [status, setStatus] = useState<"PENDING" | "APPROVED" | "REJECTED">("PENDING");
  const [adminNotes, setAdminNotes] = useState("");
  const [actionSuccessMessage, setActionSuccessMessage] = useState("");

  const handleAction = (newStatus: "APPROVED" | "REJECTED") => {
    setStatus(newStatus);
    setActionSuccessMessage(
      newStatus === "APPROVED"
        ? "Payment approved! Member account subscription activated immediately."
        : "Payment rejected. Notification sent to member."
    );
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/admin/payments" className="text-xs font-semibold text-muted-foreground hover:text-foreground">
            ← Back to Payments List
          </Link>
          <h1 className="font-heading text-2xl font-bold mt-2">BaridiMob Receipt Review: {paymentId}</h1>
        </div>
        <span className={`text-xs px-3 py-1 rounded-full font-bold border ${
          status === "PENDING"
            ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
            : status === "APPROVED"
            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            : "border-red-500/30 bg-red-500/10 text-red-400"
        }`}>
          Status: {status}
        </span>
      </div>

      {actionSuccessMessage && (
        <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl text-primary text-xs font-semibold">
          {actionSuccessMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Receipt Document Preview */}
        <div className="md:col-span-6 bg-card border border-border rounded-2xl p-6 space-y-4">
          <h3 className="font-heading text-lg font-bold">Uploaded BaridiMob Receipt</h3>
          <div className="bg-background border-2 border-dashed border-border rounded-xl h-80 flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
            <div className="text-5xl mb-3">📄</div>
            <span className="font-mono text-xs font-bold text-foreground mb-1">Receipt_BaridiMob_{paymentId}.jpg</span>
            <span className="text-[10px] text-muted-foreground">Size: 1.4 MB · Format: JPEG</span>
            <a
              href={`/api/receipts/${paymentId}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-4 py-2 bg-secondary text-secondary-foreground text-xs font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
            >
              Open Full Document ↗
            </a>
          </div>
        </div>

        {/* Transaction Metadata & Actions */}
        <div className="md:col-span-6 bg-card border border-border rounded-2xl p-6 space-y-6">
          <h3 className="font-heading text-lg font-bold">Transaction Information</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-border/40">
              <span className="text-muted-foreground text-xs">Submitted By</span>
              <span className="font-bold text-foreground">Karim Brahimi (karim@example.com)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/40">
              <span className="text-muted-foreground text-xs">Target Plan</span>
              <span className="font-bold text-foreground">Pro Tier Membership</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/40">
              <span className="text-muted-foreground text-xs">Amount Paid</span>
              <span className="font-bold text-primary">4,500 DA</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/40">
              <span className="text-muted-foreground text-xs">Transfer Reference</span>
              <span className="font-mono font-bold text-foreground">ZED-PRO-CONFIRM</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border/40">
              <span className="text-muted-foreground text-xs">Submission Time</span>
              <span className="text-muted-foreground">2026-08-27 14:02 UTC</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">
              Admin Review Notes / Rejection Reason
            </label>
            <textarea
              rows={3}
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.target.value)}
              placeholder="Enter notes visible to admin team or reason if rejecting..."
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-xs text-foreground focus:outline-none focus:border-primary"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              onClick={() => handleAction("REJECTED")}
              className="flex-1 py-2.5 bg-red-500/10 border border-red-500/30 text-red-400 font-bold rounded-lg text-xs hover:bg-red-500/20 transition-all active:scale-95"
            >
              Reject Payment ✕
            </button>
            <button
              onClick={() => handleAction("APPROVED")}
              className="flex-1 py-2.5 bg-emerald-500 text-black font-bold rounded-lg text-xs shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all active:scale-95"
            >
              Approve Payment ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
