import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const Experience = () => (
  <section id="experience" className="bg-secondary py-20 md:py-24">
    <div className="container">
      <SectionHeading eyebrow="Experience & Practical Projects" title="Client needs." accent="Practical delivery." description="Freelance website development has given me practical experience in stakeholder communication, requirements gathering, expectation management, validation and solution delivery." />
      <div className="grid gap-8 border-y border-border py-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
        <div><BriefcaseBusiness className="mb-5 h-7 w-7 text-pink" /><h3 className="display text-2xl font-bold">Freelance Web Developer</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Personal portfolios, church websites and business websites.</p><Button asChild variant="link" className="mt-4 px-0"><Link to="/projects/freelance-websites">View practical work <ArrowUpRight /></Link></Button></div>
        <ul className="space-y-5 text-sm leading-relaxed text-muted-foreground">
          <li><strong className="font-medium text-foreground">Requirements & solution design.</strong> Designed and developed responsive websites aligned with client objectives and organisational needs.</li>
          <li><strong className="font-medium text-foreground">Stakeholder communication.</strong> Managed client relationships and expectations throughout delivery, providing progress updates, gathering feedback and implementing requested changes.</li>
          <li><strong className="font-medium text-foreground">Validation & testing.</strong> Conducted functional testing against agreed requirements, identified and resolved issues, and performed retesting before handover.</li>
          <li><strong className="font-medium text-foreground">Project coordination.</strong> Independently managed multiple client projects, coordinating requirements, development activities, feedback and delivery.</li>
        </ul>
      </div>
    </div>
  </section>
);
export default Experience;