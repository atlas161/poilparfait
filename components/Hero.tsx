
import React from 'react';
import { SITE_TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background with slight zoom effect on load */}
      <div className="absolute inset-0 opacity-60">
        <img
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2524&auto=format&fit=crop"
          alt="Atmosphere Salon de Toilettage"
          className="w-full h-full object-cover animate-fade-in scale-105"
        />
      </div>
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-black/30" />

      {/* Content Container - Flex AutoLayout */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 max-w-[1400px] mx-auto w-full">
        
        {/* Top Tagline */}
        <div className="overflow-hidden mb-4 md:mb-8">
          <p className="text-bronze-200 font-sans text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Salon Privé &mdash; Est. 2008 &mdash; France
          </p>
        </div>

        {/* Main Title - Responsive Typography */}
        <h1 className="flex flex-col items-center justify-center font-serif leading-[0.9] mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-sand-50 tracking-wide">
            LISE
          </span>
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-sand-100 to-bronze-200 tracking-wide mt-2 md:mt-0">
            GOURINCHAS
          </span>
        </h1>
        
        {/* Divider */}
        <div className="w-16 md:w-24 h-[1px] bg-bronze-400 mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: '0.8s' }}></div>

        {/* Tagline */}
        <p className="text-sand-200 text-base md:text-xl font-light tracking-wide max-w-xs md:max-w-xl mx-auto mb-10 md:mb-14 leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s' }}>
          {SITE_TAGLINE}
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#services" 
            className="group relative inline-block px-8 py-4 overflow-hidden border border-sand-50 text-sand-50 text-xs font-bold uppercase tracking-[0.2em] hover:text-charcoal transition-colors duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-sand-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10">Découvrir les Soins</span>
          </a>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-pulse">
        <span className="text-[10px] uppercase tracking-[0.3em] text-sand-200 writing-vertical hidden md:block">Scroll</span>
        <div className="h-8 md:h-12 w-[1px] bg-gradient-to-b from-transparent to-bronze-400"></div>
      </div>
    </div>
  );
};

export default Hero;
