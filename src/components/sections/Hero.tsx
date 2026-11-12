import heroImg from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-20 pt-32"
    >
      <img
        src={heroImg}
        alt="Siphiwe Malindi portrait"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="container relative z-10">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-xs font-medium text-white">Available for freelance work</span>
        </div>

        <p
          className="animate-fade-up mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-pink"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome to my world
        </p>

        <h1
          className="script animate-fade-up text-white leading-[0.85]"
          style={{
            fontSize: "clamp(80px, 16vw, 200px)",
            animationDelay: "0.4s",
          }}
        >
          Portfolio
        </h1>

        <h2
          className="bebas animate-fade-up mt-2 text-white"
          style={{
            fontSize: "clamp(40px, 7vw, 96px)",
            animationDelay: "0.7s",
          }}
        >
          Siphiwe <span className="text-pink">Malindi</span>
        </h2>
      </div>

      <div
        className="animate-fade-up absolute bottom-20 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/80 md:flex"
        style={{ animationDelay: "1.2s", writingMode: "vertical-rl" }}
      >
        <span className="h-12 w-px bg-white/40" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
