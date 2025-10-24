import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FoodGuideSection from "@/components/FoodGuideSection";
import FaqSection from "@/components/FaqSection";
import LocationSection from "@/components/LocationSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaFinalSection from "@/components/CtaFinalSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FoodGuideSection />
        <FaqSection />
        <LocationSection />
        <TestimonialSection />
        <CtaFinalSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;