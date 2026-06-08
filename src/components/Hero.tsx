import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=1920&q=80"
          alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>
      <div className="container-x grid items-center gap-10 py-20 md:py-28 lg:grid-cols-2 lg:py-36">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs uppercase tracking-wider text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> New Season · 2026
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Time Defines <span className="gold-gradient-text">Greatness</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Discover Premium & Affordable Watches From Leading Brands Worldwide.
            Crafted for those who measure life in moments, not minutes.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/shop" className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-medium text-gold-foreground transition hover:opacity-90">
              Shop Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/brands" className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3.5 text-sm font-medium backdrop-blur-md transition hover:border-gold hover:text-gold">
              Explore Brands
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            {[["120+", "Brands"], ["10K+", "Watches"], ["180+", "Countries"], ["4.9★", "Rating"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl text-gold">{n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 -z-10 rounded-full bg-gold/10 blur-3xl" />
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85"
            alt="Luxury watch" className="mx-auto w-[80%] rounded-2xl shadow-2xl animate-fade-in" />
        </div>
      </div>
    </section>
  );
}
