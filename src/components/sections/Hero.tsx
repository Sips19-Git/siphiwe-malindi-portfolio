import heroImg from "@/assets/hero-portrait.jpg";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";

const Hero = () => (
  <section id="home" className="portfolio-hero relative flex flex-col justify-end overflow-hidden bg-dark pb-12 pt-28 text-primary-foreground md:pb-16">
    <img src={heroImg} alt="Siphiwe Malindi" className="absolute inset-0 h-full w-full object-cover object-[center_38%] md:object-[center_42%]" />
    <div className="hero-overlay absolute inset-0" />
    <div className="container relative z-10">
      <div className="max-w-2xl animate-fade-up">
        <p className="mb-5 text-sm font-medium text-primary-foreground/85">{profile.status} · {profile.institution} · BSc Information Technology</p>
        <h1 style={{ animationDelay: "0.2s" }} className="animate-fade-up display text-5xl font-bold leading-tight md:text-7xl">Siphiwe <span className="script text-pink">Malindi</span></h1>
        <p className="mt-5 text-xl font-medium md:text-2xl">{profile.direction}</p>
        <p className="mt-2 text-sm text-primary-foreground/75">Junior Business Analyst · Software Engineering foundation</p>
        <h2 style={{ animationDelay: "0.4s" }} className="animate-fade-up mt-7 max-w-xl text-2xl leading-snug md:text-3xl">Bridging Business Needs and Technology Through Systems Analysis.</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">I combine requirements analysis, stakeholder communication and system design to translate business needs into functional technology solutions.</p>
        <div style={{ animationDelay: "0.6s" }} className="animate-fade-up mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#portfolio">Explore my projects <ArrowUpRight /></a></Button>
          <Button asChild variant="secondary" size="lg"><a href="#contact">Get in touch</a></Button>
          <Button asChild variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="/Siphiwe-Malindi-CV.pdf" download><Download /> Download CV</a></Button>
        </div>
      </div>
      <a href="#about" className="mt-8 inline-flex items-center gap-2 text-sm text-primary-foreground/65"><ArrowDown className="h-4 w-4" /> About & academic background</a>
    </div>
  </section>
);
export default Hero;
