
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

interface ServicesProps {
  onBook: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBook }) => {
  // State to track which item is open (primarily for mobile/click interaction)
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-sand-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-bronze-600 font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">L'Atelier de Toilettage</h2>
          <h3 className="font-serif text-4xl md:text-6xl text-charcoal">Carte des Soins</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {SERVICES.map((category) => (
            <div key={category.id} className="flex flex-col">
              <div className="flex items-end justify-between mb-8 border-b border-charcoal pb-4">
                 <h4 className="font-serif text-2xl md:text-3xl text-charcoal">{category.title}</h4>
                 <span className="text-xs font-sans uppercase tracking-widest text-gray-400 mb-1 block">{category.items.length} Formules</span>
              </div>
              
              <div className="space-y-0">
                {category.items.map((item, index) => {
                  const itemId = `${category.id}-${index}`;
                  const isActive = activeItem === itemId;

                  return (
                    <div 
                      key={index} 
                      className={`group border-b border-sand-200 relative transition-all duration-300 cursor-pointer
                        ${isActive ? 'bg-white px-6 -mx-6 py-6 shadow-sm' : 'py-6 hover:lg:bg-white hover:lg:px-6 hover:lg:-mx-6'}
                      `}
                      // Desktop: Hover triggers
                      onMouseEnter={() => { if (window.innerWidth >= 1024) setActiveItem(itemId) }}
                      onMouseLeave={() => { if (window.innerWidth >= 1024) setActiveItem(null) }}
                      // Mobile: Click triggers
                      onClick={() => toggleItem(itemId)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="pr-4">
                          <h5 className="font-sans text-base md:text-lg font-bold text-charcoal uppercase tracking-wider mb-2">{item.name}</h5>
                          {item.isPopular && (
                            <span className="inline-block px-2 py-0.5 bg-bronze-100 text-bronze-900 text-[9px] uppercase tracking-widest font-bold mb-1">
                              Signature
                            </span>
                          )}
                        </div>
                        <div className="text-right flex-shrink-0 flex flex-col items-end">
                          <span className="font-serif text-xl md:text-2xl text-bronze-600 block">{item.price}</span>
                          {/* Visual indicator for mobile */}
                          <div className="lg:hidden mt-2 text-gray-400">
                             {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                        </div>
                      </div>

                      {/* Details - Controlled by Height Animation */}
                      <div 
                        className={`grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 overflow-hidden transition-all duration-500 ease-in-out
                          ${isActive ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0 lg:group-hover:max-h-60 lg:group-hover:opacity-100 lg:group-hover:mt-4'}
                        `}
                      >
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-gray-500 font-light flex items-center gap-2">
                            <span className="w-1 h-1 bg-bronze-400 rounded-full flex-shrink-0"></span>
                            {detail}
                          </p>
                        ))}
                        <div className="col-span-1 md:col-span-2 mt-4 pt-2">
                           <button 
                             onClick={(e) => {
                               e.stopPropagation(); // Prevent toggling the card
                               onBook();
                             }}
                             className="flex items-center text-xs font-bold uppercase tracking-widest text-charcoal border-b border-charcoal pb-1 hover:text-bronze-600 hover:border-bronze-600 transition-colors"
                           >
                              Réserver ce soin <ArrowUpRight className="w-3 h-3 ml-1" />
                           </button>
                        </div>
                      </div>
                      
                      {/* Preview (visible when closed only on desktop) */}
                      <p className={`text-xs md:text-sm text-gray-400 mt-2 line-clamp-1 transition-opacity duration-200 lg:block hidden
                          ${isActive ? 'opacity-0' : 'opacity-100 lg:group-hover:opacity-0'}
                      `}>
                          {item.details.join(' • ')}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
