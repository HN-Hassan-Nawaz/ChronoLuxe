import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — ChronoLuxe" }] }),
  component: Checkout,
});

function Checkout() {
  const { cart, clearCart, toast } = useShop();
  const nav = useNavigate();
  const [pay, setPay] = useState("card");
  const subtotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping = cart.length ? (subtotal > 500 ? 0 : 25) : 0;
  const total = subtotal + shipping;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Order placed — thank you!");
    clearCart();
    setTimeout(() => nav({ to: "/" }), 800);
  };

  if (cart.length === 0) {
    return <div className="container-x py-24 text-center">
      <h1 className="font-display text-3xl">Your cart is empty</h1>
      <Link to="/shop" className="mt-4 inline-block text-gold">Browse watches →</Link>
    </div>;
  }

  const field = "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-gold";

  return (
    <div className="container-x py-10">
      <h1 className="font-display text-4xl">Checkout</h1>
      <form onSubmit={submit} className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-8">
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-xl">Contact</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <input required placeholder="Full name" className={field} />
              <input required type="email" placeholder="Email" className={field} />
              <input required placeholder="Phone" className={field} />
            </div>
          </section>
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-xl">Shipping Address</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <input required placeholder="Street address" className={`${field} md:col-span-2`} />
              <input required placeholder="City" className={field} />
              <input required placeholder="State / Region" className={field} />
              <input required placeholder="Postal code" className={field} />
              <input required placeholder="Country" className={field} />
            </div>
          </section>
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-xl">Payment</h2>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["card", "paypal", "apple"].map((p) => (
                <button type="button" key={p} onClick={() => setPay(p)}
                  className={`rounded-md border px-3 py-3 text-sm capitalize transition ${pay === p ? "border-gold bg-gold/10 text-gold" : "border-border hover:border-gold"}`}>
                  {p === "card" ? "Card" : p === "paypal" ? "PayPal" : "Apple Pay"}
                </button>
              ))}
            </div>
            {pay === "card" && (
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="relative md:col-span-2">
                  <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input required placeholder="Card number" className={`${field} pl-10`} />
                </div>
                <input required placeholder="MM / YY" className={field} />
                <input required placeholder="CVC" className={field} />
              </div>
            )}
          </section>
        </div>

        <aside className="h-fit rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl">Order Summary</h2>
          <div className="mt-4 space-y-3 border-b border-border pb-4">
            {cart.map(({ product, qty }) => (
              <div key={product.id} className="flex gap-3 text-sm">
                <div className="h-14 w-14 overflow-hidden rounded bg-surface"><img src={product.image} alt="" className="h-full w-full object-cover" /></div>
                <div className="flex-1">
                  <div className="line-clamp-1">{product.name}</div>
                  <div className="text-xs text-muted-foreground">Qty {qty}</div>
                </div>
                <div className="font-medium">${(product.price * qty).toLocaleString()}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping}`}</span></div>
          </div>
          <div className="mt-4 flex justify-between border-t border-border pt-4 text-lg font-semibold">
            <span>Total</span><span>${total.toLocaleString()}</span>
          </div>
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold py-3 text-sm font-medium text-gold-foreground transition hover:opacity-90">
            <Lock className="h-4 w-4" /> Place Order
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">Secured by 256-bit SSL encryption</p>
        </aside>
      </form>
    </div>
  );
}
