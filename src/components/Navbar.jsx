export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-border-steel h-20 shadow-sm flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-full">
      <div className="flex items-center gap-4 group">
        <svg className="w-12 h-12" id="logo-svg" viewBox="0 0 100 100">
          <path d="M20 20 L20 80 L80 80 L80 20 Z" fill="none" stroke="#a8e8ff" strokeDasharray="240" strokeDashoffset="240" strokeWidth="4" />
          <text className="font-display-xl fill-primary text-3xl" style={{ fontSize: "32px" }} textAnchor="middle" x="50" y="65">LJA</text>
        </svg>
        <span className="font-display-xl text-headline-hero-mobile md:text-2xl text-primary tracking-tighter hidden md:block">LEXEL JAY ALEJO</span>
      </div>
      <div className="hidden lg:flex items-center gap-8 font-label-caps text-label-caps tracking-widest uppercase">
        <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#work">Projects</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#experience">Experience</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#skills">Stack</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
      </div>
      <button className="bg-primary-container text-on-primary font-label-caps text-label-caps px-8 py-3 tracking-widest uppercase hover:scale-105 transition-all duration-300 cyan-glow" href="#contact">Hire Me</button>
    </nav>
  );
}
