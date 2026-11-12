import CustomCursor from "@/components/CustomCursor";
import SectionMarquee from "@/components/SectionMarquee";
import { useReveal } from "@/hooks/useReveal";
import Navigation from "@/components/Navigation";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Experience from "@/components/sections/Experience";
import Leadership from "@/components/sections/Leadership";
import Repositories from "@/components/sections/Repositories";
import Delivery from "@/components/sections/Delivery";
import Education from "@/components/sections/Education";

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Marquee />
      <div className="post-hero-content">
      <About />
      <SectionMarquee variant="dark" items={["BA Skills", "Requirements Elicitation", "User Stories", "Process Modelling", "Stakeholder Engagement", "Validation —"]} />
      <Services />
      <Portfolio />
      <Repositories />
      <Experience />
      <Delivery />
      <SectionMarquee variant="pink" items={["Tech Stack", "Java", "C++", "PHP", "JavaScript", "HTML", "CSS", "MySQL", "MongoDB", "UML —"]} />
      <Skills />
      <Education />
      <Leadership />
      <SectionMarquee variant="dark" items={["Get In Touch", "Internships", "Graduate Programmes", "Entry-Level Opportunities", "smalindi19@gmail.com"]} />
      <Contact />
      <Footer />
      </div>
    </main>
  );
};

export default Index;
