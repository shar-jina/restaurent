import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Rahul',
      location: 'Kochi',
      rating: 5,
      text: 'Amazing food and excellent ambience. The Kerala Fish Curry had the perfect balance of spices, and the service was exceptionally warm.',
      initials: 'R',
    },
    {
      id: 2,
      name: 'Anjali',
      location: 'Trivandrum',
      rating: 5,
      text: 'Best restaurant experience in town. Every dish tasted fresh and authentic. The chocolate brownie dessert was the perfect end to our family dinner.',
      initials: 'A',
    },
    {
      id: 3,
      name: 'Vikram',
      location: 'Bangalore',
      rating: 5,
      text: 'The Garlic Prawns were sizzling and cooked to perfection. Truly authentic taste of southern coastal cuisine. Will definitely visit again!',
      initials: 'V',
    },
    {
      id: 4,
      name: 'Meera',
      location: 'Kochi',
      rating: 5,
      text: 'A very clean and family-friendly environment. The chefs are masters of their craft—you can tell they grind their own spices. Five stars!',
      initials: 'M',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section id="reviews" className="py-24 bg-primary-bg relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-gold font-sans font-semibold tracking-widest text-sm uppercase block">TESTIMONIALS</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            What Our Guests Say
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold/25 w-full text-center relative shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg border border-primary-dark">
                <Quote className="w-5 h-5 text-primary-dark" />
              </div>

              <div className="flex flex-col items-center gap-6 mt-4">
                {/* Rating stars */}
                <div className="flex gap-1 justify-center">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="font-serif text-lg sm:text-xl text-gray-200 italic leading-relaxed max-w-2xl">
                  “{reviews[currentIndex].text}”
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center text-primary-dark font-sans font-bold text-lg shadow-md">
                    {reviews[currentIndex].initials}
                  </div>
                  <div className="text-left">
                    <cite className="not-italic font-serif text-white font-bold block">
                      {reviews[currentIndex].name}
                    </cite>
                    <span className="text-gold font-sans text-xs tracking-wider">
                      {reviews[currentIndex].location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Nav Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-primary-dark/80 hover:bg-gold hover:text-primary-dark text-gold border border-gold/20 flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-1.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-6 bg-gold' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-primary-dark/80 hover:bg-gold hover:text-primary-dark text-gold border border-gold/20 flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
