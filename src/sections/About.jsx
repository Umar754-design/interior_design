import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, ShieldCheck, Feather } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '150+', label: 'Signature Projects', desc: 'Across 14 international capitals' },
    { value: '12+', label: 'Years Experience', desc: 'Bespoke architectural leadership' },
    { value: '85+', label: 'Happy Clients', desc: 'Discerning private collectors & families' },
    { value: '25+', label: 'Design Awards', desc: 'World Architecture & AD100 recognition' },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-luxury">
        {/* Editorial 2-Column Grid */}
        <div className="grid-responsive-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
          {/* Left Column: Visual Composition with Layered Frames */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', width: '100%', maxWidth: '100%' }}
          >
            {/* Main Editorial Image */}
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--gold-border)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
                width: '100%'
              }}
              className="about-img-frame"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Atelier Vérité Philosophy Interior"
                style={{ width: '100%', height: '560px', objectFit: 'cover' }}
                className="about-img"
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(8, 9, 11, 0.8) 100%)'
                }}
              />
            </div>

            {/* Overlapping Floating Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="glass-panel about-quote-card"
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                right: '0',
                maxWidth: '320px',
                padding: '1.5rem',
                border: '1px solid var(--gold-primary)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
              }}
            >
              <Feather size={22} color="var(--gold-primary)" style={{ marginBottom: '0.75rem' }} />
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: 'var(--gold-light)',
                  lineHeight: '1.45',
                  marginBottom: '0.75rem'
                }}
              >
                "Space is not merely volume; it is the silent stage upon which human memory unfolds."
              </p>
              <span
                style={{
                  display: 'block',
                  color: 'var(--text-muted)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                Elena Rostova — Principal
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%', maxWidth: '100%' }}
          >
            <span className="section-tag">Design Philosophy</span>

            <h2 className="section-title">
              We Design Spaces <br />
              <span className="text-gold-gradient font-serif" style={{ fontStyle: 'italic' }}>
                That Tell Stories
              </span>
            </h2>

            <div className="gold-divider" />

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Founded in Paris with studios now serving London, Milan, and New York, Atelier Vérité creates bespoke spatial narratives for clients who recognize that true luxury lies in restraint, impeccable materiality, and effortless proportion.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              We reject transient design trends. Instead, we engage in an obsessive study of shadow, tactile resonance, and acoustic balance. By merging 3D spatial simulation with century-old artisanal craftsmanship, we transform residences into timeless, emotional works of habitable art.
            </p>

            {/* Three Core Pillars */}
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}
              className="about-pillars-grid"
            >
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <Compass size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.25rem' }}>Precision Acoustics</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Engineered stillness and sensory calm in every salon.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <Sparkles size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.25rem' }}>Rare Materiality</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Exclusive quarry marbles, hand-spun silks, patinated bronzes.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Counters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel card-responsive-padding"
          style={{
            marginTop: 'clamp(3rem, 6vw, 6rem)',
            border: '1px solid var(--gold-border)',
            background: 'linear-gradient(135deg, rgba(18, 20, 26, 0.9) 0%, rgba(10, 11, 14, 0.95) 100%)'
          }}
        >
          <div className="grid-responsive-4" style={{ gap: '2rem' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)',
                    fontWeight: '400',
                    lineHeight: '1',
                    marginBottom: '0.6rem'
                  }}
                  className="text-gold-gradient"
                >
                  {stat.value}
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.35rem', letterSpacing: '0.04em' }}>
                  {stat.label}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-img {
            height: clamp(300px, 45vh, 440px) !important;
          }
          .about-quote-card {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            margin-top: 1.25rem !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 560px) {
          .about-pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
