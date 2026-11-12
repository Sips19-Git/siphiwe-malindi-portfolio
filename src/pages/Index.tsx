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

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Skills />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
