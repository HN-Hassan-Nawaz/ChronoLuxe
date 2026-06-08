import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar, type Filters } from "@/components/FilterSidebar";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [{ title: "Shop All Watches — ChronoLuxe" }, { name: "description", content: "Browse our full catalog of luxury, smart, sports, vintage and affordable watches." }] }),
  validateSearch: (s: Record<string, unknown>): { category?: string; brand?: string } => ({
    category: typeof s.category === "string" ? s.category : undefined,
    brand: typeof s.brand === "string" ? s.brand : undefined,
  }),
  component: Shop,
});

function Shop() {
  const search = Route.useSearch();
  const [filters, setFilters] = useState<Filters>({ category: search.category, brand: search.brand });
  const [drawer, setDrawer] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (filters.category) list = list.filter((p) => p.category === filters.category);
    if (filters.brand) list = list.filter((p) => p.brand === filters.brand);
    if (filters.gender) list = list.filter((p) => p.gender === filters.gender);
    if (filters.maxPrice) list = list.filter((p) => p.price <= filters.maxPrice!);
    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }
    switch (filters.sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "newest": list.sort((a, b) => Number(!!b.newArrival) - Number(!!a.newArrival)); break;
      case "popular": list.sort((a, b) => b.reviews - a.reviews); break;
    }
    return list;
  }, [filters]);

  return (
    <div className="container-x py-10">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl md:text-5xl">Shop Watches</h1>
          <p className="mt-2 text-sm text-muted-foreground">{filtered.length} pieces · curated worldwide</p>
        </div>
        <div className="flex items-center gap-2">
          <select value={filters.sort || ""} onChange={(e) => setFilters({ ...filters, sort: e.target.value || undefined })}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-gold">
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
            <option value="popular">Popularity</option>
          </select>
          <button onClick={() => setDrawer(true)} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm lg:hidden">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="hidden lg:block"><FilterSidebar filters={filters} setFilters={setFilters} /></div>
        <div>
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-16 text-center">
              <h3 className="font-display text-2xl">No watches match your filters</h3>
              <p className="mt-2 text-sm text-muted-foreground">Try adjusting the filters or reset.</p>
              <button onClick={() => setFilters({})} className="mt-5 rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-gold-foreground">Reset Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>

      {drawer && (
        <div className="fixed inset-0 z-[90] flex lg:hidden">
          <div className="flex-1 bg-background/80 backdrop-blur-sm" onClick={() => setDrawer(false)} />
          <div className="w-[85%] max-w-sm overflow-y-auto bg-background p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-xl">Filters</h3>
              <button onClick={() => setDrawer(false)}><X className="h-5 w-5" /></button>
            </div>
            <FilterSidebar filters={filters} setFilters={setFilters} onClose={() => setDrawer(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
