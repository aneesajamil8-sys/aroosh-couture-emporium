import { products, type Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function CatalogPage({
  title,
  eyebrow,
  filter,
}: {
  title: string;
  eyebrow: string;
  filter?: Product["category"];
}) {
  const list = filter ? products.filter((p) => p.category === filter) : products;
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-40 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-2 font-serif text-4xl text-cream sm:text-5xl">{title}</h1>
        <div className="mx-auto mt-4 h-px w-16 bg-gold/60" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
