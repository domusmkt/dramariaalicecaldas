import React from 'react';
import { Button } from '@/components/ui/button';
import { Baby, Apple, Utensils } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="p-6 bg-white shadow-xl rounded-lg border-t-4 border-ma-salmon transition-transform duration-300 hover:scale-[1.02] text-center">
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-ma-salmon/20 rounded-full inline-flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 text-ma-salmon" })}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-serif">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-ma-green/10 py-16 sm:py-24 dark:bg-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Acompanhamento completo para o desenvolvimento do seu filho
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <ServiceCard 
            icon={<Baby />}
            title="Puericultura"
            description="Acompanhamento regular de crescimento, sono, vacinação e rotina."
          />
          <ServiceCard 
            icon={<Apple />}
            title="Nutrologia Pediátrica"
            description="Avaliação nutricional e orientações práticas para uma alimentação equilibrada."
          />
          <ServiceCard 
            icon={<Utensils />}
            title="Introdução Alimentar"
            description="Passo a passo para o bebê descobrir o prazer de comer de forma saudável."
          />
        </div>

        <Button 
          size="lg" 
          variant="outline"
          className="border-2 border-ma-salmon text-ma-salmon hover:bg-ma-salmon/10 font-bold px-8 py-6 transition-colors rounded-full"
          asChild
        >
          <a href="#contact">
            Saiba mais sobre as consultas
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;