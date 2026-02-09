import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NoticeBoard from './components/NoticeBoard';
import AcademicSection from './components/AcademicSection';
import AboutSection from './components/AboutSection';
import EducationalApproach from './components/EducationalApproach';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CrimsonAssistant from './components/CrimsonAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <AcademicSection />
        <EducationalApproach />
        <NoticeBoard />
        <Testimonials />
        
        {/* Call to Action */}
        <section className="bg-royal-900 py-24 px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Join Our Community.</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Discover a place where curiosity leads to wisdom. Applications for the 2025-2026 Academic Year are now open.
            </p>
            <button className="bg-white text-royal-900 hover:bg-gray-100 px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-colors shadow-lg">
                Inquire Today
            </button>
        </section>
      </main>
      
      <Footer />
      <CrimsonAssistant />
    </div>
  );
};

export default App;