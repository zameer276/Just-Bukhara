import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          alt="Delicious Food"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            {RESTAURANT_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-cream mb-8 font-light italic">
            Delicious Veg & Non-Veg Food in Magam
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={RESTAURANT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-warm-orange text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 shadow-xl hover:bg-opacity-90 transition-all"
            >
              <Phone size={20} />
              Order on WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all"
            >
              View Menu
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
