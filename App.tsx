import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import MonthlySpecials from './components/MonthlySpecials';
import Offers from './components/Offers';
import About from './components/About';
import Footer from './components/Footer';
import Reviews from './components/Reviews';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-cream font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MonthlySpecials />
        <MenuSection />
        <Offers />
        <Reviews />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;