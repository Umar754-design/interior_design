import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Check, Instagram, Linkedin, Globe } from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSubscribed(false), 5000);
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#050608',
        borderTop: '1px solid rgba(212, 175, 55, 0.18)',
        position: 'relative',
        zIndex: 2,
        paddingTop: '6rem',
        paddingBottom: '2.5rem'
      }}
    >
      <div className="container-luxury">
        {/* Top 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 0.9fr 1fr 1.3fr',
            gap: '3.5rem',
            marginBottom: '4.5rem'
          }}
          className="footer-grid"
        >
          {/* Column 1: Studio Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(212, 175, 55, 0.08)'
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-primary)', fontWeight: '700', fontSize: '0.9rem' }}>
                  AV
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-display)', color: '#ffffff', fontSize: '1.1rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block' }}>
                  Atelier Vérité
                </span>
                <span style={{ color: 'var(--gold-secondary)', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                  Haute Spatial Architecture
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.75', maxWidth: '320px', marginBottom: '1.5rem' }}>
              International architectural and interior design studio crafting timeless private sanctuaries, luxury villas, and commercial flagships worldwide.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Globe, href: 'https://archdaily.com', label: 'ArchDaily' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-gold-subtle)',
                      color: 'var(--gold-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label={item.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { name: 'Philosophy', href: '#about' },
                { name: 'Services Directory', href: '#services' },
                { name: 'Signature Spaces', href: '#projects' },
                { name: '3D Virtual Lab', href: '#visualizer' },
                { name: 'Design Methodology', href: '#process' },
                { name: 'Spatial Authors', href: '#team' }
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-sans)',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Disciplines
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'Residential Estates',
                'Mediterranean Villas',
                'Executive Offices',
                'Modular Chef Kitchens',
                'Bespoke Master Suites',
                'Turnkey Project Delivery'
              ].map((service, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo('#services')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-muted)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-sans)',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s ease',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Booking */}
          <div>
            <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Private Journal
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Receive our quarterly monograph on contemporary European spatial architecture, rare stone discoveries, and collectible design.
            </p>

            <form onSubmit={handleNewsletterSubmit} style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <input
                type="email"
                placeholder="Enter private email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-gold-subtle)',
                  borderRadius: '2px',
                  padding: '0.85rem 3.2rem 0.85rem 1rem',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '4px',
                  bottom: '4px',
                  width: '38px',
                  background: 'var(--gold-primary)',
                  border: 'none',
                  borderRadius: '2px',
                  color: '#08090b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Subscribe to Private Journal"
              >
                {newsletterSubscribed ? <Check size={16} /> : <ArrowRight size={16} />}
              </button>
            </form>

            {newsletterSubscribed && (
              <span style={{ color: 'var(--gold-light)', fontSize: '0.78rem', display: 'block', marginBottom: '1rem' }}>
                ✓ You have been welcomed into our Private Journal.
              </span>
            )}

            <button onClick={onOpenConsultation} className="btn-outline-gold" style={{ width: '100%', padding: '0.75rem', fontSize: '0.75rem' }}>
              <span>Book Direct Consultation</span>
            </button>
          </div>
        </div>

        {/* Bottom Minimal Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Atelier Vérité Architecture & Interiors. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '0.75rem 1.5rem', flexWrap: 'wrap' }} className="footer-legal-links">
            <span>Paris • Mayfair London • Madison Ave New York</span>
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            margin-bottom: 3rem !important;
          }
          footer {
            padding-top: 4rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
