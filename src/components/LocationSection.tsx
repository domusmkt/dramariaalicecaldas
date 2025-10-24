import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';

interface ClinicCardProps {
  name: string;
  whatsappLink: string;
}

const ClinicCard: React.FC<ClinicCardProps> = ({ name, whatsappLink }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg border-b-4 border-ma-salmon flex flex-col items-center text-center">
    <MapPin className="w-8 h-8 text-ma-salmon mb-3" />
    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-serif">{name}</h3>
    <Button 
      className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-semibold transition-colors rounded-full flex items-center"
      asChild
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Phone className="w-4 h-4 mr-2" /> WhatsApp
      </a>
    </Button>
  </div>
);

const LocationSection: React.FC = () => {
  const clinics = [
    { name: "Clínica Regenera – Campos", link: "https://wa.me/5522997972358" },
    { name: "Clin Lab – Quissamã", link: "https://api.whatsapp.com/send/?phone=5522998612562" },
    { name: "Clínica Infant Care", link: "https://api.whatsapp.com/send/?phone=5522999091055" },
  ];

  return (
    <section id="locations" className="bg-ma-green/10 py-16 sm:py-24 dark:bg-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Atendimento em três clínicas para sua comodidade
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clinics.map((clinic) => (
            <ClinicCard 
              key={clinic.name}
              name={clinic.name}
              whatsappLink={clinic.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;