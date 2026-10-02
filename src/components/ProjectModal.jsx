import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Maximize2, Sparkles, Layers, ArrowRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import Lightbox from './Lightbox';

export default function ProjectModal({ project, isOpen, onClose, onSelectRelated, onOpenConsultation }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const openLightboxAt = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const allGalleryImages = [project.heroImage, ...(project.gallery || [])];

  return (
    <>
      <AnimatePresence>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            maxWidth: '100%',
            height: '100vh',
            backgroundColor: 'rgba(5, 6, 8, 0.96)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            zIndex: 150,
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: '0 0 5rem 0',
            boxSizing: 'border-box'
          }}
          className="project-modal-overlay"
        >
          {/* Close Floating Button */}
          <button
            onClick={onClose}
            className="project-modal-close"
            style={{
              position: 'fixed',
              top: '2rem',
              right: '2.5rem',
              background: 'rgba(8, 9, 11, 0.85)',
              border: '1px solid var(--gold-primary)',
              color: 'var(--gold-light)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 160,
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.3)',
              transition: 'var(--transition-fast)'
            }}
            aria-label="Close project dossier"
          >
            <X size={24} />
          </button>

          {/* PROJECT HERO IMAGE BANNER */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '75vh',
              minHeight: '520px',
              overflow: 'hidden'
            }}
          >
            <img
              src={project.heroImage}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* Gradient Overlays */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, rgba(8, 9, 11, 0.3) 0%, rgba(8, 9, 11, 0.6) 60%, rgba(8, 9, 11, 1) 100%)'
              }}
            />

            {/* Title & Metadata inside Banner */}
            <div
              className="container-luxury"
              style={{
                position: 'absolute',
                bottom: '3rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                zIndex: 2
              }}
            >
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge-gold">{project.category}</span>
                <span style={{ color: 'var(--gold-secondary)', fontSize: '0.8rem', letterSpacing: '0.15em' }}>
                  {project.year}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  lineHeight: 1.15
                }}
              >
                {project.title}
              </h1>

              {/* Key Specs Bar */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '2.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                  paddingTop: '1.25rem',
                  maxWidth: '800px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={17} color="var(--gold-primary)" />
                  <span>{project.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Maximize2 size={17} color="var(--gold-primary)" />
                  <span>{project.area}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={17} color="var(--gold-primary)" />
                  <span>Completed {project.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT BODY */}
          <div className="container-luxury" style={{ marginTop: '3.5rem' }}>
            <div className="grid-responsive-2" style={{ gap: '4rem', alignItems: 'start' }}>
              {/* Left Column: Concept & Description */}
              <div>
                <span className="section-tag">Architectural Concept</span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.85rem',
                    fontStyle: 'italic',
                    color: 'var(--gold-light)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.4
                  }}
                >
                  "{project.concept}"
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    marginBottom: '2rem'
                  }}
                >
                  {project.description}
                </p>

                {/* Performance & Execution Specs */}
                {project.stats && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '1rem',
                      background: 'rgba(16, 18, 24, 0.6)',
                      border: '1px solid var(--border-gold-subtle)',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      marginTop: '2rem',
                      boxSizing: 'border-box'
                    }}
                    className="project-stats-grid"
                  >
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                        Timeline
                      </span>
                      <strong style={{ color: 'var(--gold-primary)', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                        {project.stats.duration}
                      </strong>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                        Joinery
                      </span>
                      <strong style={{ color: '#ffffff', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                        {project.stats.furnishings}
                      </strong>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                        Lighting
                      </span>
                      <strong style={{ color: '#ffffff', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                        {project.stats.lightingScenes}
                      </strong>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Materiality Palette */}
              <div className="glass-panel project-materials-card" style={{ padding: '2.5rem', border: '1px solid var(--gold-border)', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <Sparkles size={20} color="var(--gold-primary)" />
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#ffffff' }}>
                    Curated Materials Palette
                  </h4>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
                  Sourced from private quarries, heritage timber mills, and European textile houses.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {project.materials?.map((mat, i) => (
                    <div
                      key={i}
                      style={{
                        paddingBottom: '1.25rem',
                        borderBottom: i < project.materials.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                        <span style={{ color: 'var(--gold-light)', fontWeight: '600', fontSize: '0.95rem' }}>
                          {mat.name}
                        </span>
                        <span style={{ color: 'var(--gold-dark)', fontSize: '0.75rem', fontFamily: 'var(--font-display)' }}>
                          0{i + 1}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                        {mat.description}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="btn-gold"
                  style={{ width: '100%', marginTop: '2rem' }}
                >
                  <span>Inquire for Similar Space</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* BEFORE / AFTER COMPARISON SECTION */}
            {project.beforeImage && project.afterImage && (
              <div style={{ marginTop: '5rem' }}>
                <span className="section-tag">Transformation Process</span>
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  title={`${project.title} — Raw Site to Completed Sanctuary`}
                />
              </div>
            )}

            {/* GALLERY SECTION */}
            {project.gallery && project.gallery.length > 0 && (
              <div style={{ marginTop: '5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
                  <div>
                    <span className="section-tag">Spatial Documentation</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#ffffff' }}>
                      Visual Dossier Plates
                    </h3>
                  </div>
                  <span style={{ color: 'var(--gold-secondary)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    Click Image to Enlarge
                  </span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.5rem'
                  }}
                >
                  {project.gallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      data-cursor="view"
                      onClick={() => openLightboxAt(idx + 1)}
                      style={{
                        position: 'relative',
                        height: '240px',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <img
                        src={imgUrl}
                        alt={`Detail plate ${idx + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </AnimatePresence>

      {/* Lightbox for gallery images */}
      <Lightbox
        images={allGalleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev === 0 ? allGalleryImages.length - 1 : prev - 1))}
        onNext={() => setLightboxIndex((prev) => (prev === allGalleryImages.length - 1 ? 0 : prev + 1))}
      />

      <style>{`
        @media (max-width: 768px) {
          .project-modal-close {
            top: 1rem !important;
            right: 1rem !important;
            width: 42px !important;
            height: 42px !important;
          }
          .project-materials-card {
            padding: 1.5rem 1.25rem !important;
          }
        }
        @media (max-width: 540px) {
          .project-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
            padding: 1rem !important;
          }
        }
        @media (max-width: 360px) {
          .project-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
