import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ShoppingBag, Heart, ShieldCheck, Truck, Award, Minus, Plus } from "lucide-react";
import { products } from "@/lib/data";
import { useShop } from "@/context/ShopContext";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.product.brand} ${loaderData.product.name} — ChronoLuxe` },
      { name: "description", content: loaderData.product.description },
      { property: "og:image", content: loaderData.product.image },
    ] : [],
  }),
  notFoundComponent: () => <div className="container-x py-24 text-center"><h1 className="font-display text-3xl">Watch not found</h1><Link to="/shop" className="mt-4 inline-block text-gold">Back to shop →</Link></div>,
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState(product.images?.[0] ?? product.image);
  const related = products.filter((p) => p.brand === product.brand && p.id !== product.id).slice(0, 4);

  return (
    <div className="container-x py-10">
      <nav className="mb-6 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-gold">Home</Link> / <Link to="/shop" className="hover:text-gold">Shop</Link> / <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
            <img src={img} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {(product.images ?? [product.image]).map((src: string, i: number) => (
              <button key={i} onClick={() => setImg(src)}
                className={`aspect-square overflow-hidden rounded-lg border bg-surface transition ${img === src ? "border-gold" : "border-border hover:border-gold/50"}`}>
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">{product.brand}</div>
          <h1 className="mt-2 font-display text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 text-gold"><Star className="h-4 w-4 fill-current" />{product.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({product.reviews} reviews)</span>
          </div>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-4xl font-semibold">${product.price.toLocaleString()}</span>
            {product.oldPrice && <span className="text-base text-muted-foreground line-through">${product.oldPrice.toLocaleString()}</span>}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-md border border-border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="grid h-11 w-11 place-items-center hover:text-gold"><Minus className="h-4 w-4" /></button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="grid h-11 w-11 place-items-center hover:text-gold"><Plus className="h-4 w-4" /></button>
            </div>
            <button onClick={() => addToCart(product, qty)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-medium text-gold-foreground transition hover:opacity-90">
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
            <button onClick={() => toggleWishlist(product)} className={`grid h-11 w-11 place-items-center rounded-md border transition ${isWishlisted(product.id) ? "border-gold bg-gold text-gold-foreground" : "border-border hover:border-gold hover:text-gold"}`}>
              <Heart className={`h-4 w-4 ${isWishlisted(product.id) ? "fill-current" : ""}`} />
            </button>
          </div>
          <Link to="/checkout" onClick={() => addToCart(product, qty)} className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-gold bg-gold/10 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-gold-foreground">
            Buy Now
          </Link>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs">
            {([[ShieldCheck, "Authentic"], [Truck, "Free Shipping"], [Award, "2-Yr Warranty"]] as const).map(([I, t], i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-3">
                <I className="mx-auto h-5 w-5 text-gold" />
                <div className="mt-1.5 text-foreground/80">{t}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-display text-lg">Specifications</h3>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-2 rounded-lg border border-border bg-card p-5 text-sm">
              {(Object.entries(product.specs) as [string, string][]).map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border/60 py-1.5">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 font-display text-2xl md:text-3xl">More from {product.brand}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
