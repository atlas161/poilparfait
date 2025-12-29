import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { CONTACT_DETAILS, SITE_NAME } from '../constants';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: 'mentions' | 'privacy';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, section }) => {
  
  // Lock body scroll
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
    <div className="fixed inset-0 z-[250] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
      <div className="bg-sand-50 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-sm shadow-2xl relative flex flex-col">
        
        {/* Sticky Header */}
        <div className="sticky top-0 bg-sand-50 border-b border-sand-200 p-6 flex justify-between items-center z-10">
          <h2 className="font-serif text-2xl text-charcoal">
            {section === 'mentions' ? 'Mentions Légales' : 'Politique de Confidentialité'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-sand-200 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-charcoal" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 text-gray-600 font-light text-sm leading-relaxed space-y-8">
          
          {section === 'mentions' ? (
            <>
              <section>
                <h3 className="font-sans font-bold text-charcoal uppercase tracking-widest text-xs mb-4">1. Éditeur du site</h3>
                <p>
                  <strong>Dénomination sociale :</strong> {SITE_NAME}<br/>
                  <strong>Forme juridique :</strong> Entreprise Individuelle (Micro-entreprise)<br/>
                  <strong>Siège social :</strong> {CONTACT_DETAILS.address}<br/>
                  <strong>Téléphone :</strong> {CONTACT_DETAILS.phone}<br/>
                  <strong>Email :</strong> {CONTACT_DETAILS.email}<br/>
                  <strong>Directeur de la publication :</strong> Lise Gourinchas
                </p>
              </section>
              
              <section>
                <h3 className="font-sans font-bold text-charcoal uppercase tracking-widest text-xs mb-4">2. Hébergement</h3>
                <p>
                  Ce site est hébergé par Vercel Inc.<br/>
                  Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
                </p>
              </section>

              <section>
                <h3 className="font-sans font-bold text-charcoal uppercase tracking-widest text-xs mb-4">3. Propriété Intellectuelle</h3>
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h3 className="font-sans font-bold text-charcoal uppercase tracking-widest text-xs mb-4">1. Collecte des données</h3>
                <p>
                  Les informations recueillies via le formulaire de contact (Nom, Prénom, Email) sont enregistrées dans un fichier informatisé par {SITE_NAME} pour la gestion de la clientèle.
                  Elles sont conservées pendant 3 ans et sont destinées uniquement à la gestion de votre demande.
                </p>
              </section>

              <section>
                <h3 className="font-sans font-bold text-charcoal uppercase tracking-widest text-xs mb-4">2. Droit d'accès</h3>
                <p>
                  Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : {CONTACT_DETAILS.email}
                </p>
              </section>

              <section>
                <h3 className="font-sans font-bold text-charcoal uppercase tracking-widest text-xs mb-4">3. Cookies</h3>
                <p>
                  La navigation sur le site {SITE_NAME} est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. 
                  Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. 
                  Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
                </p>
              </section>
            </>
          )}

        </div>

        {/* Footer of modal */}
        <div className="bg-sand-100 p-6 border-t border-sand-200 text-center">
            <button 
                onClick={onClose}
                className="text-xs font-bold uppercase tracking-widest text-bronze-600 hover:text-charcoal transition-colors"
            >
                Fermer la fenêtre
            </button>
        </div>

      </div>
    </div>
  );
};

export default LegalModal;