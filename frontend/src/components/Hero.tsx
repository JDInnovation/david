import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-black" aria-label="Hero">

      {/* Layer 1 — Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background.avif"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/42" />
      </div>

      {/* Layer 2 — Atmospheric effects (above image, below content) */}
      {/* Warm cinematic glow from the bottom */}
      <div className="absolute inset-0 z-[5] pointer-events-none hero-glow" />
      {/* Faint cool sheen from the top */}
      <div className="absolute inset-0 z-[5] pointer-events-none hero-glow-top" />
      {/* Very subtle drifting scanlines */}
      <div className="absolute inset-0 z-[5] pointer-events-none hero-scanlines" />
      {/* Film grain — adds analogue texture */}
      <div className="absolute z-[5] pointer-events-none hero-grain opacity-[0.07]" />

      {/* Layer 3 — Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

        {/* Logo */}
        <Link to="/" className="mb-16 block">
          <img
            src="/logo.png"
            alt="Lyx Studios"
            className="h-36 sm:h-28 md:h-32 w-auto mx-auto"
          />
        </Link>

        {/* Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-10">
          Elegante, Puro e<br />
          Visionário.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-light mb-12">
          Três salas, uma experiência fluida: escolha simples, acesso
          discreto, tudo pronto à chegada.
        </p>

        {/* CTA — shimmer + arrow slide on hover */}
        <Link
          to="/reservas"
          className="group relative hero-btn inline-flex items-center gap-3 bg-white text-black font-semibold py-4 px-10 rounded-full text-sm tracking-wider uppercase overflow-hidden transition-all duration-400 hover:scale-[1.04] hover:shadow-[0_10px_48px_rgba(255,255,255,0.16)] active:scale-[1.01]"
        >
          <span className="relative z-10">Reservar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-[float_3s_ease-in-out_infinite]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
