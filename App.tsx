import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComparisonSection from './components/ComparisonSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ForTattooArtists from './components/ForTattooArtists';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'artists'>('home');

  const handleNavigate = (page: 'privacy' | 'terms' | 'artists') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ink-black text-white selection:bg-ink-gold selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <ComparisonSection />
            <HowItWorks />
            <Features />
            <Reviews />
            <Pricing />
            <FAQ />
          </>
        )}
        {currentPage === 'privacy' && <PrivacyPolicy onBack={handleBackToHome} />}
        {currentPage === 'terms' && <TermsOfService onBack={handleBackToHome} />}
        {currentPage === 'artists' && <ForTattooArtists onBack={handleBackToHome} />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;