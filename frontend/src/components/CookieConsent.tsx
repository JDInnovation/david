import { useState, useEffect } from 'react';

const STORAGE_KEY = 'lyxstudios-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Slight delay so it doesn't pop right on load
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (accepted: boolean) => {
    localStorage.setItem(STORAGE_KEY, accepted ? 'accepted' : 'declined');
    setLeaving(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 sm:pb-6 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${leaving ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
      role="dialog"
      aria-label="Consentimento de cookies"
    >
      <div className="max-w-2xl mx-auto bg-[#0e0e0e]/95 backdrop-blur-xl border border-white/[0.07] rounded-2xl shadow-[0_-8px_48px_rgba(0,0,0,0.5)] p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          {/* Icon + Text */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" className="w-4 h-4 opacity-50">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm text-white/70 leading-relaxed">
                Usamos cookies para melhorar a tua experiência.{' '}
                <span className="text-white/40 text-xs">
                  Ao continuar, aceitas a nossa política de privacidade.
                </span>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0 sm:ml-2">
            <button
              onClick={() => dismiss(false)}
              className="px-4 py-2 rounded-xl text-[11px] font-medium text-[#555] hover:text-white/60 border border-white/[0.06] hover:border-white/10 transition-all tracking-wider uppercase whitespace-nowrap"
            >
              Recusar
            </button>
            <button
              onClick={() => dismiss(true)}
              className="px-5 py-2 rounded-xl bg-white text-[#0a0a0a] font-semibold text-[11px] hover:bg-white/85 transition-all tracking-wider uppercase whitespace-nowrap"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
