import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-raleway font-thin text-5xl md:text-7xl lg:text-9xl text-white uppercase tracking-[0.2em] md:tracking-[0.25em] mb-6 leading-tight"
        >
          Asafe<br className="md:hidden" /> Arêas
        </motion.h1>

        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="font-mono text-xs md:text-sm text-gray-400 tracking-wider uppercase leading-relaxed opacity-80">
            Especialista em Desenvolvimento Web e<br />Automações com Inteligência Artificial
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a 
            href="https://wa.me/557788166451"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-glass backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
          >
            <span className="font-raleway font-light text-sm tracking-[0.2em] text-white uppercase group-hover:tracking-[0.3em] transition-all">
              Vamos trabalhar juntos
            </span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;