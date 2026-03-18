import { Instagram, Facebook, Twitter, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-warm-brown text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-cream/10 pb-12">
          <div>
            <h3 className="text-2xl font-bold text-warm-orange mb-6">{RESTAURANT_INFO.name}</h3>
            <p className="text-cream/70 leading-relaxed">
              Serving authentic Kashmiri and multi-cuisine delicacies with love and passion. Visit us for an unforgettable dining experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-cream/70">
              <li><a href="#home" className="hover:text-warm-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-warm-orange transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-warm-orange transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="hover:text-warm-orange transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="bg-cream/10 p-3 rounded-full hover:bg-warm-orange transition-all"><Instagram size={20} /></a>
              <a href="#" className="bg-cream/10 p-3 rounded-full hover:bg-warm-orange transition-all"><Facebook size={20} /></a>
              <a href="#" className="bg-cream/10 p-3 rounded-full hover:bg-warm-orange transition-all"><Twitter size={20} /></a>
            </div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-cream/70 flex items-center gap-2">
              <Phone size={16} />
              {RESTAURANT_INFO.whatsappNumber}
            </p>
          </div>
        </div>
        
        <div className="text-center text-cream/50 text-sm">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ for authentic taste.</p>
        </div>
      </div>
    </footer>
  );
}
