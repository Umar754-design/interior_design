import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projectsData';

// 3D Tilt Project Card Component
function ProjectCard({ project, onSelect, index }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt
    const rX = ((y - centerY) / centerY) * -7;
    const rY = ((x - centerX) / centerX) * 7;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      data-cursor="view"
      onClick={() => onSelect(project)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        cursor: 'pointer'
      }}
    >
      <div
        className="glass-panel"
        style={{
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid var(--border-gold-subtle)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.2s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--gold-primary)';
          e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-gold-subtle)';
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.6)';
        }}
      >
        {/* Large Cinematic Image Container */}
        <div style={{ position: 'relative', height: '360px', overflow: 'hidden' }} className="project-card-img">
          <img
            src={project.heroImage}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            loading="lazy"
          />

          {/* Gradients */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(8, 9, 11, 0.1) 0%, rgba(8, 9, 11, 0.8) 100%)'
            }}
          />

          {/* Floating Category Badge */}
          <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
            <span className="badge-gold">{project.category}</span>
          </div>

          {/* Completion Year */}
          <div
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              color: 'var(--gold-secondary)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.15em',
              background: 'rgba(8, 9, 11, 0.7)',
              backdropFilter: 'blur(8px)',
              padding: '0.35rem 0.75rem',
              borderRadius: '2px',
              border: '1px solid var(--border-subtle)'
            }}
          >
            {project.year}
          </div>

          {/* Hover Explore Indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              right: '1.25rem',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.9)',
              color: '#08090b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
            }}
          >
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Project Card Info */}
        <div style={{ padding: '1.8rem' }} className="project-card-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-secondary)', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
            <MapPin size={15} color="var(--gold-primary)" />
            <span>{project.location}</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span>{project.area}</span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.45rem',
              color: '#ffffff',
              marginBottom: '0.6rem',
              lineHeight: 1.25
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.88rem',
              lineHeight: '1.6',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {project.concept}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsShowcase({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-luxury">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-tag">Curated Portfolio</span>
          <h2 className="section-title">
            Our Signature <br />
            <span className="text-gold-gradient font-serif" style={{ fontStyle: 'italic' }}>
              Spaces & Sanctuaries
            </span>
          </h2>
          <div className="gold-divider-center" />
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Explore an international retrospective of private residences, ultra-prime estates, and architectural interiors conceived with unyielding discipline.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3.5rem'
          }}
          className="projects-filter-bar"
        >
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: isActive ? 'var(--gold-primary)' : 'rgba(16, 18, 24, 0.7)',
                  color: isActive ? '#08090b' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--gold-primary)' : '1px solid var(--border-gold-subtle)',
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: isActive ? '700' : '500',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                className="project-filter-btn"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '2.5rem'
          }}
          className="projects-grid"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
          .project-card-img {
            height: clamp(240px, 42vh, 320px) !important;
          }
          .project-card-info {
            padding: 1.25rem !important;
          }
        }
        @media (max-width: 480px) {
          .project-filter-btn {
            padding: 0.5rem 0.9rem !important;
            font-size: 0.72rem !important;
          }
        }
      `}</style>
    </section>
  );
}
