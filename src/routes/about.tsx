import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, HeartHandshake, Gem } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Aroosh Collections" },
      { name: "description", content: "The story of Aroosh Collections, a women's fashion boutique in Pakistan devoted to timeless elegance and modern grace." },
      { property: "og:title", content: "About Us — Aroosh Collections" },
      { property: "og:description", content: "A women's fashion boutique in Pakistan devoted to timeless elegance and modern grace." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 pt-40 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">Our Story</p>
        <h1 className="mt-2 font-serif text-4xl text-cream sm:text-5xl">About Aroosh Collections</h1>
        <div className="mx-auto mt-4 h-px w-16 bg-gold/60" />
      </div>
      <div className="space-y-6 text-center text-base leading-relaxed text-foreground/80">
        <p>
          Aroosh Collections was born from a love of Pakistani craftsmanship — the delicate threadwork
          of an embroidered lawn suit, the quiet confidence of a well-made heel. Based in Pakistan, we
          curate boutique clothing and shoes for women who move between tradition and modernity with ease.
        </p>
        <p>
          Every piece in our collection is chosen for its fabric, its finish, and the way it makes a
          woman feel: elegant, graceful, and entirely herself.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Gem, title: "Curated Quality", desc: "Handpicked fabrics and finishes on every piece." },
          { icon: Sparkles, title: "Timeless Design", desc: "Styles that honor tradition and embrace now." },
          { icon: HeartHandshake, title: "Made with Care", desc: "Serving women across Pakistan with love." },
        ].map((v) => (
          <div key={v.title} className="rounded-lg border border-border bg-card p-7 text-center">
            <v.icon className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
            <h3 className="mt-4 font-serif text-xl text-cream">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-flex rounded-md bg-gold px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold/85"
        >
          Explore the Collection
        </Link>
      </div>
    </div>
  );
}
