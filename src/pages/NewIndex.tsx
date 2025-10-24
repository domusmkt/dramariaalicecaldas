import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroNewSection from "@/components/new-index/HeroNewSection";
import AboutNewSection from "@/components/new-index/AboutNewSection";
import ServicesPlansSection from "@/components/new-index/ServicesPlansSection";
import EbookCtaSection from "@/components/new-index/EbookCtaSection";
import ContactNewSection from "@/components/new-index/ContactNewSection";
import TestimonialSection from "@/components/TestimonialSection"; // Reutilizando
import FaqSection from "@/components/FaqSection"; // Reutilizando

const NewIndex: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroNewSection />
        <AboutNewSection />
        <ServicesPlansSection />
        <EbookCtaSection />
        <TestimonialSection /> {/* Reutilizando depoimentos */}
        <FaqSection /> {/* Reutilizando FAQ */}
        <ContactNewSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default NewIndex;