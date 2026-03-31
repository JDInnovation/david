import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { adminLogin } from '../services/api';
import { useToast } from '../components/Toast';

export default function AdminLogin() {
  const { login } = useAuth();
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await adminLogin(email, password);
      login(data.token);
      addToast('Login efetuado com sucesso!', 'success');
    } catch (err: any) {
      addToast(err.message || 'Credenciais inválidas.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.04] text-white text-sm transition-all duration-300 outline-none placeholder-[#333] focus:bg-white/[0.07] focus:border-white/20 focus:ring-1 focus:ring-white/10';

  return (
    <main className="page-enter relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">

      {/* ── Background ── */}
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Radial vignette — keeps grid from being too harsh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #080808 100%)' }}
      />
      {/* Warm glow center */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
      />
      {/* Film grain */}
      <div className="absolute hero-grain opacity-[0.04] pointer-events-none" style={{ inset: '-30%', width: '160%', height: '160%' }} />

      {/* ── Card ── */}
      <div className="relative z-10 w-full max-w-sm mx-auto px-4 py-10">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link to="/">
            <img
              src="/logo.png"
              alt="LyxStudios"
              className="h-14 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
            />
          </Link>
        </div>

        {/* Card */}
        <div className="bg-[#0e0e0e]/90 backdrop-blur-xl rounded-2xl border border-white/[0.07] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
          <div className="mb-7 text-center">
            <h1 className="font-display text-xl font-bold text-white tracking-tight">Área Reservada</h1>
            <p className="text-[11px] text-[#444] mt-1 tracking-wider uppercase">LyxStudios Backoffice</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-email" className="block text-[11px] font-medium text-[#555] uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="admin@lyxstudios.pt"
                className={inputCls}
              />
            </div>

            <div>
              <label htmlFor="admin-password" className="block text-[11px] font-medium text-[#555] uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className={`${inputCls} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-white/60 transition-colors"
                  tabIndex={-1}
                >
                  {showPwd
                    ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-4 h-4"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                    : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-4 h-4"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  }
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-white hover:bg-white/90 disabled:bg-white/10 disabled:text-white/20 text-[#0a0a0a] font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              {loading
                ? <><div className="w-4 h-4 border-2 border-[#0a0a0a]/20 border-t-[#0a0a0a] rounded-full animate-spin" />A entrar...</>
                : 'Entrar'
              }
            </button>
          </form>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link to="/" className="text-[11px] text-[#333] hover:text-[#666] transition-colors tracking-widest uppercase">
            ← Voltar ao site
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-[10px] text-[#252525] mt-8 tracking-widest uppercase">
          &copy;2025 Clickspot Design
        </p>
      </div>
    </main>
  );
}
