import { Card, CardContent } from '@/components/ui/card';
import { Heart, Zap, Cog, Home, Recycle, TreePine } from 'lucide-react';
import forestImage from '@/assets/sustainability-forest.jpg';

const Sustainability = () => {
  const odsItems = [
    { number: '3', title: 'Saúde e bem-estar', icon: Heart },
    { number: '7', title: 'Energia limpa e acessível', icon: Zap },
    { number: '9', title: 'Inovação e infraestrutura', icon: Cog },
    { number: '11', title: 'Cidades sustentáveis', icon: Home },
    { number: '12', title: 'Consumo responsável', icon: Recycle },
    { number: '13', title: 'Ação contra mudança climática', icon: TreePine }
  ];

  return (
    <section className="py-20 bg-gradient-sustainable relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={forestImage}
          alt="Floresta sustentável"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Sustentabilidade e Meio Ambiente
          </h2>
          <p className="text-xl text-green-light max-w-3xl mx-auto">
            Nosso compromisso vai além da instalação de carregadores. Trabalhamos 
            ativamente para promover a sustentabilidade e contribuir para um futuro 
            mais limpo e responsável.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {odsItems.map((item, index) => (
            <Card key={index} className="bg-background/90 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {item.number}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {item.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-green-light text-lg max-w-2xl mx-auto">
            Alinhados com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, 
            contribuímos para um planeta mais sustentável através da eletromobilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;