"use client";

import { useState, use } from "react";
import Link from "next/link";

interface CheckoutPageProps {
  params: Promise<{
    planSlug: string;
  }>;
}

export default function CheckoutPage({ params }: CheckoutPageProps) {
  const resolvedParams = use(params);
  const planSlug = resolvedParams.planSlug;

  const [referenceNote, setReferenceNote] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const getPlanDetails = (slug: string) => {
    switch (slug.toLowerCase()) {
      case "pro":
        return { name: "Pro Membership Tier", price: "4,500 DA", duration: "1 Month" };
      case "lifetime":
        return { name: "Lifetime Access Tier", price: "15,000 DA", duration: "Lifetime" };
      case "basic":
      default:
        return { name: "Basic Membership Tier", price: "1,500 DA", duration: "1 Month" };
    }
  };

  const plan = getPlanDetails(planSlug);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/payments/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planSlug,
          referenceNote,
          fileName: selectedFile ? selectedFile.name : "receipt.png",
        }),
      });
      const data = await res.json();
      if (data.status === "success") {
        setSubmittedId(data.paymentId);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ZED Digital
          </Link>
          <span className="text-xs text-muted-foreground font-semibold">🔒 Secure BaridiMob Checkout</span>
        </div>
      </header>

      {/* Checkout Area */}
      <main className="flex-1 py-12 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Checkout Form / Instructions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: BaridiMob Instructions */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">1</span>
                BaridiMob Manual Transfer Instructions
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Please send the total order amount to the following CCP account using your BaridiMob application or a local post office transfer:
                </p>
                <div className="bg-background border border-border rounded-lg p-4 font-mono space-y-2 text-foreground">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-xs font-sans">RIP/CCP Account:</span>
                    <span className="font-bold select-all">007999990001234567 89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-xs font-sans">Account Holder:</span>
                    <span className="font-bold">ZED Digital Inc.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-xs font-sans">Transfer Reference:</span>
                    <span className="font-bold text-primary select-all">ZED-{planSlug.toUpperCase()}-CONFIRM</span>
                  </div>
                </div>
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg text-xs text-foreground/80 flex gap-2">
                  <span>💡</span>
                  <p>Make sure to write the Transfer Reference in the notes section of BaridiMob to speed up approval.</p>
                </div>
              </div>
            </div>

            {/* Step 2: Upload Proof of Receipt */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">2</span>
                Submit Payment Receipt
              </h2>

              {submittedId ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-3 text-center">
                  <div className="text-3xl">🎉</div>
                  <h3 className="font-heading text-lg font-bold text-emerald-400">Receipt Submitted Successfully!</h3>
                  <p className="text-xs text-muted-foreground">
                    Your Payment ID is <strong className="font-mono text-foreground">{submittedId}</strong>. Our admin team will review your receipt within 1-2 hours and activate your membership.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/dashboard/membership"
                      className="inline-flex h-9 items-center justify-center rounded-lg bg-emerald-500 text-black font-bold px-4 text-xs shadow-md hover:bg-emerald-400"
                    >
                      Track in Dashboard →
                    </Link>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Reference Note (Optional)
                    </label>
                    <input
                      type="text"
                      value={referenceNote}
                      onChange={(e) => setReferenceNote(e.target.value)}
                      placeholder="Transaction number or message for admin..."
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Upload receipt (JPEG, PNG, or PDF - Max 5MB)
                    </label>
                    <label className="block border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer bg-background/50">
                      <div className="text-2xl mb-2">📄</div>
                      <p className="text-xs text-foreground font-semibold">
                        {selectedFile ? selectedFile.name : "Drag and drop file here, or click to browse"}
                      </p>
                      <span className="text-[10px] text-muted-foreground block mt-1">Accepted: JPG, PNG, PDF</span>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*,application/pdf"
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg text-sm shadow-lg shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-primary/30 active:scale-95 mt-4 disabled:opacity-50"
                  >
                    {submitting ? "Submitting Receipt..." : "Submit Payment for Review 🚀"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Order Summary */}
          <div className="lg:col-span-5 bg-card border border-border rounded-xl p-6">
            <h2 className="font-heading text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between pb-4 border-b border-border/40">
                <div>
                  <p className="font-semibold text-foreground">{plan.name}</p>
                  <p className="text-xs text-muted-foreground">Duration: {plan.duration}</p>
                </div>
                <span className="font-bold text-foreground">{plan.price}</span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-2">
                <span>Total Amount Due</span>
                <span className="text-primary font-bold">{plan.price}</span>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg text-xs text-muted-foreground leading-relaxed">
                Orders are processed manually. Once you upload your transfer receipt, our admin team will review it. Upon verification, your membership will activate immediately.
              </div>
              <div className="text-center pt-2">
                <Link href="/pricing" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  ← Back to pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
