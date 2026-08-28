import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All — Aroosh Collections" },
      { name: "description", content: "Browse all boutique clothing and shoes at Aroosh Collections. Embroidered suits, party wear, heels and sandals with prices in PKR." },
      { property: "og:title", content: "Shop All — Aroosh Collections" },
      { property: "og:description", content: "Browse all boutique clothing and shoes at Aroosh Collections." },
    ],
  }),
  component: () => <CatalogPage title="Shop All" eyebrow="The Full Collection" />,
});
