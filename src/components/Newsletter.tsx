import { useState } from "react";
import { useShop } from "@/context/ShopContext";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useShop();
  return (
    <section className="container-x py-16">
      <div className="overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-card to-background p-10 text-center md:p-16">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Insider Access</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Join the ChronoLuxe Circle</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Be the first to know about new arrivals, limited drops, and private collector events.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); if (email) { toast("Subscribed — welcome to the circle"); setEmail(""); } }}
          className="mx-auto mt-7 flex max-w-md flex-col gap-2 sm:flex-row">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Enter your email"
            className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
          <button className="rounded-md bg-gold px-6 py-3 text-sm font-medium text-gold-foreground transition hover:opacity-90">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
