import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Home, ShoppingBag } from 'lucide-react';
import condominiumImage from '@/assets/condominium-parking.jpg';
import homeImage from '@/assets/home-charging.jpg';
import commercialImage from '@/assets/commercial-charging.jpg';

const TargetAudience = () => {
  const audiences = [
    {
      icon: Building,
      title: 'Condomínios',
      description: 'Soluções completas para condomínios residenciais e comerciais, com instalação em garagens coletivas e individuais.',
      image: condominiumImage
    },
    {
      icon: Home,
      title: 'Casas e apartamentos',
      description: 'Instalação residencial personalizada, desde a análise da rede elétrica até a instalação do carregador.',
      image: homeImage
    },
    {
      icon: ShoppingBag,
      title: 'Empresas, shoppings, centros comerciais e supermercados',
      description: 'Infraestrutura para carregamento público e privado, com soluções escaláveis e gestão inteligente.',
      image: commercialImage
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Para quem é?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossas soluções atendem diferentes tipos de clientes, desde residências até grandes empresas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="bg-background shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative">
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                      <audience.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {audience.title}
                    </CardTitle>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;