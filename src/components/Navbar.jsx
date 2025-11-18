import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-slate-950/50 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="group inline-flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 ring-1 ring-white/20 shadow-[0_0_30px_rgba(34,211,238,0.35)]" />
          <span className="text-sm tracking-widest text-white/80 group-hover:text-white transition">GRAPHIC DESIGNER</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="text-white/70 hover:text-white transition">Work</a>
          <a href="#services" className="text-white/70 hover:text-white transition">Services</a>
          <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
