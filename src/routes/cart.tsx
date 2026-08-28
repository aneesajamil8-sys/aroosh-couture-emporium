import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatPKR } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Aroosh Collections" },
      { name: "description", content: "Review the items in your Aroosh Collections shopping cart." },
      { property: "og:title", content: "Your Cart — Aroosh Collections" },
      { property: "og:description", content: "Review the items in your Aroosh Collections shopping cart." },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { detailed, total, setQty, remove, clear } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 pt-40 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">Aroosh Collections</p>
        <h1 className="mt-2 font-serif text-4xl text-cream sm:text-5xl">Your Cart</h1>
        <div className="mx-auto mt-4 h-px w-16 bg-gold/60" />
      </div>

      {mounted && detailed.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-14 text-center">
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-md bg-gold px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold/85"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {detailed.map(({ product, qty }) => (
            <div
              key={product.id}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-24 w-20 rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="font-serif text-lg text-cream">{product.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {product.category}
                </p>
                <p className="mt-1 text-gold">{formatPKR(product.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty(product.id, qty - 1)}
                  className="rounded-md border border-border p-1.5 text-foreground/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-6 text-center text-sm">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty(product.id, qty + 1)}
                  className="rounded-md border border-border p-1.5 text-foreground/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Remove item"
                  onClick={() => remove(product.id)}
                  className="ml-2 rounded-md border border-border p-1.5 text-foreground/60 transition-colors hover:border-destructive hover:text-destructive"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Total</span>
              <span className="font-serif text-2xl text-gold">{formatPKR(total)}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/checkout"
                className="flex-1 rounded-md bg-gold px-8 py-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold/85"
              >
                Proceed to Checkout
              </Link>
              <Link
                to="/shop"
                className="rounded-md border border-gold/60 px-8 py-3 text-[0.7rem] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
