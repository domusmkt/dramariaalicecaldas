import React from 'react';
import { Heart, Instagram } from 'lucide-react';
import { MadeWithDyad } from './made-with-dyad';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ma-green/20 border-t py-8 mt-12 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xl font-serif font-bold text-ma-salmon mb-4">
          Dra. Maria Alice Caldas
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          Pediatria, Puericultura & Nutrologia Pediátrica. Cuidando do futuro com carinho e ciência.
        </p>
        
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a 
            href="https://www.instagram.com/dramariaalicecaldas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-ma-salmon transition-colors dark:text-gray-400 dark:hover:text-ma-salmon"
            aria-label="Instagram da Dra. Maria Alice Caldas"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="flex justify-center items-center text-gray-500 dark:text-gray-500 text-xs">
          © {new Date().getFullYear()} Dra. Maria Alice Caldas — Todos os direitos reservados. Desenvolvido com <Heart className="w-3 h-3 mx-1 text-red-500 fill-red-500" />
        </div>
      </div>
      <MadeWithDyad />
    </footer>
  );
};

export default Footer;