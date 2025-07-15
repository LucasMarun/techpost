import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Building } from 'lucide-react';
import { AnimatedSection, AnimatedGrid, AnimatedIcon, AnimatedNumber, AnimatedSplitText } from '@/components/animations';

const ImpactNumbers = () => {
  const impacts = [
    {
      icon: Zap,
      number: 100,
      numberSuffix: '+',
      title: 'Instalações realizadas',
      description: 'Carregadores instalados com sucesso em todo o Brasil'
    },
    {
      icon: Building,
      number: 15,
      numberSuffix: '+',
      title: 'Projetos de infraestrutura',
      description: 'Projetos completos de infraestrutura para carregadores'
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16" direction="up" distance={50}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <AnimatedSplitText 
              text="Nosso impacto em números"
              stagger={0.05}
              delay={0.2}
            />
          </h2>
          <AnimatedSection direction="up" distance={30} delay={0.8}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Resultados que demonstram nossa experiência e compromisso
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedGrid 
          className="max-w-4xl mx-auto" 
          cols={2}
          stagger={0.2}
          delay={1.2}
        >
          {impacts.map((impact, index) => (
            <Card key={index} className="bg-background shadow-card hover:shadow-elevated transition-all duration-300 text-center group cursor-pointer">
              <CardHeader className="pb-4">
                <AnimatedIcon 
                  className="mx-auto mb-4 w-20 h-20 bg-primary rounded-full text-primary-foreground group-hover:bg-primary/90 transition-colors duration-300"
                  hoverRotation={360}
                  delay={index * 0.1}
                >
                  <impact.icon className="w-10 h-10" />
                </AnimatedIcon>
                <CardTitle className="text-5xl font-bold text-primary mb-2">
                  <AnimatedNumber
                    end={impact.number}
                    suffix={impact.numberSuffix}
                    duration={2.5}
                    delay={1.5 + index * 0.3}
                  />
                </CardTitle>
                <h3 className="text-2xl font-semibold text-foreground">
                  {impact.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
};

export default ImpactNumbers;