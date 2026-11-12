import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Marquee from "@/components/Marquee";
import SectionMarquee from "@/components/SectionMarquee";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <SectionMarquee
        variant="dark"
        items={["What I Do", "Frontend Development", "Responsive Design", "Performance Optimization", "Clean Code", "Let's Build —"]}
      />
      <Services />
      <SectionMarquee
        variant="pink"
        items={["Tech Stack", "JavaScript", "HTML", "CSS", "Java", "C++", "React", "Always Learning —"]}
      />
      <Skills />
      <SectionMarquee
        variant="dark"
        items={["Get In Touch", "Available for Freelance", "Open to Full-Time", "Say Hello —", "smalindi19@gmail.com"]}
      />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
