import { Link } from "@tanstack/react-router";
import { brands } from "@/lib/data";
import { SectionHeader } from "./ProductSection";

export function BrandSection() {
  return (
    <section className="border-y border-border bg-card/30 py-16 overflow-hidden">
      <div className="container-x">
        <SectionHeader eyebrow="Featured" title="World's Most Trusted Brands" />
        
        {/* Continuous Slider Track Wrapper */}
        <div className="relative mt-10 flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          
          {/* Track 1 & Track 2 running identical loops */}
          {[1, 2].map((trackIndex) => (
            <div 
              key={trackIndex} 
              className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4 px-2"
            >
              {brands.map((b) => (
                <Link
                  key={`${trackIndex}-${b.id}`}
                  to="/shop"
                  search={{ brand: b.name } as any}
                  className="group flex h-24 w-36 shrink-0 flex-col items-center justify-center rounded-xl border border-border bg-background p-4 text-center transition hover:border-gold"
                >
                  <span className="font-display text-base transition-colors group-hover:text-gold md:text-lg">
                    {b.name}
                  </span>
                </Link>
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}