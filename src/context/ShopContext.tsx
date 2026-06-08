import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "@/lib/types";

interface CartItem { product: Product; qty: number }

interface ShopState {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (p: Product, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (p: Product) => void;
  isWishlisted: (id: string) => boolean;
  toast: (msg: string) => void;
}

const Ctx = createContext<ShopState | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [toasts, setToasts] = useState<{ id: number; msg: string }[]>([]);

  useEffect(() => {
    try {
      const c = localStorage.getItem("cart");
      const w = localStorage.getItem("wishlist");
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch {}
  }, []);

  useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("wishlist", JSON.stringify(wishlist)); }, [wishlist]);

  const toast = (msg: string) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2400);
  };

  const addToCart: ShopState["addToCart"] = (p, qty = 1) => {
    setCart((c) => {
      const found = c.find((i) => i.product.id === p.id);
      if (found) return c.map((i) => i.product.id === p.id ? { ...i, qty: i.qty + qty } : i);
      return [...c, { product: p, qty }];
    });
    toast(`Added "${p.name}" to cart`);
  };
  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.product.id !== id));
  const updateQty = (id: string, qty: number) =>
    setCart((c) => c.map((i) => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  const clearCart = () => setCart([]);

  const toggleWishlist = (p: Product) => {
    setWishlist((w) => {
      const exists = w.find((x) => x.id === p.id);
      if (exists) { toast("Removed from wishlist"); return w.filter((x) => x.id !== p.id); }
      toast("Added to wishlist"); return [...w, p];
    });
  };
  const isWishlisted = (id: string) => wishlist.some((w) => w.id === id);

  return (
    <Ctx.Provider value={{ cart, wishlist, addToCart, removeFromCart, updateQty, clearCart, toggleWishlist, isWishlisted, toast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
        {toasts.map((t) => (
          <div key={t.id} className="animate-fade-in rounded-md border border-gold/30 bg-card px-4 py-3 text-sm text-foreground shadow-2xl">
            {t.msg}
          </div>
        ))}
      </div>
    </Ctx.Provider>
  );
}

export function useShop() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useShop must be inside ShopProvider");
  return ctx;
}
