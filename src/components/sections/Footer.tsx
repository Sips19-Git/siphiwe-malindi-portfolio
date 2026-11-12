import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { links } from "@/components/Navigation";
const Footer = () => (
  <footer className="bg-dark py-12 text-primary-foreground">
    <div className="container">
      <div className="grid gap-10 border-b border-primary-foreground/15 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><a href="/#home" className="display text-3xl font-bold">Siphiwe <span className="script text-pink">Malindi</span></a><p className="mt-4 text-sm text-primary-foreground/75">{profile.direction} / {profile.secondaryDirection}</p><p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/60">Final-year IT student at Eduvos, connecting business requirements with technically grounded solutions.</p></div>
        <div><h3 className="mb-4 text-sm font-medium text-pink">Explore</h3><ul className="grid gap-2 text-sm text-primary-foreground/70">{[...links, { label: "Education", href: "#education" }].map(link => <li key={link.href}><a href={`/${link.href}`} className="hover:text-pink">{link.label}</a></li>)}</ul></div>
        <div><h3 className="mb-4 text-sm font-medium text-pink">Get in touch</h3><a href={`mailto:${profile.email}`} className="flex items-center gap-2 break-all text-sm text-primary-foreground/70 hover:text-pink"><Mail className="h-4 w-4 shrink-0" />{profile.email}</a><a href="tel:+27609741314" className="mt-3 block text-sm text-primary-foreground/70 hover:text-pink">{profile.phone}</a><p className="mt-3 text-sm text-primary-foreground/60">{profile.location}</p><Button asChild variant="link" className="mt-3 px-0"><a href="/Siphiwe-Malindi-CV.pdf" download><Download /> Download CV</a></Button></div>
      </div>
      <p className="pt-6 text-xs text-primary-foreground/50">© {new Date().getFullYear()} Siphiwe Malindi. All rights reserved.</p>
    </div>
  </footer>
);
export default Footer;
