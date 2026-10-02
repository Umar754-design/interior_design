import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Compass, Award, Sparkles } from 'lucide-react';
import Hero3DScene from '../components/Hero3DScene';

export default function Hero({ onOpenConsultation }) {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        overflow: 'hidden'
      }}
    >
      <div className="container-luxury" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            minHeight: 'calc(100vh - 7rem)'
          }}
          className="hero-grid"
        >
          {/* LEFT COLUMN: HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            {/* Top Studio Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}
            >
              <span className="badge-gold">
                Haute Architecture & Spatial Design
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
                Est. 2012
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(1.9rem, 6.2vw, 4.4rem)',
                lineHeight: 1.12,
                marginBottom: '1.5rem',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                overflowWrap: 'break-word',
                wordBreak: 'break-word'
              }}
            >
              Transforming Spaces <br />
              <span className="text-gold-gradient font-serif" style={{ fontStyle: 'italic', fontWeight: 300 }}>
                Into Timeless
              </span>{' '}
              Experiences
            </h1>

            {/* Subtitle */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.92rem, 1.2vw, 1.15rem)',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '2.25rem',
                fontWeight: 300
              }}
            >
              We create sophisticated interiors where architecture, functionality, and emotion come together in absolute harmony.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
                width: '100%'
              }}
              className="hero-buttons-wrapper"
            >
              <button onClick={scrollToProjects} className="btn-gold hero-btn">
                <span>Explore Our Projects</span>
                <ArrowUpRight size={17} />
              </button>

              <button onClick={onOpenConsultation} className="btn-outline-gold hero-btn">
                <span>Book a Consultation</span>
              </button>
            </div>

            {/* Client Confidence Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                borderTop: '1px solid rgba(212, 175, 55, 0.15)',
                paddingTop: '1.75rem',
                width: '100%',
                flexWrap: 'wrap'
              }}
              className="hero-confidence-bar"
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    color: 'var(--gold-primary)',
                    fontWeight: '600'
                  }}
                >
                  150+
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  Private Estates Completed
                </span>
              </div>

              <div style={{ width: '1px', height: '35px', background: 'rgba(255, 255, 255, 0.1)' }} />

              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    color: 'var(--gold-primary)',
                    fontWeight: '600'
                  }}
                >
                  25+
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  International Design Awards
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3D INTERIOR SCENE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              height: '620px',
              width: '100%',
              maxWidth: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--gold-border)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(212, 175, 55, 0.12)',
              background: 'radial-gradient(circle at 60% 40%, #161922 0%, #0b0c0f 85%)',
              boxSizing: 'border-box'
            }}
            className="hero-3d-wrapper"
          >
            <Hero3DScene />
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'transparent',
          border: 'none',
          color: 'var(--gold-secondary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
          zIndex: 3,
          textDecoration: 'none'
        }}
        aria-label="Scroll to discover more"
      >
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>
          Discover Atelier
        </span>
        <ChevronDown size={18} color="var(--gold-primary)" />
      </motion.button>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding-bottom: 3.5rem !important;
            min-height: auto !important;
          }
          .hero-3d-wrapper {
            height: clamp(340px, 48vh, 520px) !important;
          }
        }
        @media (max-width: 600px) {
          .hero-buttons-wrapper {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            gap: 0.85rem !important;
          }
          .hero-btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-confidence-bar {
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 380px) {
          .hero-confidence-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
          }
          .hero-confidence-bar > div:nth-child(2) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
