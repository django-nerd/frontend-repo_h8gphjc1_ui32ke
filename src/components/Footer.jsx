import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950/95 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Assembly Lab — Post‑industrial Design Studio
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#process" className="hover:text-white">Approach</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
