import { FormEvent } from "react";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { createContactDraft, profile } from "@/lib/portfolio";

const Contact = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.location.href = createContactDraft(String(data.get("name") ?? ""), String(data.get("email") ?? ""), String(data.get("subject") ?? ""), String(data.get("message") ?? ""));
    toast.info("Email draft requested. Send it from your email app to complete your message.");
  };
  return <section id="contact" className="bg-card py-20 md:py-24">
    <div className="container">
      <SectionHeading eyebrow="Contact" title="Let's" accent="connect." description="I welcome conversations about Business Analysis and Business Systems Analysis internships, graduate programmes and entry-level opportunities." />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-4 border-t border-border py-6 hover:text-pink"><Mail className="h-6 w-6 shrink-0 text-pink" /><div className="min-w-0"><p className="mb-1 text-xs text-muted-foreground">Email</p><p className="break-all font-medium">{profile.email}</p></div></a>
          <a href="tel:+27609741314" className="flex items-center gap-4 border-t border-border py-6 hover:text-pink"><Phone className="h-6 w-6 text-pink" /><div><p className="mb-1 text-xs text-muted-foreground">Phone</p><p className="font-medium">{profile.phone}</p></div></a>
          <div className="flex items-center gap-4 border-y border-border py-6"><MapPin className="h-6 w-6 text-pink" /><div><p className="mb-1 text-xs text-muted-foreground">Location</p><p className="font-medium">{profile.location}</p></div></div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Business Analysis · Business Systems Analysis · Requirements engineering · Technology-driven business solutions</p>
        </div>
        <form onSubmit={onSubmit} className="reveal space-y-5">
          <div className="grid gap-5 sm:grid-cols-2"><Field name="name" label="Name" placeholder="Your name" autoComplete="name" /><Field name="email" label="Email address" placeholder="you@example.com" type="email" autoComplete="email" /></div>
          <Field name="subject" label="Subject" placeholder="Opportunity or enquiry" />
          <div><label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Message</label><textarea id="contact-message" name="message" rows={5} required placeholder="Your message" className="w-full rounded-md border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring" /></div>
          <Button type="submit" size="lg">Compose email <ArrowUpRight /></Button>
        </form>
      </div>
    </div>
  </section>;
};
const Field = ({ name, label, placeholder, type = "text", autoComplete }: { name: string; label: string; placeholder: string; type?: string; autoComplete?: string }) => <div><label htmlFor={`contact-${name}`} className="mb-2 block text-sm font-medium">{label}</label><input id={`contact-${name}`} name={name} type={type} required autoComplete={autoComplete} placeholder={placeholder} className="w-full rounded-md border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring" /></div>;
export default Contact;
