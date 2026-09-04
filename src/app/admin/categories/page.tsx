"use client";

import { useState } from "react";
import { MOCK_CATEGORIES } from "@/lib/products";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState(MOCK_CATEGORIES);
  const [showAddModal, setShowAddModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setCategories([
      ...categories,
      {
        name,
        slug: name.toLowerCase().replace(/ /g, "-"),
        description,
        icon: "📁",
        count: 0,
      },
    ]);
    setShowAddModal(false);
    setName("");
    setDescription("");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold">Category Management</h1>
          <p className="text-sm text-muted-foreground mt-1">Organize digital assets into curated catalog collections.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/95"
        >
          + New Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.slug} className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-xs text-muted-foreground font-mono">{cat.count} items</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{cat.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{cat.description}</p>
            </div>
            <div className="pt-4 border-t border-border/40 flex justify-end gap-3 text-xs">
              <button className="text-muted-foreground hover:text-foreground font-semibold">Edit</button>
              <button
                onClick={() => setCategories(categories.filter((c) => c.slug !== cat.slug))}
                className="text-red-400 hover:underline font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-2xl space-y-4">
            <h3 className="font-heading text-xl font-bold">Add New Category</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Category Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Notion Templates"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Description</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Category description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  Create Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
