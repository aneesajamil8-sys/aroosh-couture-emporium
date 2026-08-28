import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/boutique", label: "Boutique" },
  { to: "/shoes", label: "Shoes" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      {/* top bar */}
      <div className="flex justify-end border-b border-border/50 px-4 py-1 sm:px-8">
        <Link
          to="/staff"
          className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-gold"
        >
          Staff Login
        </Link>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
        <Link to="/" aria-label="Aroosh Collections home">
          <Logo compact />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="gold-underline text-[0.8rem] uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/cart"
          className="relative flex items-center gap-2 text-foreground/90 transition-colors hover:text-gold"
          aria-label="Shopping cart"
        >
          <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
          {mounted && count > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[0.6rem] font-semibold text-primary-foreground">
              {count}
            </span>
          )}
        </Link>
      </div>
      {/* mobile nav */}
      <nav className="flex items-center justify-center gap-5 overflow-x-auto border-t border-border/40 px-4 py-2 md:hidden">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: l.to === "/" }}
            className="whitespace-nowrap text-[0.7rem] uppercase tracking-[0.18em] text-foreground/80"
            activeProps={{ className: "text-gold" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
