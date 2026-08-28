import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";

export const Route = createFileRoute("/shoes")({
  head: () => ({
    meta: [
      { title: "Shoes — Aroosh Collections" },
      { name: "description", content: "Elegant women's shoes in Pakistan: formal heels, embellished sandals, block heel pumps and traditional khussa flats at Aroosh Collections." },
      { property: "og:title", content: "Shoes — Aroosh Collections" },
      { property: "og:description", content: "Heels, sandals, pumps and khussas crafted for elegance." },
    ],
  }),
  component: () => <CatalogPage title="Shoes" eyebrow="Step in Grace" filter="Shoes" />,
});
