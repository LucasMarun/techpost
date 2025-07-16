import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import logoEnergy from '@/assets/logoenergy.png';

const Footer = () => {
  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Contato', href: '#contato' },
    { name: 'Blog', href: '#blog' }
  ];

  return (
    <footer className="bg-gray-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src={logoEnergy} 
                alt="Energy Tech Post" 
                className="h-8 sm:h-10 w-auto mr-2 sm:mr-3 flex-shrink-0"
              />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">Energy Tech Post</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-md leading-relaxed">
              Especialistas em infraestrutura elétrica para carregadores de veículos elétricos. 
              Comprometidos com a sustentabilidade e inovação.
            </p>
            <div className="space-y-3 sm:space-y-2">
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Boa vista, rua do bom Jesus, 125 - Recife - PE</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">+55 (81) 86506056</span>
              </div>
              <div className="flex items-start text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base break-all">contato@energytechpost.vercel.com.br</span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="sm:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">Menu</h4>
            <nav className="space-y-2 sm:space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm sm:text-base text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Company Info */}
          <div className="sm:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">Informações</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-300">
              <p className="text-sm sm:text-base">CNPJ: 12.345.678/0001-90</p>
              <p className="text-sm sm:text-base">Inscrição Estadual: 123.456.789.123</p>
              <p className="text-sm sm:text-base">Fundada em 2020</p>
              <p className="text-sm sm:text-base">Certificações: ISO 14001, ABNT NBR 16036</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            © 2024 Energy Tech Post. Todos os direitos reservados. Desenvolvido com 
            <span className="text-primary"> ❤️ </span> 
            para um futuro sustentável.
          </p>
        </div>
      </div>

      {/* WhatsApp Fixed Button */}
      <a
        href="https://wa.me/558186506056"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.74 5.51 2.03 7.84L0 32l8.32-2.03A15.92 15.92 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.6c-2.56 0-5.01-.66-7.16-1.82l-.51-.29-4.92 1.2 1.2-4.92-.29-.51A13.56 13.56 0 0 1 2.4 16c0-7.52 6.08-13.6 13.6-13.6S29.6 8.48 29.6 16 23.52 29.6 16 29.6zm7.36-10.24c-.41-.2-2.42-1.2-2.8-1.34-.38-.14-.66-.2-.94.2-.28.39-1.08 1.34-1.32 1.62-.24.28-.48.31-.88.1-.41-.2-1.72-.63-3.28-2.02-1.21-1.08-2.02-2.42-2.26-2.82-.24-.41-.03-.63.18-.83.18-.18.41-.48.62-.72.21-.24.28-.41.42-.68.14-.28.07-.51-.03-.72-.1-.2-.94-2.28-1.28-3.1-.34-.82-.68-.71-.94-.72-.24-.01-.51-.01-.78-.01-.28 0-.72.1-1.1.51-.38.41-1.44 1.41-1.44 3.44s1.48 3.98 1.68 4.26c.2.28 2.92 4.46 7.08 6.26.99.43 1.76.68 2.36.87.99.31 1.9.27 2.62.16.8-.12 2.42-.99 2.76-1.94.34-.95.34-1.77.24-1.94-.1-.17-.38-.28-.8-.48z" />
        </svg>
        <span className="sr-only">WhatsApp</span>
      </a>
    </footer>
  );
};

export default Footer;