import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          maxWidth: '100%',
          height: '100vh',
          backgroundColor: 'rgba(5, 6, 8, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          boxSizing: 'border-box'
        }}
        className="lightbox-overlay"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="lightbox-close"
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid var(--gold-border)',
            color: 'var(--gold-light)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'var(--transition-fast)'
          }}
          aria-label="Close image lightbox"
        >
          <X size={24} />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="lightbox-prev"
            style={{
              position: 'absolute',
              left: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid var(--gold-border)',
              color: 'var(--gold-primary)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'var(--transition-fast)'
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Current Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '90vw',
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Gallery frame ${currentIndex + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '4px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
            }}
          />
          <div
            style={{
              marginTop: '1.2rem',
              color: 'var(--gold-secondary)',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase'
            }}
          >
            Plate {currentIndex + 1} of {images.length}
          </div>
        </motion.div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="lightbox-next"
            style={{
              position: 'absolute',
              right: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid var(--gold-border)',
              color: 'var(--gold-primary)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'var(--transition-fast)'
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .lightbox-overlay {
            padding: 1rem !important;
          }
          .lightbox-close {
            top: 1rem !important;
            right: 1rem !important;
            width: 40px !important;
            height: 40px !important;
          }
          .lightbox-prev {
            left: 0.5rem !important;
            width: 40px !important;
            height: 40px !important;
          }
          .lightbox-next {
            right: 0.5rem !important;
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
