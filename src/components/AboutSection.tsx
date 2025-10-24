import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Imagem */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <div className="w-full max-w-xs aspect-square relative overflow-hidden rounded-3xl shadow-2xl border-4 border-ma-beige/90">
              <img
                src="/mariaaliceabout.png"
                alt="Retrato profissional da Dra. Maria Alice Caldas"
                className="w-full h-full object-cover"
              />
              {/* Efeito de fundo sutil */}
              <div className="absolute inset-0 bg-ma-beige/10 mix-blend-multiply opacity-50"></div>
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="order-2 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Uma <span className="text-ma-salmon">Pediatra</span> que Acredita no Cuidado Integral
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Formada pela Universidade Federal do Rio de Janeiro (UFRJ), Dra. Maria Alice Caldas é especialista em Pediatria, Puericultura e Nutrologia Pediátrica. Sua missão é oferecer um acompanhamento que vai além da doença, focando no desenvolvimento pleno e saudável de cada criança.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Com uma abordagem humanizada, ela valoriza a escuta ativa e a parceria com os pais, garantindo que todas as decisões sejam tomadas em conjunto, respeitando a individualidade de cada família.
            </p>
            
            <Button 
              size="lg"
              className="bg-ma-green hover:bg-ma-green/90 text-white font-semibold transition-colors shadow-lg"
              asChild
            >
              <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
                Fale com a Dra. Maria Alice
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;