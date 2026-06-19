import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Play } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video with Dark Premium Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero_bg1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-bg/60 via-primary-bg/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 via-transparent to-primary-bg/20" />
      </div>

      {/* Floating Sparkles/Particles (ambient luxury effect) */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-gold rounded-full animate-ping duration-1000" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-gold rounded-full animate-pulse duration-2000" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-gold/40 rounded-full animate-bounce duration-3000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-3xl text-left">
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Seat in Serenity, Dine in Divinity
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            Taste the Authentic <span className="gold-gradient-text">Flavors of Kerala</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            Experience delicious food prepared with fresh ingredients and traditional recipes.
          </motion.p>

          {/* Main Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <button
              onClick={() => handleScrollTo('#menu')}
              className="group gold-gradient-bg hover:opacity-90 text-primary-dark font-sans font-bold px-8 py-4 rounded-full text-base tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              ORDER NOW / MENU
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => handleScrollTo('#reserve')}
              className="border-2 border-white/20 hover:border-gold hover:text-gold text-white bg-white/5 hover:bg-gold/5 font-sans font-bold px-8 py-4 rounded-full text-base tracking-wider transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              BOOK RESERVATION
              <CalendarDays className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Quick Order Delivery Channels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 pt-6 border-t border-white/10 max-w-xl"
          >
            <span className="text-gray-400 font-sans text-xs uppercase tracking-widest block mb-4">
              Or Order Direct Online Via
            </span>
            <div className="flex flex-wrap gap-3">
              {/* Zomato */}
              <a 
                href="https://www.zomato.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-primary-dark/85 hover:bg-[#e23744]/10 border border-[#e23744]/30 hover:border-[#e23744] text-white hover:text-[#e23744] font-sans font-bold py-3 px-6 rounded-full text-xs tracking-wider transition-all duration-300 shadow-md cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                ZOMATO
              </a>

              {/* Swiggy */}
              <a 
                href="https://www.swiggy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-primary-dark/85 hover:bg-[#fc8019]/10 border border-[#fc8019]/30 hover:border-[#fc8019] text-white hover:text-[#fc8019] font-sans font-bold py-3 px-6 rounded-full text-xs tracking-wider transition-all duration-300 shadow-md cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                SWIGGY
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/917045671111?text=Hi!%20I%20would%20like%20to%20place%20an%20order%20at%20Kanary%20Restaurant." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-primary-dark/85 hover:bg-[#25d366]/10 border border-[#25d366]/30 hover:border-[#25d366] text-white hover:text-[#25d366] font-sans font-bold py-3 px-6 rounded-full text-xs tracking-wider transition-all duration-300 shadow-md cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2c-5.396 0-9.786 4.39-9.788 9.788 0 1.725.449 3.41 1.304 4.89L2 22l5.482-1.437a9.747 9.747 0 0 0 4.509 1.113h.004c5.396 0 9.79-4.394 9.792-9.792 0-2.617-1.02-5.078-2.871-6.928zM11.992 20.12h-.003a8.12 8.12 0 0 1-4.14-1.135l-.297-.176-3.078.807.82-3.002-.194-.308a8.093 8.093 0 0 1-1.246-4.341c.002-4.484 3.65-8.132 8.136-8.132a8.082 8.082 0 0 1 5.753 2.385 8.077 8.077 0 0 1 2.38 5.754c-.002 4.486-3.65 8.136-8.131 8.136zm4.46-6.096c-.244-.122-1.442-.712-1.666-.794-.223-.082-.385-.122-.548.122-.162.244-.63.794-.772.957-.142.162-.284.183-.528.061a6.643 6.643 0 0 1-1.957-1.206 7.324 7.324 0 0 1-1.354-1.685c-.142-.244-.015-.376.107-.497.11-.11.244-.285.366-.427.122-.142.163-.244.244-.407.082-.162.041-.305-.02-.427-.06-.122-.548-1.32-.751-1.808-.198-.477-.397-.412-.548-.42l-.467-.008c-.162 0-.427.061-.65.305-.224.244-.854.834-.854 2.034 0 1.2 1.34 2.455 1.48 2.618a10.82 10.82 0 0 0 4.116 3.642 13.9 13.9 0 0 0 1.373.508c.57.18 1.09.155 1.5.094.457-.068 1.442-.589 1.646-1.159.203-.57.203-1.057.142-1.159-.06-.102-.223-.163-.467-.285z"/>
                </svg>
                WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant scroll down prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        onClick={() => handleScrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-sans font-medium">Scroll Down</span>
        <div className="w-6 h-10 border border-gold/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
