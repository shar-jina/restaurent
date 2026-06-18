import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FullMenuPage from './components/FullMenuPage';

export default function App() {
  const [view, setView] = useState('home'); // 'home' or 'menu'

  return (
    <div className="min-h-screen bg-primary-bg text-gray-200 font-sans selection:bg-gold selection:text-primary-dark">
      {/* Navigation Header */}
      <Navbar view={view} setView={setView} />

      {view === 'home' ? (
        <>
          {/* Hero / Welcome Banner */}
          <Hero />

          {/* Our Story / About Section */}
          <About />

          {/* Specialized Food & Drink Menu */}
          <Menu setView={setView} />

          {/* Visual Photo Gallery */}
          <Gallery />

          {/* Core Brand Offerings / Why Choose Us */}
          <WhyChooseUs />

          {/* Customer Testimonials Carousel */}
          <Reviews />

          {/* Table Booking Form Panel */}
          <Reservation />

          {/* Location / Hours / Map Panel */}
          <Contact />
        </>
      ) : (
        /* Full Menu Page View */
        <FullMenuPage setView={setView} />
      )}

      {/* Social & Legal Footer */}
      <Footer />
    </div>
  );
}
