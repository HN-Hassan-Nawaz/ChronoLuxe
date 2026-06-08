import { brands, categories } from "@/lib/data";

export interface Filters {
  category?: string;
  brand?: string;
  gender?: string;
  maxPrice?: number;
  search?: string;
  sort?: string;
}

export function FilterSidebar({ filters, setFilters, onClose }: {
  filters: Filters;
  setFilters: (f: Filters) => void;
  onClose?: () => void;
}) {
  const set = (k: keyof Filters, v: any) => setFilters({ ...filters, [k]: v || undefined });

  return (
    <aside className="space-y-6 rounded-xl border border-border bg-card/50 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg">Filters</h3>
        <button onClick={() => setFilters({})} className="text-xs text-gold hover:underline">Reset</button>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Search</label>
        <input value={filters.search || ""} onChange={(e) => set("search", e.target.value)}
          placeholder="Search watches…" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-gold" />
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Category</label>
        <div className="space-y-1.5">
          {categories.map((c) => (
            <button key={c.id} onClick={() => set("category", filters.category === c.id ? "" : c.id)}
              className={`block w-full rounded px-2 py-1.5 text-left text-sm transition ${filters.category === c.id ? "bg-gold/10 text-gold" : "hover:bg-secondary"}`}>
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Brand</label>
        <div className="grid grid-cols-2 gap-1.5">
          {brands.map((b) => (
            <button key={b.id} onClick={() => set("brand", filters.brand === b.name ? "" : b.name)}
              className={`rounded border px-2 py-1.5 text-xs transition ${filters.brand === b.name ? "border-gold bg-gold/10 text-gold" : "border-border hover:border-gold"}`}>
              {b.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Gender</label>
        <div className="flex gap-2">
          {["men", "women", "unisex"].map((g) => (
            <button key={g} onClick={() => set("gender", filters.gender === g ? "" : g)}
              className={`flex-1 rounded border px-2 py-1.5 text-xs capitalize transition ${filters.gender === g ? "border-gold bg-gold/10 text-gold" : "border-border hover:border-gold"}`}>
              {g}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
          <span>Max Price</span>
          <span className="text-gold">${(filters.maxPrice ?? 100000).toLocaleString()}</span>
        </label>
        <input type="range" min={100} max={100000} step={100} value={filters.maxPrice ?? 100000}
          onChange={(e) => set("maxPrice", +e.target.value)} className="w-full accent-[#d4af37]" />
      </div>

      {onClose && (
        <button onClick={onClose} className="w-full rounded-md bg-gold py-2.5 text-sm font-medium text-gold-foreground">
          Apply Filters
        </button>
      )}
    </aside>
  );
}
