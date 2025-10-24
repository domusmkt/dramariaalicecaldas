import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-ma-light-gray dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem Placeholder */}
          <div className="flex justify-center md:justify-start order-1">
            <div className="w-full max-w-xs aspect-square bg-ma-beige/70 rounded-lg shadow-lg flex items-center justify-center border-4 border-ma-beige/90">
              <span className="text-gray-700 text-lg font-medium p-4 text-center">
                [Placeholder: Retrato profissional da Dra. Maria Alice]
              </span>
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="order-2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ciência e sensibilidade para cuidar de cada fase da infância.
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              A Dra. Maria Alice Caldas é médica pediatra com especialização em nutrologia infantil. Sua trajetória combina conhecimento técnico com a experiência real da maternidade, que despertou nela um olhar ainda mais humano e acolhedor para cuidar de mães e crianças.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Unindo ciência e sensibilidade, construiu um consultório onde cada família é recebida com atenção, empatia e orientação clara. Para ela, nutrir vai além de alimentar: é fortalecer vínculos, prevenir com sabedoria e acompanhar com escuta. Hoje, é referência para famílias que buscam um cuidado pediátrico moderno, contínuo e afetuoso, com foco na prevenção, na nutrição e no vínculo entre mãe, médico e criança.
            </p>
            
            <Button 
              size="lg" 
              className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-bold px-8 py-6 transition-colors rounded-full"
              asChild
            >
              <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
                Fale comigo pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;