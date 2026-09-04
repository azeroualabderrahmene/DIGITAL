"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("ZED Digital");
  const [supportEmail, setSupportEmail] = useState("support@zeddigital.com");
  const [ccpAccount, setCcpAccount] = useState("007999990001234567 89");
  const [accountHolder, setAccountHolder] = useState("ZED Digital Inc.");
  const [commissionRate, setCommissionRate] = useState("20");
  const [minWithdrawal, setMinWithdrawal] = useState("5000");
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="font-heading text-2xl font-bold">System & Payment Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Configure global BaridiMob account credentials, affiliate rates, and site defaults.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {saved && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-semibold">
            ✓ System settings updated successfully!
          </div>
        )}

        {/* BaridiMob CCP Account Config */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="font-heading text-lg font-bold">BaridiMob CCP Payment Configuration</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">RIP/CCP Account Number</label>
              <input
                type="text"
                required
                value={ccpAccount}
                onChange={(e) => setCcpAccount(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm font-mono text-foreground focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">Account Holder Name</label>
              <input
                type="text"
                required
                value={accountHolder}
                onChange={(e) => setAccountHolder(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Affiliate Commission Config */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="font-heading text-lg font-bold">Affiliate Program Settings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">Default Commission Rate (%)</label>
              <input
                type="number"
                required
                value={commissionRate}
                onChange={(e) => setCommissionRate(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">Minimum Cashout Threshold (DA)</label>
              <input
                type="number"
                required
                value={minWithdrawal}
                onChange={(e) => setMinWithdrawal(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* General Site Config */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="font-heading text-lg font-bold">General Site Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">Platform Name</label>
              <input
                type="text"
                required
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase mb-2">Support Email</label>
              <input
                type="email"
                required
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg text-sm shadow-md hover:bg-primary/95 active:scale-95"
          >
            Save Global Settings
          </button>
        </div>
      </form>
    </div>
  );
}
