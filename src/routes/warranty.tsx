import { createFileRoute } from "@tanstack/react-router";
import { Shield, Award, Wrench, Globe } from "lucide-react";

export const Route = createFileRoute("/warranty")({
  head: () => ({ meta: [{ title: "Warranty — ChronoLuxe" }, { name: "description", content: "Comprehensive 2-year international warranty on all premium luxury watches." }] }),
  component: Warranty,
});

function Warranty() {
  return (
    <div>
      <section className="container-x py-16 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Protection Plan</div>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl md:text-6xl">2-Year <span className="gold-gradient-text">International</span> Warranty</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          Every premium timepiece comes with comprehensive coverage. Your investment is protected worldwide.
        </p>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <Shield className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Full Coverage</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Covers movement, dial, hands, case, bracelet, and crystal against manufacturing defects.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Globe className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">International</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Valid at authorized service centers worldwide. No geographic restrictions on warranty service.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Wrench className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Free Repairs</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              All covered repairs performed at no cost. Genuine manufacturer parts guaranteed.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Award className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Transferable</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Warranty transfers to subsequent owners. Adds value to your timepiece as an investment.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="font-display text-3xl">What's Covered</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold text-gold">Covered Under Warranty:</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Movement defects and malfunctions</li>
              <li>• Dial and hand issues</li>
              <li>• Case and bracelet defects</li>
              <li>• Crystal problems (scratches from normal wear excluded)</li>
              <li>• Crown and stem issues</li>
              <li>• Water resistance failures (within rated depth)</li>
              <li>• Manufacturing defects in materials</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold text-gold">Not Covered:</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Normal wear and tear</li>
              <li>• Accidental damage or misuse</li>
              <li>• Water damage exceeding rated depth</li>
              <li>• Unauthorized repairs or modifications</li>
              <li>• Battery replacement (quartz movements)</li>
              <li>• Cosmetic damage from improper care</li>
              <li>• Loss or theft</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-16 border-t border-border">
        <h2 className="font-display text-3xl">Extended Warranty Options</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gold/30 bg-card p-6">
            <h3 className="font-display text-xl">Premium Plus (+3 Years)</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Extend your warranty to 5 years total. Includes annual movement servicing and water resistance testing.
            </p>
            <p className="mt-4 font-display text-2xl text-gold">$299</p>
          </div>
          <div className="rounded-xl border border-gold/30 bg-card p-6">
            <h3 className="font-display text-xl">Lifetime Protection</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Lifetime warranty coverage for the original owner. Includes all servicing and parts for the life of the watch.
            </p>
            <p className="mt-4 font-display text-2xl text-gold">$799</p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 border-t border-border">
        <h2 className="font-display text-3xl">Making a Warranty Claim</h2>
        <p className="mt-4 text-muted-foreground">
          To initiate a warranty claim, contact our support team with your purchase receipt and warranty certificate. We'll guide you through the process and arrange service at an authorized center near you.
        </p>
      </section>
    </div>
  );
}
