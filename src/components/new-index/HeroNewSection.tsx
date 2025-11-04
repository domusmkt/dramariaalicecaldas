import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const HeroNewSection = () => {
  return (
    // A seção ocupa a altura total da tela no mobile, mas volta ao padrão no lg:
    <section id="hero" className="relative overflow-hidden min-h-screen lg:min-h-0 pt-16 lg:pt-0">
      
      {/* Imagem de Fundo (Mobile Fullscreen) */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/dramariaalicecaldas.png"
          alt="Dra. Maria Alice Caldas atendendo uma criança"
          className="w-full h-full object-cover"
        />
        {/* Overlay escuro para melhorar a leitura do texto sobreposto */}
        <div className="absolute inset-0 bg-gray-900/50"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Content Column (Mobile: Absolute Bottom, Desktop: Left) */}
          <div className="order-2 lg:order-1 pt-8 md:pt-0 lg:relative lg:py-32 z-10 
                        
                        // Mobile: Posicionamento absoluto, centralizado e ajustado
                        absolute bottom-10 left-0 right-0 p-4 sm:p-8 
                        flex flex-col items-center text-center 
                        bg-gradient-to-t from-gray-950/80 to-transparent lg:bg-none
                        
                        // Desktop: Alinhamento à esquerda
                        lg:items-start lg:text-left"> 
            
            {/* Título Principal (HEAD) */}
            <h1 className={cn(
              "text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-4 font-serif max-w-2xl",
              "text-white lg:text-gray-900 dark:lg:text-white"
            )}>
              Eu cuido do seu filho de forma contínua, com olhar atento ao desenvolvimento, à nutrição e ao bem-estar emocional da infância.
            </h1>
            
            {/* Subhead / Descrição */}
            <p className={cn(
              "text-base md:text-lg mb-8 max-w-xl",
              "text-gray-200 lg:text-gray-700 dark:lg:text-gray-300"
            )}>
              Como médica pediatra e especialista em nutrologia infantil, acredito em um cuidado que vai além da consulta pontual. O que ofereço é um acompanhamento contínuo e individualizado — com foco no desenvolvimento físico, emocional e nutricional da criança, em cada fase da infância. Cada atendimento é pensado especialmente para mães que buscam clareza, orientação atualizada, escuta ativa e a construção de um vínculo de confiança.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm lg:max-w-none lg:w-auto">
              <Button
                asChild
                className="w-full sm:w-auto bg-ma-salmon hover:bg-ma-salmon/90 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg shadow-ma-salmon/30"
              >
                <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
                  Agende sua consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-2 border-ma-green text-ma-green bg-white hover:bg-ma-green/10 font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                <Link to="/consultas">
                  Saiba mais
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