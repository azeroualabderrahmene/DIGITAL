import Link from "next/link";
import { MOCK_PRODUCTS } from "@/lib/products";

export default function FavoritesPage() {
  const favoriteProducts = [MOCK_PRODUCTS[0], MOCK_PRODUCTS[2], MOCK_PRODUCTS[4]];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold">Saved Favorites</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Quickly access your bookmarked templates, prompts, and masterclasses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteProducts.map((p) => (
          <div
            key={p.id}
            className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-primary/40 transition-all shadow-sm"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                  {p.category}
                </span>
                <span className="text-xs text-rose-400">💖 Favorited</span>
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2 line-clamp-1">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-6">
                {p.description}
              </p>
            </div>

            <div className="pt-4 border-t border-border/40 flex items-center justify-between">
              <Link
                href={`/product/${p.slug}`}
                className="text-xs font-semibold text-primary hover:underline"
              >
                View Asset →
              </Link>
              <a
                href={`/api/access/${p.id}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 items-center justify-center rounded bg-primary px-3 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/95"
              >
                Download ⚡
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
