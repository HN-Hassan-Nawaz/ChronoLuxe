import { createFileRoute } from "@tanstack/react-router";
import { RotateCcw, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/returns-exchanges")({
  head: () => ({ meta: [{ title: "Returns & Exchanges — ChronoLuxe" }, { name: "description", content: "30-day return policy on all premium watches. Hassle-free exchanges and full refunds." }] }),
  component: ReturnsExchanges,
});

function ReturnsExchanges() {
  return (
    <div>
      <section className="container-x py-16 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Our Guarantee</div>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl md:text-6xl">30-Day <span className="gold-gradient-text">Returns</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          Not completely satisfied? Return your watch within 30 days for a full refund or exchange. No questions asked.
        </p>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <RotateCcw className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">30-Day Window</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Return any unworn watch within 30 days of delivery. Full refund to original payment method.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <ShieldCheck className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Free Returns</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prepaid return shipping label included. No restocking fees on returns or exchanges.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <CheckCircle className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Easy Exchange</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Exchange for a different model or size. Pay only the difference if upgrading.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="font-display text-3xl">Return Conditions</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold text-gold">Watch Must Be:</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                Unworn and in original condition
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                With all original packaging and documentation
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                Without any modifications or alterations
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                Free from scratches, dents, or damage
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold text-gold">Non-Returnable Items:</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                Customized or engraved watches
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                Final sale items (marked as such)
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                Watches returned after 30 days
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                Items without original packaging
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-16 border-t border-border">
        <h2 className="font-display text-3xl">How to Return</h2>
        <div className="mt-8 space-y-4">
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground font-display font-bold">1</div>
            <div>
              <h3 className="font-semibold">Contact Us</h3>
              <p className="mt-1 text-sm text-muted-foreground">Initiate your return through our support portal or by email. Receive your prepaid return label.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground font-display font-bold">2</div>
            <div>
              <h3 className="font-semibold">Package Your Watch</h3>
              <p className="mt-1 text-sm text-muted-foreground">Use the original packaging if possible. Include all accessories, documentation, and the return form.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground font-display font-bold">3</div>
            <div>
              <h3 className="font-semibold">Ship & Track</h3>
              <p className="mt-1 text-sm text-muted-foreground">Drop off at any authorized carrier location. Track your return until it reaches our facility.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground font-display font-bold">4</div>
            <div>
              <h3 className="font-semibold">Refund Processed</h3>
              <p className="mt-1 text-sm text-muted-foreground">Once inspected and approved, your refund is processed within 3-5 business days to your original payment method.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
