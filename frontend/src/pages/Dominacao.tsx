import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Dominacao() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] overflow-hidden px-6 text-center">

      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none hero-grain opacity-[0.06]" />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 60%, rgba(140,70,20,0.18) 0%, transparent 70%)',
          animation: 'heroBreath 9s ease-in-out infinite',
        }}
      />

      {/* Faint decorative word behind content */}
      <span
        className="absolute select-none font-display font-black text-[18vw] md:text-[15vw] text-white/[0.025] leading-none tracking-tighter pointer-events-none"
        style={{ userSelect: 'none' }}
        aria-hidden
      >
        SOON
      </span>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center gap-8 transition-all duration-700 ease-out"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
      >
        {/* Logo */}
        <Link to="/" className="mb-2 block">
          <img
            src="/logo.png"
            alt="Lyx Studios"
            className="h-24 sm:h-28 w-auto mx-auto opacity-90"
          />
        </Link>

        {/* Thin accent line */}
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        {/* Main message */}
        <div
          className="space-y-3"
          style={{
            transitionDelay: '100ms',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Em construção.
          </h1>
          <p className="text-white/40 text-base sm:text-lg font-light tracking-wide">
            Disponível brevemente.
          </p>
        </div>

        {/* Thin accent line */}
        <div
          className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            transitionDelay: '200ms',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease-out',
          }}
        />

        {/* Back link */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-sm tracking-widest uppercase transition-all duration-300"
          style={{
            transitionDelay: '300ms',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease-out, color 0.3s',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Voltar
        </Link>
      </div>
    </div>
  );
}
