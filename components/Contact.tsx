
import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { MapPin, Phone, Mail, ArrowRight, CalendarClock } from 'lucide-react';

interface ContactProps {
  onBook: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBook }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message. Je reviendrai vers vous dans les plus brefs délais.");
  };

  return (
    <section id="contact" className="py-24 bg-charcoal text-sand-50 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Column */}
          <div>
            <span className="text-bronze-400 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Rendez-vous
            </span>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
              Parlons de votre <br/>
              <span className="italic text-bronze-200">compagnon.</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-12 max-w-md">
              Que ce soit pour une préparation de concours ou un toilettage d'entretien, je vous reçois exclusivement sur rendez-vous pour garantir calme et disponibilité.
            </p>

            {/* Direct Booking CTA */}
            <div className="mb-12 p-6 border border-bronze-400/30 bg-white/5 rounded-sm">
              <div className="flex items-center gap-4 mb-4">
                 <CalendarClock className="w-8 h-8 text-bronze-400" />
                 <h4 className="font-serif text-2xl text-sand-50">Réservez en ligne</h4>
              </div>
              <p className="text-sm text-gray-400 font-light mb-6">
                 Accédez directement à mon agenda pour choisir votre créneau en temps réel.
                 Idéal pour les soins d'entretien classiques.
              </p>
              <button 
                onClick={onBook}
                className="w-full py-4 bg-bronze-400 text-white font-bold uppercase tracking-widest text-xs hover:bg-bronze-500 transition-colors shadow-lg"
              >
                Voir les disponibilités
              </button>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-3 border border-gray-700 rounded-full group-hover:border-bronze-400 transition-colors">
                  <MapPin className="w-5 h-5 text-bronze-400" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-sand-50">L'Atelier</h4>
                  <p className="text-gray-400 font-light mb-2">{CONTACT_DETAILS.address}</p>
                  <a 
                    href={CONTACT_DETAILS.mapLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-bronze-400 border-b border-bronze-400/30 pb-1 hover:border-bronze-400 transition-all"
                  >
                    Voir sur la carte
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-3 border border-gray-700 rounded-full group-hover:border-bronze-400 transition-colors">
                  <Phone className="w-5 h-5 text-bronze-400" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-sand-50">Téléphone</h4>
                  <p className="text-gray-400 font-light mb-2">Du Lundi au Samedi, 9h - 19h</p>
                  <a href={`tel:${CONTACT_DETAILS.phone.replace(/ /g, '')}`} className="text-lg hover:text-bronze-400 transition-colors">
                    {CONTACT_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                 <div className="p-3 border border-gray-700 rounded-full group-hover:border-bronze-400 transition-colors">
                  <Mail className="w-5 h-5 text-bronze-400" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-sand-50">Email</h4>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-gray-400 font-light hover:text-bronze-400 transition-colors">
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column - For Specific Questions */}
          <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm h-fit">
             <h3 className="font-serif text-3xl mb-2">Une question précise ?</h3>
             <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Utilisez ce formulaire pour les demandes spécifiques (Concours, Handling...)</p>
             
             <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="text-xs font-bold uppercase tracking-widest text-gray-500">Prénom</label>
                    <input 
                      type="text" 
                      id="firstname"
                      required
                      className="w-full bg-transparent border-b border-gray-700 text-sand-50 py-2 focus:border-bronze-400 focus:outline-none transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="text-xs font-bold uppercase tracking-widest text-gray-500">Nom</label>
                    <input 
                      type="text" 
                      id="lastname"
                      required
                      className="w-full bg-transparent border-b border-gray-700 text-sand-50 py-2 focus:border-bronze-400 focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-gray-700 text-sand-50 py-2 focus:border-bronze-400 focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-gray-500">Sujet</label>
                  <select 
                    id="subject"
                    className="w-full bg-transparent border-b border-gray-700 text-sand-50 py-2 focus:border-bronze-400 focus:outline-none transition-colors [&>option]:bg-charcoal"
                  >
                    <option value="infos">Renseignements Concours / Handling</option>
                    <option value="rdv">Problème de réservation en ligne</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-700 text-sand-50 py-2 focus:border-bronze-400 focus:outline-none transition-colors resize-none"
                    placeholder="Précisez la race de votre chien et vos besoins..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="group flex items-center gap-4 bg-sand-50 text-charcoal px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-bronze-400 hover:text-white transition-all duration-300 w-full md:w-auto justify-center"
                >
                  Envoyer le message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
             </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
