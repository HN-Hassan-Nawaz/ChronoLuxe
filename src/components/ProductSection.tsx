import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";

export function ProductSection({ title, eyebrow, products, viewAllTo, viewAllSearch }: {
  title: string;
  eyebrow?: string;
  products: Product[];
  viewAllTo?: string;
  viewAllSearch?: Record<string, string>;
}) {
  return (
    <section className="container-x py-16 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-gold">{eyebrow}</div>}
          <h2 className="mt-2 font-display text-3xl md:text-4xl">{title}</h2>
        </div>
        {viewAllTo && (
          <Link to={viewAllTo as any} search={viewAllSearch as any} className="hidden text-sm text-foreground/80 underline-offset-4 transition hover:text-gold hover:underline md:inline">
            View all →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {products.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-gold">{eyebrow}</div>}
      <h2 className="mt-2 font-display text-3xl md:text-4xl">{title}</h2>
      {children && <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">{children}</p>}
    </div>
  );
}
