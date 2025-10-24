import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Quando começar a introdução alimentar?",
      answer: "A introdução alimentar deve ser iniciada por volta dos 6 meses de idade, quando o bebê demonstra sinais de prontidão, como sustentar a cabeça e o tronco e demonstrar interesse pelos alimentos. É fundamental que isso seja feito com acompanhamento pediátrico.",
    },
    {
      question: "Com que frequência devo levar meu filho ao pediatra?",
      answer: "A frequência varia conforme a idade. Nos primeiros meses, as consultas são mais regulares (mensais). À medida que a criança cresce, a frequência diminui, mas o acompanhamento anual é essencial para puericultura e prevenção.",
    },
    {
      question: "Como saber se meu filho está se alimentando bem?",
      answer: "Além do ganho de peso e altura adequados, uma alimentação saudável se reflete na energia, no sono e na disposição da criança. A nutrologia pediátrica ajuda a identificar e corrigir possíveis deficiências nutricionais.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Perguntas que recebo com frequência
        </h2>
        
        <Accordion type="single" collapsible className="w-full text-left">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-ma-green/50">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline text-gray-800 dark:text-gray-200 hover:text-ma-salmon transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 text-base pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;