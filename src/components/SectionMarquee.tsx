type Props = { items?: string[]; variant?: "pink" | "dark" | "cream" };
const variants = { pink: "bg-pink text-primary-foreground", dark: "bg-dark text-primary-foreground", cream: "bg-cream text-foreground" };
const SectionMarquee = ({ items = ["Business Analysis", "Requirements Engineering", "Systems Design"], variant = "pink" }: Props) => <div className={`border-y border-border/20 py-4 ${variants[variant]}`}><div className="container flex flex-wrap justify-between gap-4">{items.map(item => <span key={item} className="text-xs font-medium uppercase">{item}</span>)}</div></div>;
export default SectionMarquee;
