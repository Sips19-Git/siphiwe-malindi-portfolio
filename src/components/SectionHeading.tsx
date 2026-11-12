type Props = { eyebrow: string; title: string; accent: string; description?: string; dark?: boolean };

const SectionHeading = ({ eyebrow, title, accent, description, dark = false }: Props) => (
  <div className="reveal mb-8 min-w-0 max-w-3xl sm:mb-12">
    <p className={`mb-5 text-xs font-medium uppercase ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{eyebrow}</p>
    <h2 className="display break-words text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title} <span className="text-pink">{accent}</span></h2>
    {description && <p className={`mt-5 max-w-2xl text-base leading-relaxed ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{description}</p>}
  </div>
);

export default SectionHeading;