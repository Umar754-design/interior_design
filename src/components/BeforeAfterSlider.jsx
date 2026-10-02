import React, { useState, useRef, useCallback, useEffect } from 'react';

export default function BeforeAfterSlider({ beforeImage, afterImage, title = "Spatial Transformation" }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#ffffff' }}>
          {title}
        </h4>
        <span style={{ fontSize: '0.75rem', color: 'var(--gold-secondary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Drag Divider to Compare
        </span>
      </div>

      <div
        ref={containerRef}
        data-cursor="drag"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          height: '420px',
          overflow: 'hidden',
          borderRadius: '8px',
          border: '1px solid var(--gold-border)',
          cursor: isDragging ? 'grabbing' : 'col-resize',
          userSelect: 'none',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
          boxSizing: 'border-box'
        }}
        className="before-after-container"
      >
        {/* AFTER IMAGE (Base Layer) */}
        <img
          src={afterImage}
          alt="After Transformation"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          loading="lazy"
        />

        {/* AFTER BADGE */}
        <div
          style={{
            position: 'absolute',
            bottom: '18px',
            right: '18px',
            background: 'rgba(8, 9, 11, 0.85)',
            border: '1px solid var(--gold-primary)',
            color: 'var(--gold-light)',
            padding: '0.4rem 0.9rem',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: '600',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(8px)',
            pointerEvents: 'none',
            borderRadius: '2px'
          }}
        >
          Atelier Vérité — Handover
        </div>

        {/* BEFORE IMAGE (Clipped Layer) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${sliderPosition}%`,
            height: '100%',
            overflow: 'hidden',
            borderRight: '2px solid var(--gold-primary)'
          }}
        >
          <img
            src={beforeImage}
            alt="Before Transformation"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '1000px',
              maxWidth: 'none',
              height: '100%',
              objectFit: 'cover'
            }}
            loading="lazy"
          />

          {/* BEFORE BADGE */}
          <div
            style={{
              position: 'absolute',
              bottom: '18px',
              left: '18px',
              background: 'rgba(18, 20, 24, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#d0cfca',
              padding: '0.4rem 0.9rem',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: '600',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(8px)',
              pointerEvents: 'none',
              borderRadius: '2px',
              whiteSpace: 'nowrap'
            }}
          >
            Raw Site Condition
          </div>
        </div>

        {/* DRAGGABLE HANDLE */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: `${sliderPosition}%`,
            transform: 'translate(-50%, -50%)',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--gold-primary)',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', gap: '3px' }}>
            <div style={{ width: '2px', height: '14px', background: '#08090b' }}></div>
            <div style={{ width: '2px', height: '14px', background: '#08090b' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
