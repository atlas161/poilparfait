
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competitions from './components/Competitions';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import BookingModal from './components/BookingModal';
import { KOALENDAR_MAIN_URL } from './constants';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Navbar onBook={handleOpenBooking} />
      
      <main>
        <Hero />
        <About />
        <Competitions />
        <Services onBook={handleOpenBooking} />
        <Testimonials />
        <Contact onBook={handleOpenBooking} />
      </main>

      <Footer />
      <CookieConsent />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        bookingUrl={KOALENDAR_MAIN_URL}
      />
    </div>
  );
};

export default App;
