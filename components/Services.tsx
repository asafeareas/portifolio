import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot, Cpu } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Interfaces modernas, responsivas e de alta performance. Aplicações construídas para o futuro.",
    icon: Globe,
  },
  {
    id: 2,
    title: "Automações com IA",
    description: "Agentes inteligentes e fluxos automatizados para otimizar processos e reduzir custos.",
    icon: Bot,
  },
  {
    id: 3,
    title: "Integração de Sistemas",
    description: "Conexão fluida entre APIs e plataformas, criando um ecossistema digital unificado.",
    icon: Cpu,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-surface relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-raleway font-thin text-3xl text-center text-white uppercase tracking-[0.3em] mb-20"
        >
          Serviços
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group p-8 rounded-2xl bg-glass border border-white/5 hover:border-white/10 hover:bg-glass-hover transition-all duration-500 backdrop-blur-md"
            >
              <div className="mb-6 text-gray-400 group-hover:text-white transition-colors duration-300">
                <service.icon strokeWidth={1} size={40} />
              </div>
              <h3 className="font-raleway font-light text-xl text-white tracking-wider mb-4">
                {service.title}
              </h3>
              <p className="font-sans font-light text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;