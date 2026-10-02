import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, consultationData }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          maxWidth: '100%',
          height: '100vh',
          backgroundColor: 'rgba(5, 6, 8, 0.88)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
          boxSizing: 'border-box'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel-elevated consultation-card"
          style={{
            maxWidth: '560px',
            width: '100%',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            position: 'relative',
            border: '1px solid var(--gold-primary)',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.2)',
            boxSizing: 'border-box'
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
            aria-label="Close confirmation"
          >
            <X size={20} />
          </button>

          {/* Gold Emblem Seal */}
          <div
            style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              margin: '0 auto 1.5rem auto',
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
              border: '1px solid var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
            }}
          >
            <Check size={36} color="var(--gold-primary)" strokeWidth={2.5} />
          </div>

          <span className="section-tag" style={{ marginBottom: '0.5rem' }}>
            Concierge Confirmation
          </span>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.85rem',
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}
          >
            Thank You, {consultationData?.name || 'Valued Client'}
          </h3>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.02rem',
              lineHeight: '1.65',
              marginBottom: '2rem'
            }}
          >
            Your consultation request has been received. Our senior design team will review your project dossier and contact you shortly.
          </p>

          {/* Reference Card */}
          <div
            style={{
              background: 'rgba(10, 11, 14, 0.7)',
              border: '1px solid var(--border-gold-subtle)',
              borderRadius: '8px',
              padding: '1.2rem',
              marginBottom: '2rem',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Dossier Reference:</span>
              <span style={{ color: 'var(--gold-light)', fontFamily: 'monospace' }}>
                AV-{Math.floor(100000 + Math.random() * 900000)}
              </span>
            </div>
            {consultationData?.projectType && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Project Scope:</span>
                <span style={{ color: '#ffffff' }}>{consultationData.projectType}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Estimated Response:</span>
              <span style={{ color: 'var(--gold-secondary)' }}>Within 24 Hours</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-gold"
            style={{ width: '100%', padding: '0.9rem' }}
          >
            <span>Return to Studio Showcase</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .consultation-card {
            padding: 2rem 1.25rem !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
