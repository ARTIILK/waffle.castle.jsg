import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReviewPage from './pages/ReviewPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-brand-cream font-sans selection:bg-brand-orange selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/review" element={<ReviewPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;