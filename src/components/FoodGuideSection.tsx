import React from 'react';
import { Button } from '@/components/ui/button';
import { Drumstick, Wheat, Carrot, Bean } from 'lucide-react';

interface FoodCardProps {
  icon: React.ReactNode;
  title: string;
  items: string;
  bgColor: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ icon, title, items, bgColor }) => (
  <div className={`p-6 ${bgColor} rounded-lg shadow-md text-center`}>
    <div className="flex justify-center mb-4">
      {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 text-gray-800" })}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">{title}</h3>
    <p className="text-gray-700 text-sm">{items}</p>
  </div>
);

const FoodGuideSection: React.FC = () => {
  return (
    <section id="ebook" className="bg-ma-beige/50 py-16 sm:py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Alimentação saudável desde o primeiro prato
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Variedade é a chave! Cada cor no prato representa um tipo diferente de nutriente e sabor para o bebê descobrir.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FoodCard 
            icon={<Drumstick />}
            title="Carne & Ovos"
            items="frango, peixe, carne bovina, ovos."
            bgColor="bg-ma-salmon/30"
          />
          <FoodCard 
            icon={<Wheat />}
            title="Cereais & Tubérculos"
            items="arroz, batata, mandioca, aveia."
            bgColor="bg-ma-green/30"
          />
          <FoodCard 
            icon={<Carrot />}
            title="Legumes & Verduras"
            items="abóbora, cenoura, brócolis, couve."
            bgColor="bg-ma-beige/70"
          />
          <FoodCard 
            icon={<Bean />}
            title="Leguminosas"
            items="feijão, lentilha, grão-de-bico."
            bgColor="bg-ma-salmon/30"
          />
        </div>

        <Button 
          size="lg" 
          className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-bold px-8 py-6 transition-colors rounded-full"
          asChild
        >
          <a href="https://dramariaalicecaldaspediatra.my.canva.site/" target="_blank" rel="noopener noreferrer">
            Baixar e-book gratuito
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FoodGuideSection;