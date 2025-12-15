import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComparisonSection from './components/ComparisonSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ink-black text-white selection:bg-ink-gold selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ComparisonSection />
        <HowItWorks />
        <Features />
        <Reviews />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;