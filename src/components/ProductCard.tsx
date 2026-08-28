import { ShoppingBag } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { formatPKR, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const navigate = useNavigate();
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-gold/50">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-background/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-gold backdrop-blur">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg text-cream">{product.name}</h3>
        <p className="font-serif text-lg text-gold">{formatPKR(product.price)}</p>
        <button
          type="button"
          onClick={() => {
            add(product.id);
            toast.success(`${product.name} added to cart`);
          }}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-gold/85"
        >
          <ShoppingBag className="h-3.5 w-3.5" strokeWidth={2} />
          Add to Cart
        </button>
        <button
          type="button"
          onClick={() => {
            add(product.id);
            navigate({ to: "/checkout" });
          }}
          className="inline-flex items-center justify-center rounded-md border border-gold/60 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          Shop Now
        </button>
      </div>
    </article>
  );
}
