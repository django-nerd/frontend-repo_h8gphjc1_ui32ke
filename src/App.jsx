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
      {/* Contact band with a quieter, editorial tone */}
      <section id="contact" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-950/95 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-2xl font-medium tracking-tight">Inquiries & Commissions</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            We collaborate with galleries, brands, and civic partners. Briefs for limited editions or production programs welcome.
          </p>
          <a
            href="mailto:studio@assemblylab.studio?subject=Commission%20Inquiry"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/0 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/5"
          >
            Contact the studio
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
