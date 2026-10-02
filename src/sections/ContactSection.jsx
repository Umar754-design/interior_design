import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function ContactSection({ onConsultationSuccess, prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: prefilledService?.title || 'Residential Interior Design',
    budget: '$150,000 — $500,000',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update if prefilledService changes
  React.useEffect(() => {
    if (prefilledService?.title) {
      setFormData((prev) => ({ ...prev, projectType: prefilledService.title }));
    }
  }, [prefilledService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) errs.phone = 'Contact telephone is required.';
    if (!formData.location.trim()) errs.location = 'Property city or region is required.';
    if (!formData.message.trim()) errs.message = 'Please share a brief note about your project vision.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury API handshake
    setTimeout(() => {
      setIsSubmitting(false);
      onConsultationSuccess(formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential Interior Design',
        budget: '$150,000 — $500,000',
        location: '',
        message: ''
      });
      setErrors({});
    }, 700);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-luxury">
        <div className="grid-responsive-2" style={{ gap: '4.5rem', alignItems: 'start' }}>
          {/* Left Column: Studio Concierge & Locations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">Private Engagement</span>

            <h2 className="section-title">
              Let's Create <br />
              <span className="text-gold-gradient font-serif" style={{ fontStyle: 'italic' }}>
                Something Extraordinary
              </span>
            </h2>

            <div className="gold-divider" />

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              We accept a limited number of residential and commercial commissions each year to maintain an uncompromised level of personal involvement and artisan execution.
            </p>

            {/* Studio Addresses */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Paris Atelier & Head Office
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    18 Place Vendôme, 75001 Paris, France
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    London Client Salon
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    42 Berkeley Square, Mayfair, London W1J 5AW, UK
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Direct Confidential Inquiry
                  </h4>
                  <p style={{ color: 'var(--gold-light)', fontSize: '0.88rem' }}>
                    concierge@atelierverite.com • +33 1 42 68 55 00
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy & Discretion Guarantee */}
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border-gold-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <ShieldCheck size={26} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                <strong style={{ color: '#ffffff' }}>Strict Discretion:</strong> All client inquiries, floor plans, and property locations are protected under institutional NDA.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Luxury Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel-elevated contact-form-card"
            style={{
              padding: '3rem 2.5rem',
              border: '1px solid var(--gold-border)',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box'
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Request Private Consultation
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>
              Please share key details of your prospective space to begin the dialogue.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Name */}
                <div>
                  <label style={{ display: 'block', color: 'var(--gold-light)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Lord Julian Sterling"
                    style={{
                      width: '100%',
                      background: 'rgba(8, 9, 11, 0.75)',
                      border: errors.name ? '1px solid #ff5a5f' : '1px solid var(--border-gold-subtle)',
                      borderRadius: '3px',
                      padding: '0.85rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                  />
                  {errors.name && <span style={{ color: '#ff7675', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.name}</span>}
                </div>

                {/* Email & Phone Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="contact-row">
                  <div>
                    <label style={{ display: 'block', color: 'var(--gold-light)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="client@sanctuary.com"
                      style={{
                        width: '100%',
                        background: 'rgba(8, 9, 11, 0.75)',
                        border: errors.email ? '1px solid #ff5a5f' : '1px solid var(--border-gold-subtle)',
                        borderRadius: '3px',
                        padding: '0.85rem 1rem',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    {errors.email && <span style={{ color: '#ff7675', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.email}</span>}
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'var(--gold-light)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 20 7946 0958"
                      style={{
                        width: '100%',
                        background: 'rgba(8, 9, 11, 0.75)',
                        border: errors.phone ? '1px solid #ff5a5f' : '1px solid var(--border-gold-subtle)',
                        borderRadius: '3px',
                        padding: '0.85rem 1rem',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    {errors.phone && <span style={{ color: '#ff7675', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.phone}</span>}
                  </div>
                </div>

                {/* Project Type & Budget Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="contact-row">
                  <div>
                    <label style={{ display: 'block', color: 'var(--gold-light)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        background: '#0e1014',
                        border: '1px solid var(--border-gold-subtle)',
                        borderRadius: '3px',
                        padding: '0.85rem 1rem',
                        color: '#ffffff',
                        fontSize: '0.88rem',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none',
                        cursor: 'pointer',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="Residential Interior Design">Residential Interior Design</option>
                      <option value="Luxury Villas">Luxury Villa Estate</option>
                      <option value="Commercial Interior Design">Boutique Commercial / Hospitality</option>
                      <option value="Office Interiors">Executive Office / Headquarters</option>
                      <option value="Modular Kitchen">Architectural Modular Kitchen</option>
                      <option value="Turnkey Interior Solutions">Turnkey White-Glove Handover</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: 'var(--gold-light)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        background: '#0e1014',
                        border: '1px solid var(--border-gold-subtle)',
                        borderRadius: '3px',
                        padding: '0.85rem 1rem',
                        color: '#ffffff',
                        fontSize: '0.88rem',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none',
                        cursor: 'pointer',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="$50,000 — $150,000">$50,000 — $150,000</option>
                      <option value="$150,000 — $500,000">$150,000 — $500,000</option>
                      <option value="$500,000 — $1,000,000">$500,000 — $1,000,000</option>
                      <option value="$1,000,000+">$1,000,000+ (Ultra-Prime)</option>
                    </select>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label style={{ display: 'block', color: 'var(--gold-light)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Property Location (City / Country) *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Mayfair, London or Beverly Hills, CA"
                    style={{
                      width: '100%',
                      background: 'rgba(8, 9, 11, 0.75)',
                      border: errors.location ? '1px solid #ff5a5f' : '1px solid var(--border-gold-subtle)',
                      borderRadius: '3px',
                      padding: '0.85rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  {errors.location && <span style={{ color: '#ff7675', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.location}</span>}
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', color: 'var(--gold-light)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Project Vision / Scope Details *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the property, your architectural aspirations, preferred timeline, or special requirements..."
                    style={{
                      width: '100%',
                      background: 'rgba(8, 9, 11, 0.75)',
                      border: errors.message ? '1px solid #ff5a5f' : '1px solid var(--border-gold-subtle)',
                      borderRadius: '3px',
                      padding: '0.85rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                  />
                  {errors.message && <span style={{ color: '#ff7675', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.message}</span>}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'wait' : 'pointer'
                  }}
                >
                  <span>{isSubmitting ? 'Transmitting Dossier...' : 'Request Consultation'}</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-form-card {
            padding: 2rem 1.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .contact-row {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .contact-form-card {
            padding: 1.5rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
