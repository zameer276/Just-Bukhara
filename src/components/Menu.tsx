import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../constants';

export default function Menu() {
  const categories = ['All', 'Veg', 'Non-Veg', 'Fast Food', 'Beverages'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-warm-brown mb-4">Our Delicious Menu</h2>
          <p className="text-warm-brown/60 max-w-2xl mx-auto">
            Explore our wide range of dishes, from traditional Kashmiri flavors to modern fast food and refreshing beverages.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-warm-orange text-white shadow-lg'
                  : 'bg-cream text-warm-brown hover:bg-light-brown/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-warm-orange">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-warm-brown mb-2">{item.name}</h3>
                  <p className="text-sm text-warm-brown/60 mb-4">{item.category}</p>
                  <a
                    href={`${RESTAURANT_INFO.whatsappLink}&text=I%20want%20to%20order%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-soft-green text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all text-sm font-semibold"
                  >
                    <Phone size={16} />
                    Order on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
