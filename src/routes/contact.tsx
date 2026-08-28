import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aroosh Collections" },
      { name: "description", content: "Get in touch with Aroosh Collections, a women's fashion boutique in Pakistan. Questions about orders, sizing or styling." },
      { property: "og:title", content: "Contact — Aroosh Collections" },
      { property: "og:description", content: "Get in touch with Aroosh Collections." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-40 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">We'd Love to Hear From You</p>
        <h1 className="mt-2 font-serif text-4xl text-cream sm:text-5xl">Contact Us</h1>
        <div className="mx-auto mt-4 h-px w-16 bg-gold/60" />
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-foreground/80">
            Questions about an order, sizing, or a piece you've fallen in love with? Send us a
            message and we'll respond within one business day.
          </p>
          {[
            { icon: MapPin, label: "Boutique", value: "Main Boulevard, Lahore, Pakistan" },
            { icon: Phone, label: "Phone / WhatsApp", value: "+92 300 000 0000" },
            { icon: Mail, label: "Email", value: "hello@arooshcollections.pk" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
              <c.icon className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.5} />
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{c.label}</p>
                <p className="mt-1 text-sm text-cream">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
        <form
          className="space-y-4 rounded-lg border border-border bg-card p-7"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Message sent — we'll be in touch soon!");
          }}
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Name
            </label>
            <input id="name" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </label>
            <input id="email" type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Message
            </label>
            <textarea id="message" required rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold" />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full rounded-md bg-gold px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold/85 disabled:opacity-60"
          >
            {sent ? "Message Sent" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
