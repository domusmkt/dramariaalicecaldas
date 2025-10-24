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
        
        {/* Imagem da Consulta */}
        <div className="w-full relative overflow-hidden rounded-xl mx-auto shadow-2xl border-4 border-ma-salmon/50">
          <img
            src="/consulta1.png"
            alt="Dra. Maria Alice Caldas em consulta com uma criança"
            className="w-full h-auto object-cover"
          />
          {/* Efeito de fundo sutil para harmonizar com o tema */}
          <div className="absolute inset-0 bg-ma-beige/10 mix-blend-multiply opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;