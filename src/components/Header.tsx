import React from 'react';
import { Menu, X } from 'lucide-react';
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
  className?: string; // Adicionado className
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, className }) => (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-lg font-medium text-gray-800 hover:text-ma-salmon transition-colors dark:text-gray-200 dark:hover:text-ma-salmon",
        className // Aplicando className
      )}
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm dark:bg-gray-900/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo/Nome */}
        <div className="text-xl font-serif font-bold text-ma-salmon tracking-wider">
          Dra. Maria Alice Caldas
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
          <Button className="bg-ma-salmon hover:bg-ma-salmon/90 text-white font-semibold transition-colors">
            Agendar Consulta
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle Menu">
              <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900">
            <div className="flex flex-col space-y-6 pt-10">
              {navItems.map((item) => (
                <NavLink 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
                >
                  {item.name}
                </NavLink>
              ))}
              <Button 
                className="w-full bg-ma-salmon hover:bg-ma-salmon/90 text-white font-semibold transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Agendar Consulta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;