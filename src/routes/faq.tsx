import { createFileRoute } from "@tanstack/react-router";
import { HelpCircle, Package, Shield, CreditCard, Clock } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — ChronoLuxe" }, { name: "description", content: "Frequently asked questions about buying premium luxury watches online." }] }),
  component: FAQ,
});

function FAQ() {
  const faqs = [
    {
      category: "Ordering & Payment",
      icon: Package,
      questions: [
        {
          q: "How do I know the watch is authentic?",
          a: "Every watch we sell is sourced from authorized dealers and verified by our in-house horologists. Each timepiece comes with original manufacturer documentation, serial number verification, and a certificate of authenticity from ChronoLuxe."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and bank wire transfers for orders over $10,000. All transactions are secured with industry-standard encryption."
        },
        {
          q: "Can I place an order internationally?",
          a: "Yes, we ship to over 150 countries worldwide. Prices are displayed in USD, and your card issuer will handle the currency conversion. International orders may be subject to import duties and taxes."
        },
        {
          q: "Do you offer financing?",
          a: "Yes, we offer flexible financing through our partners. Options include 0% APR for 12 months on qualifying purchases, as well as extended payment plans up to 36 months. Available at checkout for eligible customers."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      icon: Clock,
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) is available for an additional fee. Custom or special order pieces may require additional processing time."
        },
        {
          q: "Is shipping insured?",
          a: "Absolutely. Every watch is fully insured from our facility to your doorstep. The insurance covers the full value of your timepiece against loss, theft, or damage during transit."
        },
        {
          q: "Do I need to sign for delivery?",
          a: "Yes, adult signature is required for all watch deliveries. This ensures your timepiece arrives safely and is received by an authorized person. You can arrange for delivery to your workplace or a secure location."
        },
        {
          q: "Can I track my shipment?",
          a: "Yes, you'll receive a tracking number via email as soon as your order ships. Real-time tracking is available through our website and the carrier's tracking system."
        }
      ]
    },
    {
      category: "Returns & Warranty",
      icon: Shield,
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy on all unworn watches. Returns must include all original packaging, documentation, and accessories. Refunds are processed to your original payment method within 3-5 business days."
        },
        {
          q: "What does the warranty cover?",
          a: "Our 2-year international warranty covers manufacturing defects in the movement, case, bracelet, dial, and crystal. It does not cover normal wear and tear, accidental damage, or water damage exceeding the watch's rated depth."
        },
        {
          q: "Can I extend the warranty?",
          a: "Yes, we offer extended warranty options including Premium Plus (+3 years) for $299 and Lifetime Protection for $799. These can be purchased at checkout or within 30 days of delivery."
        },
        {
          q: "What if my watch needs servicing?",
          a: "We can arrange servicing through authorized manufacturer service centers. Routine maintenance is not covered under warranty but we can facilitate the process for you at competitive rates."
        }
      ]
    },
    {
      category: "Account & Support",
      icon: HelpCircle,
      questions: [
        {
          q: "Do I need an account to purchase?",
          a: "No, you can checkout as a guest. However, creating an account allows you to track orders, save wishlists, view order history, and expedite future purchases with saved information."
        },
        {
          q: "How can I contact customer support?",
          a: "Our support team is available via email at support@chronoluxe.com, live chat on our website, or phone during business hours. Average response time is under 2 hours during business days."
        },
        {
          q: "Do you buy watches or accept trade-ins?",
          a: "Yes, we offer a trade-in program. Submit details and photos of your current timepiece for a valuation. Trade-in credit can be applied toward any purchase on our site."
        },
        {
          q: "Can I cancel my order?",
          a: "Orders can be cancelled within 24 hours of placement, provided the item hasn't shipped. Once shipped, the order would need to be processed as a return under our 30-day return policy."
        }
      ]
    }
  ];

  return (
    <div>
      <section className="container-x py-16 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold">Help Center</div>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl md:text-6xl">Frequently Asked <span className="gold-gradient-text">Questions</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          Everything you need to know about buying premium timepieces from ChronoLuxe.
        </p>
      </section>

      <section className="container-x py-16">
        {faqs.map((section, idx) => (
          <div key={idx} className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <section.icon className="h-6 w-6 text-gold" />
              <h2 className="font-display text-2xl">{section.category}</h2>
            </div>
            <div className="space-y-4">
              {section.questions.map((faq, qIdx) => (
                <div key={qIdx} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-lg">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="container-x py-16 border-t border-border text-center">
        <h2 className="font-display text-3xl">Still Have Questions?</h2>
        <p className="mt-4 text-muted-foreground">
          Our expert team is here to help. Contact us for personalized assistance.
        </p>
        <button className="mt-6 rounded-lg bg-gold px-8 py-3 font-medium text-gold-foreground transition hover:opacity-90">
          Contact Support
        </button>
      </section>
    </div>
  );
}
