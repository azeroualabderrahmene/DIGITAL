"use client";

import { useState } from "react";

export default function AffiliatePage() {
  const [copied, setCopied] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("5000");
  const [ccpNumber, setCcpNumber] = useState("");
  const [withdrawalSubmitted, setWithdrawalSubmitted] = useState(false);

  const referralCode = "ZED-JOHN-88";
  const referralLink = `https://zeddigital.com/register?ref=${referralCode}`;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWithdrawalSubmitted(true);
    setTimeout(() => {
      setShowWithdrawModal(false);
      setWithdrawalSubmitted(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold">Affiliate Partner Center</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Share your referral link, earn 20% recurring commissions, and request cashouts to your CCP account.
        </p>
      </div>

      {/* Referral Link Card */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="font-heading text-lg font-bold">Your Unique Referral Link</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            readOnly
            value={referralLink}
            className="flex-1 px-4 py-2.5 bg-background border border-border rounded-lg text-sm font-mono text-foreground focus:outline-none"
          />
          <button
            onClick={copyLink}
            className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg text-sm shadow-md transition-all hover:bg-primary/95 active:scale-95 shrink-0"
          >
            {copied ? "Copied! ✓" : "Copy Link 📋"}
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Earn 20% recurring commission on every subscription converted through your link.
        </p>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <span className="text-muted-foreground text-xs font-semibold uppercase">Total Referral Clicks</span>
          <p className="font-heading text-2xl font-bold mt-2">1,420</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <span className="text-muted-foreground text-xs font-semibold uppercase">Conversions</span>
          <p className="font-heading text-2xl font-bold mt-2 text-primary">34 Members</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <span className="text-muted-foreground text-xs font-semibold uppercase">Available Commission Balance</span>
          <p className="font-heading text-2xl font-bold mt-2 text-emerald-400">18,500 DA</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between">
          <span className="text-muted-foreground text-xs font-semibold uppercase">Payout Status</span>
          <button
            onClick={() => setShowWithdrawModal(true)}
            className="mt-2 w-full py-2 bg-emerald-500 text-black font-bold rounded-lg text-xs shadow-md transition-all hover:bg-emerald-400 active:scale-95"
          >
            Request Cashout 💸
          </button>
        </div>
      </div>

      {/* Referral Activity Table */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
        <h3 className="font-heading text-lg font-bold mb-4">Recent Referrals</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/40 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                <th className="py-3">Referred User</th>
                <th className="py-3">Plan Purchased</th>
                <th className="py-3">Commission Earned</th>
                <th className="py-3">Date</th>
                <th className="py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              <tr className="text-foreground">
                <td className="py-3.5 font-medium">Sofiane K.</td>
                <td className="py-3.5 text-muted-foreground">Pro Tier</td>
                <td className="py-3.5 font-bold text-emerald-400">900 DA</td>
                <td className="py-3.5 text-muted-foreground">2026-08-25</td>
                <td className="py-3.5 text-right">
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                    APPROVED
                  </span>
                </td>
              </tr>
              <tr className="text-foreground">
                <td className="py-3.5 font-medium">Amine B.</td>
                <td className="py-3.5 text-muted-foreground">Lifetime Access</td>
                <td className="py-3.5 font-bold text-emerald-400">3,000 DA</td>
                <td className="py-3.5 text-muted-foreground">2026-08-20</td>
                <td className="py-3.5 text-right">
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                    APPROVED
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Cashout Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-2xl space-y-4">
            <h3 className="font-heading text-xl font-bold">Request CCP Cashout</h3>
            <p className="text-xs text-muted-foreground">
              Minimum withdrawal threshold is 5,000 DA. Funds are sent to your CCP/BaridiMob account within 24 hours.
            </p>

            {withdrawalSubmitted ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-semibold text-center">
                ✓ Cashout request submitted successfully! Admin will review shortly.
              </div>
            ) : (
              <form onSubmit={handleWithdrawSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">
                    Withdrawal Amount (DA)
                  </label>
                  <input
                    type="number"
                    min="5000"
                    max="18500"
                    required
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">
                    CCP Account Number / RIP
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="007999990001234567 89"
                    value={ccpNumber}
                    onChange={(e) => setCcpNumber(e.target.value)}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowWithdrawModal(false)}
                    className="flex-1 py-2.5 border border-border rounded-lg text-xs font-semibold hover:bg-muted text-muted-foreground"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-emerald-500 text-black font-bold rounded-lg text-xs shadow-md hover:bg-emerald-400"
                  >
                    Submit Cashout
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
