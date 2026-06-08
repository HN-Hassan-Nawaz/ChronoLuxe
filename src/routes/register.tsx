import { createFileRoute, Link } from "@tanstack/react-router";
import { useShop } from "@/context/ShopContext";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Register — ChronoLuxe" }] }),
  component: Register,
});

function Register() {
  const { toast } = useShop();
  const field = "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-gold";
  return (
    <div className="container-x flex min-h-[70vh] items-center justify-center py-12">
      <form onSubmit={(e) => { e.preventDefault(); toast("Account created (demo)"); }} className="w-full max-w-md rounded-2xl border border-border bg-card p-8">
        <h1 className="font-display text-3xl">Create Account</h1>
        <p className="mt-1 text-sm text-muted-foreground">Join the ChronoLuxe circle</p>
        <div className="mt-6 space-y-3">
          <input required placeholder="Full name" className={field} />
          <input required type="email" placeholder="Email" className={field} />
          <input required type="password" placeholder="Password" className={field} />
        </div>
        <button className="mt-5 w-full rounded-md bg-gold py-3 text-sm font-medium text-gold-foreground hover:opacity-90">Create Account</button>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Already have one? <Link to="/login" className="text-gold hover:underline">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
