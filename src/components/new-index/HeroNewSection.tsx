import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const HeroNewSection = () => {
  return (
    // Removendo min-h-screen e pt-16/lg:pt-0 para usar padding padrão e compensar o header fixo
    <section id="hero" className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 bg-ma-beige/70 dark:bg-gray-800">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        
        {/* Imagem no Topo (Centralizada) */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-3xl shadow-2xl border-4 border-ma-salmon/50">
            <img
              src="/dramariaalicecaldas.png"
              alt="Dra. Maria Alice Caldas atendendo uma criança"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-ma-salmon/10 rounded-3xl mix-blend-multiply opacity-50"></div>
          </div>
        </div>

        {/* Conteúdo de Texto (Centralizado) */}
        <div className="flex flex-col items-center text-center"> 
          
          {/* Título Principal (HEAD) */}
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-4 font-serif text-gray-900 dark:text-white"
          )}>
            Eu cuido do seu filho de forma contínua, com olhar atento ao desenvolvimento, à nutrição e ao bem-estar emocional da infância.
          </h1>
          
          {/* Subhead / Descrição */}
          <p className={cn(
            "text-lg md:text-xl mb-10 text-gray-700 dark:text-gray-300 max-w-3xl"
          )}>
            Como médica pediatra e especialista em nutrologia infantil, acredito em um cuidado que vai além da consulta pontual. O que ofereço é um acompanhamento contínuo e individualizado.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-md">
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
      </div>
    </section>
  );
};

export default HeroNewSection;