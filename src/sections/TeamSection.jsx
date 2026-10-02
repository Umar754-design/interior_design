import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Globe, Award } from 'lucide-react';
import { teamMembers } from '../data/teamData';

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-panel"
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--border-gold-subtle)',
        transition: 'var(--transition-smooth)',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--gold-primary)';
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-gold-subtle)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Portrait with luxury duotone styling */}
      <div style={{ position: 'relative', height: '360px', overflow: 'hidden' }} className="team-card-img">
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease'
          }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 40%, rgba(8, 9, 11, 0.95) 100%)'
          }}
        />

        {/* Credentials Pill */}
        <div
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            background: 'rgba(8, 9, 11, 0.8)',
            border: '1px solid var(--gold-border)',
            backdropFilter: 'blur(8px)',
            padding: '0.35rem 0.75rem',
            borderRadius: '2px',
            color: 'var(--gold-light)',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}
        >
          {member.credentials}
        </div>

        {/* Social Icons Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            right: '1.25rem',
            display: 'flex',
            gap: '0.6rem'
          }}
        >
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(8, 9, 11, 0.85)',
              border: '1px solid var(--gold-border)',
              color: 'var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'var(--transition-fast)'
            }}
            aria-label={`${member.name} LinkedIn`}
          >
            <Linkedin size={15} />
          </a>
          <a
            href={member.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(8, 9, 11, 0.85)',
              border: '1px solid var(--gold-border)',
              color: 'var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'var(--transition-fast)'
            }}
            aria-label={`${member.name} Instagram`}
          >
            <Instagram size={15} />
          </a>
        </div>
      </div>

      {/* Member Details */}
      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span style={{ color: 'var(--gold-secondary)', fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
            {member.location}
          </span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.4rem' }}>
            {member.name}
          </h3>
          <h4 style={{ color: 'var(--gold-light)', fontSize: '0.88rem', fontWeight: '500', marginBottom: '1rem' }}>
            {member.role}
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: '1.65' }}>
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-luxury">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
          <span className="section-tag">Spatial Authors</span>
          <h2 className="section-title">
            The Masters Behind <br />
            <span className="text-gold-gradient font-serif" style={{ fontStyle: 'italic' }}>
              The Architecture
            </span>
          </h2>
          <div className="gold-divider-center" />
          <p className="section-desc" style={{ margin: '0 auto' }}>
            An interdisciplinary collective of architects, lighting designers, material curators, and computational engineers uniting Parisian heritage with future living.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid-responsive-4" style={{ gap: '2rem' }}>
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .team-card-img {
            height: clamp(260px, 45vh, 340px) !important;
          }
        }
      `}</style>
    </section>
  );
}
