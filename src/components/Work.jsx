import React from 'react';

const projects = [
  {
    title: 'Modular IoT Kit',
    tag: 'Hardware + Cloud',
    desc:
      'A configurable kit for pilots — plug‑and‑play sensors, OTA firmware, and a simple cloud console for experiments.',
  },
  {
    title: 'Realtime Ops Dashboard',
    tag: 'Data Viz',
    desc:
      'A streaming dashboard with anomaly alerts and scenario planning for critical operations teams.',
  },
  {
    title: 'AI‑Assisted Workflow',
    tag: 'Automation',
    desc:
      'Embedding LLM reasoning into service workflows to shrink lead times and improve quality.',
  },
];

const Work = () => {
  return (
    <section id="work" className="relative w-full bg-slate-950 py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected work</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            A snapshot of outcomes from recent collaborations.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition hover:from-white/10"
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-300/80">
                {p.tag}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:scale-125" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
