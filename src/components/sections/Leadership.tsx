import { activities } from "@/lib/portfolio";
import SectionHeading from "@/components/SectionHeading";

const Leadership = () => (
  <section id="leadership" className="bg-secondary py-20 md:py-24">
    <div className="container">
      <SectionHeading eyebrow="Extracurricular activities · 2024–2026" title="Leadership &" accent="involvement." description="Beyond academic work, these activities strengthen my leadership, public speaking, critical thinking, confidence and communication." />
      <div className="grid gap-x-12 md:grid-cols-2">{activities.map(activity => <div key={activity.organisation} className="reveal border-t border-border py-7"><p className="mb-2 text-sm font-medium text-pink">{activity.role}</p><h3 className="display text-2xl font-bold">{activity.organisation}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{activity.focus}</p></div>)}</div>
    </div>
  </section>
);
export default Leadership;