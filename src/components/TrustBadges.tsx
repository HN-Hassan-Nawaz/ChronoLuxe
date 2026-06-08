import { ShieldCheck, Globe2, Lock, Award, RefreshCcw, HeadphonesIcon } from "lucide-react";

const items = [
  { i: ShieldCheck, t: "100% Authentic", d: "Every watch verified by experts" },
  { i: Globe2, t: "Worldwide Shipping", d: "Delivery to 180+ countries" },
  { i: Lock, t: "Secure Payments", d: "Encrypted & PCI-compliant" },
  { i: Award, t: "Warranty Protection", d: "Up to 5 years coverage" },
  { i: RefreshCcw, t: "Easy Returns", d: "30-day no-hassle returns" },
  { i: HeadphonesIcon, t: "24/7 Support", d: "Concierge service anytime" },
];

export function TrustBadges() {
  return (
    <section className="container-x py-14">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {items.map((x) => (
          <div key={x.t} className="rounded-xl border border-border bg-card/60 p-5 text-center transition hover:border-gold">
            <x.i className="mx-auto h-7 w-7 text-gold" />
            <div className="mt-3 text-sm font-medium">{x.t}</div>
            <div className="mt-1 text-xs text-muted-foreground">{x.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
