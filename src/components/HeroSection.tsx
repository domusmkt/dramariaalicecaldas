import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center bg-ma-beige/30 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de Texto */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 font-serif">
              Cuidado Pediátrico <span className="text-ma-salmon">Sofisticado</span> e Integral.
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Dra. Maria Alice Caldas: Pediatria, Puericultura e Nutrologia Pediátrica. Acompanhamento completo para o desenvolvimento saudável do seu filho.
            </p>
            
            <div className="flex justify-center md:justify-start space-x-4">
              <Button 
                size="lg" 
                className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-bold text-lg px-8 py-6 transition-colors shadow-lg"
              >
                Agende sua Consulta <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-ma-salmon text-ma-salmon hover:bg-ma-salmon/10 font-bold text-lg px-8 py-6 transition-colors"
              >
                Conheça a Dra.
              </Button>
            </div>
          </div>

          {/* Placeholder da Imagem */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-md h-80 sm:h-96 bg-ma-green/50 rounded-lg shadow-xl flex items-center justify-center border-4 border-ma-green/70">
              <span className="text-gray-700 text-lg font-medium">
                [Foto da Dra. Maria Alice]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;