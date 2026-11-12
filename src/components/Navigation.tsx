import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
export const links = [
  { label: "About", href: "#about" },
  { label: "BA Skills", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Technical Skills", href: "#technical-skills" },
  { label: "Leadership", href: "#leadership" },
];
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const light = scrolled || pathname !== "/" || open;
  const href = (hash: string) => pathname === "/" ? hash : `/${hash}`;
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 60); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  return <nav aria-label="Main navigation" className={`fixed inset-x-0 top-0 z-[100] border-b py-3 transition-colors ${light ? "border-border bg-card/95 text-foreground backdrop-blur-xl" : "border-primary-foreground/15 bg-dark/20 text-primary-foreground"}`}>
    <div className="container flex items-center justify-between gap-4">
      <a href={href("#home")} className="shrink-0 text-base font-medium">Siphiwe <span className="script text-xl text-pink">Malindi</span></a>
      <ul className="hidden items-center gap-5 lg:flex">{links.map(link => <li key={link.href}><a href={href(link.href)} className="text-xs font-medium transition-colors hover:text-pink">{link.label}</a></li>)}<li><Button asChild size="sm"><a href={href("#contact")}>Contact</a></Button></li></ul>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <ul id="mobile-menu" className="container mt-3 grid max-h-[75vh] gap-1 overflow-y-auto border-t border-border py-3 lg:hidden">{[{ label: "Home", href: "#home" }, ...links, { label: "Education", href: "#education" }, { label: "Contact", href: "#contact" }].map(link => <li key={link.href}><a href={href(link.href)} onClick={() => setOpen(false)} className="block py-2 text-sm hover:text-pink">{link.label}</a></li>)}</ul>}
  </nav>;
};
export default Navigation;
