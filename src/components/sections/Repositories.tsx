import { useState } from "react";
import { ArrowUpRight, Github, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { filterRepositories, githubProfile, repositories, repositoryCategories, repositoryUrl, type RepositoryCategory } from "@/lib/repositories";

const Repositories = () => {
  const [category, setCategory] = useState<RepositoryCategory>("All");
  const visible = filterRepositories(category);
  return <section id="repositories" className="bg-dark py-20 text-primary-foreground md:py-24">
    <div className="container">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <SectionHeading dark eyebrow="GitHub · Public repositories" title="The work behind" accent="the solutions." description="Website and application projects across commerce, healthcare, community and services — alongside my analysis-focused case studies." />
        <Button asChild variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href={githubProfile} target="_blank" rel="noopener noreferrer"><Github /> GitHub profile <ArrowUpRight /></a></Button>
      </div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-5 border-y border-primary-foreground/20 py-5">
        <div role="group" aria-label="Filter repositories" className="flex flex-wrap gap-2">{repositoryCategories.map(option => <Button key={option} size="sm" variant={category === option ? "default" : "ghost"} aria-pressed={category === option} onClick={() => setCategory(option)} className={category === option ? "" : "text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground"}>{option}</Button>)}</div>
        <p aria-live="polite" className="text-xs text-primary-foreground/60">{visible.length} of {repositories.length} repositories</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map(repository => <article key={repository.name} className="flex min-w-0 flex-col rounded-lg border border-primary-foreground/20 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-pink hover:shadow-[var(--shadow-pink)] motion-reduce:transform-none">
          <div className="mb-8 flex items-center justify-between gap-3"><Code2 className="h-7 w-7 text-pink" /><span className="text-xs text-primary-foreground/60">{repository.category}</span></div>
          <h3 className="display text-2xl font-bold">{repository.title}</h3>
          <p className="mt-2 break-all text-xs text-primary-foreground/50">{repository.name}</p>
          <p className="mt-5 flex-1 text-sm leading-relaxed text-primary-foreground/75">{repository.description}</p>
          <p className="mt-6 flex items-center gap-2 text-xs text-primary-foreground/70"><span className="h-2 w-2 rounded-full bg-pink" />{repository.language} · Primary repository language</p>
          <div className="mt-6 flex flex-wrap gap-x-5 border-t border-primary-foreground/15 pt-4">
            <Button asChild variant="link" className="h-auto px-0"><a href={repositoryUrl(repository)} target="_blank" rel="noopener noreferrer"><Github /> View repository <ArrowUpRight /></a></Button>
            {repository.projectSlug && <Button asChild variant="link" className="h-auto px-0 text-primary-foreground/75"><Link to={`/projects/${repository.projectSlug}`}>Case study <ArrowUpRight /></Link></Button>}
          </div>
        </article>)}
      </div>
    </div>
  </section>;
};
export default Repositories;