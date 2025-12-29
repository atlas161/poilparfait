
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Instagram, ArrowLeft, ArrowRight, Star, ChevronDown } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="temoignages" className="py-24 bg-white border-t border-sand-200 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* --- Testimonials Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          
          {/* Section Header */}
          <div className="lg:col-span-4">
            <h2 className="text-bronze-600 font-sans uppercase tracking-[0.2em] text-xs font-bold mb-6">Confiance</h2>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-8 leading-tight">
              L'excellence vue par nos clients.
            </h3>
            <p className="text-gray-500 font-light leading-relaxed mb-8 text-justify">
              La satisfaction des éleveurs, des juges et des propriétaires passionnés est la seule véritable mesure de la réussite de l'Atelier.
            </p>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 mt-12">
              <button 
                onClick={prev}
                className="w-12 h-12 border border-sand-200 rounded-full flex items-center justify-center hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="font-sans text-xs tracking-[0.2em] font-bold text-gray-400">
                {String(currentIndex + 1).padStart(2, '0')} — {String(TESTIMONIALS.length).padStart(2, '0')}
              </span>
              <button 
                onClick={next}
                className="w-12 h-12 border border-sand-200 rounded-full flex items-center justify-center hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="lg:col-span-7 lg:col-start-6 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-bronze-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="bg-sand-50 p-8 md:p-12 md:pb-16 relative min-h-[400px] flex flex-col justify-center transition-all duration-500 rounded-sm">
               <div className="absolute top-8 left-8 text-bronze-200 font-serif text-9xl leading-none opacity-50 font-black select-none">"</div>

               <div key={currentIndex} className="relative z-10 animate-fade-in">
                  <div className="flex gap-1 mb-6 text-bronze-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-charcoal font-serif text-xl md:text-2xl italic leading-relaxed mb-8">
                     {currentTestimonial.text}
                  </p>

                  <div className="border-t border-sand-200 pt-6 flex justify-between items-end">
                    <div>
                      <p className="font-sans text-sm font-bold uppercase tracking-widest text-charcoal mb-1">
                        {currentTestimonial.author}
                      </p>
                      <p className="text-xs text-gray-500 font-medium">
                        {currentTestimonial.role}
                      </p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Mobile Nav */}
            <div className="flex lg:hidden justify-between items-center mt-6 px-4">
              <button onClick={prev} className="p-2 border border-gray-200 rounded-full"><ArrowLeft className="w-5 h-5"/></button>
              <span className="text-xs tracking-widest text-gray-500">{currentIndex + 1} / {TESTIMONIALS.length}</span>
              <button onClick={next} className="p-2 border border-gray-200 rounded-full"><ArrowRight className="w-5 h-5"/></button>
            </div>
          </div>
        </div>

        {/* --- Instagram Grid Section (Placeholder for Elfsight) --- */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-sand-200 pb-4 gap-4">
            <div>
              <h4 className="font-serif text-3xl text-charcoal mb-2">Suivez le Quotidien</h4>
              <p className="text-sm text-gray-500 font-light">Les coulisses, les avant/après et les résultats en direct.</p>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-bronze-600 hover:text-charcoal transition-colors">
              <Instagram className="w-4 h-4" /> @latelieraupoilparfait
            </a>
          </div>
          
          {/* 3x2 Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 mb-8">
             {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square relative group overflow-hidden bg-sand-100 cursor-pointer">
                <img 
                  src={`https://picsum.photos/600/600?random=${i + 30}`} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-[0.8] group-hover:saturate-100"
                />
                {/* Overlay Icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>

          {/* Load More Widget Placeholder Button */}
          <div className="flex justify-center">
             <button className="flex items-center gap-3 px-8 py-3 bg-sand-50 hover:bg-bronze-100 text-charcoal text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded-full border border-sand-200">
                Charger plus de photos
                <ChevronDown className="w-4 h-4" />
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
