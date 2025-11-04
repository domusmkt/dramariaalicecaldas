import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroNewSection = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Content Column (Left on Desktop, Top on Mobile) */}
          <div className="order-1 lg:order-1"> 
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 font-serif">
              Pediatria e Nutrologia Infantil
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              Cuidado completo e personalizado para o desenvolvimento saudável do
              seu filho, desde o nascimento até a adolescência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg shadow-ma-salmon/30"
              >
                <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
                  Agende sua consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                // Mantendo o estilo ajustado para contraste
                className="border-2 border-ma-green text-ma-green bg-white hover:bg-ma-green/10 font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                <Link to="/consultas">
                  Saiba mais sobre as consultas
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Column (Right on Desktop, Bottom on Mobile) */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/dramariaalicecaldas.png"
                alt="Dra. Maria Alice Caldas atendendo uma criança"
                className="w-full h-auto object-cover rounded-3xl"
              />
              {/* Removendo overlays e gradientes desnecessários para o layout lado a lado */}
              <div className="absolute inset-0 bg-ma-salmon/10 rounded-3xl mix-blend-multiply opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNewSection;