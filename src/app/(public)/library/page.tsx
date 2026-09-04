"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from "@/lib/products";

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAccessLevel, setSelectedAccessLevel] = useState("all");

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.categorySlug === selectedCategory;
    const matchesAccess =
      selectedAccessLevel === "all" || product.accessLevel === selectedAccessLevel;

    return matchesSearch && matchesCategory && matchesAccess;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ZED Digital
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/categories" className="hover:text-foreground transition-colors">Categories</Link>
            <Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
          </nav>
        </div>
      </header>

      {/* Catalog Main */}
      <main className="flex-1 py-12 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Digital Asset Library</h1>
            <p className="text-muted-foreground mt-2">Browse templates, courses, graphics, prompt packs and more.</p>
          </div>
          {/* Interactive Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search assets..."
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm w-full sm:w-60 focus:outline-none focus:border-primary transition-colors text-foreground"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-primary text-foreground transition-colors"
            >
              <option value="all">All Categories</option>
              {MOCK_CATEGORIES.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
            <select
              value={selectedAccessLevel}
              onChange={(e) => setSelectedAccessLevel(e.target.value)}
              className="px-3 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-primary text-foreground transition-colors"
            >
              <option value="all">All Access Tiers</option>
              <option value="BASIC">Basic</option>
              <option value="PRO">Pro</option>
              <option value="LIFETIME">Lifetime</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div key={p.id} className="flex flex-col bg-card border border-border/80 rounded-xl overflow-hidden shadow-sm transition-all hover:border-primary/40 hover:-translate-y-0.5">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <span className="text-[10px] uppercase tracking-wider bg-secondary/80 text-secondary-foreground font-semibold px-2 py-0.5 rounded">
                      {p.category} · {p.licenseType}
                    </span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                      p.accessLevel === "BASIC"
                        ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
                        : p.accessLevel === "PRO"
                        ? "border-primary/20 bg-primary/5 text-primary"
                        : "border-accent/20 bg-accent/5 text-accent"
                    }`}>
                      {p.accessLevel}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2 text-foreground line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">
                      {p.accessLevel === "BASIC" ? "Basic Included" : `${p.accessLevel} Tier`}
                    </span>
                    <Link
                      href={`/product/${p.slug}`}
                      className="text-xs font-bold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card border border-border rounded-2xl">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-heading text-xl font-bold mb-1">No digital assets found</h3>
            <p className="text-sm text-muted-foreground mb-4">Try adjusting your search keywords or filter dropdowns.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedAccessLevel("all");
              }}
              className="text-xs font-semibold text-primary hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-background">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ZED Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
