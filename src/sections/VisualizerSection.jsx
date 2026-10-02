import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Sunset, Moon, Sparkles, Sofa, Bed, UtensilsCrossed, RotateCcw } from 'lucide-react';
import Visualizer3DScene from '../components/Visualizer3DScene';

export default function VisualizerSection({ onOpenConsultation }) {
  const [roomType, setRoomType] = useState('living'); // 'living', 'bedroom', 'kitchen'
  const [finish, setFinish] = useState('parisian'); // 'parisian', 'noir', 'travertine'
  const [lightingMood, setLightingMood] = useState('daylight'); // 'daylight', 'golden', 'nocturne'

  const rooms = [
    { id: 'living', label: 'Living Room', icon: Sofa, desc: 'Bespoke hearth & curved bouclé lounge' },
    { id: 'bedroom', label: 'Master Suite', icon: Bed, desc: 'Acoustic platform bed & leather headwalls' },
    { id: 'kitchen', label: 'Chef Kitchen', icon: UtensilsCrossed, desc: 'Waterfall marble island & fluted walnut' },
  ];

  const finishes = [
    { id: 'parisian', name: 'Parisian Oak & Cream Bouclé', color: '#c5a880' },
    { id: 'noir', name: 'Noir Marquina & Champagne Brass', color: '#d4af37' },
    { id: 'travertine', name: 'Milano Travertine & Smoked Walnut', color: '#8a6c24' },
  ];

  const lightingModes = [
    { id: 'daylight', label: 'Soft Daylight', icon: Sun },
    { id: 'golden', label: 'Golden Hour Sunset', icon: Sunset },
    { id: 'nocturne', label: 'Nocturne Evening Mood', icon: Moon },
  ];

  return (
    <section id="visualizer" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-luxury">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>
            Interactive 3D Technology
          </span>
          <h2 className="section-title">
            Visualize Before <br />
            <span className="text-gold-gradient font-serif" style={{ fontStyle: 'italic' }}>
              We Build
            </span>
          </h2>
          <div className="gold-divider-center" />
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Interact with our virtual architectural rooms in real-time. Switch between spaces, test bespoke material palettes, and alter the circadian lighting schemes.
          </p>
        </div>

        {/* Visualizer Studio Shell */}
        <div
          className="glass-panel-elevated"
          style={{
            overflow: 'hidden',
            border: '1px solid var(--gold-border)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(212, 175, 55, 0.15)',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}
        >
          {/* Top Control Bar */}
          <div
            style={{
              padding: '1.25rem 2rem',
              background: 'rgba(11, 13, 17, 0.9)',
              borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              boxSizing: 'border-box'
            }}
            className="visualizer-top-bar"
          >
            {/* Room Selector Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }} className="visualizer-rooms-list">
              {rooms.map((r) => {
                const Icon = r.icon;
                const isActive = roomType === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setRoomType(r.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1.1rem',
                      background: isActive ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.04)',
                      color: isActive ? '#08090b' : 'var(--text-primary)',
                      border: isActive ? '1px solid var(--gold-primary)' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: isActive ? '700' : '500',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    className="visualizer-room-btn"
                  >
                    <Icon size={15} />
                    <span>{r.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Lighting Mood Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="visualizer-lighting-controls">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginRight: '0.35rem' }}>
                Atmosphere:
              </span>
              {lightingModes.map((lm) => {
                const Icon = lm.icon;
                const isActive = lightingMood === lm.id;
                return (
                  <button
                    key={lm.id}
                    onClick={() => setLightingMood(lm.id)}
                    title={lm.label}
                    style={{
                      background: isActive ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      color: isActive ? 'var(--gold-light)' : 'var(--text-muted)',
                      border: isActive ? '1px solid var(--gold-primary)' : '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '0.55rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      minWidth: '36px',
                      minHeight: '36px'
                    }}
                    aria-label={lm.label}
                  >
                    <Icon size={17} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive 3D Canvas Area */}
          <div
            style={{
              position: 'relative',
              height: '560px',
              width: '100%',
              maxWidth: '100%',
              background: 'radial-gradient(circle at 50% 50%, #151821 0%, #0a0b0e 90%)',
              overflow: 'hidden'
            }}
            className="visualizer-canvas-container"
          >
            <Visualizer3DScene
              roomType={roomType}
              finish={finish}
              lightingMood={lightingMood}
            />

            {/* Orbit / Interaction Hint Badge */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                background: 'rgba(8, 9, 11, 0.75)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-gold-subtle)',
                borderRadius: '4px',
                padding: '0.4rem 0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                pointerEvents: 'none'
              }}
              className="visualizer-hint-badge"
            >
              <RotateCcw size={14} color="var(--gold-primary)" />
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Drag to Orbit • Scroll to Zoom
              </span>
            </div>

            {/* Bottom Floating Material Finish Switcher */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(8, 9, 11, 0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid var(--gold-border)',
                borderRadius: '9999px',
                padding: '0.45rem 0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                maxWidth: '94%',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
                boxSizing: 'border-box'
              }}
              className="visualizer-finish-bar"
            >
              <span style={{ fontSize: '0.7rem', color: 'var(--gold-secondary)', textTransform: 'uppercase', letterSpacing: '0.12em', paddingLeft: '0.2rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                Materiality:
              </span>

              {finishes.map((f) => {
                const isActive = finish === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFinish(f.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      background: isActive ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                      border: isActive ? '1px solid var(--gold-primary)' : '1px solid transparent',
                      color: isActive ? 'var(--gold-light)' : 'var(--text-muted)',
                      padding: '0.35rem 0.7rem',
                      borderRadius: '9999px',
                      fontSize: '0.74rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}
                  >
                    <span
                      style={{
                        width: '9px',
                        height: '9px',
                        borderRadius: '50%',
                        backgroundColor: f.color,
                        boxShadow: isActive ? `0 0 8px ${f.color}` : 'none'
                      }}
                    />
                    <span>{f.name.split('&')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar: Action & Quote */}
          <div
            style={{
              padding: '1.5rem 2rem',
              background: 'rgba(11, 13, 17, 0.95)',
              borderTop: '1px solid rgba(212, 175, 55, 0.15)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              boxSizing: 'border-box'
            }}
            className="visualizer-bottom-bar"
          >
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.98rem', marginBottom: '0.2rem' }}>
                Active Selection: {rooms.find(r => r.id === roomType)?.desc}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                Full 4K VR walkthroughs are tailored for each private client during Stage 03 of our design process.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="btn-gold visualizer-cta"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.78rem' }}
            >
              <span>Request 3D Custom Render</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .visualizer-finish-bar::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .visualizer-top-bar {
            padding: 1rem 1.25rem !important;
          }
          .visualizer-canvas-container {
            height: clamp(340px, 48vh, 480px) !important;
          }
          .visualizer-bottom-bar {
            padding: 1.25rem 1.25rem !important;
          }
          .visualizer-cta {
            width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .visualizer-top-bar {
            padding: 0.85rem 0.85rem !important;
            flex-direction: column;
            align-items: flex-start !important;
          }
          .visualizer-room-btn {
            padding: 0.5rem 0.8rem !important;
            font-size: 0.72rem !important;
          }
          .visualizer-hint-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
