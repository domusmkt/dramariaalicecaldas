import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="bg-ma-beige/70 py-16 sm:py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 font-serif">
          Consultas que acompanham o crescimento com carinho e atenção.
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
          Cada encontro é um momento de escuta, orientação e cuidado — sempre com foco na saúde e bem-estar do seu filho.
        </p>
        
        {/* Placeholder da Imagem */}
        <div className="w-full h-64 bg-ma-salmon/30 rounded-xl mx-auto flex items-center justify-center text-gray-700 italic text-sm shadow-lg">
          [Imagem sugerida: mãe conversando com pediatra no consultório]
        </div>
      </div>
    </section>
  );
};

export default IntroSection;