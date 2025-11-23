import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="font-raleway font-thin text-white uppercase tracking-[0.2em] text-sm">
            ASAFE ARÊAS
          </span>
        </div>
        <div className="text-center md:text-right">
          <span className="font-mono text-xs text-gray-600 tracking-widest">
            © {currentYear} ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;