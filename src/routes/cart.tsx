import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useShop } from "@/context/ShopContext";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your Cart — ChronoLuxe" }] }),
  component: CartPage,
});

function CartPage() {
  const { cart, updateQty, removeFromCart, toast } = useShop();
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping = cart.length ? (subtotal > 500 ? 0 : 25) : 0;
  const total = subtotal + shipping - discount;

  const applyCode = () => {
    if (code.toUpperCase() === "LUXE10") { setDiscount(subtotal * 0.1); toast("Code applied — 10% off"); }
    else toast("Invalid code");
  };

  if (cart.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="mt-6 font-display text-3xl">Your cart is empty</h1>
        <p className="mt-2 text-sm text-muted-foreground">Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="mt-6 inline-block rounded-md bg-gold px-6 py-3 text-sm font-medium text-gold-foreground">Shop Watches</Link>
      </div>
    );
  }

  return (
    <div className="container-x py-10">
      <h1 className="font-display text-4xl">Shopping Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-3">
          {cart.map(({ product, qty }) => (
            <div key={product.id} className="flex gap-4 rounded-xl border border-border bg-card p-4">
              <Link to="/product/$id" params={{ id: product.id }} className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-surface md:h-28 md:w-28">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="text-xs uppercase tracking-wider text-gold">{product.brand}</div>
                <Link to="/product/$id" params={{ id: product.id }} className="mt-0.5 font-medium hover:text-gold">{product.name}</Link>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center rounded-md border border-border">
                    <button onClick={() => updateQty(product.id, qty - 1)} className="grid h-8 w-8 place-items-center hover:text-gold"><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center text-sm">{qty}</span>
                    <button onClick={() => updateQty(product.id, qty + 1)} className="grid h-8 w-8 place-items-center hover:text-gold"><Plus className="h-3 w-3" /></button>
                  </div>
                  <div className="font-semibold">${(product.price * qty).toLocaleString()}</div>
                </div>
              </div>
              <button onClick={() => removeFromCart(product.id)} className="self-start text-muted-foreground transition hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-xl">Order Summary</h2>
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping}`}</span></div>
            {discount > 0 && <div className="flex justify-between text-gold"><span>Discount</span><span>-${discount.toFixed(0)}</span></div>}
          </div>
          <div className="mt-4 flex gap-2">
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Discount code (LUXE10)"
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-gold" />
            <button onClick={applyCode} className="rounded-md border border-gold px-3 py-2 text-sm text-gold hover:bg-gold hover:text-gold-foreground">Apply</button>
          </div>
          <div className="mt-5 flex justify-between border-t border-border pt-4 text-lg font-semibold">
            <span>Total</span><span>${total.toLocaleString()}</span>
          </div>
          <Link to="/checkout" className="mt-5 block w-full rounded-md bg-gold py-3 text-center text-sm font-medium text-gold-foreground transition hover:opacity-90">
            Proceed to Checkout
          </Link>
          <Link to="/shop" className="mt-2 block text-center text-xs text-muted-foreground hover:text-gold">Continue shopping</Link>
        </aside>
      </div>
    </div>
  );
}
