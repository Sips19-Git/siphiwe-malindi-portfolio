import { ClipboardList, Network, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { analysisSkills } from "@/lib/portfolio";
const icons = [ClipboardList, Network, Users];
const Services = () => (
  <section id="services" className="bg-secondary py-20 md:py-24">
    <div className="container">
      <SectionHeading eyebrow="Business Analysis & Delivery" title="From business needs" accent="to clear requirements." description="Analytical, communication and delivery capabilities developed through academic work, team projects and freelance experience." />
      <div className="grid gap-10 lg:grid-cols-3">
        {analysisSkills.map((group, index) => {
          const Icon = icons[index] ?? ClipboardList;
          return <div key={group.title} className="border-t-2 border-pink pt-6"><Icon className="mb-5 h-7 w-7 text-pink" /><h3 className="display mb-5 text-2xl font-bold">{group.title}</h3><ul className="space-y-4">{group.skills.map(skill => <li key={skill} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />{skill}</li>)}</ul></div>;
        })}
      </div>
    </div>
  </section>
);
export default Services;
