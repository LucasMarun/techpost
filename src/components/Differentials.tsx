import { Card, CardContent } from '@/components/ui/card';
import { Star, CheckCircle, Leaf } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      number: '01',
      title: 'Foco na excelência',
      description: 'Comprometimento com a qualidade em cada projeto, desde o planejamento até a entrega final.',
      icon: Star
    },
    {
      number: '02',
      title: 'Homologação',
      description: 'Todos os nossos produtos e serviços são homologados e certificados pelos órgãos competentes.',
      icon: CheckCircle
    },
    {
      number: '03',
      title: 'Sustentabilidade',
      description: 'Contribuindo para um futuro mais sustentável através da eletrificação do transporte.',
      icon: Leaf
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos diferenciais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O que nos torna únicos no mercado de eletromobilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <Card key={index} className="bg-background shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <span className="text-4xl font-bold text-primary">
                      #{differential.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <differential.icon className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-2xl font-bold text-foreground">
                        {differential.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {differential.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;