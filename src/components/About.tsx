import { motion } from 'motion/react';
import { Utensils, Coffee, Leaf, Zap } from 'lucide-react';

export default function About() {
  const features = [
    { icon: <Utensils className="text-warm-orange" />, title: 'Authentic Cuisine', desc: 'True Kashmiri & multi-cuisine flavors.' },
    { icon: <Leaf className="text-soft-green" />, title: 'Fresh Ingredients', desc: 'Sourced daily for the best taste.' },
    { icon: <Zap className="text-warm-orange" />, title: 'Veg & Non-Veg', desc: 'Wide variety of dishes for everyone.' },
    { icon: <Coffee className="text-warm-brown" />, title: 'Coffee & Drinks', desc: 'Perfectly brewed beverages.' },
  ];

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-warm-brown mb-6">Our Story</h2>
            <p className="text-lg text-warm-brown/80 mb-6 leading-relaxed">
              Welcome to <span className="text-warm-orange font-semibold">Just Bukhara</span>, where tradition meets taste. Located in the heart of Magam, we pride ourselves on serving authentic Kashmiri delicacies alongside a diverse multi-cuisine menu.
            </p>
            <p className="text-lg text-warm-brown/80 mb-8 leading-relaxed">
              Whether you're craving a rich Mutton Rogan Josh or a refreshing Kashmiri Kahwa, our chefs use only the freshest ingredients to ensure every bite is a celebration of flavor.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-semibold text-warm-brown">{f.title}</h4>
                    <p className="text-sm text-warm-brown/60">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-warm-orange p-8 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-white text-3xl font-bold">10+</p>
              <p className="text-white/80 text-sm">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
