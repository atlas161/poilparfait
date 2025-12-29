import React, { useState } from 'react';
import { SITE_NAME } from '../constants';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [legalSection, setLegalSection] = useState<'mentions' | 'privacy'>('mentions');

  const openLegal = (section: 'mentions' | 'privacy') => {
    setLegalSection(section);
    setModalOpen(true);
  };

  return (
    <footer className="bg-charcoal text-sand-50 pt-0 pb-12 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h2 className="font-serif text-2xl text-sand-50 tracking-wide mb-6">{SITE_NAME}</h2>
            <ul className="space-y-3">
              <li><a href="#parcours" className="text-sm text-gray-500 hover:text-bronze-400 transition-colors">Mon Parcours</a></li>
              <li><a href="#concours" className="text-sm text-gray-500 hover:text-bronze-400 transition-colors">Palmarès</a></li>
              <li><a href="#services" className="text-sm text-gray-500 hover:text-bronze-400 transition-colors">Prestations</a></li>
              <li><a href="#temoignages" className="text-sm text-gray-500 hover:text-bronze-400 transition-colors">Avis Clients</a></li>
            </ul>
          </div>

          <div>
             <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Suivez-nous</span>
             <ul className="space-y-3">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm text-sand-200 hover:text-bronze-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm text-sand-200 hover:text-bronze-400 transition-colors">Facebook</a></li>
            </ul>
          </div>

          <div className="md:text-right flex flex-col justify-between">
             <div className="mb-6 md:mb-0">
                <button onClick={() => openLegal('mentions')} className="text-xs text-gray-600 hover:text-bronze-400 transition-colors block md:inline md:ml-auto mb-2 md:mb-0">Mentions Légales</button>
                <span className="hidden md:inline mx-2 text-gray-700">|</span>
                <button onClick={() => openLegal('privacy')} className="text-xs text-gray-600 hover:text-bronze-400 transition-colors block md:inline md:ml-auto">Politique de Confidentialité</button>
             </div>
             <p className="text-xs text-gray-600 uppercase tracking-widest">
               &copy; {new Date().getFullYear()} {SITE_NAME}. <br/>
               Tous droits réservés. <br/>
               <span className="opacity-50 mt-2 block">16110 Agris, France</span>
             </p>
          </div>

        </div>
      </div>

      <LegalModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        section={legalSection} 
      />
    </footer>
  );
};

export default Footer;