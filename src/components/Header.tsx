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
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-1 sm:flex-none">
            <img 
              src={logoEnergy} 
              alt="Energy Tech Post" 
              className="h-6 sm:h-8 w-auto mr-1 sm:mr-2 flex-shrink-0"
            />
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-primary truncate">
              Energy Tech Post
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm xl:text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <Accessibility className="w-4 h-4 xl:w-5 xl:h-5 text-gray-medium" />
            </button>
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <Globe className="w-4 h-4 xl:w-5 xl:h-5 text-gray-medium" />
            </button>
            <a
              href="https://wa.me/558186506056"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-green text-sm xl:text-base px-3 xl:px-4">
                <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Solicite atendimento</span>
                <span className="xl:hidden">Contato</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full border border-gray-200 ml-2 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-primary" /> : 
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 sm:mt-4 py-3 sm:py-4 border-t border-border bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-3 sm:space-y-4 px-2 sm:px-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 py-2 text-base sm:text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile accessibility buttons */}
              <div className="flex items-center justify-center space-x-4 pt-3 sm:pt-4 border-t border-border/50">
                <button className="p-2 hover:bg-accent rounded-full transition-colors">
                  <Accessibility className="w-5 h-5 text-gray-medium" />
                </button>
                <button className="p-2 hover:bg-accent rounded-full transition-colors">
                  <Globe className="w-5 h-5 text-gray-medium" />
                </button>
              </div>
              
              {/* Mobile contact button */}
              <a
                href="https://wa.me/558186506056"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-green mt-3 sm:mt-4 w-full py-3 sm:py-4 text-base sm:text-lg">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Solicite atendimento
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;