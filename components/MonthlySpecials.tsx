import React from 'react';
import { MONTHLY_SPECIALS } from '../data/menuData';
import { Sparkles, Star } from 'lucide-react';

const MonthlySpecials: React.FC = () => {
  return (
    <section className="py-16 bg-brand-cream border-b border-brand-brown/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-brand-yellow text-brand-brown text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                Limited Edition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-brown display-font">
                New Arrivals
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {MONTHLY_SPECIALS.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm border border-brand-brown/5 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-brand-yellow/20 p-3 rounded-full text-brand-orange shrink-0">
                        <Sparkles size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-brand-brown mb-1 display-font">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                        <span className="text-lg font-bold text-brand-orange">₹{item.price}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MonthlySpecials;