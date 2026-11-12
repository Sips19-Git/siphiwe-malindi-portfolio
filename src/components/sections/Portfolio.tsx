import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ProjectFlow from "@/components/ProjectFlow";
import { projects } from "@/lib/portfolio";
const Portfolio = () => (
  <section id="portfolio" className="bg-card py-20 md:py-24">
    <div className="container">
      <SectionHeading eyebrow="Featured projects" title="Analysis in practice." accent="Solutions with purpose." description="A selection of team, academic and freelance projects connecting requirements, system design and solution validation." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => <article key={project.slug} className="reveal flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-card)]" style={{ transitionDelay: `${index * 60}ms` }}>
          <ProjectFlow steps={project.flow} />
          <div className="flex flex-1 flex-col p-6 md:p-8">
            <p className="mb-3 text-xs text-muted-foreground">0{index + 1} / {project.subtitle}</p>
            <h3 className="display text-2xl font-bold">{project.title}</h3>
            <p className="mt-3 text-sm font-medium text-pink">{project.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{project.skills.slice(0, 3).map(skill => <li key={skill} className="text-xs text-muted-foreground">{skill}</li>)}</ul>
            <Button asChild variant="link" className="mt-6 justify-start self-start px-0"><Link to={`/projects/${project.slug}`}>View project details <ArrowUpRight /></Link></Button>
          </div>
        </article>)}
      </div>
    </div>
  </section>
);
export default Portfolio;
