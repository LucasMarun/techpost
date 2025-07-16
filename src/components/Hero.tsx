import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-electrical-panel.jpg';
import { AnimatedSection, AnimatedButton, AnimatedIcon } from '@/components/animations';
import { TypewriterTitle } from '@/components/animations/TypewriterTitle';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gray-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Profissional trabalhando em painel elétrico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-dark/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection 
          className="max-w-4xl mx-auto text-center text-white"
          direction="up"
          distance={60}
          duration={1}
        >
          <TypewriterTitle delay={0.5} stagger={0.02}>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              Eletroposto e estação de recarga livre de franquia e taxas mensal, com manutenção preventiva e corretiva incluso, sendo monitorada 24h.
            </h1>
          </TypewriterTitle>
          
          <AnimatedSection
            direction="up"
            distance={40}
            delay={1}
            duration={0.8}
          >
            <p className=" text-base md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Especializados em soluções completas de infraestrutura elétrica para 
              carregadores de veículos elétricos. Da análise de demanda à instalação 
              e manutenção.
            </p>
          </AnimatedSection>

          <AnimatedSection
            direction="up"
            distance={30}
            delay={1.5}
            duration={0.6}
          >
            <div className="flex justify-center w-full">
              <a 
                href="https://wa.me/558186506056" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full max-w-xs"
              >
                <AnimatedButton 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-green text-lg px-8 py-6 flex items-center justify-center"
                >
                  Solicitar agora
                  <AnimatedIcon className="ml-2" hoverRotation={15}>
                    <ArrowRight className="w-5 h-5" />
                  </AnimatedIcon>
                </AnimatedButton>
              </a>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-8 bg-secondary rounded-full opacity-75"></div>
      </div>
    </section>
  );
};

export default Hero;