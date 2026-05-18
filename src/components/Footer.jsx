import { Code, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-emerald-500/20 py-12 relative overflow-hidden bg-gradient-to-b from-[#090d16] to-[#05070a]">
      {/* Cyber Ambient Glow Orbs */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none select-none"></div>
      <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-teal-500/[0.04] rounded-full blur-[140px] pointer-events-none select-none"></div>

      {/* Cyber Dotted Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.06)_1.5px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Logo */}
        <div className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-green-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 group-hover:shadow-emerald-500/40 transition-all duration-300">
            <Code size={16} />
          </div>
          <span className="font-display font-bold text-sm tracking-tight text-white">
            &lt;Hermela_Dev&gt;
          </span>
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-emerald-500/60 font-normal font-mono">
          &copy; {currentYear} Hermela Addis. || All rights reserved. 
        </p>

        {/* Scroll To Top Button */}
        <button
          onClick={handleScrollToTop}
          className="p-2.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 text-emerald-400/60 hover:text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
}
