import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center bg-ma-beige/30 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de Texto */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              Primeiros cuidados que constroem uma vida <span className="text-ma-salmon">saudável</span>.
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Acompanhamento pediátrico e nutrologia infantil com olhar humano e atualizado.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-bold text-lg px-8 py-6 transition-colors shadow-lg rounded-full"
                asChild
              >
                <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
                  Agendar consulta <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-ma-salmon text-ma-salmon hover:bg-ma-salmon/10 font-bold text-lg px-8 py-6 transition-colors rounded-full"
                asChild
              >
                <a href="#about">
                  Conheça a Dra.
                </a>
              </Button>
            </div>

            {/* Selo CRM */}
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 md:text-left text-center">
              <span className="inline-block px-3 py-1 bg-ma-green/30 rounded-full font-medium">
                CRM — Pediatria & Nutrologia Pediátrica
              </span>
            </div>
          </div>

          {/* Placeholder da Imagem */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-md aspect-square bg-ma-green/50 rounded-full shadow-xl flex items-center justify-center border-4 border-ma-green/70 animate-fade-in">
              <span className="text-gray-700 text-lg font-medium p-4 text-center">
                [Placeholder: Imagem leve e iluminada (mãe com bebê no colo)]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;