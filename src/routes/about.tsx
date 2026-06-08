import { createFileRoute } from "@tanstack/react-router";
import { TrustBadges } from "@/components/TrustBadges";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — ChronoLuxe" }, { name: "description", content: "Our story, mission, and the craft behind ChronoLuxe." }] }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="container-x py-16 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Our Story</div>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl md:text-6xl">A Global Home For <span className="gold-gradient-text">Time</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          ChronoLuxe was founded to bring the world's finest watches — from everyday icons to grail-worthy collectibles — to a global audience that values craft, authenticity, and design.
        </p>
      </section>
      <TrustBadges />
      <section className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=1200&q=85" alt="" className="rounded-2xl" />
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Authenticity, Always</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every piece in our collection is sourced from authorized partners and verified by in-house horologists. We back every watch with comprehensive warranty and 30-day returns — because trust is the only currency that matters in this craft.
          </p>
        </div>
      </section>
    </div>
  );
}
