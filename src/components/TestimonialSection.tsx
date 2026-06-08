import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "./ProductSection";

export function TestimonialSection() {
  return (
    <section className="container-x py-16 md:py-20">
      <SectionHeader eyebrow="Loved Worldwide" title="What Our Collectors Say" />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-border bg-card p-7 transition hover:border-gold/50">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.text}"</p>
            <div className="mt-6 border-t border-border pt-4">
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
