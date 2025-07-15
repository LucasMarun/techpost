import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Wrench, Zap, ShoppingCart, Lightbulb } from 'lucide-react';
import chargingStationImage from '@/assets/ev-charging-station.jpg';
import electricalPlanningImage from '@/assets/electrical-planning.jpg';
import electricalInstallationImage from '@/assets/electrical-installation.jpg';
import chargingEquipmentImage from '@/assets/charging-equipment.jpg';
import consutoriaImage from '@/assets/consutoria.png';
import { AnimatedSection, AnimatedGrid, AnimatedIcon, AnimatedButton, AnimatedSplitText } from '@/components/animations';

const Solutions = () => {
  const solutions = [
    {
      icon: Calculator,
      title: 'Estudo de demanda de energia (carga)',
      description: 'Cálculo preciso da carga elétrica necessária para instalação de carregadores, considerando demanda atual e futura.',
      image: electricalPlanningImage,
      hasButton: false
    },
    {
      icon: Wrench,
      title: 'Elaboração e execução de infraestrutura',
      description: 'Projetos elétricos completos desde o planejamento até a execução, seguindo todas as normas técnicas.',
      image: electricalInstallationImage,
      hasButton: false
    },
    {
      icon: Zap,
      title: 'Instalação de carregadores AC e DC',
      description: 'Instalação profissional de carregadores residenciais e comerciais com garantia e suporte técnico.',
      image: chargingStationImage,
      hasButton: false
    },
    {
      icon: ShoppingCart,
      title: 'Venda de carregadores AC e DC',
      description: 'Carregadores de alta qualidade para uso residencial e comercial, com garantia e suporte técnico.',
      image: chargingEquipmentImage,
      hasButton: true
    },
    {
      icon: Lightbulb,
      title: 'Consultoria e gestão de energia para eletromobilidade',
      description: 'Consultoria especializada para otimização do consumo energético e gestão inteligente de carregamento.',
      image: consutoriaImage,
      hasButton: true
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16" direction="up" distance={50}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <AnimatedSplitText 
              text="Conheça nossas soluções"
              stagger={0.06}
              delay={0.2}
            />
          </h2>
          <AnimatedSection direction="up" distance={30} delay={0.8}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um portfólio completo de serviços para eletromobilidade
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedGrid 
          cols={3}
          stagger={0.15}
          delay={1.2}
        >
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-background shadow-card hover:shadow-elevated transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <AnimatedIcon 
                  className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full text-primary-foreground group-hover:bg-primary/90 transition-colors duration-300"
                  hoverRotation={15}
                  delay={index * 0.1}
                >
                  <solution.icon className="w-8 h-8" />
                </AnimatedIcon>
                <CardTitle className="text-xl mb-2 text-foreground">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {solution.image && (
                  <div className="mb-4 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>
                {solution.hasButton && (
                  <AnimatedButton 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Ver mais
                  </AnimatedButton>
                )}
              </CardContent>
            </Card>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
};

export default Solutions;