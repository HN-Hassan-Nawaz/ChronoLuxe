import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="font-display text-2xl">
            Chrono<span className="gold-gradient-text">Luxe</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A global destination for affordable, premium, luxury, smart, sports, and limited-edition watches from the world's most trusted brands.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((I, i) => (
              <a key={i} href="#" className="rounded-full border border-border p-2.5 text-foreground/70 transition hover:border-gold hover:text-gold">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-gold">Shop</Link></li>
            <li><Link to="/brands" className="hover:text-gold">Brands</Link></li>
            <li><Link to="/categories" className="hover:text-gold">Categories</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Customer Care</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-gold" href="#">Shipping Policy</a></li>
            <li><a className="hover:text-gold" href="#">Returns & Exchanges</a></li>
            <li><a className="hover:text-gold" href="#">Warranty</a></li>
            <li><a className="hover:text-gold" href="#">FAQ</a></li>
            <li><a className="hover:text-gold" href="#">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Newsletter</h4>
          <p className="mb-3 text-sm text-muted-foreground">Get exclusive drops & offers.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input type="email" placeholder="Your email" className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-gold" />
            <button className="rounded-md bg-gold px-3 py-2 text-sm font-medium text-gold-foreground transition hover:opacity-90">Join</button>
          </form>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"].map((p) => (
              <span key={p} className="rounded border border-border bg-background px-2 py-1">{p}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ChronoLuxe. All rights reserved.</p>
          <p>Crafted with precision. Built for time.</p>
        </div>
      </div>
    </footer>
  );
}
