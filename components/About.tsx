import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row gap-12 md:gap-20 items-center"
        >
          {/* Avatar Section */}
          <div className="shrink-0 relative group">
             {/* Decorative outer glow on hover */}
             <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl transform scale-90 group-hover:scale-110 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
             
             <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border border-white/10 bg-surface relative overflow-hidden shadow-2xl z-10">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none" />
                <img 
                  src="./images/profile.png" 
                  alt="Asafe Arêas" 
                  className="w-full h-full object-cover grayscale contrast-[1.1] brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
             </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className="font-raleway font-thin text-3xl md:text-5xl text-white uppercase tracking-[0.2em] mb-8">
              Sobre Mim
            </h2>
            <div className="space-y-6">
              <p className="font-sans font-light text-gray-300 leading-relaxed text-lg md:text-xl">
                Minha abordagem combina <span className="text-white font-normal">precisão técnica</span> com uma <span className="text-white font-normal">estética refinada</span>. 
                Como desenvolvedor, não apenas escrevo código; construo ecossistemas digitais onde a automação inteligente encontra o design minimalista.
              </p>
              <p className="font-sans font-light text-gray-500 leading-relaxed">
                Especializado em transformar complexidade em interfaces limpas e fluxos de trabalho autônomos que impulsionam negócios. Foco total em performance, usabilidade e uma experiência visual marcante.
              </p>
            </div>
            
            <div className="mt-10">
              <a 
                href="https://wa.me/557788166451"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-mono text-white/60 hover:text-white border-b border-white/20 hover:border-white transition-all pb-1 tracking-widest uppercase"
              >
                Conheça minha trajetória
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;