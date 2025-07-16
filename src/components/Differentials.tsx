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
    <section id="projetos" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">Nossos diferenciais</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">O que nos torna únicos no mercado de eletromobilidade</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {differentials.map((differential, index) => (
            <Card key={index} className="bg-background shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 border-l-4 border-l-primary max-w-full overflow-hidden">
              <CardContent className="p-4 sm:p-8 flex flex-col h-full">
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className="flex-shrink-0 mr-3 sm:mr-4">
                    <span className="text-2xl sm:text-4xl font-bold text-primary">#{differential.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <differential.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3" />
                      <h3 className="text-lg sm:text-2xl font-bold text-foreground break-words px-1" style={{wordBreak: 'break-word'}}>
                        {differential.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-lg break-words px-1" style={{wordBreak: 'break-word'}}>
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