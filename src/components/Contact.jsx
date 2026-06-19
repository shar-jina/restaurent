import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: 'Brahmaswom Madam Building, MG Road, Thrissur, Kerala - 680001',
      link: 'https://maps.google.com/?q=Kanary+Restaurant+MG+Road+Thrissur',
      actionText: 'Get Directions',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 70456 71111',
      link: 'tel:+917045671111',
      actionText: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@kanaryrestaurant.com',
      link: 'mailto:info@kanaryrestaurant.com',
      actionText: 'Send Email',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: 'Monday – Sunday: 8:00 AM – 1:00 AM',
      link: null,
      actionText: 'Open All Week',
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/dining_experience.png')" }}
    >
      {/* Heavy dark luxury overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/60 via-primary-bg/25 to-primary-bg/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold font-sans font-semibold tracking-widest text-sm uppercase block">FIND US</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
          <p className="text-gray-300 font-sans text-sm sm:text-base">
            We are located in the heart of Thrissur. Visit us at any of our branches or reach out for catering inquiries and reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel p-5 rounded-2xl border border-gold/15 flex items-start gap-4 hover:border-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <div className="space-y-1 flex-grow">
                    <h3 className="text-white font-serif font-bold text-base">{info.title}</h3>
                    <p className="text-gray-300 text-sm font-sans">{info.details}</p>
                    {info.link && (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-gold hover:text-gold-light uppercase tracking-wider mt-2 inline-block transition-colors"
                      >
                        {info.actionText} →
                      </a>
                    )}
                    {!info.link && (
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2 inline-block">
                        {info.actionText}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Google Maps Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 h-[450px] lg:h-auto min-h-[350px] rounded-3xl overflow-hidden border border-gold/25 shadow-2xl relative bg-primary-dark"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.59345719908!2d76.21272717596001!3d10.524816989609272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee3bd1987d69%3A0x6d97c555d496a792!2sKanary%20Restaurant!5e0!3m2!1sen!2sin!4v1718544000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kanary Restaurant Google Maps Location"
              className="absolute inset-0"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
