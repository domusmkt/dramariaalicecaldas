import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Seções Placeholder para estrutura futura */}
        <section id="about" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-ma-salmon">Sobre a Dra. Maria Alice</h2>
          <div className="h-40 bg-ma-beige/50 flex items-center justify-center text-gray-700">
            [Conteúdo da Seção Sobre]
          </div>
        </section>

        <section id="services" className="bg-ma-green/10 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10 text-ma-salmon">Nossos Serviços</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg border-t-4 border-ma-salmon">Puericultura</div>
              <div className="p-6 bg-white shadow-lg border-t-4 border-ma-salmon">Nutrologia Pediátrica</div>
              <div className="p-6 bg-white shadow-lg border-t-4 border-ma-salmon">Pediatria Geral</div>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-ma-salmon">Entre em Contato</h2>
          <div className="h-40 bg-ma-beige/50 flex items-center justify-center text-gray-700">
            [Formulário de Contato/Informações]
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;