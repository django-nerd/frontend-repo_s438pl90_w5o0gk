export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/20 p-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-white text-2xl font-medium">Let’s build something premium</h3>
              <p className="mt-2 text-white/70 text-sm max-w-xl">Share a bit about your project and timeline. I typically respond within 24 hours. Attach references if you have them.</p>
            </div>
            <div className="lg:col-span-1">
              <a href="mailto:hello@example.com" className="w-full inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-white/90 transition">Email Me</a>
              <p className="mt-2 text-white/60 text-xs">Or DM on Instagram: <a className="underline decoration-white/30 hover:text-white" href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">@yourhandle</a></p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-white/40 text-xs">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
      </div>
    </section>
  );
}
