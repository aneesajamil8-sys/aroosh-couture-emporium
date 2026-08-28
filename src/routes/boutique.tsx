import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/boutique")({
  head: () => ({
    meta: [
      { title: "Boutique Clothing — Aroosh Collections" },
      { name: "description", content: "Women's boutique clothing in Pakistan: embroidered lawn suits, chiffon party wear, kurtis and silk dupattas at Aroosh Collections." },
      { property: "og:title", content: "Boutique Clothing — Aroosh Collections" },
      { property: "og:description", content: "Embroidered suits, party wear and kurtis for the modern woman." },
    ],
  }),
  component: () => <CatalogPage title="Women's Clothing" eyebrow="The Boutique" filter="Boutique" />,
});
