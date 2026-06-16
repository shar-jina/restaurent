import { motion } from 'framer-motion';
import { Award, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary-bg relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-light/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gold/20">
              <img 
                src="/images/interior_1.png" 
                alt="Spice Garden Restaurant Interior" 
                className="w-full h-[32rem] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative Gold Frame Background */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl z-0 pointer-events-none translate-x-1 translate-y-1 lg:translate-x-0 lg:translate-y-0" />
            
            {/* Overlay Info Card */}
            <div className="absolute bottom-6 right-6 z-20 glass-panel p-6 rounded-xl shadow-xl max-w-xs border border-gold/30">
              <div className="font-serif text-gold text-4xl font-bold mb-1">8+</div>
              <div className="text-white text-sm font-semibold tracking-wider uppercase mb-1">Years of Culinary Excellence</div>
              <div className="text-gray-300 text-xs leading-relaxed">Serving authentic recipes passed down through generations.</div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-gold font-sans font-semibold tracking-widest text-sm uppercase block">OUR STORY</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                About Our Restaurant
              </h2>
              <div className="w-20 h-1 bg-gold rounded mt-2" />
            </div>

            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed">
              Spice Garden Restaurant has been serving authentic Kerala and Indian cuisine since 2018. Our mission is to create memorable dining experiences with fresh ingredients, excellent hospitality, and a comfortable atmosphere.
            </p>

            <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
              Nestled in the vibrant city of Kochi, we bring you the true essence of coastal and mainland Kerala spices. From the slow-cooked stews to our hand-ground spice blends, every dish is an homage to our rich culinary heritage.
            </p>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/35 flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-white font-semibold text-sm">Authentic Taste</h4>
                <p className="text-gray-400 text-xs">Traditional Kerala spices and recipes.</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/35 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-white font-semibold text-sm">Made With Love</h4>
                <p className="text-gray-400 text-xs">Fresh ingredients cooked with care.</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/35 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-white font-semibold text-sm">Hygienic Kitchen</h4>
                <p className="text-gray-400 text-xs">Utmost cleanliness and standards.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
