import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Phone, Instagram, ArrowRight } from 'lucide-react';

interface Clinic {
  name: string;
  whatsappLink: string;
  details?: string;
  instagramLink?: string;
}

const clinics: Clinic[] = [
  { 
    name: "Clínica Regenera – Campos", 
    whatsappLink: "https://wa.me/5522997972358",
    details: "Rua Saldanha Marinho, 450, sala 506, Campos dos Goytacazes 28.010-271",
    instagramLink: "https://www.instagram.com/regenera.clinicaintegrada/",
  },
  { 
    name: "Clin Lab – Quissamã", 
    whatsappLink: "https://api.whatsapp.com/send/?phone=5522998612562",
  },
  { 
    name: "Clínica Infant Care", 
    whatsappLink: "https://api.whatsapp.com/send/?phone=5522999091055",
  },
];

interface ContactModalProps {
  children?: React.ReactNode;
}

const ContactModal: React.FC<ContactModalProps> = ({ children }) => {
  // Se children for fornecido, ele será o trigger. Caso contrário, usamos o botão padrão (desktop).
  const trigger = children || (
    <Button 
      variant="ghost" 
      // Classes para garantir que o texto seja igual aos links de navegação
      className="text-lg font-medium text-gray-800 hover:text-ma-salmon transition-colors dark:text-gray-200 dark:hover:text-ma-salmon p-0 h-auto"
    >
      Contato
    </Button>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-lg p-6 bg-white dark:bg-gray-900 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
            Fale com a Dra. Maria Alice
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Locais de Atendimento */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-serif">
              Locais de Atendimento
            </h3>
            {clinics.map((clinic, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start mb-2">
                  <MapPin className="w-5 h-5 text-ma-green mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{clinic.name}</p>
                    {clinic.details && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{clinic.details}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-3">
                  <Button 
                    size="sm"
                    className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-medium rounded-full flex items-center"
                    asChild
                  >
                    <a href={clinic.whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" /> WhatsApp
                    </a>
                  </Button>
                  {clinic.instagramLink && (
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-ma-salmon text-ma-salmon hover:bg-ma-salmon/10 font-medium rounded-full flex items-center"
                      asChild
                    >
                      <a href={clinic.instagramLink} target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4 mr-2" /> Instagram
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t dark:border-gray-700">
          <Button 
            className="w-full bg-ma-green hover:bg-ma-green/90 text-white font-bold rounded-full"
            asChild
          >
            <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
              Agendar Consulta Principal <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;