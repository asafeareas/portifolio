import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "CEO, TechFlow",
    content: "A automação implementada pelo Asafe revolucionou nossa operação. Ganhamos 40 horas semanais de produtividade.",
  },
  {
    id: 2,
    name: "Juliana Costa",
    role: "Diretora de Marketing",
    content: "Estética impecável e funcionalidade robusta. O site superou todas as expectativas de performance e design.",
  },
  {
    id: 3,
    name: "Roberto Almeida",
    role: "Founder, StartUp One",
    content: "Profissionalismo raro. Entendeu o problema rapidamente e entregou uma solução escalável e elegante.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-surface relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-raleway font-thin text-3xl text-center text-white uppercase tracking-[0.3em] mb-20"
        >
          O que dizem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col justify-between p-10 bg-glass border border-white/5 rounded-xl hover:bg-glass-hover transition-colors duration-300"
            >
              <div>
                <span className="text-4xl text-white/10 font-serif leading-none">"</span>
                <p className="font-sans font-light text-gray-300 italic mb-8 relative z-10 text-sm md:text-base leading-loose">
                  {item.content}
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div>
                  <h4 className="font-raleway font-medium text-white tracking-wider text-sm">
                    {item.name}
                  </h4>
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;