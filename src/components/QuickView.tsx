import { X, Star, ShoppingBag, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/types";
import { useShop } from "@/context/ShopContext";

export function QuickView({ product, onClose }: { product: Product; onClose: () => void }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const wished = isWishlisted(product.id);
  return (
    <div onClick={onClose} className="fixed inset-0 z-[90] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm animate-fade-in">
      <div onClick={(e) => e.stopPropagation()} className="relative grid w-full max-w-4xl gap-0 overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2">
        <button onClick={onClose} className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/80 text-foreground transition hover:bg-gold hover:text-gold-foreground">
          <X className="h-4 w-4" />
        </button>
        <div className="aspect-square bg-surface">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-8">
          <div className="text-xs uppercase tracking-wider text-gold">{product.brand}</div>
          <h2 className="text-2xl font-display">{product.name}</h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 text-gold"><Star className="h-4 w-4 fill-current" />{product.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({product.reviews} reviews)</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-semibold">${product.price.toLocaleString()}</span>
            {product.oldPrice && <span className="text-sm text-muted-foreground line-through">${product.oldPrice.toLocaleString()}</span>}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            <button onClick={() => { addToCart(product); onClose(); }} className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-medium text-gold-foreground transition hover:opacity-90">
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
            <button onClick={() => toggleWishlist(product)} className={`inline-flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm transition ${wished ? "border-gold bg-gold text-gold-foreground" : "border-border hover:border-gold hover:text-gold"}`}>
              <Heart className={`h-4 w-4 ${wished ? "fill-current" : ""}`} />
            </button>
            <Link to="/product/$id" params={{ id: product.id }} onClick={onClose} className="inline-flex items-center justify-center rounded-md border border-border px-4 py-3 text-sm transition hover:border-gold hover:text-gold">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
