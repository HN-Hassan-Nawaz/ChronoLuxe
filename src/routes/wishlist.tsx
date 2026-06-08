import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — ChronoLuxe" }] }),
  component: Wishlist,
});

function Wishlist() {
  const { wishlist } = useShop();
  return (
    <div className="container-x py-10">
      <h1 className="font-display text-4xl">Your Wishlist</h1>
      <p className="mt-2 text-sm text-muted-foreground">{wishlist.length} saved pieces</p>
      {wishlist.length === 0 ? (
        <div className="mt-12 rounded-xl border border-border bg-card p-16 text-center">
          <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 font-display text-2xl">No favorites yet</h2>
          <p className="mt-2 text-sm text-muted-foreground">Start saving watches you love.</p>
          <Link to="/shop" className="mt-5 inline-block rounded-md bg-gold px-6 py-3 text-sm font-medium text-gold-foreground">Browse Watches</Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {wishlist.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
