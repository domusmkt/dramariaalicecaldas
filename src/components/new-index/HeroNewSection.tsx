import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroNewSection = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Image Container */}
          <div className="relative w-full rounded-3xl shadow-2xl overflow-hidden">
            <img
              src="/dramariaalicecaldas.png"
              alt="Dra. Maria Alice Caldas atendendo uma criança"
              className="w-full h-auto object-cover rounded-3xl"
            />
            {/* Overlay de cor sutil */}
            <div className="absolute inset-0 bg-ma-salmon/10 rounded-3xl mix-blend-multiply opacity-50"></div>
            {/* Gradiente para garantir contraste do texto na parte inferior */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-16 text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg font-serif">
              Pediatria e Nutrologia Infantil
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-xl drop-shadow-md">
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
                className="border-2 border-white text-white hover:bg-white/20 font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                <Link to="/consultas">
                  Saiba mais sobre as consultas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNewSection;