import React from 'react';
import Hero from './components/Hero';
import Process from './components/Process';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Process />
      <Work />
      {/* Simple contact band */}
      <section id="contact" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-950/95 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl font-semibold">Have an R&D brief?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            We partner with venture‑backed startups and enterprise labs to explore, prototype, and launch new product lines.
          </p>
          <a
            href="mailto:hello@assemblylab.studio?subject=R%26D%20Project%20Inquiry"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow/30 shadow-white/10 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start a conversation
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
