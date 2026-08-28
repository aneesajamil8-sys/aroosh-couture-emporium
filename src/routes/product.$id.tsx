import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ShoppingBag, Truck } from "lucide-react";
import { toast } from "sonner";
import { formatPKR, products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product Not Found — Aroosh Collections" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Aroosh Collections`;
    const description = product.description.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-24 pt-40 text-center sm:px-8">
      <h1 className="font-serif text-4xl text-cream">Product Not Found</h1>
      <p className="mt-4 text-muted-foreground">This piece is no longer available.</p>
      <Link
        to="/shop"
        className="mt-8 inline-flex rounded-md bg-gold px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold/85"
      >
        Browse the Collection
      </Link>
    </div>
  );
}

const VIEWS = [
  { label: "Front", position: "50% 20%" },
  { label: "Detail", position: "50% 50%" },
  { label: "Full", position: "50% 85%" },
] as const;

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();
  const [view, setView] = useState(0);
  const [size, setSize] = useState<string | null>(null);

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  function requireSize() {
    if (!size) {
      toast.error("Please select a size first.");
      return false;
    }
    return true;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-40 sm:px-8">
      <nav className="mb-8 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
        <Link to="/shop" className="transition-colors hover:text-gold">
          Shop
        </Link>
        <span className="px-2">/</span>
        <Link
          to={product.category === "Shoes" ? "/shoes" : "/boutique"}
          className="transition-colors hover:text-gold"
        >
          {product.category}
        </Link>
        <span className="px-2">/</span>
        <span className="text-foreground/70">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* gallery */}
        <div>
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <img
              src={product.image}
              alt={`${product.name} — ${VIEWS[view].label.toLowerCase()} view`}
              width={900}
              height={1125}
              className="aspect-[4/5] w-full object-cover transition-all duration-500"
              style={{ objectPosition: VIEWS[view].position }}
            />
          </div>
          <div className="mt-4 flex gap-3">
            {VIEWS.map((v, i) => (
              <button
                key={v.label}
                type="button"
                onClick={() => setView(i)}
                aria-label={`Show ${v.label} view`}
                aria-pressed={i === view}
                className={`overflow-hidden rounded-md border transition-colors ${
                  i === view ? "border-gold" : "border-border hover:border-gold/50"
                }`}
              >
                <img
                  src={product.image}
                  alt=""
                  loading="lazy"
                  className="h-24 w-20 object-cover"
                  style={{ objectPosition: v.position }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* info */}
        <div>
          <span className="inline-flex rounded-full border border-gold/40 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-gold">
            {product.category}
          </span>
          <h1 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">{product.name}</h1>
          <p className="mt-3 font-serif text-3xl text-gold">{formatPKR(product.price)}</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <h2 className="text-[0.7rem] uppercase tracking-[0.25em] text-cream">Select Size</h2>
              <span className="text-xs text-muted-foreground">
                {product.category === "Shoes" ? "EU sizing" : "Standard fit"}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`min-w-12 rounded-md border px-4 py-2 text-sm transition-colors ${
                    size === s
                      ? "border-gold bg-gold text-primary-foreground"
                      : "border-border text-foreground/80 hover:border-gold/60 hover:text-gold"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                if (!requireSize()) return;
                add(product.id);
                toast.success(`${product.name} (${size}) added to cart`);
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-gold px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold/85"
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={2} />
              Add to Cart
            </button>
            <button
              type="button"
              onClick={() => {
                if (!requireSize()) return;
                add(product.id);
                navigate({ to: "/checkout" });
              }}
              className="inline-flex flex-1 items-center justify-center rounded-md border border-gold/60 px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h2 className="text-[0.7rem] uppercase tracking-[0.25em] text-cream">Product Details</h2>
            <ul className="mt-4 space-y-2">
              {product.details.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-3 border-t border-border pt-6">
              <Truck className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
              <p className="text-sm text-muted-foreground">
                Cash on Delivery nationwide. Dispatch within 2–3 working days, Rs. 250 flat delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="text-center font-serif text-3xl text-cream">You May Also Like</h2>
          <div className="mx-auto mt-4 mb-10 h-px w-16 bg-gold/60" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
