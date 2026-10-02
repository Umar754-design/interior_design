import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import ProjectsShowcase from './sections/ProjectsShowcase';
import VisualizerSection from './sections/VisualizerSection';
import DesignProcess from './sections/DesignProcess';
import Testimonials from './sections/Testimonials';
import TeamSection from './sections/TeamSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import ProjectModal from './components/ProjectModal';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationData, setConsultationData] = useState(null);

  const handleOpenConsultation = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    handleOpenConsultation();
  };

  const handleConsultationSuccess = (data) => {
    setConsultationData(data);
    setConsultationModalOpen(true);
  };

  return (
    <div className="atelier-app">
      {/* Magnetic Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glassmorphism Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Layout */}
      <main>
        {/* Fullscreen Cinematic Hero with 3D Interior Scene */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Editorial About & Philosophy Section with Animated Counters */}
        <About />

        {/* 3D-Inspired Services Cards */}
        <Services onSelectService={handleSelectService} />

        {/* Filterable Signature Spaces (Projects Showcase) */}
        <ProjectsShowcase onSelectProject={setSelectedProject} />

        {/* "Visualize Before We Build" 3D Real-time Configurator */}
        <VisualizerSection onOpenConsultation={handleOpenConsultation} />

        {/* 6-Stage Design Process Timeline */}
        <DesignProcess />

        {/* Discerning Patrons Testimonials Carousel */}
        <Testimonials />

        {/* Spatial Authors Team Cards with 3D Hover */}
        <TeamSection />

        {/* Private Consultation Request Form */}
        <ContactSection
          onConsultationSuccess={handleConsultationSuccess}
          prefilledService={selectedService}
        />
      </main>

      {/* Multi-Column Haute Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Project Detail Dossier Modal with Before/After Slider & Lightbox */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => {
          setSelectedProject(null);
          handleOpenConsultation();
        }}
      />

      {/* Custom Gold Success Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        consultationData={consultationData}
      />
    </div>
  );
}
