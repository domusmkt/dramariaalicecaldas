import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

const CtaFinalSection: React.FC = () => {
  return (
    <section id="cta-final" className="py-16 sm:py-24 bg-white dark:bg-gray-900 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10">
          A saúde do seu filho começa com um cuidado atento e amoroso.
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg" 
            className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-bold text-lg px-10 py-7 transition-colors shadow-lg rounded-full"
            asChild
          >
            <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
              Agendar consulta <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-ma-salmon text-ma-salmon hover:bg-ma-salmon/10 font-bold text-lg px-10 py-7 transition-colors rounded-full"
            asChild
          >
            <a href="https://dramariaalicecaldaspediatra.my.canva.site/" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" /> Baixar e-book gratuito
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaFinalSection;