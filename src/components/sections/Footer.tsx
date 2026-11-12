const social = [
  { icon: "🐙", label: "GitHub" },
  { icon: "💼", label: "LinkedIn" },
  { icon: "🐦", label: "Twitter" },
  { icon: "📸", label: "Instagram" },
];

const Footer = () => (
  <footer className="bg-dark py-24 text-white md:py-32">
    <div className="container">
      <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="script text-6xl md:text-7xl">
            Siphiwe <span className="text-pink">Malindi</span>
          </a>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
            A passionate front-end developer turning ideas into real, functional, and visually striking web experiences.
          </p>
          <div className="mt-8 flex gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-xl transition-all hover:-translate-y-1 hover:border-pink hover:bg-pink"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="bebas mb-5 text-2xl text-pink">Navigate</h4>
          <ul className="space-y-3 text-base">
            {["Home", "About", "Services", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-white/70 transition-colors hover:text-pink">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="bebas mb-5 text-2xl text-pink">Get In Touch</h4>
          <ul className="space-y-3 text-base text-white/70">
            <li>
              <a href="mailto:smalindi19@gmail.com" className="hover:text-pink">smalindi19@gmail.com</a>
            </li>
            <li>
              <a href="tel:+27609741314" className="hover:text-pink">+27 60 974 1314</a>
            </li>
            <li>South Africa</li>
            <li>
              <a href="/Siphiwe-Malindi-CV.pdf" download className="inline-flex items-center gap-2 text-pink hover:text-white">
                Download CV ↓
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="script py-12 text-center text-5xl text-white/90 md:text-7xl">
        Let's create something <span className="text-pink">amazing —</span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50">
        <p>© 2025 Siphiwe Malindi. All rights reserved.</p>
        <p>Designed & built with ♥ in South Africa</p>
      </div>
    </div>
  </footer>
);

export default Footer;
