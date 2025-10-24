import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, MessageSquare } from 'lucide-react';

const ContactNewSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10 font-serif">
          Fale com a Equipe
        </h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex items-center justify-center text-lg text-gray-700 dark:text-gray-300">
            <MapPin className="w-5 h-5 text-ma-green mr-2 flex-shrink-0" />
            <p className="font-semibold">Locais de Atendimento:</p>
          </div>
          <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
            Campos dos Goytacazes – RJ
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 italic">
            📆 Atendimento particular com hora marcada.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            💬 Fale com a equipe para dúvidas, valores ou orientação sobre o plano ideal.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg" 
            className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-bold text-lg px-10 py-7 transition-colors shadow-lg rounded-full"
            asChild
          >
            <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
              Agendar Consulta <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-ma-green text-ma-green hover:bg-ma-green/10 font-bold text-lg px-10 py-7 transition-colors rounded-full"
            asChild
          >
            <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" /> Fale com a Equipe no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactNewSection;