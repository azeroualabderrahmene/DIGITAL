"use client";

import { useState } from "react";
import { MOCK_PRODUCTS, ProductItem } from "@/lib/products";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<ProductItem[]>(MOCK_PRODUCTS);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Templates & Kits");
  const [newLicense, setNewLicense] = useState<"PLR" | "MRR" | "RESELL" | "LICENSED">("PLR");
  const [newResourceType, setNewResourceType] = useState<"EBOOK" | "TEMPLATE" | "COURSE" | "GRAPHIC" | "PROMPT_PACK">("TEMPLATE");
  const [newAccessLevel, setNewAccessLevel] = useState<"BASIC" | "PRO" | "LIFETIME">("BASIC");
  const [newDescription, setNewDescription] = useState("");

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const item: ProductItem = {
      id: `prod-${Date.now()}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/ /g, "-"),
      description: newDescription,
      category: newCategory,
      categorySlug: newCategory.toLowerCase().replace(/ /g, "-"),
      licenseType: newLicense,
      resourceType: newResourceType,
      accessLevel: newAccessLevel,
      downloadCount: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setProducts([item, ...products]);
    setShowAddModal(false);
    setNewTitle("");
    setNewDescription("");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold">Digital Asset Catalog Management</h1>
          <p className="text-sm text-muted-foreground mt-1">Upload, edit, and configure digital products across all membership tiers.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/95"
        >
          + Add New Asset
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/40 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                <th className="py-3">Title</th>
                <th className="py-3">Category</th>
                <th className="py-3">License</th>
                <th className="py-3">Required Tier</th>
                <th className="py-3">Downloads</th>
                <th className="py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {products.map((p) => (
                <tr key={p.id} className="text-foreground hover:bg-muted/30">
                  <td className="py-3.5 font-medium">{p.title}</td>
                  <td className="py-3.5 text-muted-foreground">{p.category}</td>
                  <td className="py-3.5 font-mono text-xs text-primary">{p.licenseType}</td>
                  <td className="py-3.5">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                      p.accessLevel === "BASIC"
                        ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
                        : p.accessLevel === "PRO"
                        ? "border-primary/20 bg-primary/5 text-primary"
                        : "border-accent/20 bg-accent/5 text-accent"
                    }`}>
                      {p.accessLevel}
                    </span>
                  </td>
                  <td className="py-3.5 text-muted-foreground font-mono text-xs">{p.downloadCount}</td>
                  <td className="py-3.5 text-right space-x-2">
                    <button className="text-xs text-muted-foreground hover:text-foreground">Edit</button>
                    <button
                      onClick={() => setProducts(products.filter((item) => item.id !== p.id))}
                      className="text-xs text-red-400 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-6 shadow-2xl space-y-4">
            <h3 className="font-heading text-xl font-bold">Add Digital Asset</h3>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Asset Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master Marketing Prompt Pack"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">License Type</label>
                  <select
                    value={newLicense}
                    onChange={(e) => setNewLicense(e.target.value as any)}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
                  >
                    <option value="PLR">PLR</option>
                    <option value="MRR">MRR</option>
                    <option value="RESELL">RESELL</option>
                    <option value="LICENSED">LICENSED</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Required Tier</label>
                  <select
                    value={newAccessLevel}
                    onChange={(e) => setNewAccessLevel(e.target.value as any)}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
                  >
                    <option value="BASIC">BASIC</option>
                    <option value="PRO">PRO</option>
                    <option value="LIFETIME">LIFETIME</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Description</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the asset content..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 border border-border rounded-lg text-xs font-semibold hover:bg-muted text-muted-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg text-xs shadow-md hover:bg-primary/95"
                >
                  Save & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
