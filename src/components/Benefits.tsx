import { Award, Zap, Shield, Clock } from 'lucide-react';
import { AnimatedSection, AnimatedGrid, AnimatedIcon, AnimatedButton } from '@/components/animations';

const Benefits = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Produtos e serviços certificados'
    },
    {
      icon: Zap,
      title: 'Praticidade',
      description: 'Solução completa e simplificada'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Instalações seguindo normas técnicas'
    },
    {
      icon: Clock,
      title: 'Tempo',
      description: 'Execução ágil e pontual'
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16" direction="up" distance={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Benefícios
          </h2>
          <AnimatedSection direction="up" distance={30} delay={0.8}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Trabalhamos com excelência técnica e compromisso com a sustentabilidade, 
              oferecendo soluções personalizadas para cada cliente e projeto.
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedGrid 
          className="grid-cols-2 md:grid-cols-4 gap-6"
          cols={4}
          stagger={0.1}
          delay={1.2}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <AnimatedButton
                variant="outline"
                size="lg"
                className="w-full h-24 flex-col border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
              >
                <AnimatedIcon 
                  className="mb-2"
                  hoverRotation={20}
                  scrollReveal={false}
                >
                  <benefit.icon className="w-8 h-8" />
                </AnimatedIcon>
                <span className="font-semibold">{benefit.title}</span>
              </AnimatedButton>
              <p className="text-sm text-muted-foreground mt-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
};

export default Benefits;