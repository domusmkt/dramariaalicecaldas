import React from 'react';
import Layout from '@/components/Layout';
import IntroSection from '@/components/consultas/IntroSection';
import HowItWorksSection from '@/components/consultas/HowItWorksSection';
import ServiceTypesSection from '@/components/consultas/ServiceTypesSection';
import FirstConsultationSection from '@/components/consultas/FirstConsultationSection';
import BenefitsSection from '@/components/consultas/BenefitsSection';
import TipsSection from '@/components/consultas/TipsSection';
import LocationDetailSection from '@/components/consultas/LocationDetailSection';
import CtaDetailSection from '@/components/consultas/CtaDetailSection';

const ServicesDetail: React.FC = () => {
  return (
    <Layout>
      <IntroSection />
      <HowItWorksSection />
      <ServiceTypesSection />
      <FirstConsultationSection />
      <BenefitsSection />
      <TipsSection />
      <LocationDetailSection />
      <CtaDetailSection />
    </Layout>
  );
};

export default ServicesDetail;