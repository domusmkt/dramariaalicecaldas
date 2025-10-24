import React from 'react';
import { Smile, Zap, Utensils, Clock } from 'lucide-react';

interface TipCardProps {
  icon: React.ReactNode;
  text: string;
}

const TipCard: React.FC<TipCardProps> = ({ icon, text }) => (
  <div className="p-5 bg-ma-green/10 rounded-xl flex items-center space-x-4 dark:bg-gray-800 shadow-md">
    {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-ma-green flex-shrink-0" })}
    <p className="text-gray-800 dark:text-gray-200 font-medium">{text}</p>
  </div>
);

const TipsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10 font-serif text-center">
          Pequenas atitudes que fazem diferença no dia a dia
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <TipCard icon={<Smile />} text="Respeite o ritmo do seu bebê." />
          <TipCard icon={<Zap />} text="Evite comparações entre crianças." />
          <TipCard icon={<Utensils />} text="Alimente com paciência e afeto." />
          <TipCard icon={<Clock />} text="Pequenas rotinas constroem grandes vínculos." />
        </div>
      </div>
    </section>
  );
};

export default TipsSection;