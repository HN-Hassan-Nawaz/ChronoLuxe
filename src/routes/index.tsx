import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { BrandSection } from "@/components/BrandSection";
import { ProductSection } from "@/components/ProductSection";
import { TrustBadges } from "@/components/TrustBadges";
import { TestimonialSection } from "@/components/TestimonialSection";
import { Newsletter } from "@/components/Newsletter";
import { trending, newArrivals, bestSellers, premium, affordable } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChronoLuxe — Premium & Affordable Watches Worldwide" },
      { name: "description", content: "Discover authentic watches from Rolex, Omega, TAG Heuer, Tissot, Seiko, Casio and more. Worldwide shipping & warranty." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ProductSection eyebrow="Hot Right Now" title="Trending Watches" products={trending} viewAllTo="/shop" />
      <CategoryGrid />
      <ProductSection eyebrow="Just Landed" title="New Arrivals" products={newArrivals} viewAllTo="/shop" />
      <BrandSection />
      <ProductSection eyebrow="Top Picks" title="Best Sellers" products={bestSellers} viewAllTo="/shop" />
      <ProductSection eyebrow="Investment Grade" title="Premium Collection" products={premium} viewAllTo="/shop" />
      <ProductSection eyebrow="Style For Everyone" title="Affordable Collection" products={affordable} viewAllTo="/shop" />
      <TestimonialSection />
      <Newsletter />
    </>
  );
}
