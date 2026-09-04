"use client";

import { useState } from "react";

interface UserItem {
  id: string;
  name: string;
  email: string;
  role: "MEMBER" | "ADMIN" | "AFFILIATE";
  status: "ACTIVE" | "SUSPENDED";
  joinedDate: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserItem[]>([
    { id: "u-1", name: "ZED Admin", email: "admin@zeddigital.com", role: "ADMIN", status: "ACTIVE", joinedDate: "2026-08-01" },
    { id: "u-2", name: "John Doe", email: "member@zeddigital.com", role: "MEMBER", status: "ACTIVE", joinedDate: "2026-08-10" },
    { id: "u-3", name: "Sofiane Khelifa", email: "sofiane@example.com", role: "AFFILIATE", status: "ACTIVE", joinedDate: "2026-08-15" },
    { id: "u-4", name: "Meriem B.", email: "meriem@example.com", role: "MEMBER", status: "SUSPENDED", joinedDate: "2026-08-18" },
  ]);

  const toggleStatus = (id: string) => {
    setUsers(
      users.map((u) =>
        u.id === id ? { ...u, status: u.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE" } : u
      )
    );
  };

  const toggleRole = (id: string, role: "MEMBER" | "ADMIN" | "AFFILIATE") => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold">User Account Management</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage user roles, subscription statuses, and administrative privileges.</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/40 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                <th className="py-3">User</th>
                <th className="py-3">Role</th>
                <th className="py-3">Account Status</th>
                <th className="py-3">Joined Date</th>
                <th className="py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {users.map((u) => (
                <tr key={u.id} className="text-foreground hover:bg-muted/30">
                  <td className="py-3.5">
                    <p className="font-medium text-foreground">{u.name}</p>
                    <p className="text-xs text-muted-foreground">{u.email}</p>
                  </td>
                  <td className="py-3.5">
                    <select
                      value={u.role}
                      onChange={(e) => toggleRole(u.id, e.target.value as any)}
                      className="px-2 py-1 bg-background border border-border rounded text-xs text-foreground focus:outline-none"
                    >
                      <option value="MEMBER">MEMBER</option>
                      <option value="AFFILIATE">AFFILIATE</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  </td>
                  <td className="py-3.5">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                      u.status === "ACTIVE"
                        ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
                        : "border-red-500/20 bg-red-500/5 text-red-400"
                    }`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-muted-foreground text-xs">{u.joinedDate}</td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => toggleStatus(u.id)}
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      {u.status === "ACTIVE" ? "Suspend User" : "Activate User"}
                    </button>
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
