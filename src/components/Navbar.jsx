import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Visualizer', href: '#visualizer' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          maxWidth: '100%',
          zIndex: 100,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: isScrolled ? '0.9rem 0' : '1.5rem 0',
          backgroundColor: isScrolled ? 'rgba(8, 9, 11, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.15)' : '1px solid transparent',
          boxSizing: 'border-box'
        }}
        className="atelier-navbar"
      >
        <div
          className="container-luxury"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            boxSizing: 'border-box'
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <div
              className="nav-logo-mark"
              style={{
                width: '38px',
                height: '38px',
                minWidth: '38px',
                border: '1px solid var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(212, 175, 55, 0.08)',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--gold-primary)',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  letterSpacing: '1px'
                }}
              >
                AV
              </span>
            </div>
            <div className="nav-logo-text">
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  color: '#ffffff',
                  fontSize: '1.15rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: '1.2'
                }}
                className="logo-title"
              >
                Atelier Vérité
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--gold-secondary)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  display: 'block'
                }}
                className="logo-subtitle"
              >
                Architecture & Interiors
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.2rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-sans)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  fontWeight: '500',
                  transition: 'var(--transition-fast)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--gold-light)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-secondary)';
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA & Hamburger Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <button
              onClick={onOpenConsultation}
              className="btn-gold desktop-cta"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.78rem' }}
            >
              <span>Book Consultation</span>
              <ArrowUpRight size={15} />
            </button>

            {/* Mobile 3-Line Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                background: mobileMenuOpen ? 'rgba(212, 175, 55, 0.15)' : 'rgba(212, 175, 55, 0.08)',
                border: '1px solid var(--gold-border)',
                cursor: 'pointer',
                borderRadius: '4px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                minWidth: '44px',
                minHeight: '44px',
                padding: '0',
                transition: 'all 0.3s ease',
                boxShadow: mobileMenuOpen ? '0 0 15px rgba(212, 175, 55, 0.3)' : 'none'
              }}
            >
              {/* 3-Line Animated Hamburger Icon */}
              <div
                style={{
                  width: '22px',
                  height: '16px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {/* Line 1 (Top) */}
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--gold-primary)',
                    borderRadius: '2px',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    transformOrigin: 'center',
                    transform: mobileMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none'
                  }}
                />
                {/* Line 2 (Middle) */}
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--gold-primary)',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease',
                    opacity: mobileMenuOpen ? 0 : 1,
                    transform: mobileMenuOpen ? 'scaleX(0)' : 'none'
                  }}
                />
                {/* Line 3 (Bottom) */}
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--gold-primary)',
                    borderRadius: '2px',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    transformOrigin: 'center',
                    transform: mobileMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none'
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Fullscreen Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              maxWidth: '100%',
              height: '100vh',
              maxHeight: '100dvh',
              background: 'rgba(8, 9, 11, 0.98)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '5.2rem 1.5rem 2rem 1.5rem',
              overflowY: 'auto',
              overflowX: 'hidden',
              WebkitOverflowScrolling: 'touch',
              boxSizing: 'border-box'
            }}
          >
            {/* Nav list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <span style={{ color: 'var(--gold-secondary)', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Atelier Portfolio & Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.3 }}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.3rem, 5vw, 1.7rem)',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingBottom: '0.45rem',
                    paddingTop: '0.2rem'
                  }}
                >
                  <span>{link.name}</span>
                  <span style={{ color: 'var(--gold-primary)', fontSize: '0.8rem', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em' }}>
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer & CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(212, 175, 55, 0.18)', paddingTop: '1.25rem', marginTop: '1.5rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="btn-gold"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={16} />
              </button>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span>Paris • London • New York</span>
                <span style={{ color: 'var(--gold-secondary)' }}>concierge@atelierverite.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @media (max-width: 400px) {
          .logo-title {
            font-size: 0.98rem !important;
            letter-spacing: 0.16em !important;
          }
          .logo-subtitle {
            font-size: 0.52rem !important;
            letter-spacing: 0.18em !important;
          }
          .nav-logo-mark {
            width: 34px !important;
            height: 34px !important;
            min-width: 34px !important;
          }
        }
        @media (max-width: 340px) {
          .logo-title {
            font-size: 0.88rem !important;
            letter-spacing: 0.12em !important;
          }
          .logo-subtitle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
