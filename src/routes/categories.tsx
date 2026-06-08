import { createFileRoute } from "@tanstack/react-router";
import { CategoryGrid } from "@/components/CategoryGrid";

export const Route = createFileRoute("/categories")({
  head: () => ({ meta: [{ title: "Categories — ChronoLuxe" }, { name: "description", content: "Shop watches by category — luxury, smart, sports, vintage, and more." }] }),
  component: () => (
    <div className="pb-10 pt-6">
      <div className="container-x text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Browse</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">All Categories</h1>
      </div>
      <CategoryGrid />
    </div>
  ),
});
