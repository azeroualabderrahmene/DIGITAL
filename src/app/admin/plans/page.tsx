"use client";

import { useState } from "react";

export default function AdminPlansPage() {
  const [plans, setPlans] = useState([
    { id: "p-1", name: "Basic Tier", price: "1,500 DA", duration: "1 Month", limit: "10 items/day", active: true },
    { id: "p-2", name: "Pro Tier", price: "4,500 DA", duration: "1 Month", limit: "Unlimited", active: true },
    { id: "p-3", name: "Lifetime Access", price: "15,000 DA", duration: "Lifetime", limit: "Unlimited Forever", active: true },
  ]);

  const togglePlanActive = (id: string) => {
    setPlans(plans.map((p) => (p.id === id ? { ...p, active: !p.active } : p)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold">Membership Plans & Pricing</h1>
        <p className="text-sm text-muted-foreground mt-1">Configure subscription pricing tiers and download quotas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase font-semibold text-primary">{plan.duration}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  plan.active ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400"
                }`}>
                  {plan.active ? "ACTIVE" : "INACTIVE"}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-foreground my-4">{plan.price}</p>
              <div className="p-3 bg-background border border-border/50 rounded-lg text-xs text-muted-foreground space-y-1">
                <p><strong className="text-foreground">Quota:</strong> {plan.limit}</p>
                <p><strong className="text-foreground">Currency:</strong> DZD (BaridiMob)</p>
              </div>
            </div>
            <div className="pt-6 flex justify-between items-center text-xs">
              <button
                onClick={() => togglePlanActive(plan.id)}
                className="text-muted-foreground hover:text-foreground font-semibold"
              >
                {plan.active ? "Deactivate Plan" : "Activate Plan"}
              </button>
              <button className="text-primary font-bold hover:underline">Edit Pricing →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
