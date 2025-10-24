import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const EbookCtaSection: React.FC = () => {
  return (
    <section id="ebook" className="py-16 sm:py-24 bg-ma-green/10 dark:bg-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-serif">
          E-book: Introdução Alimentar sem Medo
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          A Dra. Maria Alice também é autora de um e-book completo sobre introdução alimentar, com orientações práticas e embasadas para mães que querem iniciar esse processo com segurança e tranquilidade.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg" 
            className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-bold text-lg px-10 py-7 transition-colors shadow-lg rounded-full"
            asChild
          >
            <a href="https://wa.me/5522997972358?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20o%20e-book%20de%20Introdu%C3%A7%C3%A3o%20Alimentar." target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" /> Receber o e-book no WhatsApp
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-ma-salmon text-ma-salmon hover:bg-ma-salmon/10 font-bold text-lg px-10 py-7 transition-colors rounded-full"
            asChild
          >
            {/* Link para a página de detalhes de consultas, que já tem informações sobre IA */}
            <Link to="/consultas">
              <BookOpen className="mr-2 h-5 w-5" /> Saiba mais sobre Introdução Alimentar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EbookCtaSection;