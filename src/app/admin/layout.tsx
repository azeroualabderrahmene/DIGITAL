import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-border/40 hidden md:flex flex-col bg-card shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-border/40">
          <Link href="/" className="font-heading text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ZED Admin
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>📊</span> Dashboard
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>👥</span> Users
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>📦</span> Products
          </Link>
          <Link href="/admin/categories" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>📂</span> Categories
          </Link>
          <Link href="/admin/plans" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>🎟️</span> Plans
          </Link>
          <Link href="/admin/payments" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>💵</span> Payments
            <span className="ml-auto text-[10px] bg-primary text-primary-foreground font-bold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </Link>
          <Link href="/admin/withdrawals" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>💸</span> Withdrawals
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>⚙️</span> Settings
          </Link>
          <Link href="/admin/audit-logs" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>📜</span> Audit Logs
          </Link>
        </nav>
        <div className="p-4 border-t border-border/40">
          <Link href="/" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>←</span> Back to Main Site
          </Link>
        </div>
      </aside>

      {/* Main Panel Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border/40 bg-card/50 flex items-center justify-between px-6 lg:px-8">
          <h1 className="font-heading text-lg font-bold">Admin Console</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs px-2.5 py-0.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 font-semibold">
              Super Admin
            </span>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
