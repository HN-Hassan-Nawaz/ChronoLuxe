import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — ChronoLuxe" }, { name: "description", content: "Get in touch with ChronoLuxe for premium luxury watch inquiries and support." }] }),
  component: Contact,
});

function Contact() {
  const { toast } = useShop();
  const field = "w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold transition-colors";
  
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "concierge@chronoluxe.com",
      description: "Response within 2 hours during business days"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (800) 555-0142",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Available 24/7",
      description: "Instant support for urgent inquiries"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: "Geneva · New York · Tokyo",
      description: "Global presence, local expertise"
    }
  ];

  const faqs = [
    {
      q: "What's the best way to reach you?",
      a: "For urgent matters, live chat is fastest. For detailed inquiries, email allows us to provide comprehensive responses."
    },
    {
      q: "Do you offer consultations?",
      a: "Yes, we offer complimentary virtual consultations with our watch specialists. Schedule through email or phone."
    },
    {
      q: "Can I visit your showrooms?",
      a: "Our showrooms are by appointment only. Contact us to schedule a personalized viewing experience."
    }
  ];

  return (
    <div>
      <section className="container-x py-16 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Get in Touch</div>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl md:text-6xl">Contact <span className="gold-gradient-text">ChronoLuxe</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          Our expert team is here to help you find the perfect timepiece. Reach out for personalized assistance.
        </p>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 text-center">
              <method.icon className="mx-auto h-8 w-8 text-gold" />
              <h3 className="mt-4 font-display text-lg">{method.title}</h3>
              <p className="mt-2 font-medium text-foreground">{method.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl">Send Us a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); toast("Message sent — we'll be in touch"); }} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Full Name</label>
                  <input required placeholder="John Doe" className={field} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input required type="email" placeholder="john@example.com" className={field} />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Phone (Optional)</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className={field} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Subject</label>
                <select required className={field}>
                  <option value="">Select a topic</option>
                  <option>Product Inquiry</option>
                  <option>Order Status</option>
                  <option>Return & Exchange</option>
                  <option>Warranty Claim</option>
                  <option>Consultation Request</option>
                  <option>Trade-In Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea required rows={6} placeholder="Tell us how we can help..." className={field} />
              </div>
              <button type="submit" className="flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-medium text-gold-foreground hover:opacity-90 transition-opacity">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" />
                Business Hours
              </h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Live chat available 24/7 for immediate assistance.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                Our Locations
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-medium">New York</p>
                  <p className="text-muted-foreground">123 Luxury Ave, Suite 500</p>
                </div>
                <div>
                  <p className="font-medium">Geneva</p>
                  <p className="text-muted-foreground">Rue du Rhône 48</p>
                </div>
                <div>
                  <p className="font-medium">Tokyo</p>
                  <p className="text-muted-foreground">Ginza Tower, Floor 12</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                By appointment only. Contact to schedule a visit.
              </p>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-card p-6">
              <h3 className="font-display text-lg text-gold">Quick FAQ</h3>
              <div className="mt-4 space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium">{faq.q}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 border-t border-border text-center">
        <h2 className="font-display text-3xl">Need Urgent Help?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          For time-sensitive matters, our priority support line is available during business hours.
        </p>
        <a href="tel:+18005550142" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3 font-medium text-gold-foreground hover:opacity-90 transition-opacity">
          <Phone className="h-4 w-4" />
          Call Priority Support
        </a>
      </section>
    </div>
  );
}
