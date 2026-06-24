import { createFileRoute, Link } from "@tanstack/react-router";
import { useShop } from "@/context/ShopContext";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — ChronoLuxe" }] }),
  component: Login,
});

function Login() {
  const { toast } = useShop();

  const fieldClass = "w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold";

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Signed in successfully (Demo Mode)");
  };

  return (
    /* STRETCH CONTAINER: Eliminates the gap above the footer */
    <div className="flex h-[487px] w-full flex-col justify-between">

      {/* Main Grid split layout section expands to absorb all available space */}
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE: Luxury Editorial Block (Stretches perfectly to the footer edge) */}
        <div className="relative hidden flex-col justify-between bg-[#090909] p-12 lg:flex border-r border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.03),transparent_70%)]" />

          <div className="relative z-10 flex items-center gap-2 text-gold/80">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-[10px] font-medium tracking-widest uppercase">Secure Vault Synchronization</span>
          </div>

          <div className="relative z-10 max-w-md my-auto space-y-4">
            <p className="font-display text-4xl leading-tight text-foreground">
              "True luxury isn't about rushing time; it is about honoring it."
            </p>
            <p className="text-sm text-gold tracking-wide font-medium">— The Collector's Vault</p>
          </div>

          <div className="relative z-10 text-xs text-muted-foreground/40">
            © 2026 ChronoLuxe Worldwide. All rights secured.
          </div>
        </div>

        {/* RIGHT SIDE: Form Panel Container */}
        <div className="flex items-center justify-center bg-background px-6 py-12 md:px-12 lg:px-16">
          <div className="w-full max-w-md space-y-6">

            {/* Header */}
            <div className="space-y-1">
              <h1 className="font-display text-3xl tracking-tight text-foreground">
                Welcome Back
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials below to access your account.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div className="space-y-3">
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

              {/* Utility Actions */}
              <div className="flex items-center justify-between text-sm pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <input type="checkbox" className="accent-gold h-3.5 w-3.5 rounded border-border bg-background" />
                  <span>Keep me recognized</span>
                </label>
                <Link to="/login" onClick={(e) => { e.preventDefault(); toast("Reset code dispatched"); }} className="text-xs font-medium text-gold hover:underline">
                  Forgot passkey?
                </Link>
              </div>

              {/* Submit CTA */}
              <button className="w-full rounded-xl bg-gold py-3 text-sm font-medium text-gold-foreground transition-all active:scale-[0.99] hover:opacity-95">
                Unlock Vault
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center py-1">
              <div className="flex-grow border-t border-border/40"></div>
              <span className="mx-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/40">Or continue with</span>
              <div className="flex-grow border-t border-border/40"></div>
            </div>

            {/* Social Authentication */}
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={() => toast("Google Connected")} className="flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-card/40 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
                Google
              </button>
              <button type="button" onClick={() => toast("Facebook Connected")} className="flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-card/40 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
                facebook
              </button>
            </div>

            {/* Redirection Link */}
            <p className="text-center text-sm text-muted-foreground pt-2">
              New to our collections?{" "}
              <Link to="/register" className="font-semibold text-gold hover:underline">
                Initialize an Account
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}