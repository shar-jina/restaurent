import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Flame, Leaf } from 'lucide-react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'Full Menu' },
    { id: 'starters', name: 'Starters' },
    { id: 'main', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const menuItems = [
    // Starters
    {
      id: 1,
      name: 'Crispy Chicken',
      price: 220,
      category: 'starters',
      description: 'Tender chicken strips marinated in local spices, double-crusted and fried to golden perfection.',
      spicy: true,
      popular: false,
      veg: false,
      image: '/images/dish_garlic_prawns.png' // Fallback or placeholder, prawns is fine as signature
    },
    {
      id: 2,
      name: 'Veg Spring Rolls',
      price: 180,
      category: 'starters',
      description: 'Crispy pastry wrapper loaded with shredded wok-fried vegetables and seasoned with aromatic spices.',
      spicy: false,
      popular: false,
      veg: true,
    },
    {
      id: 3,
      name: 'Garlic Prawns',
      price: 320,
      category: 'starters',
      description: 'Sizzling prawns sautéed in rich butter, crushed garlic cloves, fresh herbs, and a splash of lemon juice.',
      spicy: false,
      popular: true,
      veg: false,
      image: '/images/dish_garlic_prawns.png'
    },
    // Main Course
    {
      id: 4,
      name: 'Kerala Fish Curry',
      price: 380,
      category: 'main',
      description: 'Traditional coastal curry cooked with fresh king fish, kudampuli (malabar tamarind), curry leaves, and coconut milk.',
      spicy: true,
      popular: true,
      veg: false,
      image: '/images/dish_fish_curry.png'
    },
    {
      id: 5,
      name: 'Butter Chicken',
      price: 340,
      category: 'main',
      description: 'Succulent tandoori grilled chicken simmered in a rich, creamy, velvety tomato-butter gravy.',
      spicy: false,
      popular: true,
      veg: false,
      image: '/images/dish_butter_chicken.png'
    },
    {
      id: 6,
      name: 'Veg Fried Rice',
      price: 220,
      category: 'main',
      description: 'Fragrant basmati rice tossed with fresh garden vegetables, light soy sauce, and scallions in a sizzling wok.',
      spicy: false,
      popular: false,
      veg: true,
    },
    // Desserts
    {
      id: 7,
      name: 'Chocolate Brownie',
      price: 180,
      category: 'desserts',
      description: 'Fudgy, warm chocolate brownie served with a scoop of premium vanilla bean ice cream and hot chocolate drizzle.',
      spicy: false,
      popular: true,
      veg: true,
      image: '/images/dish_brownie.png'
    },
    {
      id: 8,
      name: 'Fruit Salad',
      price: 150,
      category: 'desserts',
      description: 'A refreshing medley of seasonal tropical fruits topped with a honey-lime glaze and a dollop of fresh cream.',
      spicy: false,
      popular: false,
      veg: true,
    },
  ];

  // Filter items based on selected category
  const filteredItems = activeTab === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  // Get signature dishes that have images
  const signatureDishes = menuItems.filter(item => item.image);

  return (
    <section id="menu" className="py-24 bg-primary-dark/50 relative">
      {/* Background visual element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,45,32,0.3),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold font-sans font-semibold tracking-widest text-sm uppercase block">OUR SPECIALTIES</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Discover Our Menu
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
          <p className="text-gray-300 font-sans text-sm sm:text-base">
            Savor the rich heritage of Kerala and Indian cuisine, crafted to perfection with imported traditional spices and locally sourced fresh ingredients.
          </p>
        </div>

        {/* 1. Chef's Signature Dishes (Premium Visual Section) */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl font-semibold text-gold mb-8 text-left border-l-2 border-gold pl-4">
            Chef's Signature Selections
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureDishes.map((dish) => (
              <motion.div
                key={dish.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-primary-dark rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 shadow-lg flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {dish.popular && (
                      <span className="bg-gold text-primary-dark text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase flex items-center gap-1 shadow-md">
                        <Award className="w-3 h-3" /> Best Seller
                      </span>
                    )}
                    {dish.spicy && (
                      <span className="bg-red-600 text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase flex items-center gap-1 shadow-md">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-white font-serif text-lg font-bold group-hover:text-gold transition-colors">
                        {dish.name}
                      </h4>
                      {dish.veg && <Leaf className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />}
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-3">
                      {dish.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-gold font-sans font-bold text-lg">₹{dish.price}</span>
                    <button 
                      onClick={() => document.getElementById('reserve').scrollIntoView({ behavior: 'smooth' })}
                      className="text-xs font-bold tracking-wider text-gray-300 hover:text-gold uppercase transition-colors"
                    >
                      Order / Book Now →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Full Menu Listing (Tabbed Category View) */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-gold mb-8 text-left border-l-2 border-gold pl-4">
            Curated Categories
          </h3>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-10 border-b border-gray-800 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 py-2.5 font-sans font-semibold tracking-wider text-sm rounded-full transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-gold text-primary-dark shadow-[0_4px_15px_rgba(212,175,55,0.25)]'
                    : 'text-gray-400 hover:text-white bg-transparent'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-light/20 transition-all duration-300 border border-transparent hover:border-gold/5"
                >
                  <div className="flex-grow space-y-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                        {item.name}
                        {item.veg && <Leaf className="w-3.5 h-3.5 text-green-500 inline" />}
                        {item.spicy && <Flame className="w-3.5 h-3.5 text-red-500 inline" />}
                      </h4>
                      {/* Dotted connector */}
                      <div className="hidden sm:block flex-grow border-b border-dotted border-gray-700 mx-2" />
                      <span className="text-gold font-sans font-bold text-lg flex-shrink-0">₹{item.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
