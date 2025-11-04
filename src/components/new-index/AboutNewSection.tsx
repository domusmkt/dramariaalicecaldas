import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutNewSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reduzindo o gap de 12 para 8 no desktop */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Imagem (Aumentando o tamanho máximo para max-w-sm) */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <div className="w-full max-w-sm aspect-square relative overflow-hidden rounded-3xl shadow-2xl border-4 border-ma-beige/90">
              <img
                src="/mariaaliceabout.png"
                alt="Retrato profissional da Dra. Maria Alice Caldas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ma-beige/10 mix-blend-multiply opacity-50"></div>
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="order-2 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 font-serif">
              Uma <span className="text-ma-salmon">Pediatra</span> que Acredita no Vínculo e na Prevenção
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Sou Maria Alice Caldas, médica pediatra com especialização em nutrologia infantil. Minha atuação é baseada em evidência científica, mas também na escuta sensível e no olhar atento ao que cada criança e cada família realmente precisam.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Acredito na prevenção, no vínculo e na presença. Por isso, desenvolvi um modelo de atendimento que une conhecimento técnico com orientação acessível, respeitando o tempo da infância e a realidade das famílias. Atendo de forma personalizada em ambiente acolhedor, com foco na formação de uma relação próxima com mães que desejam participar ativamente da saúde dos seus filhos.
            </p>
            
            <Button 
              size="lg"
              className="bg-ma-green hover:bg-ma-green/90 text-white font-semibold transition-colors shadow-lg rounded-full"
              asChild
            >
              <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNewSection;