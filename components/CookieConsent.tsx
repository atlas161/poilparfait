import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[200] bg-white border-t border-sand-200 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] p-6 md:p-8 animate-fade-up">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <h4 className="font-serif text-lg text-charcoal mb-2">Politique de Cookies</h4>
          <p className="text-sm text-gray-500 font-light leading-relaxed max-w-2xl">
            Nous utilisons des cookies pour optimiser votre expérience sur le site et analyser le trafic. 
            Ces données sont anonymes et nous aident à améliorer nos services. 
            En continuant, vous acceptez notre utilisation des cookies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button 
            onClick={handleDecline}
            className="px-6 py-3 border border-gray-300 text-gray-500 text-xs font-bold uppercase tracking-widest hover:border-charcoal hover:text-charcoal transition-colors rounded-sm"
          >
            Refuser
          </button>
          <button 
            onClick={handleAccept}
            className="px-8 py-3 bg-bronze-400 text-white text-xs font-bold uppercase tracking-widest hover:bg-bronze-500 transition-colors shadow-sm rounded-sm"
          >
            Accepter
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieConsent;