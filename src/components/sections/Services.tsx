import servicesPortrait from "@/assets/services-portrait.jpg";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    desc: "I specialize in creating interactive and visually appealing user interfaces using modern frontend technologies. I focus on performance, usability, and smooth user experiences.",
  },
  {
    number: "02",
    title: "Responsive Design",
    desc: "I ensure websites work perfectly on all devices — phones, tablets, and desktops, with a seamless and engaging user experience.",
  },
  {
    number: "03",
    title: "Website Performance Optimization",
    desc: "I improve website speed and performance by optimizing code, images, and loading techniques to ensure fast, smooth, and efficient user experiences.",
  },
];

const Services = () => (
  <section id="services" className="bg-cream py-24 md:py-32">
    <div className="container">
      <div className="reveal mb-16 max-w-3xl">
        <span className="tag-pill tag-blue mb-6">What I Do</span>
        <h2 className="display leading-[0.95] text-balance">
          <span className="block text-xl italic text-foreground/60">Helping your business</span>
          <span className="block text-5xl font-bold text-blue md:text-7xl">Get Closer</span>
          <span className="script block text-4xl md:text-5xl">to your Goals —</span>
        </h2>
        <p className="mt-6 max-w-xl text-foreground/70">
          From concept to deployment, I bring your ideas to life with modern tools and thoughtful design.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:gap-20">
        <div className="reveal">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-[28px] border-2 border-pink/40" aria-hidden />
            <div className="absolute -inset-6 rounded-[32px] border border-pink/20" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl bg-pink/10 shadow-[var(--shadow-pink)]">
              <img
                src={servicesPortrait}
                alt="Siphiwe Malindi"
                loading="lazy"
                className="h-[460px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:h-[600px]"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-pink px-5 py-3 text-white shadow-[var(--shadow-pink)]">
              <p className="script text-2xl leading-none">Let's build —</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <a
              key={s.number}
              href="#contact"
              className="reveal group relative grid grid-cols-[60px_1fr_44px] items-start gap-4 border-b border-border py-8 transition-all duration-500 hover:bg-pink/[0.04] hover:pl-3"
            >
              {i === 0 && <span className="absolute inset-x-0 top-0 h-px bg-border" />}
              <span className="display text-xl italic text-foreground/40 group-hover:text-pink">{s.number}</span>
              <div>
                <h3 className="display text-2xl font-bold md:text-3xl">
                  {s.title}<span className="script ml-1 text-pink">—</span>
                </h3>
                <p className="mt-2 max-w-xl text-sm text-foreground/65 md:text-base">{s.desc}</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/60 transition-all duration-300 group-hover:rotate-45 group-hover:border-pink group-hover:bg-pink group-hover:text-white">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
