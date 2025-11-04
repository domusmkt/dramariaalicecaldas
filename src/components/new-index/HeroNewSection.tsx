import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const HeroNewSection = () => {
  return (
    // Aumentando o padding superior para pt-24 (mobile) e pt-32 (sm/desktop) e pb-32
    <section id="hero" className="relative overflow-hidden pt-24 pb-24 sm:pt-32 sm:pb-32 bg-ma-light-gray dark:bg-gray-800">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Layout de duas colunas no desktop, coluna única no mobile */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Conteúdo de Texto (Esquerda no Desktop, Ordem 2 no Mobile) */}
          <div className="flex flex-col text-center md:text-left order-2 md:order-1"> 
            
            {/* Título Principal (HEAD) */}
            <h1 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-4 font-serif text-gray-900 dark:text-white"
            )}>
              Eu cuido do seu filho de forma contínua, com olhar atento ao <span className="text-ma-salmon">desenvolvimento</span>, à <span className="text-ma-salmon">nutrição</span> e ao bem-estar emocional da infância.
            </h1>
            
            {/* Subhead / Descrição */}
            <p className={cn(
              "text-base md:text-lg mb-10 text-gray-700 dark:text-gray-300"
            )}>
              Como médica pediatra e especialista em nutrologia infantil, acredito em um cuidado que vai além da consulta pontual. O que ofereço é um acompanhamento contínuo e individualizado — com foco no desenvolvimento físico, emocional e nutricional da criança, em cada fase da infância. Cada atendimento é pensado especialmente para mães que buscam clareza, orientação atualizada, escuta ativa e a construção de um vínculo de confiança.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mx-auto md:mx-0">
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
          
          {/* Imagem (Direita no Desktop, Ordem 1 no Mobile) */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            {/* Usando aspect-ratio para forçar um formato vertical (3:4) e aumentando o tamanho máximo */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-3xl shadow-2xl border-4 border-ma-salmon/50">
              <div className="aspect-[3/4]">
                <img
                  src="/dramariaalicecaldas.png"
                  alt="Dra. Maria Alice Caldas atendendo uma criança"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ma-salmon/10 rounded-3xl mix-blend-multiply opacity-50"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroNewSection;