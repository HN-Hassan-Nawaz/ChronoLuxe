import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, Heart, ShoppingBag, User } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { categories } from "@/lib/data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/brands", label: "Brands" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const { cart, wishlist } = useShop();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl tracking-tight md:text-2xl">
            Chrono<span className="gold-gradient-text">Luxe</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.to;
            if (n.label === "Categories") {
              return (
                <div key={n.to} onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)} className="relative">
                  <Link to={n.to} className={`text-sm tracking-wide transition-colors hover:text-gold ${active ? "text-gold" : "text-foreground/80"}`}>
                    {n.label}
                  </Link>
                  {mega && (
                    <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4">
                      <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-card p-4 shadow-2xl">
                        {categories.map((c) => (
                          <Link key={c.id} to="/shop" search={{ category: c.id } as any} className="rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-gold">
                            <div className="font-medium">{c.name}</div>
                            <div className="text-xs text-muted-foreground">{c.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link key={n.to} to={n.to} className={`text-sm tracking-wide transition-colors hover:text-gold ${active ? "text-gold" : "text-foreground/80"}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <Link to="/shop" className="rounded-full p-2 text-foreground/80 transition hover:bg-secondary hover:text-gold"><Search className="h-5 w-5" /></Link>
          <Link to="/wishlist" className="relative rounded-full p-2 text-foreground/80 transition hover:bg-secondary hover:text-gold">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] font-bold text-gold-foreground">{wishlist.length}</span>}
          </Link>
          <Link to="/cart" className="relative rounded-full p-2 text-foreground/80 transition hover:bg-secondary hover:text-gold">
            <ShoppingBag className="h-5 w-5" />
            {cart.length > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] font-bold text-gold-foreground">{cart.reduce((s, i) => s + i.qty, 0)}</span>}
          </Link>
          <Link to="/login" className="hidden rounded-full p-2 text-foreground/80 transition hover:bg-secondary hover:text-gold md:block"><User className="h-5 w-5" /></Link>
          <button onClick={() => setOpen(!open)} className="rounded-full p-2 text-foreground/80 transition hover:bg-secondary lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-foreground/80 transition hover:bg-secondary hover:text-gold">
                {n.label}
              </Link>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-foreground/80 transition hover:bg-secondary hover:text-gold">Login / Register</Link>
          </div>
        </div>
      )}
    </header>
  );
}
