const items = [
  "Creative Developer",
  "UI/UX Design",
  "Java Developer",
  "Frontend Engineer",
  "Problem Solver",
  "Creative Mind",
  "Open to Work",
  "Full Stack",
];

const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-dark bg-pink py-3">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-dark">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-dark" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
