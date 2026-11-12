import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
export const links = [
  { label: "About", href: "#about" },
  { label: "BA Skills", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Repositories", href: "#repositories" },
  { label: "Experience", href: "#experience" },
  { label: "Technical Skills", href: "#technical-skills" },
  { label: "Leadership", href: "#leadership" },
];
const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const href = (hash: string) => pathname === "/" ? hash : `/${hash}`;
  useEffect(() => { setOpen(false); }, [pathname]);
  return <nav aria-label="Main navigation" className={`floating-navigation fixed inset-x-0 top-3 z-[100] border border-border bg-card/95 py-3 text-foreground backdrop-blur-xl sm:top-5 ${open ? "rounded-[2rem]" : "rounded-full"}`}>
    <div className="flex items-center justify-between gap-4 px-4 md:px-6">
      <a href={href("#home")} className="shrink-0 text-base font-medium">Siphiwe <span className="script text-xl text-pink">Malindi</span></a>
      <ul className="hidden items-center gap-5 xl:flex">{links.map(link => <li key={link.href}><a href={href(link.href)} className="inline-flex min-h-11 items-center whitespace-nowrap text-xs font-medium transition-colors hover:text-pink">{link.label}</a></li>)}<li><Button asChild size="sm" className="h-8 rounded-full px-3 text-xs"><a href={href("#contact")}>Contact</a></Button></li></ul>
      <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0 rounded-full xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <ul id="mobile-menu" className="mx-4 mt-3 grid max-h-[calc(100dvh-8rem)] gap-1 overflow-y-auto overscroll-contain border-t border-border py-3 xl:hidden">{[{ label: "Home", href: "#home" }, ...links, { label: "Education", href: "#education" }, { label: "Contact", href: "#contact" }].map(link => <li key={link.href}><a href={href(link.href)} onClick={() => setOpen(false)} className="flex min-h-11 items-center py-2 text-sm hover:text-pink">{link.label}</a></li>)}</ul>}
  </nav>;
};
export default Navigation;
