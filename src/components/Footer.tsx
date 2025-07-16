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
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logoEnergy} 
                alt="Energy Tech Post" 
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-3xl font-bold text-primary">Energy Tech Post</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas em infraestrutura elétrica para carregadores de veículos elétricos. 
              Comprometidos com a sustentabilidade e inovação.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                Boa vista, rua do bom Jesus, 125 - Recife - PE
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                +55 (81) 86506056
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                contato@energytechpost.vercel.com
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-primary">Menu</h4>
            <nav className="space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-primary">Informações</h4>
            <div className="space-y-3 text-gray-300">
              <p>CNPJ: 12.345.678/0001-90</p>
              <p>Inscrição Estadual: 123.456.789.123</p>
              <p>Fundada em 2020</p>
              <p>Certificações: ISO 14001, ABNT NBR 16036</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Energy Tech Post. Todos os direitos reservados. Desenvolvido com 
            <span className="text-primary"> ❤️ </span> 
            para um futuro sustentável.
          </p>
        </div>
      </div>

      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/558186506056"
          className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-green hover:scale-110 transition-transform duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 text-secondary-foreground"
          >
            <path
              d="M16 0C7.163 0 0 7.163 0 16c0 2.837.74 5.51 2.03 7.84L0 32l8.32-2.03A15.92 15.92 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.6c-2.56 0-5.01-.66-7.16-1.82l-.51-.29-4.92 1.2 1.2-4.92-.29-.51A13.56 13.56 0 0 1 2.4 16c0-7.52 6.08-13.6 13.6-13.6S29.6 8.48 29.6 16 23.52 29.6 16 29.6zm7.36-10.24c-.41-.2-2.42-1.2-2.8-1.34-.38-.14-.66-.2-.94.2-.28.39-1.08 1.34-1.32 1.62-.24.28-.48.31-.88.1-.41-.2-1.72-.63-3.28-2.02-1.21-1.08-2.02-2.42-2.26-2.82-.24-.41-.03-.63.18-.83.18-.18.41-.48.62-.72.21-.24.28-.41.42-.68.14-.28.07-.51-.03-.72-.1-.2-.94-2.28-1.28-3.1-.34-.82-.68-.71-.94-.72-.24-.01-.51-.01-.78-.01-.28 0-.72.1-1.1.51-.38.41-1.44 1.41-1.44 3.44s1.48 3.98 1.68 4.26c.2.28 2.92 4.46 7.08 6.26.99.43 1.76.68 2.36.87.99.31 1.9.27 2.62.16.8-.12 2.42-.99 2.76-1.94.34-.95.34-1.77.24-1.94-.1-.17-.38-.28-.8-.48z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;