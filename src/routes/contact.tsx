import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — ChronoLuxe" }] }),
  component: Contact,
});

function Contact() {
  const { toast } = useShop();
  const field = "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-gold";
  return (
    <div className="container-x py-12">
      <div className="text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Get in Touch</div>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Contact ChronoLuxe</h1>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_400px]">
        <form onSubmit={(e) => { e.preventDefault(); toast("Message sent — we'll be in touch"); }} className="rounded-2xl border border-border bg-card p-8 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input required placeholder="Full name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
          </div>
          <input required placeholder="Subject" className={field} />
          <textarea required rows={6} placeholder="Your message" className={field} />
          <button className="rounded-md bg-gold px-6 py-3 text-sm font-medium text-gold-foreground hover:opacity-90">Send Message</button>
        </form>
        <div className="space-y-4">
          {[
            { I: Mail, t: "Email", v: "concierge@chronoluxe.com" },
            { I: Phone, t: "Phone", v: "+1 (800) 555-0142" },
            { I: MapPin, t: "Headquarters", v: "Geneva · New York · Tokyo" },
          ].map(({ I, t, v }) => (
            <div key={t} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <I className="h-5 w-5 text-gold" />
              <div><div className="text-sm font-medium">{t}</div><div className="text-sm text-muted-foreground">{v}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
