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
    <section id="solucoes" className="py-12 sm:py-16 lg:py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16" direction="up" distance={50}>
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 relative">
            Conheça nossas soluções
          </h2>
          <AnimatedSection direction="up" distance={30} delay={0.8}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4">
              Oferecemos um portfólio completo de serviços para eletromobilidade
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-background shadow-card hover:shadow-elevated transition-all duration-300 group cursor-pointer h-full flex flex-col">
              <CardHeader className="text-center pb-3 sm:pb-4">
                <AnimatedIcon 
                  className="mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-full text-primary-foreground group-hover:bg-primary/90 transition-colors duration-300"
                  hoverRotation={15}
                  delay={index * 0.1}
                >
                  <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </AnimatedIcon>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-2 text-foreground leading-tight px-2">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-1 flex flex-col">
                {solution.image && (
                  <div className="mb-3 sm:mb-4 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-40 sm:h-44 lg:h-48 object-cover"
                    />
                  </div>
                )}
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 flex-1 px-2 leading-relaxed">
                  {solution.description}
                </p>
                {solution.hasButton && (
                  <div className="mt-auto px-2">
                    <AnimatedButton 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                    >
                      Ver mais
                    </AnimatedButton>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;