import { createFileRoute, Link } from "@tanstack/react-router";
import { useShop } from "@/context/ShopContext";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Register — ChronoLuxe" }] }),
  component: Register,
});

function Register() {
  const { toast } = useShop();

  const fieldClass = "w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold";

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Account created successfully (Demo Mode)");
  };

  return (
    <div className="flex h-[568px] w-full flex-col justify-between">
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE: Luxury Editorial Layout for REGISTER */}
        <div className="relative hidden flex-col justify-between bg-[#090909] p-12 lg:flex border-r border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.03),transparent_70%)]" />

          <div className="relative z-10 flex items-center gap-2 text-gold/80">
            <Sparkles className="h-4 w-4" />
            <span className="text-[10px] font-medium tracking-widest uppercase">Begin Your Horological Legacy</span>
          </div>

          <div className="relative z-10 max-w-md my-auto space-y-4">
            <p className="font-display text-4xl leading-tight text-foreground">
              "You merely look after a masterpiece for the next generation."
            </p>
            <p className="text-sm text-gold tracking-wide font-medium">— The Heritage Archive</p>
          </div>

          <div className="relative z-10 text-xs text-muted-foreground/40">
            © 2026 ChronoLuxe Worldwide. All rights reserved.
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Register Form Panel */}
        <div className="flex items-center justify-center bg-background px-6 py-12 md:px-12 lg:px-16">
          <div className="w-full max-w-md space-y-6">

            <div className="space-y-1">
              <h1 className="font-display text-3xl tracking-tight text-foreground">
                Create Account
              </h1>
              <p className="text-sm text-muted-foreground">
                Join the ChronoLuxe circle and preserve your collection.
              </p>
            </div>

            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
                    Full Name
                  </label>
                  <input required type="text" placeholder="John Doe" className={fieldClass} />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
                    Email Address
                  </label>
                  <input required type="email" placeholder="name@domain.com" className={fieldClass} />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
                    Password
                  </label>
                  <input required type="password" placeholder="••••••••••••" className={fieldClass} />
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <input required type="checkbox" className="accent-gold h-3.5 w-3.5 rounded border-border bg-background mt-0.5" />
                  <span>I agree to the premium membership terms and privacy guidelines.</span>
                </label>
              </div>

              <button className="w-full rounded-xl bg-gold py-3 text-sm font-medium text-gold-foreground transition-all active:scale-[0.99] hover:opacity-95">
                Create Account
              </button>
            </form>

            <div className="relative flex items-center py-1">
              <div className="flex-grow border-t border-border/40"></div>
              <span className="mx-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/40">Or register with</span>
              <div className="flex-grow border-t border-border/40"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={() => toast("Google Register Connected")} className="flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-card/40 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
                Google
              </button>
              <button type="button" onClick={() => toast("FaceBook Register Connected")} className="flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-card/40 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
                facebook
              </button>
            </div>

            <p className="text-center text-sm text-muted-foreground pt-2">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-gold hover:underline">
                Sign In
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}