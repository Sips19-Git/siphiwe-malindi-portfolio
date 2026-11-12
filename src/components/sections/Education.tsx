import { GraduationCap, Download, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";

const Education = () => <section id="education" className="bg-card py-20 md:py-24">
  <div className="container">
    <SectionHeading eyebrow="Education & career direction" title="A technical foundation." accent="A business-focused future." />
    <div className="grid gap-10 border-y border-border py-9 lg:grid-cols-2 lg:gap-20">
      <div className="reveal"><GraduationCap className="mb-5 h-8 w-8 text-pink" /><p className="mb-3 text-sm font-medium text-pink">{profile.institution} · {profile.status}</p><h3 className="display text-2xl font-bold">{profile.qualification}</h3><p className="mt-5 text-sm text-muted-foreground">Expected completion: <strong className="font-medium text-foreground">{profile.expectedCompletion}</strong></p><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Academic knowledge in the Software Development Life Cycle, database management, system design and software testing supports my understanding of how information systems are delivered.</p></div>
      <div className="reveal"><p className="mb-3 text-sm font-medium text-pink">Professional direction</p><h3 className="display text-2xl font-bold">{profile.direction} / {profile.secondaryDirection}</h3><p className="mt-5 text-sm leading-relaxed text-muted-foreground">I am interested in understanding business problems, analysing requirements, communicating with stakeholders and working with technical teams to deliver effective information systems.</p><p className="mt-5 text-sm leading-relaxed text-muted-foreground">My career interests include Business Analysis and Business Systems Analysis internships, graduate programmes and entry-level opportunities.</p><div className="mt-6 flex flex-wrap gap-3"><Button asChild><a href="#contact">Discuss an opportunity <ArrowUpRight /></a></Button><Button asChild variant="outline"><a href={profile.cvUrl} download="Siphiwe-Malindi-CV.pdf"><Download /> Download CV</a></Button></div></div>
    </div>
  </div>
</section>;
export default Education;