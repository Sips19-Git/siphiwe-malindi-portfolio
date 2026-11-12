import SectionHeading from "@/components/SectionHeading";
import { interpersonalSkills, technicalSkills } from "@/lib/portfolio";
const Skills = () => (
  <section id="technical-skills" className="bg-dark py-20 text-primary-foreground md:py-24">
    <div className="container">
      <SectionHeading dark eyebrow="Software Engineering foundation" title="Technical &" accent="analytical skills." description="Technical competencies that support my Business Systems Analysis direction, helping me connect business requirements with implementation decisions." />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">{technicalSkills.map(group => <div key={group.title} className="border-t border-primary-foreground/20 pt-6"><h3 className="mb-5 text-lg font-medium">{group.title}</h3><ul className="space-y-3 text-sm text-primary-foreground/70">{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
      <div className="mt-16 border-t border-primary-foreground/20 pt-10"><h3 className="display mb-6 text-2xl font-bold">Professional & interpersonal skills</h3><ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">{interpersonalSkills.map(skill => <li key={skill} className="flex items-start gap-3 text-sm text-primary-foreground/75"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />{skill}</li>)}</ul></div>
    </div>
  </section>
);
export default Skills;
