import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-warm-brown mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-warm-orange/10 p-3 rounded-xl text-warm-orange">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-warm-brown">Location</h4>
                  <p className="text-warm-brown/70">{RESTAURANT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-soft-green/10 p-3 rounded-xl text-soft-green">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-warm-brown">Opening Hours</h4>
                  <p className="text-warm-brown/70">{RESTAURANT_INFO.openingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-warm-brown/10 p-3 rounded-xl text-warm-brown">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-warm-brown">WhatsApp</h4>
                  <p className="text-warm-brown/70">{RESTAURANT_INFO.whatsappNumber}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href={RESTAURANT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-warm-orange text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl hover:bg-opacity-90 transition-all"
              >
                <Phone size={24} />
                Order Now on WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-auto border-4 border-white">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.658744315264!2d74.5828463!3d34.0526463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1997f7f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2sMagam%2C%20Jammu%20and%20Kashmir%20193401!5e0!3m2!1sen!2sin!4v1710750000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
