import aboutImg from "@/assets/about-portrait.jpg";
import { GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/portfolio";

const About = () => (
  <section id="about" className="bg-card py-20 md:py-24">
    <div className="container grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <img src={aboutImg} alt="Siphiwe Malindi" loading="lazy" className="reveal h-[420px] w-full rounded-lg object-cover transition-all duration-500 hover:scale-[1.02] md:h-[550px]" />
      <div>
        <SectionHeading eyebrow="About me" title="Business-minded." accent="Technically grounded." />
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>I am a final-year BSc Information Technology student specialising in Software Engineering at Eduvos, with a strong interest in Business Analysis, Business Systems Analysis and technology-driven problem-solving.</p>
          <p>I have practical project and freelance experience in gathering and analysing business requirements, communicating with clients, documenting functional specifications, developing user stories and translating business needs into technical solutions.</p>
          <p>My knowledge includes the Software Development Life Cycle (SDLC), database management, system design and software testing. I combine technical understanding with analytical thinking, communication, documentation and problem-solving to bridge the gap between business requirements and technical implementation.</p>
        </div>
        <div className="reveal mt-8 flex items-start gap-4 border-y border-border py-6">
          <GraduationCap className="mt-1 h-7 w-7 shrink-0 text-pink" />
          <div><p className="mb-2 text-xs uppercase text-muted-foreground">Current education</p><h3 className="text-lg font-medium">{profile.qualification}</h3><p className="mt-1 text-muted-foreground">{profile.institution} · {profile.status}</p></div>
        </div>
        <Button asChild variant="link" className="mt-5 px-0"><a href={profile.cvUrl} download="Siphiwe-Malindi-CV.pdf"><Download /> Download CV</a></Button>
      </div>
    </div>
  </section>
);
export default About;
