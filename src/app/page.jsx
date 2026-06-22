import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import PromoVideo from '../components/PromoVideo';
import Reviews from '../components/Reviews';
import Reservation from '../components/Reservation';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      {/* Welcome Banner */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Menu Highlights Section */}
      <section id="menu">
        <Menu />
      </section>

      {/* Visual Photo Gallery */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Why Choose Us */}
      <section id="why-us">
        <WhyChooseUs />
      </section>

      {/* Video Showcase & Stats Count Panel */}
      <PromoVideo />

      {/* Testimonials Carousel */}
      <section id="reviews">
        <Reviews />
      </section>

      {/* Reservation Panel */}
      <section id="reserve">
        <Reservation />
      </section>

      {/* Contact Panel */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
