import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 flex flex-col items-center justify-center bg-black relative">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-raleway font-thin text-4xl md:text-5xl text-white uppercase tracking-[0.2em] mb-8"
        >
          Vamos Conversar
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans font-light text-gray-400 mb-12 max-w-xl mx-auto"
        >
          Pronto para elevar o nível do seu projeto? Entre em contato diretamente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="https://wa.me/557788166451"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-10 py-5 bg-glass border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
          >
            <MessageCircle className="text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <span className="font-raleway font-light text-lg text-white tracking-[0.2em] uppercase">
              Falar via WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;