import React from 'react';
import { Button } from '@/components/ui/button';
import { Baby, Apple, Brain, ArrowRight } from 'lucide-react';

interface ServiceTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceTypeCard: React.FC<ServiceTypeCardProps> = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-ma-salmon dark:bg-gray-900">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-ma-salmon/20 rounded-full mr-4">
        {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-ma-salmon" })}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-serif">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const ServiceTypesSection: React.FC = () => {
  return (
    <section className="bg-ma-green/20 py-16 sm:py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10 font-serif">
          Escolha o tipo de consulta ideal para o seu momento
        </h2>
        
        <div className="space-y-6 mb-10">
          <ServiceTypeCard 
            icon={<Baby />}
            title="Consulta de Puericultura"
            description="Acompanhamento contínuo do crescimento, vacinação, sono e rotina. Recomendada mensalmente nos primeiros meses e, depois, conforme orientação médica."
          />
          <ServiceTypeCard 
            icon={<Apple />}
            title="Consulta de Nutrologia Pediátrica"
            description="Avaliação nutricional, suplementação (quando necessária) e estratégias para hábitos alimentares saudáveis."
          />
          <ServiceTypeCard 
            icon={<Brain />}
            title="Consulta de Introdução Alimentar"
            description="Orientação prática e segura para iniciar a alimentação sólida com autonomia e tranquilidade."
          />
        </div>

        <Button 
          size="lg" 
          className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-bold text-lg px-10 py-7 transition-colors rounded-full shadow-lg"
          asChild
        >
          <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
            Agendar consulta <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ServiceTypesSection;