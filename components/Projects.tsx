import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Dashboard",
    category: "Web App / AI",
    // Imagem de dashboard com gráficos de dados
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Aura Commerce",
    category: "E-commerce",
    // Imagem relacionada a pagamentos/loja online
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Sentinela Bot",
    category: "Automation",
    // Imagem de código/terminal representando backend e automação
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Lumina Portfolio",
    category: "Design System",
    // Imagem de ambiente clean de web design (Laptop minimalista)
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-raleway font-thin text-3xl text-white uppercase tracking-[0.3em]"
          >
            Projetos Selecionados
          </motion.h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] border border-white/5">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8">
                  <span className="font-mono text-xs text-blue-300 tracking-widest mb-2 uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-raleway font-light text-2xl text-white tracking-widest">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;