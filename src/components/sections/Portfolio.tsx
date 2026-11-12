import proj1 from "@/assets/proj1.jpg";
import proj2 from "@/assets/proj2.jpg";
import proj3 from "@/assets/proj3.jpg";
import proj4 from "@/assets/proj4.jpg";
import proj5 from "@/assets/proj5.jpg";

const projects = [
  { title: "Student Management System", category: "Java · Backend",        img: proj1, span: "lg:col-span-2 lg:row-span-2" },
  { title: "Interactive Dashboard UI",  category: "JavaScript · Frontend", img: proj2, span: "" },
  { title: "E-Commerce Landing Page",   category: "HTML · CSS · Design",   img: proj3, span: "" },
  { title: "Data Structures Library",   category: "C++ · Systems",         img: proj4, span: "" },
  { title: "REST API Service",          category: "JavaScript · Node.js",  img: proj5, span: "" },
];

const Portfolio = () => (
  <section id="portfolio" className="bg-cream py-24 md:py-32">
    <div className="container">
      <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="tag-pill tag-teal mb-6">My Work</span>
          <h2 className="display leading-[0.95] text-balance">
            <span className="block text-xl italic text-foreground/50">View Our</span>
            <span className="block text-5xl font-bold text-teal md:text-7xl">Recent</span>
            <span className="script block text-4xl md:text-5xl">Work —</span>
          </h2>
        </div>
        <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground/70 hover:text-pink">
          See All Projects
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[280px]">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href="#contact"
            className={`reveal group relative block overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 ${p.span}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="relative h-full min-h-[280px] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-5 bottom-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-pink px-4 py-2 text-xs font-medium text-white">
                  View Project →
                </span>
              </div>
            </div>
            <div className="absolute left-5 top-5">
              <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-dark backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="absolute inset-x-5 bottom-5 transition-all duration-500 group-hover:opacity-0">
              <h3 className="display text-xl font-bold text-white drop-shadow-lg">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
