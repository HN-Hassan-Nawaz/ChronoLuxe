import { Link } from "@tanstack/react-router";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { useShop } from "@/context/ShopContext";
import { QuickView } from "./QuickView";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const [quick, setQuick] = useState(false);
  const wished = isWishlisted(product.id);

  return (
    <>
      <div className="card-hover group relative overflow-hidden rounded-xl border border-border bg-card">
        <Link to="/product/$id" params={{ id: product.id }} className="block">
          <div className="relative aspect-square overflow-hidden bg-surface">
            <img src={product.image} alt={product.name} loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            {product.badge && (
              <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                product.badge === "Sale" ? "bg-destructive text-destructive-foreground" :
                product.badge === "Limited" ? "bg-gold text-gold-foreground" :
                product.badge === "New" ? "bg-foreground text-background" :
                "bg-gold/90 text-gold-foreground"
              }`}>{product.badge}</span>
            )}
            <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
                className={`grid h-9 w-9 place-items-center rounded-full backdrop-blur-md transition ${wished ? "bg-gold text-gold-foreground" : "bg-background/70 text-foreground hover:bg-gold hover:text-gold-foreground"}`}>
                <Heart className={`h-4 w-4 ${wished ? "fill-current" : ""}`} />
              </button>
              <button onClick={(e) => { e.preventDefault(); setQuick(true); }}
                className="grid h-9 w-9 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur-md transition hover:bg-gold hover:text-gold-foreground">
                <Eye className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Link>
        <div className="p-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
            <span>{product.brand}</span>
            <span className="flex items-center gap-1 text-gold"><Star className="h-3 w-3 fill-current" />{product.rating.toFixed(1)}</span>
          </div>
          <Link to="/product/$id" params={{ id: product.id }}>
            <h3 className="mt-1.5 line-clamp-1 text-base font-medium transition-colors hover:text-gold">{product.name}</h3>
          </Link>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <span className="text-lg font-semibold">${product.price.toLocaleString()}</span>
              {product.oldPrice && <span className="ml-2 text-xs text-muted-foreground line-through">${product.oldPrice.toLocaleString()}</span>}
            </div>
            <button onClick={() => addToCart(product)}
              className="inline-flex items-center gap-1.5 rounded-md bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold transition hover:bg-gold hover:text-gold-foreground">
              <ShoppingBag className="h-3.5 w-3.5" /> Add
            </button>
          </div>
        </div>
      </div>
      {quick && <QuickView product={product} onClose={() => setQuick(false)} />}
    </>
  );
}
