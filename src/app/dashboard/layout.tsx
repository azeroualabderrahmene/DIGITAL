import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Nav */}
      <aside className="w-64 border-r border-border/40 hidden md:flex flex-col bg-card shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-border/40">
          <Link href="/" className="font-heading text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ZED Digital
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>📊</span> Dashboard
          </Link>
          <Link href="/dashboard/library" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>📚</span> My Library
          </Link>
          <Link href="/dashboard/favorites" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>💖</span> Favorites
          </Link>
          <Link href="/dashboard/membership" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>💳</span> Membership
          </Link>
          <Link href="/dashboard/affiliate" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>🤝</span> Affiliate Dashboard
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>⚙️</span> Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-border/40">
          <Link href="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <span>←</span> Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 border-b border-border/40 bg-card/50 flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="font-heading text-lg font-bold">Member Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs px-2.5 py-0.5 rounded-full border border-primary/30 bg-primary/5 text-primary font-semibold">
              Pro Member
            </span>
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center font-bold text-sm text-secondary-foreground border border-border">
              JD
            </div>
          </div>
        </header>

        {/* Dynamic Subpage View */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
