import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Atmospheric overlays for an archival, luxury tone */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(251,191,36,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/95 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          Post‑industrial Atelier · Physical R&D
        </p>

        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
          We design and fabricate physical objects
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          Research‑led industrial design for limited runs, exhibitions, and future product lines. Materially grounded. Quietly precise.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/0 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/5"
          >
            View work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/0 px-5 py-3 text-sm font-semibold text-white/70 backdrop-blur-sm transition hover:bg-white/5"
          >
            Our method
          </a>
        </div>
      </div>

      {/* Bottom cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
          Scroll
        </div>
      </div>
    </section>
  );
};

export default Hero;
