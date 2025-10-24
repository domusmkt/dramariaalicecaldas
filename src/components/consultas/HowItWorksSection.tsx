import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-serif text-center">
          Como funciona o acompanhamento pediátrico e nutricional
        </h2>
        
        <div className="bg-ma-light-gray p-6 sm:p-8 rounded-xl shadow-inner dark:bg-gray-800">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            As consultas são conduzidas de forma leve e acolhedora, respeitando o tempo da criança e ouvindo as dúvidas da família.
            Durante o atendimento, são avaliados o desenvolvimento físico, comportamental e alimentar — com orientações práticas para o dia a dia.
          </p>
          <h3 className="text-xl font-semibold text-ma-salmon dark:text-ma-salmon font-serif">
            Mais do que tratar, o objetivo é prevenir e orientar.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;