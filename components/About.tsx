import React from 'react';
import { MapPin, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-cream rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border-b-8 border-brand-orange">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-brand-brown display-font mb-6">
              Bringing Royal Sweetness to <span className="text-brand-orange">Jharsuguda</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Waffle Castle isn't just about desserts; it's about creating small moments of joy. 
                When we decided to open our outlet here in <strong>JSG</strong>, we wanted to create a cozy spot where friends can laugh over shakes and families can share a waffle.
              </p>
              <p>
                Every batter is freshly whisked, every chocolate drizzle is generous, and every guest is treated like royalty. Whether you are craving a late-night treat or a mid-day energy boost, our doors are open.
              </p>
            </div>
            
            <div className="flex gap-6 mt-8">
                <div className="text-center">
                    <div className="bg-brand-yellow w-12 h-12 rounded-full flex items-center justify-center text-brand-brown mx-auto mb-2 shadow-sm">
                        <Heart size={24} fill="currentColor" />
                    </div>
                    <span className="font-bold text-brand-brown text-sm">Made with Love</span>
                </div>
                <div className="text-center">
                    <div className="bg-brand-yellow w-12 h-12 rounded-full flex items-center justify-center text-brand-brown mx-auto mb-2 shadow-sm">
                        <Users size={24} />
                    </div>
                    <span className="font-bold text-brand-brown text-sm">Youth Friendly</span>
                </div>
                <div className="text-center">
                    <div className="bg-brand-yellow w-12 h-12 rounded-full flex items-center justify-center text-brand-brown mx-auto mb-2 shadow-sm">
                        <MapPin size={24} />
                    </div>
                    <span className="font-bold text-brand-brown text-sm">Local Favorite</span>
                </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/300/400?random=50" className="rounded-2xl w-full h-64 object-cover mt-8 shadow-lg rotate-2" alt="Shop Interior" />
                <img src="https://picsum.photos/300/400?random=51" className="rounded-2xl w-full h-64 object-cover shadow-lg -rotate-2" alt="Happy Customers" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;