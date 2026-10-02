import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Layers, Eye, Sparkles, Hammer, Key, Check } from 'lucide-react';
import { processSteps } from '../data/processData';

const iconMap = {
  Compass,
  Layers,
  Eye,
  Sparkles,
  Hammer,
  Key
};

export default function DesignProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-luxury">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
          <span className="section-tag">Rigorous Methodology</span>
          <h2 className="section-title">
            The Architectural <br />
            <span className="text-gold-gradient font-serif" style={{ fontStyle: 'italic' }}>
              Design Journey
            </span>
          </h2>
          <div className="gold-divider-center" />
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A transparent, six-stage architectural odyssey engineered to ensure zero ambiguity from initial dialogue to white-glove handover.
          </p>
        </div>

        {/* Step Indicator Progress Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '0.5rem',
            marginBottom: '3.5rem',
            position: 'relative'
          }}
          className="process-nav-bar"
        >
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: isActive ? 'rgba(212, 175, 55, 0.12)' : 'rgba(16, 18, 24, 0.6)',
                  border: isActive ? '1px solid var(--gold-primary)' : '1px solid var(--border-gold-subtle)',
                  padding: '1rem 0.5rem',
                  borderRadius: '6px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    color: isActive ? 'var(--gold-primary)' : 'var(--text-muted)',
                    fontWeight: '600',
                    marginBottom: '0.2rem'
                  }}
                >
                  {step.step}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.72rem',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {step.title.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Presentation Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel-elevated process-stage-card"
          style={{
            padding: '3.5rem',
            border: '1px solid var(--gold-primary)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.12)',
            position: 'relative',
            boxSizing: 'border-box',
            width: '100%',
            maxWidth: '100%'
          }}
        >
          <div className="grid-responsive-2" style={{ alignItems: 'center', gap: '2.5rem' }}>
            {/* Left Stage Overview */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.4rem, 4vw, 3rem)',
                    color: 'var(--gold-primary)',
                    lineHeight: 1
                  }}
                >
                  {processSteps[activeStep].step}
                </span>
                <div>
                  <span className="badge-gold">
                    {processSteps[activeStep].timeline}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
                      color: '#ffffff',
                      marginTop: '0.35rem'
                    }}
                  >
                    {processSteps[activeStep].title}
                  </h3>
                </div>
              </div>

              <div className="gold-divider" />

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                {processSteps[activeStep].summary}
              </p>

              {/* Prev / Next Stage Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }} className="process-buttons-row">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="btn-outline-gold process-btn"
                  style={{
                    padding: '0.65rem 1.4rem',
                    fontSize: '0.78rem',
                    opacity: activeStep === 0 ? 0.35 : 1,
                    cursor: activeStep === 0 ? 'not-allowed' : 'pointer'
                  }}
                >
                  Previous Stage
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                  disabled={activeStep === processSteps.length - 1}
                  className="btn-gold process-btn"
                  style={{
                    padding: '0.65rem 1.4rem',
                    fontSize: '0.78rem',
                    opacity: activeStep === processSteps.length - 1 ? 0.35 : 1,
                    cursor: activeStep === processSteps.length - 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  Next Stage
                </button>
              </div>
            </div>

            {/* Right Deliverables Box */}
            <div
              style={{
                background: 'rgba(10, 11, 14, 0.75)',
                border: '1px solid var(--border-gold-subtle)',
                borderRadius: '10px',
                padding: '2.5rem',
                boxSizing: 'border-box',
                width: '100%'
              }}
              className="process-deliverables-box"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Sparkles size={18} color="var(--gold-primary)" />
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#ffffff' }}>
                  Stage Deliverables & Milestones
                </h4>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.75rem' }}>
                Every milestone requires mutual sign-off before proceeding to the next architectural phase.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {processSteps[activeStep].deliverables.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: 'rgba(212, 175, 55, 0.15)',
                        border: '1px solid var(--gold-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <Check size={13} color="var(--gold-primary)" strokeWidth={3} />
                    </div>
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem', display: 'block' }}>
                        {item}
                      </strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                        Architectural Verification Documented
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-nav-bar {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .process-stage-card {
            padding: 2rem 1.25rem !important;
          }
          .process-deliverables-box {
            padding: 1.5rem 1.25rem !important;
          }
        }
        @media (max-width: 520px) {
          .process-nav-bar {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.4rem !important;
          }
          .process-stage-card {
            padding: 1.5rem 1rem !important;
          }
          .process-deliverables-box {
            padding: 1.25rem 0.9rem !important;
          }
          .process-buttons-row {
            width: 100%;
          }
          .process-btn {
            flex: 1 1 140px;
            text-align: center;
          }
        }
        @media (max-width: 360px) {
          .process-nav-bar {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
