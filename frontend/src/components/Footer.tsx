import AnimateOnScroll from './AnimateOnScroll';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white/40 overflow-hidden" role="contentinfo">
      {/* Logo Section */}
      <div className="py-24 md:py-32 flex items-center justify-center">
        <AnimateOnScroll animation="fade-up" duration={1200}>
          <Link to="/">
            <img src="/logo.png" alt="LYX Studios" className="w-full max-w-[330px] object-contain mx-auto" />
          </Link>
        </AnimateOnScroll>
      </div>

      {/* Bottom Bar */}
      <div className="px-8 sm:px-14 py-6 border-t border-white/[0.04]">
        {/* Desktop: single row */}
        <div className="hidden sm:flex items-center justify-between">
          <p className="text-[10px] tracking-[0.35em] text-white/20 uppercase font-light">
            &copy;2025 Clickspot Design
          </p>
          <div className="flex items-center gap-8">
            <Link
              to="/admin"
              className="text-[10px] tracking-[0.35em] text-white/20 uppercase font-light hover:text-white/40 transition-colors"
            >
              Área Reservada
            </Link>
            <button
              onClick={scrollToTop}
              className="text-[10px] tracking-[0.35em] text-white/20 uppercase font-light hover:text-white/40 transition-colors cursor-pointer"
            >
              De volta ao topo
            </button>
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="flex flex-col gap-4 sm:hidden">
          <Link
            to="/admin"
            className="block w-full text-center py-3 border border-white/[0.08] rounded-xl text-[10px] tracking-[0.3em] text-white/30 uppercase font-light hover:text-white/50 hover:border-white/15 transition-all"
          >
            Área Reservada
          </Link>
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-[0.25em] text-white/15 uppercase font-light">
              &copy;2025 Clickspot Design
            </p>
            <button
              onClick={scrollToTop}
              className="text-[10px] tracking-[0.25em] text-white/15 uppercase font-light hover:text-white/35 transition-colors cursor-pointer"
            >
              ↑ Topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
