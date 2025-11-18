import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 text-white">
            <p className="text-xs tracking-[0.3em] text-cyan-300/80">GRAPHIC DESIGN • BRAND IDENTITY</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Minimal, Premium & Bold Visuals
            </h1>
            <p className="mt-5 text-white/70 max-w-xl">
              I craft timeless logos, striking social media banners, photorealistic mockups, and elegant brochures. A modern, minimal aesthetic that lets your brand speak clearly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-medium hover:bg-white/90 transition">View Work</a>
              <a href="#contact" className="px-5 py-2.5 rounded-full ring-1 ring-white/25 text-white text-sm font-medium hover:bg-white/10 transition">Hire Me</a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
              <img src="/your-photo.svg" alt="Your portrait" className="w-full h-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
            </div>
            <p className="mt-4 text-center text-white/60 text-sm">A short, human intro about you and your approach to design.</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />
    </section>
  );
}
