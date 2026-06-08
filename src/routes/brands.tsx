import { createFileRoute, Link } from "@tanstack/react-router";
import { brands, products } from "@/lib/data";

export const Route = createFileRoute("/brands")({
  head: () => ({ meta: [{ title: "Brands — ChronoLuxe" }, { name: "description", content: "Browse the world's most iconic watch brands." }] }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <div className="container-x py-12">
      <div className="text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Our Houses</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Featured Brands</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">From Swiss heritage to Japanese precision — discover the makers that define time.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {brands.map((b) => {
          const count = products.filter((p) => p.brand === b.name).length;
          return (
            <Link key={b.id} to="/shop" search={{ brand: b.name } as any}
              className="card-hover group rounded-2xl border border-border bg-card p-8 transition hover:border-gold">
              <div className="font-display text-3xl transition-colors group-hover:text-gold">{b.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.tagline}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs">
                <span className="text-muted-foreground">{count} watches</span>
                <span className="text-gold">Explore →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
