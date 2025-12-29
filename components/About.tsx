
import React from 'react';
import { BIO_TEXT } from '../constants';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="parcours" className="py-24 md:py-32 bg-sand-50 relative overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute top-20 left-0 text-[12rem] font-serif text-sand-200/50 leading-none pointer-events-none select-none z-0">
        15 ANS
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Text Content - spans 5 columns */}
          <div className="lg:col-span-5 lg:pt-20">
            <h2 className="text-bronze-600 font-sans uppercase tracking-[0.2em] text-xs font-bold mb-6">
              Savoir-Faire
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-8">
              L'expertise des podiums <br/><span className="italic text-bronze-500">au service de votre chien.</span>
            </h3>
            
            <div className="prose prose-lg text-gray-600 font-light mb-8">
              <p className="mb-6 leading-relaxed text-justify">{BIO_TEXT.paragraph1}</p>
              <p className="leading-relaxed text-justify">{BIO_TEXT.paragraph2}</p>
            </div>

            <div className="space-y-4 mt-12">
              {['Toilettage Morphologique', 'Spécialiste Épilation', 'Coupe Ciseaux'].map((item) => (
                <div key={item} className="flex items-center gap-4 border-b border-sand-200 pb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full border border-bronze-400 text-bronze-600">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="font-sans uppercase text-xs font-bold tracking-widest text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer - 1 column */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Image Composition - spans 6 columns */}
          <div className="lg:col-span-6 relative group">
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1591856262451-248148b5257a?q=80&w=1600&auto=format&fit=crop" 
                alt="Lise en train de toiletter un chien" 
                className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-bronze-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl max-w-xs hidden md:block">
              <p className="font-serif text-2xl text-charcoal italic mb-2">"Le toilettage révèle la beauté naturelle."</p>
              <p className="text-xs font-sans uppercase tracking-widest text-bronze-600 mt-4">— Lise Gourinchas</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
