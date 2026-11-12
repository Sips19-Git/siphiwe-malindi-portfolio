import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import ProjectFlow from "@/components/ProjectFlow";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/lib/portfolio";
import NotFound from "@/pages/NotFound";
import { repositories, repositoryUrl } from "@/lib/repositories";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (project) document.title = `${project.title} — Siphiwe Malindi`;
    return () => { document.title = "Siphiwe Malindi — Aspiring Business Systems Analyst"; };
  }, [project]);
  if (!project) return <NotFound />;
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
  const repository = repositories.find(item => item.projectSlug === project.slug);
  return <>
    <Navigation />
    <main className="pt-24">
      <header className="bg-secondary pb-14 pt-8 md:pb-20">
        <div className="container">
          <Button asChild variant="link" className="mb-8 px-0"><Link to="/#portfolio"><ArrowLeft /> All projects</Link></Button>
          <p className="mb-4 text-xs uppercase text-muted-foreground">{project.subtitle}</p>
          <h1 className="display max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{project.title}</h1>
          <p className="mt-5 text-lg font-medium text-pink">{project.role}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{project.description}</p>
        </div>
      </header>
      <div className="container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
          <div className="space-y-10">
            <section><h2 className="display mb-4 text-2xl font-bold">Business problem</h2><p className="leading-relaxed text-muted-foreground">{project.problem}</p></section>
            <section><h2 className="display mb-4 text-2xl font-bold">Objectives</h2><ul className="space-y-3">{project.objectives.map(objective => <li key={objective} className="flex gap-3 leading-relaxed text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />{objective}</li>)}</ul></section>
            <section><h2 className="display mb-4 text-2xl font-bold">My role & key contributions</h2><p className="mb-5 font-medium text-pink">{project.role}</p><ol className="space-y-5">{project.contributions.map((contribution, index) => <li key={contribution} className="flex gap-4 leading-relaxed text-muted-foreground"><span className="text-sm font-medium text-pink">0{index + 1}</span>{contribution}</li>)}</ol></section>
          </div>
          <aside className="space-y-8">
            {repository && <Button asChild variant="outline"><a href={repositoryUrl(repository)} target="_blank" rel="noopener noreferrer"><Github /> View repository <ArrowUpRight /></a></Button>}
            <div className="overflow-hidden rounded-lg border border-border"><ProjectFlow steps={project.flow} /></div>
            <section><h2 className="display mb-5 text-2xl font-bold">Skills demonstrated</h2><ul className="space-y-3 text-sm text-muted-foreground">{project.skills.map(skill => <li key={skill} className="border-b border-border pb-3">{skill}</li>)}</ul></section>
            {project.technologies && <section><h2 className="display mb-4 text-2xl font-bold">Technologies used</h2><ul>{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul></section>}
          </aside>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-border pt-8"><Button asChild variant="outline"><Link to="/#portfolio"><ArrowLeft /> All projects</Link></Button>{nextProject && <Button asChild variant="link"><Link to={`/projects/${nextProject.slug}`}>Next project <ArrowRight /></Link></Button>}</div>
      </div>
    </main>
    <Footer />
  </>;
};
export default ProjectDetails;