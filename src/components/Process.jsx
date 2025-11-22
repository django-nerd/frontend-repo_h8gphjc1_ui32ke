import React from 'react';
import { Ruler, Hammer, Factory, Archive } from 'lucide-react';

const steps = [
  {
    icon: Ruler,
    title: 'Discovery & Brief',
    desc:
      'Context walks, archive studies, and material audits. We translate intent into an exacting physical brief.',
  },
  {
    icon: Hammer,
    title: 'Form & Material',
    desc:
      'Iterative studies in clay, foam, and CNC. Finish libraries, tolerances, and joins defined early.',
  },
  {
    icon: Factory,
    title: 'Prototype & Tooling',
    desc:
      'Jigs, molds, and fixtures for limited runs. We align suppliers and QA for gallery‑ready outcomes.',
  },
  {
    icon: Archive,
    title: 'Edition & Documentation',
    desc:
      'Short‑run editions with provenance. Assembly guides, handling notes, and archival packaging.',
  },
];

const Process = () => {
  return (
    <section id="process" className="relative w-full bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_35%_at_50%_0%,rgba(251,191,36,0.10),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Method</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            A quiet, rigorous pathway from intent to object.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:bg-white/[0.06]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-300/10 text-amber-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-300/10 blur-2xl transition group-hover:scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
