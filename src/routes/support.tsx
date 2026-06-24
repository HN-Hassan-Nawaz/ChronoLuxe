import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({ meta: [{ title: "Support — ChronoLuxe" }, { name: "description", content: "Contact our expert support team for help with your premium luxury watch purchase." }] }),
  component: Support,
});

function Support() {
  return (
    <div>
      <section className="container-x py-16 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Get In Touch</div>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl md:text-6xl">Expert <span className="gold-gradient-text">Support</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          Our team of watch specialists is here to help you find the perfect timepiece and assist with any questions.
        </p>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <Mail className="mx-auto h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Email Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Response within 2 hours during business days
            </p>
            <a href="mailto:support@chronoluxe.com" className="mt-4 block font-medium text-gold hover:underline">
              support@chronoluxe.com
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <Phone className="mx-auto h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Call Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Mon-Fri, 9AM-6PM EST
            </p>
            <a href="tel:+18001234567" className="mt-4 block font-medium text-gold hover:underline">
              +1 (800) 123-4567
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <MessageCircle className="mx-auto h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl">Live Chat</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Available 24/7 for instant assistance
            </p>
            <button className="mt-4 font-medium text-gold hover:underline">
              Start Chat
            </button>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl">Send Us a Message</h2>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">First Name</label>
                  <input type="text" className="w-full rounded-md border border-border bg-background px-4 py-2 outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Last Name</label>
                  <input type="text" className="w-full rounded-md border border-border bg-background px-4 py-2 outline-none focus:border-gold" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input type="email" className="w-full rounded-md border border-border bg-background px-4 py-2 outline-none focus:border-gold" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Order Number (Optional)</label>
                <input type="text" className="w-full rounded-md border border-border bg-background px-4 py-2 outline-none focus:border-gold" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Subject</label>
                <select className="w-full rounded-md border border-border bg-background px-4 py-2 outline-none focus:border-gold">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Return & Exchange</option>
                  <option>Warranty Claim</option>
                  <option>Product Question</option>
                  <option>Trade-In Request</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea rows={5} className="w-full rounded-md border border-border bg-background px-4 py-2 outline-none focus:border-gold" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-gold py-3 font-medium text-gold-foreground transition hover:opacity-90">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-2xl">Business Hours</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - 4:00 PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-sm text-muted-foreground">Closed</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Live chat is available 24/7 for immediate assistance.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-2xl">Our Location</h2>
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="font-medium">ChronoLuxe Headquarters</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    123 Luxury Avenue, Suite 500<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                By appointment only. Please contact us to schedule a visit.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-2xl">Response Times</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Email: Under 2 hours (business days)</li>
                <li>• Live Chat: Instant</li>
                <li>• Phone: No wait time during business hours</li>
                <li>• Contact Form: Under 4 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 border-t border-border text-center">
        <h2 className="font-display text-3xl">Need Urgent Help?</h2>
        <p className="mt-4 text-muted-foreground">
          For order-related issues requiring immediate attention, please call our priority support line.
        </p>
        <a href="tel:+18001234567" className="mt-6 inline-block rounded-lg bg-gold px-8 py-3 font-medium text-gold-foreground transition hover:opacity-90">
          Call Priority Support
        </a>
      </section>
    </div>
  );
}
