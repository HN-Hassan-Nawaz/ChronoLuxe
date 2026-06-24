import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { BrandSection } from "@/components/BrandSection";
import { ProductSection } from "@/components/ProductSection";
import { TrustBadges } from "@/components/TrustBadges";
import { TestimonialSection } from "@/components/TestimonialSection";
import { Newsletter } from "@/components/Newsletter";
import { trending, newArrivals, bestSellers, premium } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChronoLuxe — Premium Luxury Watches Worldwide" },
      { name: "description", content: "Discover authentic luxury watches from Rolex, Omega, TAG Heuer and more. Premium timepieces with worldwide shipping & warranty." },
    ],
    // Injects logo.png from your public folder directly into the browser window tab metadata
    links: [
      { rel: "icon", href: "/lg.png", type: "image/png" }
    ]
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1. Hero banner component (Features auto-rotating watches every 2s) */}
      <Hero />

      {/* 2. Value props and high-level guarantees banner */}
      <TrustBadges />

      {/* 3. Trending Products section list */}
      <ProductSection eyebrow="Hot Right Now" title="Trending Watches" products={trending} viewAllTo="/shop" />

      {/* 4. Category taxonomy discovery grid (e.g., Automatic, Quartz, Luxury) */}
      <CategoryGrid />

      {/* 5. New Arrival watches showcase release tracking */}
      <ProductSection eyebrow="Just Landed" title="New Arrivals" products={newArrivals} viewAllTo="/shop" />

      {/* 6. Partner Brands auto-scrolling infinite track list loop */}
      <BrandSection />

      {/* 7. Historical/Popular Best Seller watches collection list */}
      <ProductSection eyebrow="Top Picks" title="Best Sellers" products={bestSellers} viewAllTo="/shop" />

      {/* 8. Top tier premium investment quality selections */}
      <ProductSection eyebrow="Investment Grade" title="Premium Collection" products={premium} viewAllTo="/shop" />

      {/* 9. Customer review slider infinite scroll loop animation */}
      <TestimonialSection />

      {/* 10. Engagement Capture/Marketing Footer Subscription Form */}
      <Newsletter />
    </>
  );
}