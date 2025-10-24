import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  babyAge: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ana Paula",
    babyAge: "Bebê de 8 meses",
    text: "Meu bebê passou a comer melhor depois das orientações da Dra. Maria Alice! O acompanhamento é muito atencioso e baseado em evidências.",
  },
  {
    name: "Juliana M.",
    babyAge: "Criança de 3 anos",
    text: "Finalmente encontrei uma pediatra que realmente escuta. O foco na nutrição fez toda a diferença na saúde do meu filho.",
  },
  {
    name: "Carla R.",
    babyAge: "Recém-nascido",
    text: "O suporte na puericultura foi essencial nos primeiros meses. Me senti segura e bem orientada em todas as dúvidas sobre rotina e sono.",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-ma-salmon flex flex-col h-full">
    <Quote className="w-6 h-6 text-ma-salmon mb-4" />
    <p className="text-gray-700 italic mb-4 flex-grow">"{testimonial.text}"</p>
    <div className="flex items-center mt-auto">
      {/* Placeholder da Foto */}
      <div className="w-10 h-10 bg-ma-green/50 rounded-full mr-3 flex items-center justify-center text-xs text-gray-700">
        Foto
      </div>
      <div>
        <p className="font-semibold text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.babyAge}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-ma-beige/50 py-16 sm:py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Mães que confiam e recomendam
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;