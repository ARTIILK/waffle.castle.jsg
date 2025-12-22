import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { Category } from '../types';
import { Crown, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories: Category[] = [
  'All',
  'Royal Classics',
  'Chocolate Classics',
  'Crunchy Chocolate',
  'Chill Thrill Shakes',
  'Waffle Cakes',
  'Ice Cream Waff-wich',
  'Mini Treats'
];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-brand-brown display-font mb-6">
            Our <span className="text-brand-orange underline decoration-wavy decoration-brand-yellow decoration-4 underline-offset-4">Belgian Menu</span>
          </h2>
          <p className="text-brand-brown/60 text-lg">Indulge in the best <span className="font-semibold">chocolate waffles in Jharsuguda</span>.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-lg font-bold transition-all duration-200 relative pb-1
                ${activeCategory === cat 
                  ? 'text-brand-orange' 
                  : 'text-brand-brown/50 hover:text-brand-brown'
                }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group border-b border-gray-100 pb-6 hover:border-brand-orange/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-brand-brown display-font group-hover:text-brand-orange transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-brand-brown">₹{item.price}</span>
                </div>
                
                <div className="flex gap-2 mb-3">
                    {item.isBestseller && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-brand-orange px-2 py-0.5 rounded-sm flex items-center gap-1">
                            <Flame size={10} /> Bestseller
                        </span>
                    )}
                    {item.isCastleKingChoice && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-brown bg-brand-yellow px-2 py-0.5 rounded-sm flex items-center gap-1">
                            <Crown size={10} /> Must Try
                        </span>
                    )}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
           <div className="text-center py-20 text-gray-400">
             <p>View our wide range of <span className="text-brand-orange font-bold">waffles in Jharsuguda</span>.</p>
           </div>
        )}

      </div>
    </section>
  );
};

export default MenuSection;