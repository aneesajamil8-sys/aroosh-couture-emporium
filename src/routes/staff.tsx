import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Staff Login — Aroosh Collections" },
      { name: "description", content: "Staff access portal for Aroosh Collections." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: StaffLogin,
});

function StaffLogin() {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="w-full max-w-sm rounded-lg border border-border bg-card p-8">
        <div className="mb-6 flex flex-col items-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
            <Lock className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <h1 className="mt-4 font-serif text-2xl text-cream">Staff Login</h1>
          <p className="mt-1 text-xs text-muted-foreground">Authorized personnel only</p>
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setError("Staff accounts are managed by the boutique owner. Please contact admin.");
          }}
        >
          <div>
            <label htmlFor="email" className="mb-1.5 block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold"
              placeholder="staff@aroosh.pk"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-md bg-maroon px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-secondary-foreground transition-colors hover:bg-maroon/85"
          >
            Sign In
          </button>
        </form>
        <p className="mt-5 text-center text-xs text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-gold">
            ← Back to store
          </Link>
        </p>
      </div>
    </div>
  );
}
