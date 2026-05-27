export default function Footer() {
  return (
    <footer className="relative w-full py-16 bg-surface-void border-t border-border-steel before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter">
        <div className="text-center md:text-left">
          <p className="font-section-title text-xl text-on-surface mb-2">LEXEL JAY ALEJO</p>
          <p className="font-body-md text-muted uppercase tracking-widest text-[10px]">© 2026 LEXEL JAY ALEJO. ENGINEERED FOR PRECISION.</p>
        </div>
        <div className="flex gap-8 font-body-md text-muted">
          <a className="hover:text-on-surface hover:translate-y-[-2px] transition-all" href="https://github.com/Ljay1114" target="_blank">Github</a>
          <a className="hover:text-on-surface hover:translate-y-[-2px] transition-all" href="#">Email</a>
        </div>
        <button className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-all group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">arrow_upward</span>
        </button>
      </div>
    </footer>
  );
}
