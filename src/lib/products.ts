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
  description: string;
  details: string[];
  sizes: string[];
};

const CLOTHING_SIZES = ["XS", "S", "M", "L", "XL"];
const SHOE_SIZES = ["36", "37", "38", "39", "40", "41"];

export const products: Product[] = [
  { id: "p1", name: "Embroidered Lawn 3-Piece Suit", category: "Boutique", price: 4500, image: p1, description: "Hand-embroidered on premium summer lawn, this three-piece suit pairs an intricately worked shirt with a printed chiffon dupatta and matching cambric trousers. A festive-yet-breathable staple for Pakistani summers, finished with delicate thread and sequin detailing along the neckline and sleeves.", details: ["Unstitched 3-piece: shirt, dupatta, trousers", "Premium lawn with thread & sequin embroidery", "Printed chiffon dupatta (2.5 m)", "Dry clean recommended"], sizes: CLOTHING_SIZES, },
  { id: "p2", name: "Chiffon Party Wear Dress", category: "Boutique", price: 6200, image: p2, description: "A flowing party-wear dress in double-layered chiffon with a soft inner lining, cut for movement and finished with a subtle shimmer border. Designed for mehndi nights, engagements and evening gatherings where you want elegance without weight.", details: ["Double-layer chiffon with silk lining", "Hand-finished shimmer border", "Concealed side zip", "Dry clean only"], sizes: CLOTHING_SIZES, },
  { id: "p3", name: "Casual Cotton Kurti", category: "Boutique", price: 2800, image: p3, description: "An everyday cotton kurti tailored for comfort — breathable fabric, a relaxed straight cut and clean side slits that make it easy to style with trousers, jeans or a shalwar. A wardrobe workhorse for work days and casual outings.", details: ["100% breathable cotton", "Straight cut with side slits", "Full-length sleeves with button cuff", "Machine washable at 30°C"], sizes: CLOTHING_SIZES, },
  { id: "p4", name: "Formal Heels — Nude", category: "Shoes", price: 3200, image: p4, description: "Classic pointed-toe heels in a warm nude finish that lengthens the leg and pairs with everything from formal shalwar kameez to Western wear. A cushioned insole and 3-inch stable heel keep them wearable through long events.", details: ["3 inch (7.5 cm) block-tapered heel", "Soft faux-leather upper", "Cushioned memory-foam insole", "Anti-slip textured sole"], sizes: SHOE_SIZES, },
  { id: "p5", name: "Embellished Flat Sandals", category: "Shoes", price: 2500, image: p5, description: "Flat sandals finished with hand-set pearl and stone embellishment across the strap — the easy answer to long wedding functions when heels are not an option. Lightweight, flexible and comfortable straight out of the box.", details: ["Hand-set pearl & stone embellishment", "Flexible padded footbed", "Adjustable back strap", "Lightweight flat sole"], sizes: SHOE_SIZES, },
  { id: "p6", name: "Block Heel Pumps — Black", category: "Shoes", price: 3600, image: p6, description: "A refined black pump on a sturdy block heel: sleek enough for formal wear, grounded enough for all-day comfort. The rounded almond toe keeps it timeless season after season.", details: ["2.5 inch (6 cm) block heel", "Matte faux-leather finish", "Padded almond toe box", "Durable rubber outsole"], sizes: SHOE_SIZES, },
  { id: "p7", name: "Silk Dupatta Shawl — Maroon", category: "Boutique", price: 1900, image: p7, description: "A pure silk-blend dupatta in deep maroon with a hand-finished tassel edge. Drapes beautifully over plain kurtis and formal suits alike, adding instant richness to a simple outfit.", details: ["Silk blend, 2.5 m x 1.1 m", "Hand-knotted tassel edging", "Rich maroon dye, colour-fast", "Dry clean recommended"], sizes: CLOTHING_SIZES, },
  { id: "p8", name: "Traditional Khussa Flats", category: "Shoes", price: 2200, image: p8, description: "Traditional khussa flats crafted by artisans with fine thread work over a soft leather-look upper. A cultural classic that finishes an eastern outfit with quiet craftsmanship.", details: ["Artisan thread embroidery", "Soft cushioned inner lining", "Flexible flat sole", "Handcrafted in Pakistan"], sizes: SHOE_SIZES, },
];

export const formatPKR = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;
