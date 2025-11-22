import React from 'react';

const projects = [
  {
    title: 'Brass Console Series',
    tag: 'Edition 08',
    desc:
      'Hand‑finished brass with stone inlays. Limited run for a private gallery; custom patina and archival packaging.',
  },
  {
    title: 'Transit Bench Prototype',
    tag: 'Commission',
    desc:
      'Modular seating for high‑traffic halls. CNC aluminum frames with hardwood slats and replaceable cushions.',
  },
  {
    title: 'Ceramic Lighting Study',
    tag: 'Study',
    desc:
      'Slip‑cast shades with linen cords. A material exploration of light spill and negative space.',
  },
];

const Work = () => {
  return (
    <section id="work" className="relative w-full bg-slate-950 py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Selected work</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Functional objects with a quiet luxury—engineered to last.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 backdrop-blur-sm transition hover:from-white/[0.06]"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-200/80">
                {p.tag}
              </span>
              <h3 className="mt-2 text-lg font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-amber-300/10 blur-2xl transition group-hover:scale-125" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
