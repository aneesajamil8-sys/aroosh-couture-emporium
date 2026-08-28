import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import catClothing from "@/assets/cat-clothing.jpg";
import catShoes from "@/assets/cat-shoes.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aroosh Collections — Timeless Elegance, Modern Grace" },
      {
        name: "description",
        content:
          "Shop elegant women's boutique clothing and shoes at Aroosh Collections, Pakistan. New arrivals in embroidered suits, party wear, heels and more.",
      },
      { property: "og:title", content: "Aroosh Collections — Timeless Elegance, Modern Grace" },
      {
        property: "og:description",
        content: "Elegant women's boutique clothing and shoes, crafted for the modern Pakistani woman.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Elegant woman in maroon and gold formal wear"
          width={1920}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/30" />
        <div className="fade-up relative z-10 px-4 pb-16 text-center">
          <p className="mb-4 text-[0.7rem] uppercase tracking-[0.5em] text-gold">
            Aroosh Collections
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-5xl leading-tight text-cream sm:text-6xl md:text-7xl">
            Timeless Elegance, <span className="italic text-gold">Modern Grace</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm tracking-wide text-foreground/75 sm:text-base">
            Boutique clothing and shoes for the woman who carries tradition with contemporary poise.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-gold/85 hover:shadow-[0_0_30px_-5px_var(--color-gold)]"
          >
            Shop Now
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">Explore</p>
          <h2 className="mt-2 font-serif text-4xl text-cream">Our Collections</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold/60" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { img: catClothing, title: "Women's Clothing", to: "/boutique", desc: "Embroidered suits, kurtis & party wear" },
            { img: catShoes, title: "Shoes", to: "/shoes", desc: "Heels, sandals & traditional khussas" },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative block overflow-hidden rounded-lg border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-serif text-3xl text-cream">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-gold">
                  Shop Now
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">
              Featured Products
            </p>
            <h2 className="mt-2 font-serif text-4xl text-cream">New Arrivals</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold/60" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-md border border-gold/60 px-8 py-3 text-[0.7rem] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              View All Products
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
