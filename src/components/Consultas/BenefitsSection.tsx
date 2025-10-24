import React from 'react';
import { Leaf, MessageSquare, UtensilsCrossed, Heart } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center dark:bg-gray-900 transition-transform hover:scale-[1.02]">
    <div className="p-4 bg-ma-salmon/20 rounded-full mb-4">
      {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 text-ma-salmon" })}
    </div>
    <p className="text-lg font-semibold text-gray-900 dark:text-white">{title}</p>
  </div>
);

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-ma-beige/70 py-16 sm:py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 font-serif">
          Por que manter o acompanhamento regular é importante
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard icon={<Leaf />} title="Prevenção de doenças e deficiências nutricionais" />
          <BenefitCard icon={<MessageSquare />} title="Acompanhamento do comportamento e desenvolvimento" />
          <BenefitCard icon={<UtensilsCrossed />} title="Melhoria na alimentação e nos hábitos da família" />
          <BenefitCard icon={<Heart />} title="Apoio constante durante o crescimento" />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;