import aboutImg from "@/assets/about-portrait.jpg";

const About = () => (
  <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
    <div
      aria-hidden
      className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full"
      style={{ background: "hsl(var(--pink) / 0.12)", filter: "blur(80px)" }}
    />
    <div className="container relative grid gap-16 lg:grid-cols-2 lg:gap-20">
      <div className="reveal">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Siphiwe at work"
            loading="lazy"
            className="h-[480px] w-full rounded-2xl object-cover transition-all duration-500 hover:scale-[1.02] md:h-[580px]"
          />
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-pink px-6 py-4 text-white shadow-[var(--shadow-pink)]">
            <p className="script text-3xl leading-none">Hello!</p>
          </div>
        </div>
      </div>

      <div className="reveal flex flex-col justify-center">
        <span className="tag-pill tag-pink mb-6 self-start">About Me</span>
        <h2 className="display mb-8 leading-[0.95] text-balance">
          <span className="block text-2xl italic text-foreground/60">Hey, I'm</span>
          <span className="block text-6xl font-bold md:text-7xl">Siphiwe</span>
          <span className="script block text-5xl text-pink md:text-6xl">Malindi —</span>
        </h2>

        <div className="space-y-5 text-base leading-relaxed text-foreground/75">
          <p>I am a passionate <strong className="text-pink">front-end developer</strong> who turns ideas into real, functional web applications. I have a strong interest in front-end development that lets me build complete and seamless user experiences.</p>
          <p>I am always eager to learn new technologies and improve my craft — because growth is part of becoming a great developer.</p>
          <p>I enjoy solving problems, writing clean and efficient code, and building projects that are both practical and visually striking.</p>
        </div>

        <div className="mt-10">
          <a
            href="/Siphiwe-Malindi-CV.pdf"
            download
            className="inline-flex items-center gap-3 rounded-full bg-pink px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-pink)]"
          >
            Download CV <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
