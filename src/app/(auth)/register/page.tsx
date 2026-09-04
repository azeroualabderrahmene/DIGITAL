"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-background to-background p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <Link href="/" className="font-heading text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ZED Digital
          </Link>
          <h2 className="mt-4 text-xl font-bold">Create Account</h2>
          <p className="text-sm text-muted-foreground mt-1">Get started with our resource library</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors text-foreground"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors text-foreground"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors text-foreground"
            />
          </div>

          <div className="flex items-center mt-2">
            <input
              id="terms"
              type="checkbox"
              required
              className="h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary"
            />
            <label htmlFor="terms" className="ml-2 text-xs text-muted-foreground">
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg text-sm shadow-lg shadow-primary/10 transition-all hover:bg-primary/95 hover:shadow-primary/20 active:scale-95 mt-6"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
