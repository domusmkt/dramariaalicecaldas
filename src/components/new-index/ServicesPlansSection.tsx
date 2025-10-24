import React from 'react';
import { Button } from '@/components/ui/button';
import { Baby, Leaf, Zap, Heart, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Plan {
  title: string;
  age: string;
  frequency: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

const plans: Plan[] = [
  {
    title: "Plano Semente Saudável",
    age: "0 a 1 ano",
    frequency: "1 consulta por mês",
    description: "Fase de formação de base imunológica, emocional e nutricional. Acompanhamento mensal com foco em introdução alimentar, sono, refluxo, cólicas e vínculo mãe-bebê.",
    icon: <Baby />,
    colorClass: "border-ma-salmon bg-ma-salmon/10",
  },
  {
    title: "Plano Raízes Fortes",
    age: "1 a 2 anos",
    frequency: "1 consulta a cada 2 meses",
    description: "Período de grandes marcos como andar, falar e interagir. Acompanhamento da seletividade alimentar, birras, rotina e comportamento.",
    icon: <Leaf />,
    colorClass: "border-ma-green bg-ma-green/10",
  },
  {
    title: "Plano Florescer Feliz",
    age: "2 a 4 anos",
    frequency: "1 consulta a cada 3 meses",
    description: "Fase pré-escolar, onde surgem questões emocionais, comportamentais e sociais. Avaliação do desenvolvimento, da autonomia e da alimentação.",
    icon: <Zap />,
    colorClass: "border-ma-beige bg-ma-beige/30",
  },
  {
    title: "Plano Árvore da Vida",
    age: "4 a 5 anos",
    frequency: "1 consulta a cada 4 meses",
    description: "Transição da primeira infância. Apoio à autoestima, habilidades sociais, alimentação, regras e rotina escolar.",
    icon: <Heart />,
    colorClass: "border-ma-salmon bg-ma-salmon/10",
  },
  {
    title: "Plano Jardim de Saúde",
    age: "5 a 7 anos",
    frequency: "1 consulta a cada 6 meses",
    description: "Infância mais independente, mas que ainda requer atenção emocional e preventiva. Check-ups físicos e nutricionais, apoio à rotina escolar e hábitos saudáveis.",
    icon: <Leaf />,
    colorClass: "border-ma-green bg-ma-green/10",
  },
];

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => (
  <div className={cn("p-6 rounded-xl shadow-lg border-l-4 transition-transform duration-300 hover:scale-[1.02] dark:bg-gray-900", plan.colorClass)}>
    <div className="flex items-center mb-4">
      {React.cloneElement(plan.icon as React.ReactElement, { className: "w-6 h-6 text-ma-salmon mr-3" })}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-serif">{plan.title}</h3>
    </div>
    <p className="text-sm font-medium text-ma-salmon mb-2">{plan.age} | {plan.frequency}</p>
    <p className="text-gray-600 dark:text-gray-400 text-base">{plan.description}</p>
  </div>
);

const ServicesPlansSection: React.FC = () => {
  return (
    <section id="services" className="bg-ma-beige/50 py-16 sm:py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
          Acompanhamento Pediátrico por Faixa Etária
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          A infância é feita de fases — e cada uma delas exige um tipo de atenção. Os meus planos de acompanhamento foram criados justamente para acompanhar essas transformações com foco, planejamento e cuidado contínuo.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>

        <Button 
          size="lg" 
          className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-bold px-8 py-6 transition-colors rounded-full shadow-lg"
          asChild
        >
          <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
            Escolha o plano ideal para seu filho
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ServicesPlansSection;