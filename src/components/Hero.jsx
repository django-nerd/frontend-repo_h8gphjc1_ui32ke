import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

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

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
          Post‑industrial Design • R&D Studio
        </p>

        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold leading-tight text-white drop-shadow-sm sm:text-6xl">
          We design and prototype products for ambitious businesses
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          From early research to shippable systems — we blend physical, digital, and service design to accelerate your roadmap.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#process"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow/30 shadow-white/10 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore our approach
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            See work
            <Play className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Bottom cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="animate-bounce rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
          Scroll
        </div>
      </div>
    </section>
  );
};

export default Hero;
