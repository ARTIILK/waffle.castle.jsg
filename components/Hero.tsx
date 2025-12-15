import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Timer } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isOfferValid, setIsOfferValid] = useState(false);

  useEffect(() => {
    const checkOffer = () => {
      const expiryDate = new Date('2025-12-22T23:59:59');
      const now = new Date();
      setIsOfferValid(now < expiryDate);
    };
    
    checkOffer();
    const timer = setInterval(checkOffer, 1000); // Check every second just in case
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-cream">
      {/* Abstract CSS Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {isOfferValid && (
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm md:text-base mb-8 shadow-lg animate-pulse"
             >
               <Sparkles size={18} className="text-brand-yellow" />
               LIMITED OFFER: ANY WAFFLE @ ₹99 ONLY!
               <span className="bg-white/20 px-2 py-0.5 rounded text-xs ml-2">Ends Dec 22, 2025</span>
             </motion.div>
          )}

          <h1 className="text-6xl md:text-8xl font-bold text-brand-brown leading-[1.1] display-font mb-8">
            The <span className="text-brand-orange relative inline-block">
              King
              <svg className="absolute w-full h-3 bottom-1 left-0 text-brand-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> <br/>
            of All Waffles.
          </h1>
          
          <p className="text-xl text-brand-brown/70 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Experience the royal crunch. Freshly baked Belgian waffles loaded with premium chocolate, fruits, and magic. Now serving happiness in Jharsuguda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#menu"
              className="group bg-brand-brown text-brand-yellow px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:bg-brand-orange hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
            >
              Explore Menu 
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </motion.div>

        {/* Text-based decorative elements instead of images */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl border-t border-brand-brown/10 pt-12">
            <div className="text-center">
                <h3 className="text-4xl font-bold text-brand-orange display-font mb-2">20+</h3>
                <p className="text-brand-brown font-bold text-sm uppercase tracking-wider">Waffle Varieties</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold text-brand-orange display-font mb-2">100%</h3>
                <p className="text-brand-brown font-bold text-sm uppercase tracking-wider">Eggless</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold text-brand-orange display-font mb-2">4.8</h3>
                <p className="text-brand-brown font-bold text-sm uppercase tracking-wider">Customer Rating</p>
            </div>
            <div className="text-center">
                <h3 className="text-4xl font-bold text-brand-orange display-font mb-2">30min</h3>
                <p className="text-brand-brown font-bold text-sm uppercase tracking-wider">Avg. Delivery</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;