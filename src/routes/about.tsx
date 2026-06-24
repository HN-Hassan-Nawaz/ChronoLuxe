import { createFileRoute } from "@tanstack/react-router";
import { TrustBadges } from "@/components/TrustBadges";
import { Award, Globe, Heart, Shield, Users, Clock } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — ChronoLuxe" }, { name: "description", content: "Our story, mission, and the craft behind ChronoLuxe." }] }),
  component: About,
});

function About() {
  const stats = [
    { value: "15K+", label: "Timepieces Sold" },
    { value: "150+", label: "Countries Served" },
    { value: "50+", label: "Luxury Brands" },
    { value: "99.8%", label: "Satisfaction Rate" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "Every watch is verified by certified horologists and comes with full manufacturer documentation."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Shipping to over 150 countries with secure, insured delivery and customs handling."
    },
    {
      icon: Heart,
      title: "Passion for Craft",
      description: "We share your love for horology. Each piece is curated with expertise and care."
    },
    {
      icon: Award,
      title: "Excellence Service",
      description: "White-glove customer service from purchase to lifetime support and servicing."
    }
  ];

  return (
    <div>
      <section className="container-x py-16 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Our Story</div>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl md:text-6xl">A Global Home For <span className="gold-gradient-text">Time</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          ChronoLuxe was founded to bring the world's finest luxury watches to a global audience that values craft, authenticity, and design. From investment-grade timepieces to everyday icons, we curate only the finest.
        </p>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="font-display text-3xl text-gold">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <TrustBadges />

      <section className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=1200&q=90" alt="Luxury watch craftsmanship" className="rounded-2xl" />
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Authenticity, Always</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every piece in our collection is sourced from authorized partners and verified by in-house horologists. We back every watch with comprehensive warranty and 30-day returns — because trust is the only currency that matters in this craft.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Our authentication process includes serial number verification, movement inspection, and complete documentation review. When you buy from ChronoLuxe, you buy with complete confidence.
          </p>
        </div>
      </section>

      <section className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className="font-display text-3xl md:text-4xl">Our Mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            To democratize access to the world's finest timepieces while maintaining the highest standards of authenticity and service. We believe everyone deserves to experience the joy of owning a premium watch.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Whether you're a seasoned collector or buying your first luxury timepiece, we provide the expertise, security, and personalized service you need to make informed decisions.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=1200&q=90" alt="Watch collection" className="order-1 lg:order-2 rounded-2xl" />
      </section>

      <section className="container-x py-16">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl">Our Values</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((value, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <value.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-4 font-display text-xl">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16 border-t border-border">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our team of certified watchmakers, horologists, and luxury specialists brings decades of combined experience to serve you. Every member shares a passion for timepieces and commitment to excellence.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=90" alt="Our team" className="rounded-2xl" />
        </div>
      </section>
    </div>
  );
}
