import { Link } from "@tanstack/react-router";
import { brands } from "@/lib/data";
import { SectionHeader } from "./ProductSection";

export function BrandSection() {
  return (
    <section className="border-y border-border bg-card/30 py-16">
      <div className="container-x">
        <SectionHeader eyebrow="Featured" title="World's Most Trusted Brands" />
        <div className="grid grid-cols-3 gap-3 md:grid-cols-5 lg:grid-cols-9">
          {brands.map((b) => (
            <Link key={b.id} to="/shop" search={{ brand: b.name } as any}
              className="group flex aspect-square flex-col items-center justify-center rounded-xl border border-border bg-background p-4 text-center transition hover:border-gold">
              <span className="font-display text-base transition-colors group-hover:text-gold md:text-lg">{b.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
