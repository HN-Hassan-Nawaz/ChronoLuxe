import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/data";
import { SectionHeader } from "./ProductSection";

export function CategoryGrid() {
  return (
    <section className="container-x py-16 md:py-20">
      <SectionHeader eyebrow="Curated" title="Shop by Category">
        From everyday companions to grail-worthy collectibles — find your category.
      </SectionHeader>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {categories.map((c) => (
          <Link key={c.id} to="/shop" search={{ category: c.id } as any}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-card">
            <img src={c.image} alt={c.name} loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 p-4 md:p-5">
              <h3 className="font-display text-lg md:text-xl">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.description}</p>
              <span className="mt-2 inline-block text-xs text-gold opacity-0 transition-opacity group-hover:opacity-100">Explore →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
