// skills section
import skill1 from "@/assets/skill1.jpg";
import skill2 from "@/assets/skill2.jpg";
import skill3 from "@/assets/skill3.jpg";

type Skill = {
  name: string;
  icon: string;
  level: string;
  pct: number;
  gradient: string;
};

const skills: Skill[] = [
  { name: "Java",       icon: "☕", level: "Advanced · OOP & DSA",            pct: 88, gradient: "linear-gradient(135deg,#FF6B35 0%,#FF9C6B 100%)" },
  { name: "C++",        icon: "⚙️", level: "Intermediate · Systems",          pct: 72, gradient: "linear-gradient(135deg,#3A7BFF 0%,#7BA8FF 100%)" },
  { name: "JavaScript", icon: "🟨", level: "Advanced · ES6+ & Frameworks",    pct: 90, gradient: "linear-gradient(135deg,#F7B731 0%,#FFD966 100%)" },
  { name: "CSS",        icon: "🎨", level: "Advanced · Animations & Layouts", pct: 94, gradient: "linear-gradient(135deg,#00C2A8 0%,#5DE8D4 100%)" },
  { name: "HTML",       icon: "🌐", level: "Expert · Semantic & Accessible",  pct: 96, gradient: "linear-gradient(135deg,#F2408A 0%,#FF7DB5 100%)" },
  { name: "& More",     icon: "🔮", level: "Git · SQL · React · Node.js",     pct: 78, gradient: "linear-gradient(135deg,#8B5CF6 0%,#B794F4 100%)" },
];

const SkillCard = ({ s, delay }: { s: Skill; delay: number }) => {
  return (
    <div
      className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="text-3xl">{s.icon}</span>
        <span className="bebas text-2xl text-white/40">{String(s.pct).padStart(2, "0")}</span>
      </div>
      <h3 className="bebas text-3xl text-white">{s.name}</h3>
      <p className="mt-1 text-xs text-white/50">{s.level}</p>
    </div>
  );
};

const Skills = () => (
  <section id="technical-skills" className="bg-dark py-24 text-white md:py-32">
    <div className="container">
      <div className="reveal mb-14 max-w-3xl">
        <span className="tag-pill tag-yellow mb-6">Tech Stack</span>
        <h2 className="display leading-[0.95] text-balance">
          <span className="block text-xl italic text-white/40">My</span>
          <span className="block text-5xl font-bold md:text-7xl">Technical</span>
          <span className="script block text-4xl text-pink md:text-5xl">Skills —</span>
        </h2>
        <p className="mt-5 max-w-xl text-white/60">
          The languages and tools I use to bring ideas to life.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <SkillCard key={s.name} s={s} delay={i * 60} />
        ))}
      </div>

      <div className="reveal mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {[skill1, skill2, skill3].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="h-56 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
