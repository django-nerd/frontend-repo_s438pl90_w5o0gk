export default function WorkGrid() {
  const items = [
    { title: 'Logo Design — Monogram', tags: ['Logo', 'Brand'], img: '/work/logo-1.jpg' },
    { title: 'Social Media Banner — Product Drop', tags: ['Banner', 'Social'], img: '/work/banner-1.jpg' },
    { title: 'Mockup — Packaging', tags: ['Mockup', '3D'], img: '/work/mockup-1.jpg' },
    { title: 'Brochure — Minimal Folded', tags: ['Print', 'Brochure'], img: '/work/brochure-1.jpg' },
    { title: 'Logo System — Wordmark', tags: ['Logo', 'Typography'], img: '/work/logo-2.jpg' },
    { title: 'Carousel — Social Campaign', tags: ['Banner', 'Carousel'], img: '/work/banner-2.jpg' },
  ];

  return (
    <section id="work" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-white text-2xl sm:text-3xl font-medium">Selected Work</h2>
          <a href="#contact" className="text-white/70 hover:text-white text-sm transition">See availability →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <a key={idx} href="#contact" className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-slate-900/40 hover:bg-slate-900/60 transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" />
              </div>
              <div className="p-4">
                <div className="text-white/90 text-sm">{it.title}</div>
                <div className="mt-1 text-xs text-white/50">{it.tags.join(' • ')}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
