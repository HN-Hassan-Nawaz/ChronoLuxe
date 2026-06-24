import { createFileRoute } from "@tanstack/react-router";
import { Package, Truck, Shield, Clock } from "lucide-react";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({ meta: [{ title: "Shipping Policy — ChronoLuxe" }, { name: "description", content: "Free worldwide shipping on all premium luxury watches. Secure packaging and insured delivery." }] }),
  component: ShippingPolicy,
});

function ShippingPolicy() {
  return (
    <div>
      <section className="container-x py-16 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Delivery Information</div>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl md:text-6xl">Premium <span className="gold-gradient-text">Shipping</span> Worldwide</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          Every timepiece is shipped with white-glove care, fully insured, and delivered securely to your doorstep.
        </p>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <Package className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Free Shipping</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Complimentary worldwide shipping on all orders over $5,000. Express delivery available at checkout.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Shield className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Fully Insured</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every watch is fully insured from our door to yours. Your investment is protected every step of the way.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Truck className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Secure Packaging</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Custom luxury packaging with tamper-evident seals. Your watch arrives in pristine condition.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Clock className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Express Delivery</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              2-3 business days to major cities worldwide. Real-time tracking provided for all shipments.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="font-display text-3xl">Shipping Timeline</h2>
        <div className="mt-8 space-y-4">
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground font-display font-bold">1</div>
            <div>
              <h3 className="font-semibold">Order Processing</h3>
              <p className="mt-1 text-sm text-muted-foreground">1-2 business days. Authentication and quality verification before dispatch.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground font-display font-bold">2</div>
            <div>
              <h3 className="font-semibold">Transit Time</h3>
              <p className="mt-1 text-sm text-muted-foreground">2-5 business days depending on destination. Express options available.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground font-display font-bold">3</div>
            <div>
              <h3 className="font-semibold">Signature Required</h3>
              <p className="mt-1 text-sm text-muted-foreground">Adult signature required upon delivery for security and verification purposes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 border-t border-border">
        <h2 className="font-display text-3xl">International Shipping</h2>
        <p className="mt-4 text-muted-foreground">
          We ship to over 150 countries worldwide. Import duties and taxes may apply depending on your destination and are the responsibility of the recipient. We provide all necessary documentation for customs clearance.
        </p>
      </section>
    </div>
  );
}
