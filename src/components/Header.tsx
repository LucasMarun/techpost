import { useState } from 'react';
import { Menu, X, Globe, Accessibility, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoEnergy from '@/assets/logoenergy.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoEnergy} 
              alt="Energy Tech Post" 
              className="h-8 w-auto mr-0 md:mr-3"
            />
            <h1 className="text-2xl font-bold text-primary ml-2">Energy Tech Post</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <Accessibility className="w-5 h-5 text-gray-medium" />
            </button>
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <Globe className="w-5 h-5 text-gray-medium" />
            </button>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-green">
              <Phone className="w-4 h-4 mr-2" />
              Solicite atendimento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-12 h-12 bg-white shadow-lg rounded-full border border-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7 text-primary" /> : <Menu className="w-7 h-7 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <button className="p-2 hover:bg-accent rounded-full transition-colors">
                  <Accessibility className="w-5 h-5 text-gray-medium" />
                </button>
                <button className="p-2 hover:bg-accent rounded-full transition-colors">
                  <Globe className="w-5 h-5 text-gray-medium" />
                </button>
              </div>
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-green mt-4">
                <Phone className="w-4 h-4 mr-2" />
                Solicite atendimento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;