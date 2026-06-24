import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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

  // Prevent background page body from scrolling when the menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between gap-4 md:h-24">
        
        {/* Logo */}
        <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
          <img 
            src="/lg.png" 
            alt="ChronoLuxe" 
            className="h-20 w-auto object-contain md:h-24" 
          />
        </Link>

        {/* Desktop Nav */}
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

        {/* Right Icons */}
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

      {/* MOBILE OVERLAY WITH REDUCED Y-AXIS GAP */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-[9999] bg-[#0a0a0a] min-h-[calc(100vh-64px)] overflow-y-auto lg:hidden">
          <div className="flex flex-col p-6">
            
            {/* Nav links block */}
            <div className="flex flex-col gap-1">
              {nav.map((n) => {
                const active = pathname === n.to;
                return (
                  <Link 
                    key={n.to} 
                    to={n.to} 
                    onClick={() => setOpen(false)} 
                    className={`rounded-xl px-4 py-2.5 text-base font-medium transition-colors ${
                      active ? "bg-secondary text-gold" : "text-foreground/90 hover:bg-secondary"
                    }`}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Account Login Button */}
            <div className="mt-8 border-t border-border/60 pt-5">
              <Link 
                to="/login" 
                onClick={() => setOpen(false)} 
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-center text-sm font-medium text-gold-foreground transition-opacity hover:opacity-90"
              >
                <User className="h-4 w-4" /> Account Login / Register
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}