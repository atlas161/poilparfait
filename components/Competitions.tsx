
import React, { useState, useEffect } from 'react';
import { COMPETITIONS } from '../constants';
import { Competition } from '../types';
import { X, Trophy, MapPin, Calendar, Quote, Camera, ChevronDown } from 'lucide-react';

const Competitions: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<Competition | null>(null);
  const [visibleCount, setVisibleCount] = useState(4); 

  useEffect(() => {
    if (selectedComp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedComp]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const displayedCompetitions = COMPETITIONS.slice(0, visibleCount);
  const hasMore = visibleCount < COMPETITIONS.length;

  return (
    <section id="concours" className="py-24 bg-charcoal text-sand-50 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-800 pb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-bronze-400 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Journal de Bord
            </span>
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Palmarès & Récits</h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              Derrière chaque rosette et chaque titre, il y a des heures de préparation technique. 
              Cliquez sur un événement pour découvrir les coulisses de ces résultats.
            </p>
          </div>
        </div>

        {/* Grid Layout for Competitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayedCompetitions.map((comp) => (
            <div 
              key={comp.id} 
              onClick={() => setSelectedComp(comp)}
              className="group relative h-[450px] cursor-pointer overflow-hidden border border-gray-800 hover:border-bronze-400 transition-colors duration-500 animate-fade-up"
            >
              {/* Background Image */}
              <img 
                src={comp.imageUrl} 
                alt={comp.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content Card - Uses TranslateY instead of Height for smoother animation */}
              <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 ease-out transform translate-y-[80px] group-hover:translate-y-0">
                
                {/* Metadata Line */}
                <div className="flex justify-between items-center mb-2 opacity-100 transition-opacity duration-300">
                    <span className="text-bronze-400 font-sans text-xs font-bold uppercase tracking-widest">
                      {comp.date} — {comp.location}
                    </span>
                    <Trophy className="w-5 h-5 text-bronze-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-3 leading-tight">
                    {comp.title}
                </h3>

                {/* Hidden Description that slides up */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-gray-300 font-light text-sm line-clamp-2 mb-4">
                      {comp.description}
                    </p>
                    <span className="inline-block border-b border-bronze-400 text-bronze-400 text-xs font-bold uppercase tracking-widest pb-1">
                      Lire le récit complet
                    </span>
                </div>
              </div>
              
              {/* Badge - Always visible top right */}
              <div className="absolute top-8 right-8">
                 <span className="bg-bronze-600/90 text-white px-4 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-lg">
                   {comp.result}
                 </span>
              </div>

            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center pt-8">
            <button 
              onClick={handleLoadMore}
              className="group flex flex-col items-center gap-2 text-sand-200 hover:text-bronze-400 transition-colors duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Voir plus d'archives</span>
              <div className="p-3 border border-gray-700 rounded-full group-hover:border-bronze-400 transition-all duration-300">
                <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
              </div>
            </button>
          </div>
        )}

      </div>

      {/* Full Screen Modal / Detail View */}
      {selectedComp && (
        <div className="fixed inset-0 z-[100] bg-sand-50 overflow-y-auto animate-fade-in">
          
          {/* Sticky Close Button */}
          <button 
            onClick={() => setSelectedComp(null)}
            className="fixed top-6 right-6 z-50 p-3 bg-charcoal text-white rounded-full hover:bg-bronze-400 transition-colors duration-300 group shadow-lg"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Hero Image of Modal */}
          <div className="relative h-[40vh] md:h-[60vh] w-full">
            <img 
              src={selectedComp.imageUrl} 
              alt={selectedComp.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 bg-gradient-to-t from-black/90 to-transparent">
              <div className="max-w-[1000px] mx-auto">
                <div className="flex flex-wrap items-center gap-4 text-bronze-400 mb-4 font-sans text-xs md:text-sm font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {selectedComp.date}</span>
                  <span className="hidden md:inline w-1 h-1 bg-bronze-400 rounded-full" />
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {selectedComp.location}</span>
                </div>
                <h2 className="font-serif text-4xl md:text-7xl text-white mb-6 leading-none">{selectedComp.title}</h2>
                <div className="inline-block bg-bronze-500 text-white px-6 py-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                  Résultat : {selectedComp.result}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="max-w-[1000px] mx-auto px-6 py-12 lg:px-12 text-charcoal">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Story */}
              <div className="lg:col-span-8">
                <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-bronze-600 mb-6">
                  Le Récit de l'Expert
                </h3>
                <div className="prose prose-lg text-gray-600 font-light whitespace-pre-line text-justify leading-relaxed">
                  {selectedComp.story}
                </div>

                {/* Judge Comment */}
                {selectedComp.judgeComment && (
                  <div className="mt-12 bg-white p-8 border-l-4 border-bronze-400 shadow-sm">
                    <Quote className="w-8 h-8 text-bronze-200 mb-4" />
                    <p className="font-serif text-xl italic text-charcoal mb-4">
                      "{selectedComp.judgeComment}"
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      — Commentaires du Juge
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-white p-6 border border-sand-200 shadow-sm">
                  <h4 className="font-serif text-xl mb-4">Points Clés</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-bronze-400 rounded-full mt-1.5 flex-shrink-0" />
                      Préparation : 6 mois
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-bronze-400 rounded-full mt-1.5 flex-shrink-0" />
                      Technique : Ciseaux & Épilation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-bronze-400 rounded-full mt-1.5 flex-shrink-0" />
                      Race : Berger Australien / Setter
                    </li>
                  </ul>
                </div>
                
                {/* Mini Gallery Preview */}
                {selectedComp.gallery && (
                  <div>
                    <h4 className="flex items-center gap-2 font-serif text-xl mb-4">
                      <Camera className="w-5 h-5 text-bronze-400" /> Galerie
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedComp.gallery.map((img, idx) => (
                        <img 
                          key={idx} 
                          src={img} 
                          alt="Detail" 
                          className="w-full h-24 object-cover hover:opacity-80 transition-opacity cursor-pointer rounded-sm" 
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default Competitions;
