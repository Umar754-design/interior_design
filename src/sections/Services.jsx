import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services({ onSelectService }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-luxury">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
          <span className="section-tag">Haute Disciplines</span>
          <h2 className="section-title">
            Architectural Services <br />
            <span className="text-gold-gradient font-serif" style={{ fontStyle: 'italic' }}>
              Tailored for Permanence
            </span>
          </h2>
          <div className="gold-divider-center" />
          <p className="section-desc" style={{ margin: '0 auto' }}>
            From expansive private estates to high-concept hospitality environments, we deliver bespoke spatial architecture with obsessive craftsmanship and white-glove project direction.
          </p>
        </div>

        {/* 8 Luxury 3D-Inspired Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '2rem'
          }}
          className="services-grid"
        >
          {servicesData.map((service, index) => {
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onSelectService(service)}
                className="glass-panel"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  border: isHovered ? '1px solid var(--gold-primary)' : '1px solid var(--border-gold-subtle)',
                  boxShadow: isHovered
                    ? '0 25px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.25)'
                    : '0 10px 30px rgba(0, 0, 0, 0.5)',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image Container with Zoom */}
                <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      filter: isHovered ? 'brightness(1)' : 'brightness(0.85)'
                    }}
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(8, 9, 11, 0.2) 0%, rgba(16, 18, 24, 0.95) 100%)'
                    }}
                  />

                  {/* Number Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      background: 'rgba(8, 9, 11, 0.8)',
                      border: '1px solid var(--gold-border)',
                      backdropFilter: 'blur(10px)',
                      color: 'var(--gold-primary)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '2px',
                      letterSpacing: '0.1em'
                    }}
                  >
                    {service.number}
                  </div>

                  {/* Arrow Icon on Hover */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: isHovered ? 'var(--gold-primary)' : 'rgba(8, 9, 11, 0.8)',
                      color: isHovered ? '#08090b' : 'var(--gold-light)',
                      border: '1px solid var(--gold-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'rotate(45deg) scale(1.08)' : 'none'
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Card Content */}
                <div
                  style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  className="service-card-body"
                >
                  <div>
                    <span style={{ color: 'var(--gold-secondary)', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                      {service.subtitle}
                    </span>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
                        color: isHovered ? 'var(--gold-light)' : '#ffffff',
                        marginBottom: '0.85rem',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {service.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.4rem' }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverable Tags */}
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {service.features.slice(0, 2).map((feat, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.72rem',
                            color: 'var(--text-muted)',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            padding: '0.25rem 0.6rem',
                            borderRadius: '2px'
                          }}
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .service-card-body {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
