import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Contato', href: '#contact' },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, className }) => (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-lg font-medium text-gray-800 hover:text-ma-salmon transition-colors dark:text-gray-200 dark:hover:text-ma-salmon",
        className
      )}
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm dark:bg-gray-900/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo/Nome Desktop */}
        <a href="#hero" className="flex items-center h-full py-2">
          <img 
            src="/mariaalicelogocorunica.png" 
            alt="Dra. Maria Alice Caldas - Pediatra" 
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
          <Button 
            className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-semibold transition-colors rounded-full"
            asChild
          >
            <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle Menu">
              <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900 flex flex-col">
            <div className="flex flex-col space-y-6 pt-10 flex-grow">
              {/* Nova Logo dentro do menu mobile - Removendo mx-auto para alinhar à esquerda */}
              <a href="#hero" onClick={() => setIsOpen(false)} className="mb-4 px-6">
                <img 
                  src="/logomobile-menu.png" 
                  alt="Dra. Maria Alice Caldas - Pediatra" 
                  className="h-24 w-auto object-contain"
                />
              </a>
              {navItems.map((item) => (
                <NavLink 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-gray-800 dark:text-gray-200 px-6"
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="px-6">
                <Button 
                  className="w-full bg-ma-salmon hover:bg-ma-salmon/90 text-white font-semibold transition-colors mt-4 rounded-full"
                  onClick={() => setIsOpen(false)}
                  asChild
                >
                  <a href="https://wa.me/5522997972358" target="_blank" rel="noopener noreferrer">
                    Agendar Consulta
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Informações CRM/RQE no final do menu */}
            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700 text-center px-6">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Dra. Maria Alice Caldas</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">CRM: 1153188 | RQE: 46414</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;