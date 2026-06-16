import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: '123 MG Road, Kochi, Kerala, India - 682016',
      link: 'https://maps.google.com/?q=123+MG+Road+Kochi+Kerala',
      actionText: 'Get Directions',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 98765 43210',
      link: 'tel:+919876543210',
      actionText: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@spicegarden.com',
      link: 'mailto:info@spicegarden.com',
      actionText: 'Send Email',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: 'Monday – Sunday: 11:00 AM – 11:00 PM',
      link: null,
      actionText: 'Open All Week',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-primary-bg relative">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary-light/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold font-sans font-semibold tracking-widest text-sm uppercase block">FIND US</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
          <p className="text-gray-300 font-sans text-sm sm:text-base">
            We are conveniently located in the heart of Kochi. Come visit us or reach out for catering inquiries and reservations.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m2!1m3!1m2!1s0x3b080d514abec6bf%3A0xbd582ab58447ec2!2sM.G.%20Road%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682016%2C%20India!8m2!3d9.9749176!4d76.2818987!3m4!1s0x3b080d514abec6bf%3A0xbd582ab58447ec2!2sM.G.%20Road%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682016%2C%20India!5e0!3m2!1sen!2sin!4v1718544000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Spice Garden Restaurant Google Maps Location"
              className="absolute inset-0"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
