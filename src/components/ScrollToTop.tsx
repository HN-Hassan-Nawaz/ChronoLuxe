import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-[80] grid h-11 w-11 place-items-center rounded-full bg-gold text-gold-foreground shadow-2xl transition hover:opacity-90 animate-fade-in">
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
