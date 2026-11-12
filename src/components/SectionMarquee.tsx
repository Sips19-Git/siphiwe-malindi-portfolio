type Props = {
  items?: string[];
  variant?: "pink" | "dark" | "cream";
};

const defaultItems = [
  "Business Systems Analysis",
  "Requirements Engineering",
  "Stakeholder Communication",
  "System Design",
  "Functional Testing",
  "Documentation",
  "Open to Work",
  "Let's Build —",
];

const variants = {
  pink: "bg-pink text-dark border-dark",
  dark: "bg-dark text-white border-pink",
  cream: "bg-cream text-dark border-dark",
};

const SectionMarquee = ({ items = defaultItems, variant = "pink" }: Props) => {
  const loop = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y-2 py-3 ${variants[variant]}`}>
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.2em]">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default SectionMarquee;
