export default function Services() {
  const services = [
    { name: 'Logo Design', desc: 'Timeless marks and versatile systems built for real-world use.' },
    { name: 'Social Media Banners', desc: 'Clean, scroll-stopping visuals tailored to your brand.' },
    { name: 'Mockups & Presentations', desc: 'Photorealistic product mockups and compelling case-study decks.' },
    { name: 'Brochure & Print', desc: 'Minimal layouts, premium print-ready files and guidance.' },
    { name: 'Brand Assets', desc: 'Iconography, color palettes, typography, templates and more.' },
  ];

  return (
    <section id="services" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-white text-2xl sm:text-3xl font-medium mb-10">Services</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl ring-1 ring-white/10 bg-slate-900/40 p-6">
              <div className="text-white text-lg">{s.name}</div>
              <div className="mt-1 text-white/60 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
