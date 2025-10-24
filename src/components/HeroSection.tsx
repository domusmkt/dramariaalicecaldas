import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-20 bg-ma-green/10 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Conteúdo de Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              Cuidado Pediátrico <span className="text-ma-salmon">Humanizado</span> e <span className="text-ma-salmon">Especializado</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Dra. Maria Alice Caldas — Pediatria, Puericultura & Nutrologia Pediátrica.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
              <Button 
                size="lg"
                className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:scale-[1.02] rounded-full"
                asChild
              >
                <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
                  Agende sua Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <a href="#services">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-ma-salmon text-ma-salmon hover:bg-ma-salmon/10 dark:border-ma-salmon dark:text-ma-salmon dark:hover:bg-ma-salmon/20 font-semibold transition-colors rounded-full"
                >
                  Saiba Mais
                </Button>
              </a>
            </div>

            {/* CRM/RQE */}
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 md:text-left text-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="inline-block px-3 py-1 bg-ma-green/30 rounded-full font-medium">
                CRM: 1153188 | RQE: 46414
              </span>
            </div>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="/dra-maria-alice-hero.png"
                alt="Dra. Maria Alice Caldas"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl"
              />
              {/* Efeito de fundo sutil */}
              <div className="absolute inset-0 bg-ma-salmon/10 rounded-3xl mix-blend-multiply opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;