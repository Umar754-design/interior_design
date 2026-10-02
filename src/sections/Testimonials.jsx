import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-luxury">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
          <span className="section-tag">Client Testimonials</span>
          <h2 className="section-title">
            Words From Our <br />
            <span className="text-gold-gradient font-serif" style={{ fontStyle: 'italic' }}>
              Private Patrons
            </span>
          </h2>
          <div className="gold-divider-center" />
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Hear from discerning collectors, estate owners, and international leaders who entrusted us with their primary spaces.
          </p>
        </div>

        {/* Testimonial Card Stage */}
        <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel-elevated testimonial-card"
              style={{
                padding: '4rem 3.5rem',
                border: '1px solid var(--gold-border)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.12)',
                position: 'relative',
                boxSizing: 'border-box',
                width: '100%',
                maxWidth: '100%'
              }}
            >
              {/* Gold Ambient Quote Icon */}
              <Quote
                size={80}
                color="rgba(212, 175, 55, 0.12)"
                className="testimonial-quote-icon"
                style={{
                  position: 'absolute',
                  top: '2rem',
                  right: '2.5rem',
                  transform: 'scaleX(-1)',
                  pointerEvents: 'none'
                }}
              />

              {/* 5-Star Rating */}
              <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '1.5rem' }}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--gold-primary)" color="var(--gold-primary)" />
                ))}
              </div>

              {/* Quote Statement */}
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.65rem)',
                  fontStyle: 'italic',
                  color: '#ffffff',
                  lineHeight: '1.55',
                  marginBottom: '2rem',
                  fontWeight: 300
                }}
              >
                "{current.quote}"
              </p>

              {/* Client Info Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  borderTop: '1px solid rgba(212, 175, 55, 0.18)',
                  paddingTop: '1.5rem'
                }}
                className="testimonial-client-bar"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src={current.image}
                    alt={current.name}
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--gold-primary)',
                      boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)',
                      flexShrink: 0
                    }}
                  />
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                      {current.name}
                    </h4>
                    <span style={{ color: 'var(--gold-secondary)', fontSize: '0.82rem', display: 'block' }}>
                      {current.role} • {current.location}
                    </span>
                  </div>
                </div>

                {/* Project Tag */}
                <div
                  style={{
                    background: 'rgba(212, 175, 55, 0.08)',
                    border: '1px solid var(--border-gold-subtle)',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    color: 'var(--gold-light)'
                  }}
                >
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    Commission
                  </span>
                  {current.project}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '2rem'
            }}
          >
            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: currentIndex === idx ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: currentIndex === idx ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handlePrev}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(16, 18, 24, 0.7)',
                  border: '1px solid var(--gold-border)',
                  color: 'var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(16, 18, 24, 0.7)',
                  border: '1px solid var(--gold-border)',
                  color: 'var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-card {
            padding: 2.25rem 1.5rem !important;
          }
          .testimonial-quote-icon {
            width: 44px !important;
            height: 44px !important;
            top: 1rem !important;
            right: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .testimonial-card {
            padding: 1.75rem 1.1rem !important;
          }
          .testimonial-client-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
