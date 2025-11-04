import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const HeroNewSection = () => {
  return (
    // A seção ocupa a altura total da tela no mobile, mas volta ao padrão no lg:
    <section id="hero" className="relative overflow-hidden min-h-[80vh] lg:min-h-0 pt-16 lg:pt-0">
      
      {/* Imagem de Fundo (Mobile Fullscreen) */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/dramariaalicecaldas.png"
          alt="Dra. Maria Alice Caldas atendendo uma criança"
          className="w-full h-full object-cover"
        />
        {/* Overlay escuro para melhorar a leitura do texto sobreposto */}
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Content Column (Mobile: Absolute Bottom, Desktop: Left) */}
          <div className="order-2 lg:order-1 pt-8 md:pt-0 lg:relative lg:py-32 z-10 
                        
                        // Mobile: Posicionamento absoluto no fundo
                        absolute bottom-0 left-0 right-0 p-4 pb-12 sm:p-8 sm:pb-16 
                        bg-gradient-to-t from-white/90 dark:from-gray-950/90 to-transparent lg:bg-none"> 
            
            <h1 className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 font-serif",
              "text-gray-900 lg:text-gray-900 dark:text-white" // Cor padrão no desktop
            )}>
              Pediatria e Nutrologia Infantil
            </h1>
            <p className={cn(
              "text-xl md:text-2xl mb-6 max-w-xl",
              "text-gray-700 lg:text-gray-700 dark:text-gray-300" // Cor padrão no desktop
            )}>
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
                className="border-2 border-ma-green text-ma-green bg-white hover:bg-ma-green/10 font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                <Link to="/consultas">
                  Saiba mais sobre as consultas
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Column (Hidden on Mobile, Right on Desktop) */}
          <div className="hidden lg:order-2 lg:flex justify-center lg:justify-end lg:mt-0">
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/dramariaalicecaldas.png"
                alt="Dra. Maria Alice Caldas atendendo uma criança"
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-ma-salmon/10 rounded-3xl mix-blend-multiply opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNewSection;