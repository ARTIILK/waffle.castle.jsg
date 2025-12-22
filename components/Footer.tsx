import React from 'react';
import { Phone, Clock, Instagram, Facebook, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-brown text-white pt-20 pb-10 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-brown font-bold text-xl">WC</div>
                <span className="font-bold text-3xl display-font text-brand-yellow">Waffle Castle</span>
            </div>
            <p className="text-brand-cream/70 mb-6">
              The ultimate destination for <span className="text-brand-yellow font-semibold">premium Belgian waffles</span>, pancakes, and thick shakes in Jharsuguda. Treat yourself like royalty at the best <span className="text-brand-yellow font-semibold">dessert cafe in JSG</span>.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/waffle_castle_official/" target="_blank" rel="noopener noreferrer" className="bg-brand-yellow text-brand-brown p-3 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-brand-yellow text-brand-brown p-3 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold text-brand-yellow mb-6 display-font">Waffle Shop Jharsuguda</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0 mt-1" size={20} />
                <span className="text-brand-cream/80">
                  Shop No. 4, Ground Floor,<br/>
                  Near Bus Stand, Jharsuguda,<br/>
                  Odisha - 768201
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={20} />
                <span className="text-brand-cream/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-brand-orange shrink-0" size={20} />
                <span className="text-brand-cream/80">Open Late Night: 11:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-brand-yellow/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14812.724978870201!2d84.0161492!3d21.8505436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20e788e6b449eb%3A0x803dd8f76331c6aa!2sWaffle%20Castle%20Jharsuguda!5e0!3m2!1sen!2sin!4v1765808663091!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Best Waffle Shop Near Me Jharsuguda"
            ></iframe>
          </div>
        </div>

        {/* SEO Keyword Section - Subtle and Clean */}
        <div className="border-t border-brand-yellow/10 pt-8 pb-4 text-center">
            <p className="text-[10px] text-brand-cream/20 uppercase tracking-[0.2em] mb-4">Service Areas & Specialties</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-brand-cream/40">
                <span>Waffle Castle JSG</span>
                <span>•</span>
                <span>Belgian Waffle Jharsuguda</span>
                <span>•</span>
                <span>Nutella Waffle Odisha</span>
                <span>•</span>
                <span>Ice Cream Waffle JSG</span>
                <span>•</span>
                <span>Best Cafe Near Jharsuguda Station</span>
                <span>•</span>
                <span>Affordable Waffle Cafe</span>
                <span>•</span>
                <span>Premium Dessert Shop</span>
            </div>
        </div>

        <div className="pt-4 text-center text-brand-cream/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Waffle Castle Jharsuguda. Designed for the Best Desserts in Odisha.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;