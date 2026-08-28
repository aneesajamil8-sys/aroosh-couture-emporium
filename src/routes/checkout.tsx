import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Truck } from "lucide-react";
import { toast } from "sonner";
import { formatPKR } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Aroosh Collections" },
      {
        name: "description",
        content:
          "Enter your shipping details and place your Aroosh Collections order with Cash on Delivery across Pakistan.",
      },
      { property: "og:title", content: "Checkout — Aroosh Collections" },
      {
        property: "og:description",
        content: "Shipping details and Cash on Delivery checkout for Aroosh Collections.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Checkout,
});

const SHIPPING_FEE = 250;

type Fields = {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postal: string;
  notes: string;
};

const empty: Fields = { name: "", phone: "", email: "", address: "", city: "", postal: "", notes: "" };

function Checkout() {
  const { detailed, total, clear } = useCart();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [fields, setFields] = useState<Fields>(empty);
  const [placed, setPlaced] = useState<{ id: string; total: number; name: string } | null>(null);

  useEffect(() => setMounted(true), []);

  const shipping = detailed.length > 0 ? SHIPPING_FEE : 0;
  const grandTotal = total + shipping;

  function set<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    if (detailed.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }
    const id = `AC-${Math.floor(100000 + Math.random() * 900000)}`;
    setPlaced({ id, total: grandTotal, name: fields.name });
    clear();
    toast.success("Order placed — we'll call you to confirm.");
  }

  const inputClass =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-gold";

  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-40 sm:px-8">
        <div className="rounded-lg border border-gold/40 bg-card p-12 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-gold" strokeWidth={1.2} />
          <h1 className="mt-6 font-serif text-3xl text-cream">Thank you{placed.name ? `, ${placed.name.split(" ")[0]}` : ""}!</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Your order <span className="text-gold">{placed.id}</span> has been placed. You will pay{" "}
            <span className="text-gold">{formatPKR(placed.total)}</span> in cash when your parcel arrives.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-md bg-gold px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold/85"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (mounted && detailed.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-40 sm:px-8">
        <div className="rounded-lg border border-border bg-card p-14 text-center">
          <h1 className="font-serif text-3xl text-cream">Checkout</h1>
          <p className="mt-4 text-muted-foreground">Your cart is empty.</p>
          <button
            type="button"
            onClick={() => navigate({ to: "/shop" })}
            className="mt-6 inline-flex rounded-md bg-gold px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold/85"
          >
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-40 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">Aroosh Collections</p>
        <h1 className="mt-2 font-serif text-4xl text-cream sm:text-5xl">Checkout</h1>
        <div className="mx-auto mt-4 h-px w-16 bg-gold/60" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={placeOrder} className="rounded-lg border border-border bg-card p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-cream">Shipping Details</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required value={fields.name} onChange={(e) => set("name", e.target.value)} placeholder="Full name" className={inputClass} />
            <input required type="tel" value={fields.phone} onChange={(e) => set("phone", e.target.value)} placeholder="Phone (03xx-xxxxxxx)" className={inputClass} />
            <input type="email" value={fields.email} onChange={(e) => set("email", e.target.value)} placeholder="Email (optional)" className={`sm:col-span-2 ${inputClass}`} />
            <input required value={fields.address} onChange={(e) => set("address", e.target.value)} placeholder="Street address" className={`sm:col-span-2 ${inputClass}`} />
            <input required value={fields.city} onChange={(e) => set("city", e.target.value)} placeholder="City" className={inputClass} />
            <input value={fields.postal} onChange={(e) => set("postal", e.target.value)} placeholder="Postal code (optional)" className={inputClass} />
            <textarea value={fields.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Delivery notes (optional)" rows={3} className={`sm:col-span-2 ${inputClass}`} />
          </div>

          <h2 className="mt-10 font-serif text-2xl text-cream">Payment Method</h2>
          <div className="mt-4 flex items-start gap-3 rounded-md border border-gold/50 bg-background p-4">
            <Truck className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.5} />
            <div>
              <p className="text-sm text-cream">Cash on Delivery</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Pay in cash to the courier when your order arrives. Available nationwide across Pakistan.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-md bg-gold px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold/85"
          >
            Place Order — {formatPKR(grandTotal)}
          </button>
        </form>

        <aside className="h-fit rounded-lg border border-border bg-card p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-cream">Order Summary</h2>
          <div className="mt-6 space-y-4">
            {detailed.map(({ product, qty }) => (
              <div key={product.id} className="flex items-center gap-3">
                <img src={product.image} alt={product.name} loading="lazy" className="h-16 w-14 rounded-md object-cover" />
                <div className="flex-1">
                  <p className="text-sm text-cream">{product.name}</p>
                  <p className="text-xs text-muted-foreground">Qty {qty}</p>
                </div>
                <p className="text-sm text-gold">{formatPKR(product.price * qty)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2 border-t border-border pt-6 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>{formatPKR(total)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Delivery</span>
              <span>{formatPKR(shipping)}</span>
            </div>
            <div className="flex items-center justify-between pt-3">
              <span className="uppercase tracking-[0.2em] text-muted-foreground">Total</span>
              <span className="font-serif text-2xl text-gold">{formatPKR(grandTotal)}</span>
            </div>
          </div>
          <Link
            to="/cart"
            className="mt-6 inline-flex w-full justify-center rounded-md border border-gold/60 px-8 py-3 text-[0.7rem] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Edit Cart
          </Link>
        </aside>
      </div>
    </div>
  );
}
