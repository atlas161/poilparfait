
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingUrl: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, bookingUrl }) => {
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 md:p-6 animate-fade-in">
      <div className="bg-white w-full h-full md:h-[90vh] md:max-w-4xl md:rounded-lg shadow-2xl relative flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white z-10">
          <h2 className="font-serif text-lg md:text-xl text-charcoal">Réserver un Soin</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content - Iframe Koalendar */}
        <div className="flex-1 w-full h-full bg-sand-50 relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-sans text-xs uppercase tracking-widest z-0">
             Chargement du calendrier...
          </div>
          <iframe 
            src={`${bookingUrl}?embed=true`}
            width="100%" 
            height="100%" 
            frameBorder="0" 
            className="relative z-10 w-full h-full"
            title="Réservation en ligne"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
