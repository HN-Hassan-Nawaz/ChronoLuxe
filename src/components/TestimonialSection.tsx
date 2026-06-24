import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "./ProductSection";

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="container-x">
        <SectionHeader eyebrow="Loved Worldwide" title="What Our Collectors Say" />
      </div>

      {/* Continuous Slider Track Wrapper with soft fading gradient edges */}
      <div className="relative mt-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-max gap-5 px-4">
          
          {/* Render twice [Track 1, Track 2] for the seamless loop illusion */}
          {[1, 2].map((trackIndex) => (
            <div 
              key={trackIndex} 
              className="flex shrink-0 animate-marquee items-stretch gap-5"
            >
              {testimonials.map((t) => (
                <div 
                  key={`${trackIndex}-${t.name}`} 
                  className="w-[350px] shrink-0 flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition hover:border-gold/50"
                >
                  <div>
                    <div className="flex gap-0.5 text-gold">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}