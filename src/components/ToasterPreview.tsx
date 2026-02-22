import { useEffect, useRef } from 'react';

export const ToasterPreview = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scale = () => {
      const inner = innerRef.current;
      const wrapper = wrapperRef.current;
      if (!inner || !wrapper) return;
      const w = wrapper.offsetWidth;
      const h = wrapper.offsetHeight;
      const s = Math.min(w / 720, h / 420);
      const tx = (w - 720 * s) / 2;
      const ty = (h - 420 * s) / 2;
      inner.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
    };
    scale();
    const ro = new ResizeObserver(scale);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@300;400;600;700&display=swap');
        .tp-card { font-family: 'Space Grotesk', sans-serif; }
        .tp-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,200,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,200,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(ellipse 60% 80% at 80% 50%, black 30%, transparent 80%);
        }
        @keyframes tp-slideIn {
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes tp-float {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 0.8; }
          90%  { opacity: 0.4; }
          100% { transform: translateY(-200px) translateX(30px); opacity: 0; }
        }
        .tp-particle {
          position: absolute;
          width: 2px; height: 2px;
          background: #00d4b4;
          border-radius: 50%;
          animation: tp-float linear infinite;
          opacity: 0;
        }
        .tp-toast {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 14px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          white-space: nowrap; font-size: 13px; font-weight: 600;
          animation: tp-slideIn 0.5s ease forwards;
        }
        .tp-toast-success {
          background: rgba(20,28,20,0.92); border: 1px solid rgba(80,220,100,0.3);
          color: #d4f5d8; animation-delay: 0.1s;
          transform: translateX(-20px); opacity: 0;
        }
        .tp-toast-info {
          background: rgba(15,25,35,0.92); border: 1px solid rgba(60,160,255,0.3);
          color: #cce4ff; animation-delay: 0.3s;
          transform: translateX(-20px); opacity: 0;
        }
        .tp-toast-error {
          background: rgba(28,15,15,0.92); border: 1px solid rgba(220,60,60,0.3);
          color: #ffd0d0; animation-delay: 0.5s;
          transform: translateX(-20px); opacity: 0;
        }
      `}</style>

      {/* Wrapper fills parent exactly — no layout impact */}
      <div
        ref={wrapperRef}
        style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0d1117' }}
      >
        {/* Inner 720×420 card, scaled to fit */}
        <div
          ref={innerRef}
          className="tp-card"
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: 720, height: 420,
            transformOrigin: 'top left',
            background: '#0d1117',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Particles */}
          {[
            { l: '55%', t: '80%', d: '4s', delay: '0s', c: '#00d4b4' },
            { l: '60%', t: '90%', d: '6s', delay: '1s', c: '#7c3aed' },
            { l: '65%', t: '75%', d: '5s', delay: '2s', c: '#00d4b4' },
            { l: '70%', t: '85%', d: '7s', delay: '0.5s', c: '#60a5fa' },
            { l: '75%', t: '70%', d: '4.5s', delay: '1.5s', c: '#00d4b4' },
          ].map((p, i) => (
            <div key={i} className="tp-particle"
              style={{ left: p.l, top: p.t, animationDuration: p.d, animationDelay: p.delay, background: p.c }} />
          ))}

          {/* Glow orb */}
          <div style={{
            position: 'absolute', right: 180, top: '50%', transform: 'translateY(-50%)',
            width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(100,60,220,0.35) 0%, rgba(40,20,120,0.2) 50%, transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />

          {/* Left content */}
          <div style={{ padding: '48px 44px', flex: '0 0 370px', position: 'relative', zIndex: 2 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 32, fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', marginBottom: 14 }}>
              toaster_common
            </div>
            <div style={{ display: 'inline-block', background: '#00d4b4', color: '#001a16', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 6, marginBottom: 18 }}>
              v0.0.3
            </div>
            <div style={{ color: '#c9d1e0', fontSize: 15, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              🚀 Animated Global Toast
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(200,160,30,0.5)', background: 'rgba(200,160,30,0.08)', color: '#e8c84a', fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 8, marginBottom: 20 }}>
              🖼️ Supports Network &amp; Asset Images
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#6b7a95', fontSize: 13, marginBottom: 24 }}>
              <span style={{ color: '#9aa8bf' }}>140 pub pts</span>
              <div style={{ width: 3, height: 3, background: '#6b7a95', borderRadius: '50%' }} />
              <span style={{ color: '#9aa8bf' }}>102 downloads</span>
              <div style={{ width: 3, height: 3, background: '#6b7a95', borderRadius: '50%' }} />
              <span style={{ color: '#9aa8bf' }}>6 <span style={{ color: '#e05c6e' }}>❤</span></span>
            </div>
            <div style={{ color: '#8892a4', fontSize: 13, fontStyle: 'italic', lineHeight: 1.5 }}>
              Unlike other packages —{' '}
              <span style={{ color: '#c8d4e8', fontStyle: 'normal', fontWeight: 600 }}>display images inside your toasts!</span>
            </div>
          </div>

          {/* Right: phone + toasts */}
          <div style={{ position: 'absolute', right: -10, top: 0, bottom: 0, width: 370, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Phone */}
            <div style={{
              width: 130, height: 260,
              background: 'linear-gradient(160deg, #1a2035 0%, #0d1220 100%)',
              borderRadius: 22, border: '1.5px solid rgba(255,255,255,0.12)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
              position: 'relative', transform: 'rotate(3deg) translateX(20px)',
            }}>
              <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 36, height: 6, background: '#000', borderRadius: 3 }} />
              <div style={{ position: 'absolute', inset: 6, background: '#111827', borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '20px 6px 8px', gap: 4 }}>
                {[['60%', 'rgba(255,255,255,0.08)'], ['40%', 'rgba(255,255,255,0.05)'], ['70%', 'rgba(255,255,255,0.05)'], ['50%', 'rgba(255,255,255,0.04)'], ['80%', 'rgba(255,255,255,0.08)'], ['55%', 'rgba(255,255,255,0.05)']].map(([w, bg], i) => (
                  <div key={i} style={{ height: 3, borderRadius: 2, background: bg, width: w, marginTop: i === 2 || i === 4 ? 6 : 0 }} />
                ))}
              </div>
            </div>

            {/* Toasts */}
            <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div className="tp-toast tp-toast-success">
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#f97316,#ec4899)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'white', fontWeight: 700 }}>J</div>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>✓</div>
                Order placed successfully
              </div>
              <div className="tp-toast tp-toast-info">
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#00bcd4,#0288d1)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>💙</div>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>↑</div>
                App updated successfully
              </div>
              <div className="tp-toast tp-toast-error">
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>✕</div>
                Payment failed
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
