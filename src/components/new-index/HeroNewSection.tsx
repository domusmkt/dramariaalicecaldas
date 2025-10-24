import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const HeroNewSection: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-20 bg-ma-green/10 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Imagem (Reutilizando a imagem existente) */}
          <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-md">
              <img
                src="/dra-maria-alice-hero.png"
                alt="Dra. Maria Alice Caldas"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-ma-salmon/10 rounded-3xl mix-blend-multiply opacity-50"></div>
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 font-serif">
              Eu cuido do seu filho de forma contínua, com olhar atento ao <span className="text-ma-salmon">desenvolvimento</span>, à <span className="text-ma-salmon">nutrição</span> e ao bem-estar emocional da infância.
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Como médica pediatra e especialista em nutrologia infantil, acredito em um cuidado que vai além da consulta pontual. O que ofereço é um acompanhamento contínuo e individualizado — com foco no desenvolvimento físico, emocional e nutricional da criança, em cada fase da infância. Cada atendimento é pensado especialmente para mães que buscam clareza, orientação atualizada, escuta ativa e a construção de um vínculo de confiança.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
              <Button 
                size="lg"
                className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-semibold transition-colors shadow-lg rounded-full"
                asChild
              >
                <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-ma-green text-ma-green hover:bg-ma-green/10 dark:border-ma-green dark:text-ma-green dark:hover:bg-ma-green/20 font-semibold transition-colors rounded-full"
                asChild
              >
                <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
                  Fale com a Equipe
                  <MessageSquare className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CRM/RQE */}
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 md:text-left text-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="inline-block px-3 py-1 bg-ma-green/30 rounded-full font-medium">
                CRM: 1153188 | RQE: 46414
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNewSection;