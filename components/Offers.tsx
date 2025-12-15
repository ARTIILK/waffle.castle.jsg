import React, { useState, useEffect } from 'react';
import { OFFERS } from '../data/menuData';
import { Clock, Gift, Tag, Percent } from 'lucide-react';
import { motion } from 'framer-motion';

const Offers: React.FC = () => {
    const [is99OfferValid, setIs99OfferValid] = useState(false);

    useEffect(() => {
        const checkOffer = () => {
        const expiryDate = new Date('2025-12-22T23:59:59');
        const now = new Date();
        setIs99OfferValid(now < expiryDate);
        };
        checkOffer();
    }, []);

  return (
    <section id="offers" className="py-20 bg-brand-brown text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-yellow/20 pb-8">
          <div>
            <span className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-2 block">Don't Miss Out</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white display-font">
              Current <span className="text-brand-yellow">Offers</span>
            </h2>
          </div>
          <p className="text-brand-cream/60 mt-4 md:mt-0 max-w-sm text-right">
             Exclusive deals for our Waffle Castle family. <br/> T&C Apply.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dynamic 99 Offer Card */}
          {is99OfferValid && (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-brand-yellow text-brand-brown rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
                <div className="absolute -right-4 -top-4 bg-brand-orange text-white w-24 h-24 rounded-full flex items-center justify-center font-bold rotate-12 group-hover:rotate-0 transition-transform">
                    <span className="text-lg">WOW</span>
                </div>
                <Tag size={32} className="mb-6 text-brand-brown" />
                <h3 className="text-3xl font-bold mb-2 display-font">ANY WAFFLE @ ₹99</h3>
                <p className="font-medium opacity-80 mb-8">Valid until 22nd Dec 2025. Grab any waffle from our menu for just ₹99!</p>
                <div className="font-mono text-sm border border-brand-brown/20 rounded px-2 py-1 inline-block bg-white/20">
                    CODE: WAFFLE99
                </div>
            </motion.div>
          )}

          {/* Existing Offers (Styled as text cards) */}
          {OFFERS.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-dark/50 border border-brand-yellow/10 rounded-2xl p-8 hover:bg-brand-dark transition-colors group relative overflow-hidden"
            >
              {/* Abstract decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl group-hover:bg-brand-orange/20 transition-colors"></div>

              {offer.discount && (
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-brown border border-brand-yellow/30 text-brand-yellow">
                    <Percent size={20} />
                  </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-3 display-font">{offer.title}</h3>
              <p className="text-brand-cream/70 mb-6 leading-relaxed">{offer.description}</p>
              
              <div className="flex items-center gap-2 text-brand-yellow text-sm font-bold uppercase tracking-wider">
                {offer.validTime ? (
                    <>
                        <Clock size={16} /> {offer.validTime}
                    </>
                ) : (
                    <>
                        <Gift size={16} /> Special Deal
                    </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;