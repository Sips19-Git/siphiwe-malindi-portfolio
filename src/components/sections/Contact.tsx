import { FormEvent, useState } from "react";
import { toast } from "sonner";
import contactPortrait from "@/assets/contact-portrait.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";

const items = [
  { icon: "📧", label: "Email",         value: "smalindi19@gmail.com",  bg: "bg-soft-pink" },
  { icon: "📱", label: "Phone",         value: "+27 60 974 1314",       bg: "bg-yellow/20" },
  { icon: "📍", label: "Location",      value: "South Africa",          bg: "bg-blue/10" },
  { icon: "💼", label: "Available For", value: "Freelance & Full-time", bg: "bg-teal/10" },
];

const Contact = () => {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="container">
        <div className="reveal mb-14 max-w-3xl">
          <span className="tag-pill tag-orange mb-6">Get In Touch</span>
          <h2 className="display leading-[0.95] text-balance">
            <span className="block text-xl italic text-foreground/60">Let's work</span>
            <span className="block text-5xl font-bold text-pink md:text-7xl">Together —</span>
            <span className="script block text-4xl text-orange md:text-5xl">Say Hello!</span>
          </h2>
          <p className="mt-5 max-w-xl text-foreground/70">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal space-y-6">
            <div className="space-y-4">
              {items.map((it) => (
                <div key={it.label} className="flex items-center gap-4 rounded-2xl border border-border bg-cream/50 p-5 transition-all hover:border-pink/30 hover:shadow-[var(--shadow-card)]">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${it.bg}`}>
                    {it.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/60">{it.label}</p>
                    <p className="text-base font-medium">{it.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={contactPortrait} alt="" loading="lazy" className="h-48 w-full rounded-2xl object-cover" />
              <img src={heroPortrait} alt="" loading="lazy" className="h-48 w-full rounded-2xl object-cover" />
            </div>
          </div>

          <form onSubmit={onSubmit} className="reveal space-y-5 rounded-3xl border-2 border-pink/60 bg-cream/40 p-6 shadow-[0_0_0_6px_hsl(var(--pink)/0.15),0_25px_60px_-15px_hsl(var(--pink)/0.55)] ring-4 ring-pink/30 md:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field name="first_name" label="First Name" placeholder="Your name" />
              <Field name="last_name"  label="Last Name"  placeholder="Your surname" />
            </div>
            <Field name="email"   label="Email Address" placeholder="you@example.com" type="email" />
            <Field name="subject" label="Subject"       placeholder="What's this about?" />
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground/60">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-border bg-white px-5 py-4 text-base outline-none transition-all focus:border-pink focus:ring-2 focus:ring-pink/20"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink px-8 py-4 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-pink)] disabled:opacity-60 sm:w-auto"
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}) => (
  <div>
    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground/60">{label}</label>
    <input
      name={name}
      type={type}
      required
      placeholder={placeholder}
      className="w-full rounded-full border border-border bg-white px-5 py-3.5 text-base outline-none transition-all focus:border-pink focus:ring-2 focus:ring-pink/20"
    />
  </div>
);

export default Contact;
