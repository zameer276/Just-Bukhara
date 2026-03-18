import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { SPECIAL_OFFERS } from '../constants';

export default function SpecialOffers() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-warm-brown mb-4">Special Offers</h2>
          <p className="text-warm-brown/60">Don't miss out on our best deals and signature dishes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group rounded-3xl overflow-hidden shadow-xl aspect-[16/9]"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-warm-orange mb-2">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm font-bold uppercase tracking-wider">Limited Time Offer</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{offer.title}</h3>
                <p className="text-white/80 text-lg mb-4">{offer.description}</p>
                <button className="bg-warm-orange text-white px-6 py-2 rounded-full font-semibold self-start hover:bg-opacity-90 transition-all">
                  Claim Offer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
