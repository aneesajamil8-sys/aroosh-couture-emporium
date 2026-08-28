import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Boutique" | "Shoes";
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: "p1", name: "Embroidered Lawn 3-Piece Suit", category: "Boutique", price: 4500, image: p1 },
  { id: "p2", name: "Chiffon Party Wear Dress", category: "Boutique", price: 6200, image: p2 },
  { id: "p3", name: "Casual Cotton Kurti", category: "Boutique", price: 2800, image: p3 },
  { id: "p4", name: "Formal Heels — Nude", category: "Shoes", price: 3200, image: p4 },
  { id: "p5", name: "Embellished Flat Sandals", category: "Shoes", price: 2500, image: p5 },
  { id: "p6", name: "Block Heel Pumps — Black", category: "Shoes", price: 3600, image: p6 },
  { id: "p7", name: "Silk Dupatta Shawl — Maroon", category: "Boutique", price: 1900, image: p7 },
  { id: "p8", name: "Traditional Khussa Flats", category: "Shoes", price: 2200, image: p8 },
];

export const formatPKR = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;
