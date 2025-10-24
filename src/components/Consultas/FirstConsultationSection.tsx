import React from 'react';
import { CheckCircle, Utensils, Calendar } from 'lucide-react';

const FirstConsultationSection: React.FC = () => {
  const expectations = [
    { icon: <CheckCircle />, text: "Avaliação de crescimento e marcos do desenvolvimento" },
    { icon: <Utensils />, text: "Análise alimentar e orientação prática" },
    { icon: <Calendar />, text: "Planejamento do acompanhamento futuro" },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 font-serif text-center">
          O que esperar da primeira consulta
        </h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed text-center">
          Durante o primeiro atendimento, a Dra. Maria Alice realiza uma escuta atenta sobre o histórico do bebê, hábitos, rotina e alimentação.
          Em seguida, faz uma avaliação completa de peso, altura, crescimento e desenvolvimento, orientando a família sobre as próximas etapas.
        </p>

        <div className="space-y-4">
          {expectations.map((item, index) => (
            <div key={index} className="flex items-start p-4 bg-ma-light-gray rounded-lg dark:bg-gray-800 shadow-sm">
              {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-ma-green mt-1 flex-shrink-0" })}
              <p className="ml-4 text-lg text-gray-800 dark:text-gray-200">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstConsultationSection;