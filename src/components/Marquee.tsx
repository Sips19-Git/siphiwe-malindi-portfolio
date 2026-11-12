const items = ["Business Analysis", "Requirements Engineering", "System Design", "Stakeholder Communication"];
const Marquee = () => <div className="border-y border-dark/10 bg-pink py-4 text-primary-foreground"><div className="container flex flex-wrap justify-between gap-x-6 gap-y-2">{items.map(item => <span key={item} className="text-xs font-medium uppercase">{item}</span>)}</div></div>;
export default Marquee;
