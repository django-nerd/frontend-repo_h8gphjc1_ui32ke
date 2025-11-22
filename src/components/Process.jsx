import React from 'react';
import { Lightbulb, Wrench, FlaskConical, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Research & Synthesis',
    desc:
      'We uncover opportunities through interviews, field studies, and technical spikes, translating findings into clear product bets.',
  },
  {
    icon: FlaskConical,
    title: 'Rapid Prototyping',
    desc:
      'Low-to-high fidelity prototypes across hardware, software, and service layers to validate assumptions fast.',
  },
  {
    icon: Wrench,
    title: 'Engineering & Tooling',
    desc:
      'From firmware to frontends — we set up robust pipelines, design systems, and CI to scale with confidence.',
  },
  {
    icon: Rocket,
    title: 'Pilot & Launch',
    desc:
      'Run real-world pilots, measure impact, and transition road‑ready builds to your teams with training and docs.',
  },
];

const Process = () => {
  return (
    <section id="process" className="relative w-full bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our approach</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            A focused, outcome‑driven process built for high‑velocity R&D.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
